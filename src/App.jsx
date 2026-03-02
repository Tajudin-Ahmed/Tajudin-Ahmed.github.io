import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos'
import './App.css'

// Initialize AOS
AOS.init()

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome to Tajudin's Portfolio</h1>
      <p>React + Vite + React Router + AOS</p>
    </div>
  )
}

export default App
