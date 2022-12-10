package com.proyecto.supribull.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.supribull.entities.ComentarioModel;
import com.proyecto.supribull.services.ComentarioService;



@RestController
@CrossOrigin(origins= "*")
public class ComentarioController {
	
	@Autowired
    ComentarioService comentarioService;
	
	//Obtener Comentario por IdPublicacion
    @GetMapping(path = "comentario/publicacion/{id}")
    public ArrayList<ComentarioModel> obtenerComentarioPorIdPublicacion(@PathVariable("id") Integer id) {
    	return this.comentarioService.obtenerComentarioPorIdPublicacion(id);
    }
    @PostMapping(path = "/comentar")
    public ComentarioModel realizarComentario(@RequestBody ComentarioModel comentario) {
    	return this.comentarioService.realizarComentario(comentario);
    }

}
