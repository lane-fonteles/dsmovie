package com.kailanefonteles.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kailanefonteles.dsmovie.entities.Score;
import com.kailanefonteles.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
