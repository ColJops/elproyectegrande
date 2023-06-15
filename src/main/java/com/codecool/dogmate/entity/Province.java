package com.codecool.dogmate.entity;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "provinces")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Province extends BaseEntity {

    @EqualsAndHashCode.Include
    @Column(name = "teryt_id", unique = true)
    private String terytId;

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "voivodeship_id")
    private Voivodeship voivodeship;

    @OneToMany(mappedBy = "province", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Set<City> cities = new HashSet<>();

    public Province(String name, String terytId) {
        this.name = name;
        this.terytId = terytId;
    }

}
