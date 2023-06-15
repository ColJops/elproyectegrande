package com.codecool.dogmate.dto.appuser;

import com.codecool.dogmate.dto.animal.AnimalDto;

import java.time.OffsetDateTime;
import java.util.List;

public record AppUserDto(

        Integer id,
        String firstName,
        String lastName,
        String email,
        String profilePictureLocation,
        String avatarSmallLocation,
        Integer userType,
        Integer city,
        String description,
        Boolean isBanned,
        OffsetDateTime banExpiration,
        List<AnimalDto> animals

) {
}
