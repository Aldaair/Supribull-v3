package com.proyecto.supribull.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.supribull.entities.PublicacionModel;
import com.proyecto.supribull.repository.PublicacionRepository;

@Service
public class PublicacionService {
	@Autowired
	PublicacionRepository publicacionRepository;
	
	public ArrayList<PublicacionModel> obtenerPublicaciones(){
    	return (ArrayList<PublicacionModel>) publicacionRepository.findAll();
    }
	
	public PublicacionModel guardarPublicacion(PublicacionModel publicacion) {
		return publicacionRepository.save(publicacion);
	}
	public PublicacionModel buscarPorIdPublicacion(Integer id) {
		return publicacionRepository.findByIdPublicacion(id);
	}
	public boolean eliminarPublicacion(Integer id) {
		try {
			publicacionRepository.deleteById(id);
			return true;
		}catch(Exception err){
			return false;
		}
	}
	
	
}
