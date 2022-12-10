package com.proyecto.supribull.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.supribull.entities.ComentarioModel;


@Repository
public interface ComentarioRepository extends CrudRepository<ComentarioModel, Integer>{
	public abstract  ArrayList<ComentarioModel> findByIdPublicacion(Integer idPublicacion);
}
