package com.codecool.dogmate.service;

import com.codecool.dogmate.dto.appuser.AppUserDto;
import com.codecool.dogmate.dto.appuser.NewAppUserDto;
import com.codecool.dogmate.entity.*;
import com.codecool.dogmate.mapper.AppUserMapper;
import com.codecool.dogmate.repository.CityRepository;
import com.codecool.dogmate.repository.AppUserRepository;
import com.codecool.dogmate.repository.UserTypeRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Service
public class AppUserService {

    private final AppUserRepository appUserRepository;
    private final UserTypeRepository userTypeRepository;
    private final CityRepository cityRepository;
    private final AppUserMapper appUserMapper;
    private final PasswordEncoder passwordEncoder;

    public AppUserService(AppUserRepository appUserRepository, UserTypeRepository userTypeRepository, CityRepository cityRepository, AppUserMapper appUserMapper, PasswordEncoder passwordEncoder) {
        this.appUserRepository = appUserRepository;
        this.userTypeRepository = userTypeRepository;
        this.cityRepository = cityRepository;
        this.appUserMapper = appUserMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public List<AppUserDto> getAppUsers() {
        return appUserRepository.findAllBy().stream()
                .map(appUserMapper::mapEntityToAppUserDto)
                .toList();
    }

    public List<AppUserDto> getAppUsers(Pageable pageable) {
        return appUserRepository.findAllBy(pageable).stream()
                .map(appUserMapper::mapEntityToAppUserDto)
                .toList();
    }
    public AppUserDto getAppUserById(Integer id) {
        return appUserRepository.findOneById(id)
                .map(appUserMapper::mapEntityToAppUserDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public AppUserDto login(HttpServletResponse response, String email, String password) {
        Optional<AppUser> userByEmail = appUserRepository.findByEmailIgnoreCase(email);
        if (userByEmail.isEmpty()
                || !passwordEncoder.matches(password, userByEmail.get().getPassword())) {
            response.setStatus(HttpStatus.FORBIDDEN.value());
            return null;
        }
        AppUser user = userByEmail.get();
        Cookie sessionCookie = new Cookie("session", "" + user.getId());
        sessionCookie.setMaxAge(30 * 60); // 30 minutes
        sessionCookie.setPath("/");
        sessionCookie.setHttpOnly(true);
        response.addCookie(sessionCookie);
        response.setStatus(HttpStatus.OK.value());
        return appUserMapper.mapEntityToAppUserDto(user);
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        // Clear the cookies
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setValue("");
                cookie.setPath("/");
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }
        }

        // Clear the session storage
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
    }

    public List<AppUserDto> getAppUserByName(String name) {
        return appUserRepository.findAllByName(name).stream()
                .map(appUserMapper::mapEntityToAppUserDto)
                .toList();
    }

    public AppUserDto registerUser(HttpServletResponse response, NewAppUserDto dto) {
        Optional<AppUser> existing = appUserRepository.findByEmailIgnoreCase(dto.email());
        if (existing.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }
        AppUser entity = appUserMapper.mapNewAppUserDtoToEntity(dto, "USER");
        AppUser savedEntity = appUserRepository.save(entity);
        login(response, dto.email(), dto.password());
        return appUserMapper.mapEntityToAppUserDto(savedEntity);
    }

}
