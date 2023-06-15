package com.codecool.dogmate.dto.province;

import com.codecool.dogmate.dto.city.CityDto;

import java.time.LocalDateTime;
import java.util.List;

public record ProvinceDto(
        Integer id,
        String terytId,
        String name,
        LocalDateTime dateCreate,
        LocalDateTime dateModify,
        LocalDateTime dateArchive,
        Boolean archive,
        List<CityDto> cities

) {
}
