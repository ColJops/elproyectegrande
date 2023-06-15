package com.codecool.dogmate.repository;

import com.codecool.dogmate.entity.Animal;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

    @Query("SELECT a FROM Animal a")
    List<Animal> findAllBy();
    @Query("SELECT a FROM Animal a")
    List<Animal> findAllBy(Pageable pageable);
    @Query("SELECT a FROM Animal a " +
            "LEFT JOIN Breed b on b.id = a.breed.id "+
            "WHERE a.id = :id")
    Optional<Animal> findOneById(Integer id);

    @Query("SELECT a FROM Animal a " +
            "INNER JOIN Breed b on b.id = a.breed.id "+
            "WHERE b.name LIKE %:breed%")
    List<Animal> findAllByBreed(String breed);

    @Query("SELECT a FROM Animal a " +
            "INNER JOIN AppUser u on u.id = a.appUser.id "+
            "INNER JOIN City c on c.id = u.city.id "+
            "WHERE c.name = :city")
    List<Animal> findAllByCity(String city);

}
