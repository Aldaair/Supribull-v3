package com.proyecto.supribull.controller;

import com.proyecto.supribull.entities.PublicacionModel;
import com.proyecto.supribull.services.PublicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;


@RestController
@CrossOrigin(origins= "*")
public class PublicacionController {

    @Autowired
    PublicacionService publicacionService;

    //Obtener todas las publicaciones
    @GetMapping("/publicaciones")
    public ArrayList<PublicacionModel> obtenerPublicaciones(){
    	return (ArrayList<PublicacionModel>) publicacionService.obtenerPublicaciones();
    }
    //Eliminar publicación por ID FALTA ARREGLAR
    //@DeleteMapping("/publicacion/{id}")
    //public void eliminarPorIdPublicacion(@PathVariable("idPublicacion") Integer idPublicacion) {
    	//publicacionRepository.deleteById(idPublicacion);
    //}
      
    
    
    //Buscar publicaciones por ID del USARIO
    //@RequestMapping("/publicaciones/{id}")
    //public List<Publicacion> getPublicacion(@PathVariable int id){
      //return publicacionRepository.findByIdUsuario(id);
    //}
    //Publicar
    @PostMapping("/publicar")
    public PublicacionModel guardarPublicacion(@RequestBody PublicacionModel publicacion) {
    	return this.publicacionService.guardarPublicacion(publicacion);
    }
    
    //Obtener Publicacion por ID
    @GetMapping(path = "publicacion/{id}")
    public PublicacionModel obtenerPublicacionPorId(@PathVariable("id") Integer id) {
    	return this.publicacionService.buscarPorIdPublicacion(id);
    }
    //Eliminar Publicacion por ID
    @DeleteMapping(path = "publicacion/{id}")
    public String eliminarPublicacionPorId(@PathVariable("id") Integer id) {
    	boolean resultado = this.publicacionService.eliminarPublicacion(id);
    	if(resultado) {
    		return "Se eliminó la publicación";
    	}else {
    		return "No se logró eliminar la publicación";
    	}
    }

}
