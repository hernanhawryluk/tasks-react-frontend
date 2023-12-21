import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<div>Tasks</div>} />
          <Route path="/tasks/:id" element={<div>Task</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
