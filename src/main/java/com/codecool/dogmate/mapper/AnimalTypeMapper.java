package com.codecool.dogmate.mapper;

import com.codecool.dogmate.dto.animaltype.AnimalTypeDto;
import com.codecool.dogmate.dto.animaltype.NewAnimalTypeDto;
import com.codecool.dogmate.entity.AnimalType;
import org.springframework.stereotype.Component;
@Component
public class AnimalTypeMapper {

    private final BreedMapper breedMapper;

    public AnimalTypeMapper(BreedMapper breedMapper) {
        this.breedMapper = breedMapper;
    }

    public AnimalType mapNewAnimalTypeDtoToEntity(NewAnimalTypeDto dto) {
        return new AnimalType(dto.name(), dto.description());
    }

    public AnimalTypeDto mapEntityToAnimalTypeDto(AnimalType entity) {
        return new AnimalTypeDto(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getDateCreate(),
                entity.getDateModify(),
                entity.getDateArchive(),
                entity.getArchive(),
                entity.getBreeds().stream()
                        .map(breedMapper::mapEntityToBreedDto)
                        .toList()

        );
    }
}
