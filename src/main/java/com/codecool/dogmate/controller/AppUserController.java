package com.codecool.dogmate.controller;

import com.codecool.dogmate.dto.appuser.AppUserDto;
import com.codecool.dogmate.dto.appuser.AppUserLoginDto;
import com.codecool.dogmate.dto.appuser.NewAppUserDto;
import com.codecool.dogmate.service.AppUserService;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("app-users")
public class AppUserController {

    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping
    public List<AppUserDto> getAllAppUsers() {
        return appUserService.getAppUsers();
    }

    @GetMapping(params = {"page", "size", "sort"})
    public List<AppUserDto> getAllUserWithPageable(Pageable pageable) {
        return appUserService.getAppUsers(pageable);
    }

    @GetMapping("/{id}")
    public AppUserDto getAppUserByUserId(@PathVariable Integer id) {
        return appUserService.getAppUserById(id);
    }

    @GetMapping(params = {"name"})
    public List<AppUserDto> getAppUserByName(@RequestParam String name) {
        return appUserService.getAppUserByName(name);
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AppUserDto newAppUser(HttpServletResponse response, @RequestBody NewAppUserDto dto) {
        return appUserService.registerUser(response, dto);
    }

    @PostMapping("/login")
    public AppUserDto loginUser(HttpServletResponse response, @RequestBody AppUserLoginDto appUserLoginDto) {
        return appUserService.login(response, appUserLoginDto.email(), appUserLoginDto.password());
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        appUserService.logout(request, response);
    }

}
