package com.codecool.dogmate.dto.voivodeship;

import com.codecool.dogmate.dto.province.ProvinceDto;

import java.time.LocalDateTime;
import java.util.List;

public record VoivodeshipDto(

        Integer id,
        String terytId,
        String name,
        LocalDateTime dateCreate,
        LocalDateTime dateModify,
        LocalDateTime dateArchive,
        Boolean archive,
        List<ProvinceDto> provinces
) {
}
