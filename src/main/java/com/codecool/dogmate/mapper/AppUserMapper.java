package com.codecool.dogmate.mapper;

import com.codecool.dogmate.dto.appuser.AppUserDto;
import com.codecool.dogmate.dto.appuser.NewAppUserDto;
import com.codecool.dogmate.entity.AppUser;
import com.codecool.dogmate.service.UserTypesService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AppUserMapper {

    private final PasswordEncoder passwordEncoder;
    private final AnimalMapper animalMapper;
    private final UserTypesService userTypesService;

    public AppUserMapper(PasswordEncoder passwordEncoder, AnimalMapper animalMapper, UserTypesService userTypesService) {
        this.passwordEncoder = passwordEncoder;
        this.animalMapper = animalMapper;
        this.userTypesService = userTypesService;
    }

    public AppUser mapNewAppUserDtoToEntity(NewAppUserDto dto, String userType) {
        if (dto == null) {
            return null;
        }
        return new AppUser(
                dto.firstName(),
                dto.lastName(),
                dto.email(),
                passwordEncoder.encode(dto.password()),
                userTypesService.getUserTypeByName(userType)
        );
    }

    public AppUserDto mapEntityToAppUserDto(AppUser entity) {
        return new AppUserDto(
                entity.getId(),
                entity.getFirstName(),
                entity.getLastName(),
                entity.getEmail(),
                entity.getProfilePictureLocation(),
                entity.getAvatarSmallLocation(),
                entity.getUserType().getId(),
                entity.getCity() == null ? null : entity.getCity().getId(),
                entity.getDescription(),
                entity.getIsBanned(),
                entity.getBanExpiration(),
                entity.getAnimals().stream()
                        .map(animalMapper::mapEntityToAnimalDto)
                        .toList()
        );
    }

}
