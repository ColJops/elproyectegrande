package com.codecool.dogmate.dto.animal;

import com.codecool.dogmate.mapper.Gender;

import java.time.LocalDateTime;

public record AnimalDto (

    Integer id,
    String name,
    Integer animalTypesId,
    Integer breedId,
    Integer userId,
    Integer birthYear,
    String pictureLocation,
    String description,
    Gender gender,
    LocalDateTime dateCreate,
    LocalDateTime dateModify,
    LocalDateTime dateArchive,
    Boolean archive
){
}
