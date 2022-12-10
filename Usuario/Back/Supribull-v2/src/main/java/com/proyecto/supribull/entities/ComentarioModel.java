package com.proyecto.supribull.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="comentario")
public class ComentarioModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idComentario;
	
	@Column
    private int idUsuario;
	
	public int getIdComentario() {
		return idComentario;
	}

	public void setIdComentario(int idComentario) {
		this.idComentario = idComentario;
	}

	@Column
    private int idPublicacion;
	
	@Column
    private String mensajeComentario;

	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public int getIdPublicacion() {
		return idPublicacion;
	}

	public void setIdPublicacion(int idPublicacion) {
		this.idPublicacion = idPublicacion;
	}

	public String getMensajeComentario() {
		return mensajeComentario;
	}

	public void setMensajeComentario(String mensajeComentario) {
		this.mensajeComentario = mensajeComentario;
	}
}
