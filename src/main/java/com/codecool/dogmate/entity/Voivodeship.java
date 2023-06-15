package com.codecool.dogmate.entity;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Table(name = "voivodeship")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Voivodeship extends BaseEntity {

    @EqualsAndHashCode.Include
    @Column(name = "teryt_id", unique = true)
    private String terytId;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "voivodeship", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Set<Province> provinces = new HashSet<>();

    public Voivodeship(String name, String terytId) {
        this.name = name;
        this.terytId = terytId;
    }

}
