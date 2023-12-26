import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./utils/toastOptions";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="flex flex-col w-full h-[100vh] px-10 py-10 gap-10 bg-neutral-950">
            <Toaster
              position="bottom-right"
              toastOptions={toastOptions}
              reverseOrder={false}
            />
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
