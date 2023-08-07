import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import "./style.scss";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./pages/protectedRoute";
import { AuthContextProvider } from "./context/authContex";

function App() {
  return (
    <AuthContextProvider>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
