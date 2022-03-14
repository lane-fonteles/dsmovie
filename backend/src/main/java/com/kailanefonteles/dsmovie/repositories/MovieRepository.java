package com.kailanefonteles.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kailanefonteles.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
