import { useAuth } from "../../contexts/AuthContext"

export default function Login(){
     const {login} = useAuth();
     const navigate =useNavigate();

    function handleLogin(){
        login();
        navigate("/admin")
    }

    return(
    <div>
        <h1>Login</h1>
        <button onClick={()=> {console.log("login button"); login(); }}>Login </button>
    </div>
    ) 
}