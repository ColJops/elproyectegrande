package com.codecool.dogmate.entity;

import com.codecool.dogmate.mapper.Gender;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "animals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Animal extends BaseEntity {

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "animal_types_id")
    private AnimalType animalType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "breed_id")
    private Breed breed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "appuser_id")
    private AppUser appUser;

    @Column(name = "birth_year")
    private Integer birthYear;

    @Column(name = "picture_location")
    private String pictureLocation;

    @Column(name = "description")
    @Type(type = "org.hibernate.type.TextType")
    private String description;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @ManyToMany(mappedBy = "animals")
    private Set<Lesson> lessons = new HashSet<>();

    public Animal(String name, AnimalType animalType, Breed breed, AppUser appUser, Integer birthYear, String pictureLocation, String description, Gender gender) {
        this.name = name;
        this.animalType = animalType;
        this.breed = breed;
        this.appUser = appUser;
        this.birthYear = birthYear;
        this.pictureLocation = pictureLocation;
        this.description = description;
        this.gender = gender;
    }

    public void assignLesson(Lesson lesson) {
        lessons.add(lesson);
    }

}
