import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../../Services/PostService";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/Publicar.scss";
function PostForm() {

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const initialState = { titulo: "", descripcion: "", idUsuario: currentUser.uid };

  const [posts, setPosts] = useState(initialState);

  const handleInputChange = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;

      res = await registerPost(posts);
      const data = await res.json();

      navigate("/publicaciones");
    } catch (error) {
      console.log(error);
    }
  };

  /*  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { name, foundation, website } = data.company;
      setCompany({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <div className="content-pp">
   
      <form onSubmit={handleSubmit} className="form-ss">
      <div className="historia">
        <i class="fa-solid fa-eye"></i>
        <h2 className="mb-3 text-center">Cuentanos tu historia</h2>
      </div>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="titulo"
            value={posts.titulo}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="50"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="descripcion"
            value={posts.descripcion}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">idUsuario</label>
          <input
            type="number"
            name="idUsuario"
            value={posts.idUsuario}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div> */}

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-block btn-comen">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
