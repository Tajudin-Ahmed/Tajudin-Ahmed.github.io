import { Link } from "react-router-dom"
import blogPosts from "../data/blogPosts"

function Blog() {
  return (
    <div className="container">
      <h1>Analytics Insights</h1>
      {blogPosts.map(post => (
        <div key={post.slug} className="card">
          <h3>{post.title}</h3>
          <Link to={`/blog/${post.slug}`} className="btn">
            Read Article
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blog
