import { Link } from "react-router-dom";
import { posts } from "../../models/posts";

export default function AllBlogPosts(){
    return (
        <div className="allBlogsDiv">
            <h2>Blog</h2>
            {posts.map((post) => (
                
            )
        )}
        </div>
    )
}