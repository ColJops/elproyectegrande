package com.codecool.dogmate.dto.animaltype;

import com.codecool.dogmate.dto.breed.BreedDto;

import java.time.LocalDateTime;
import java.util.List;

public record AnimalTypeDto(
        Integer id,
        String name,
        String description,
        LocalDateTime dateCreate,
        LocalDateTime dateModify,
        LocalDateTime dateArchive,
        Boolean archive,
        List<BreedDto>breeds
) {
}
