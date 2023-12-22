import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";

import TaskForm from "./components/Tasks/TaskForm";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container flex h-[100vh] w-full items-center justify-center px-10 py-10 gap-10">
            <Navbar />
            <div className=" h-[90%] w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<ProtectedRoutes />}>
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/tasks/new" element={<TaskForm />} />
                  <Route path="/tasks/:id" element={<TaskForm />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<p>There's nothing here: 404!</p>} />
                </Route>
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
