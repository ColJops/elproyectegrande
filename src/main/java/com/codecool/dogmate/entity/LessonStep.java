package com.codecool.dogmate.entity;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "lesson_steps")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LessonStep extends BaseEntity {

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @Column(name = "step_number")
    private Integer stepNumber;

    @Column(name = "description")
    @Type(type = "org.hibernate.type.TextType")
    private String description;

    public LessonStep(String name, String description, Integer stepNumber) {
        this.name = name;
        this.description = description;
        this.stepNumber = stepNumber;
    }

}
