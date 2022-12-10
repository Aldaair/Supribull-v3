import React from "react";
export default function Help() {
  return (
    <div className="container father-container mt-3 p-3">
      <div className="container main-content">
        <center>
          <h1>¿Qué es Supribull?</h1>
        </center>
        <img alt="" />
        <p>
          Supribull es un proyecto creado por estudiantes de la carrera de
          Diseño y Desarrollo de Software en TECSUP. En consideración de temas
          de especial importancia para suprimir el bullying nace el proyecto
          "Detección y apoyo emocional a víctimas del bullying" o en pocas
          palabras "Supribull" que tiene como objetivo la detección del bullying
          en áreas físicas mediante el uso de cámaras e inteligencia artificial,
          asi como también brindar apoyo a las víctimas por medio de una
          aplicación que conecte en base a publicaciones hechas por usuarios
          contando sus experiencias de forma anónima para que expertos en el
          tema puedan responder a las publicaciones de manera privada y hablar
          con él.
        </p>
      </div>
      <div className="container instructions">
        <h2>Apartados </h2>
        <ul>
          <li>
            <strong>Home:</strong> En esta página se hablará sobre qué es
            Supribull y se explicará todas las implementaciones de la página
            web, cómo funciona (guía) y soporte
          </li>
          <li>
            <strong>Post:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita fuga maxime veritatis nostrum aspernatur,
            illum laudantium! Deleniti voluptates culpa quasi.
          </li>
          <li>
            <strong>Messages:</strong> En esta página se revisará los mensajes
            internos enviados por expertos
          </li>
          <li>
            <strong>Notifications:</strong> En esta página se revisará las
            notificaciones como solicitudes de seguimiento, mensaje, etc.
          </li>
          <li>
            <strong>Profile:</strong> En esta página se podrá revisar el perfil,
            cambiar nombre de usuario, contraseña etc.
          </li>
        </ul>
      </div>
    </div>
  );
}
