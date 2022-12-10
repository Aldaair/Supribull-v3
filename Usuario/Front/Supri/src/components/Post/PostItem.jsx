import { deletePost } from "../../Services/PostService";
import React, { useState, useEffect, useContext } from "react";
import {
  realizarComentario,
  obtenerComentarioPorIdPublicacion,
} from "../../Services/CommentService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Publicaciones.scss";

function PostItem({ post, listPosts }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [comentarios, setComentarios] = useState([]);

  const listaComentarios = async () => {
    try {
      const res = await obtenerComentarioPorIdPublicacion(post.idPublicacion);
      const data = await res.json();
      setComentarios(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listaComentarios();
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    window.location.reload()
  };
  const handleSubmitFormComment = async (e) => {
    e.preventDefault();
    try {
      let res;
      res = await realizarComentario(mensajeComentario);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
  const initialState = {
    mensajeComentario: "",
    idPublicacion: post.idPublicacion,
    idUsuario: currentUser.uid,
  };
  const [mensajeComentario, setMensajeComentario] = useState(initialState);
  const handleChangeComment = (e) => {
    setMensajeComentario({
      ...mensajeComentario,
      [e.target.name]: e.target.value,
    });
  };
  const handleEdit = (id)=>{
    
  }

  return (
    <div className="content-all-post">
      <div className="wid-post">
        <div className="content-post-show">
          <div className="perfil-post">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chat-12d6b.appspot.com/o/user21670134578763?alt=media&token=4fc9fc49-f4c7-42b1-9c4a-f19807ed9915"
              alt=""
            />
            <h4>Anónimo</h4>
          </div>
          <h3 className="titulo-carta">{post.titulo}</h3>

          <p className="desp">
            <strong>{post.descripcion}</strong>
          </p>
          <div className="botones">
            <button
              onClick={() =>
                post.idPublicacion && handleDelete(post.idPublicacion)
              }
              className="btn-f btn-eliminar"
            >
              Delete
            </button>
            <button
              onClick={() =>
                post.idPublicacion && handleEdit(post.idPublicacion)
              }
              className="btn-f btn-eliminar"
            >
              Editar
            </button>
          </div>
        </div>
        <div className="content-comentarios">
          <div className="title-coment">
            <h4>Comentarios</h4>
          </div>
          <div className="content-num-coment">
            {comentarios.map((comentario) => {
              return (
                <div key={comentario.idComentario}>
                  <p className="num-coment">{comentario.mensajeComentario}</p>
                </div>
              );
            })}
          </div>
          <div className="comentarios">
            <form
              className="form-comentario"
              onSubmit={handleSubmitFormComment}
            >
              <input
                placeholder="Escribe un comentario"
                className="input"
                type="text"
                name="mensajeComentario"
                value={mensajeComentario.mensajeComentario}
                onChange={handleChangeComment}
              />
              <button type="submit">Comentar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
