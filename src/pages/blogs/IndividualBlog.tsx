import { useParams } from "react-router-dom";
import { posts } from "../../models/posts";

export default function BlogPostPage(){
    const {slug} = useParams();
    const lookForPost = posts.find((post)
=> post.slug  === slug);

if(!lookForPost) {
    return <h2> No post found</h2>;

}


return (
    
)
}