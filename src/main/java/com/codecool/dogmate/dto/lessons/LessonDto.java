package com.codecool.dogmate.dto.lessons;

import com.codecool.dogmate.dto.lessonsteps.LessonStepDto;

import java.util.List;

public record LessonDto(

    Integer id,
    String name,
    Integer trainingLevel,
    String description,
    String imageLocation,
    List<LessonStepDto> lessonSteps

){
}
