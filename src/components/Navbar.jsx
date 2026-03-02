import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">Tajudin</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blog">Insights</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
