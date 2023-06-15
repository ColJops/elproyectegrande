package com.codecool.dogmate.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    protected Boolean archive = false;

    @Version
    protected Integer version;

    protected LocalDateTime dateCreate = LocalDateTime.now();

    protected LocalDateTime dateModify;

    protected LocalDateTime dateArchive;

}
