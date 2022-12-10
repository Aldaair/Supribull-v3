package com.proyecto.supribull.repository;

import com.proyecto.supribull.entities.PublicacionModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PublicacionRepository extends CrudRepository<PublicacionModel,Integer> {

    //List<Publicacion> findByIdPublicacion(int id);

    //List<Publicacion> findByIdUsuario(int id);
	
	public abstract  PublicacionModel findByIdPublicacion(Integer idPublicacion);
}
