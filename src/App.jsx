import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
