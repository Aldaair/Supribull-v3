const API_URL = "http://localhost:8090";

export const realizarComentario = (comentario) => {
    return fetch(`${API_URL}/comentar`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idPublicacion: parseInt(comentario.idPublicacion),
        idUsuario: parseInt(comentario.idUsuario),
        mensajeComentario: String(comentario.mensajeComentario),
      }),
    });
  };

export const obtenerComentarioPorIdPublicacion = (idPublicacion) => {
    return fetch(`${API_URL}/comentario/publicacion/${idPublicacion}`)
}