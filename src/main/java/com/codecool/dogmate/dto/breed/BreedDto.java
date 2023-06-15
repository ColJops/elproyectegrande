package com.codecool.dogmate.dto.breed;

import java.time.LocalDateTime;

public record BreedDto(

        Integer id,
        String name,
        Integer animalType,
        LocalDateTime dateCreate,
        LocalDateTime dateModify,
        LocalDateTime dateArchive,
        Boolean archive

) {
}
