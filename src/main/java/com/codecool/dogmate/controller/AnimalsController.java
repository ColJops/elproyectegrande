package com.codecool.dogmate.controller;

import com.codecool.dogmate.dto.animal.AnimalDto;
import com.codecool.dogmate.dto.animal.NewAnimalDto;
import com.codecool.dogmate.service.AnimalsService;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("animals")
public class AnimalsController {

    private final AnimalsService animalsService;

    public AnimalsController(AnimalsService animalsService) {
        this.animalsService = animalsService;
    }

    @GetMapping
    public List<AnimalDto> getAllAnimals() {
        return animalsService.getAnimals();
    }

    @GetMapping(params = {"page", "size", "sort"})
    public List<AnimalDto> getAllAnimalsWithPageable(Pageable pageable) {
        return animalsService.getAnimals(pageable);
    }

    @GetMapping(params = {"breed"})
    public List<AnimalDto> getAllAnimalsByBreed(@RequestParam String breed) {
        return animalsService.getAnimals(breed);
    }

    @GetMapping(params = {"city"})
    public List<AnimalDto> getAllAnimalsByCity(@RequestParam String city) {
        return animalsService.getAnimals(city);
    }

    @GetMapping("/{id}")
    public AnimalDto getAnimalByAniamalId(@PathVariable Integer id) {
        return animalsService.getAnimalById(id);
    }

    @PostMapping
    public AnimalDto newAnimal(@RequestBody NewAnimalDto animal) {
        return animalsService.createAnimal(animal);
    }

}
