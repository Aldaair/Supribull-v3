package com.proyecto.supribull.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.supribull.entities.ComentarioModel;
import com.proyecto.supribull.repository.ComentarioRepository;


@Service
public class ComentarioService {
	
	@Autowired
	ComentarioRepository comentarioRepository;
	
	//
	public ArrayList<ComentarioModel>obtenerComentarioPorIdPublicacion(Integer id) {
		return comentarioRepository.findByIdPublicacion(id);
	}
	//Realizar Comentario
	public ComentarioModel realizarComentario(ComentarioModel comentario) {
		return comentarioRepository.save(comentario);
	}
}
