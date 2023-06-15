package com.codecool.dogmate.repository;

import com.codecool.dogmate.entity.AppUser;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> {

    @Query("SELECT a FROM AppUser a")
    List<AppUser> findAllBy();

    @Query("SELECT a FROM AppUser a")
    List<AppUser> findAllBy(Pageable pageable);

    @Query("SELECT a FROM AppUser a JOIN FETCH a.animals WHERE a.id = :id")
    Optional<AppUser> findOneById(Integer id);

    Optional<AppUser> findByEmailIgnoreCase(String email);

    @Query("SELECT a FROM AppUser a JOIN FETCH a.animals WHERE LOWER(a.email)=LOWER(:email)")
    Optional<AppUser> findOneByEmail(String email);

    @Query("SELECT a FROM AppUser a JOIN FETCH a.animals WHERE LOWER(a.firstName)=LOWER(:name)")
    List<AppUser> findAllByName(String name);

}
