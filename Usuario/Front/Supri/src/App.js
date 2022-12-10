import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Help from "./components/Help";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import PostList from "./components/Post/PostList"
import PostForm from "./components/Post/PostForm";
import CChat from "./components/CChat"

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path=""
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          >
            <Route path="notificaciones" element={<Notifications />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="publicaciones" element={<PostList />} />
            <Route path="publicar" element={<PostForm />} />
            <Route path="mensajes" element={<CChat />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
