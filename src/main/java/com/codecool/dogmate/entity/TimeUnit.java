package com.codecool.dogmate.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "time_unit")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class TimeUnit extends BaseEntity {

    @EqualsAndHashCode.Include
    @Column(name = "name", unique = true)
    private String name;

}
