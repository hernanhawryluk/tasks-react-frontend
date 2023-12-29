import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./utils/toastOptions";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background";
import Container from "./components/Container";
import { CalendarProvider } from "./context/CalendarContext";
import { NotesProvider } from "./context/NotesContext";

function App() {
  return (
    <AuthProvider>
      <CalendarProvider>
        <TaskProvider>
          <NotesProvider>
            <BrowserRouter>
              <main className="flex flex-col w-full min-h-[100vh] gap-[50px] sm:gap-10 bg-neutral-950 relative overflow-x-hidden">
                <Toaster
                  position="bottom-right"
                  toastOptions={toastOptions}
                  reverseOrder={false}
                />
                <Navbar />
                <Background />
                <Container>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<ProtectedRoutes />}>
                      <Route path="/tasks" element={<Tasks />} />
                      <Route
                        path="*"
                        element={<p>There's nothing here: 404!</p>}
                      />
                    </Route>
                  </Routes>
                </Container>
                <Footer />
              </main>
            </BrowserRouter>
          </NotesProvider>
        </TaskProvider>
      </CalendarProvider>
    </AuthProvider>
  );
}

export default App;
