import { useParams } from "react-router-dom";
import { posts } from "../../models/posts";

export default function IndividualBlog(){
    const {slug} = useParams();

    const lookForPost = posts.filter((post)=> 
        post.slug  === slug)[0];

if(!lookForPost) {
    return <h2> No post found</h2>;

}


return (
    <div>
        <h3>{lookForPost.title}</h3>
        <p>{lookForPost.content}</p>


    </div>
)
}