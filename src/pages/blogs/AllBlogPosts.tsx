import { Link } from "react-router-dom";
import { posts } from "../../models/posts";

export default function AllBlogPosts(){
    return (
        <>
        <h1>Read a new Blog</h1>
        <div className="allBlogsDiv">
          
            {posts.map((post) => (
                <p key={post.id}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
           </p>
            )
        )}
        </div>
        </>
    )
}