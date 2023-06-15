package com.codecool.dogmate.mapper;

import com.codecool.dogmate.dto.city.CityDto;
import com.codecool.dogmate.dto.city.NewCityDto;
import com.codecool.dogmate.entity.City;
import org.springframework.stereotype.Component;

@Component
public class CityMapper {

    public City mapNewCityDtoToEntity(NewCityDto dto) {

        return new City(dto.name());
    }

    public CityDto mapEntityToCityDto(City entity) {
        return new CityDto(
                entity.getId(),
                entity.getName(),
                entity.getDateCreate(),
                entity.getDateModify(),
                entity.getDateArchive(),
                entity.getArchive(),
                entity.getProvince().getId()
        );
    }

}
