import React, { useContext } from "react";
import "../styles/Nav.scss";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  return (
    <div className="plataforma">
      <div className="content-nav">
        <div className="perfil">
          <div className="cc-img-perfil">
            <img
              src={currentUser.photoURL}
              alt="imagen de perfil"
            />
          </div>
          <div className="text-perfil">
            {currentUser.displayName}
          </div>
        </div>
        <div className="anclas-nav">
          <Link className="anclas" to={"/notificaciones"}>
            Notificaciones
          </Link>
          <Link className="anclas" to={"/perfil"}>
            Perfil
          </Link>
          <Link className="anclas" to={"/publicaciones"}>
            Publicaciones
          </Link>
          <Link className="anclas" to={"/publicar"}>
            Publicar
          </Link>
          <Link className="anclas" to={"/mensajes"}>
            Mensajes
          </Link>
        </div>
      </div>
      <div className="impirmir">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
