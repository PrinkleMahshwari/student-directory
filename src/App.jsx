import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import StudentPortal from "./pages/studentPortal"



export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<StudentPortal />} />

        <Route path="/students" element={<Students />} />
        
        <Route path="/courses" element={<Courses />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/reports" element={<Reports />} />
        
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}
