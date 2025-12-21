import { Link } from "react-router-dom";
import { posts } from "../../models/posts";

export default function AllBlogPosts(){
    return (
        <div className="allBlogsDiv">
            <h1>Blog</h1>
            {posts.map((post) => (
                <p key={post.id}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
           </p>
            )
        )}
        </div>
    )
}