const API_URL = "http://localhost:8090";

export const getPosts = () => {
  return fetch(`${API_URL}/publicaciones`);
};
export const registerPost = (post) => {
  return fetch(`${API_URL}/publicar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: String(post.titulo).trim(),
      descripcion: String(post.descripcion).trim(),
      idUsuario: String(post.idUsuario),
    }),
  });
};
export const deletePost = (id) => {
  return fetch(`${API_URL}/publicacion/${id}`, {
    method: "DELETE",
  });
}
