package com.codecool.dogmate.dto.city;

import java.time.LocalDateTime;

public record CityDto(
        Integer id,
        String name,
        LocalDateTime dateCreate,
        LocalDateTime dateModify,
        LocalDateTime dateArchive,
        Boolean archive,
        Integer province
) {
}
