import { useParams } from "react-router-dom"
import blogPosts from "../data/blogPosts"

function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  return (
    <div className="container article">
      <h1>{post.title}</h1>
      <p style={{whiteSpace: "pre-line"}}>{post.content}</p>
    </div>
  )
}

export default BlogPost
