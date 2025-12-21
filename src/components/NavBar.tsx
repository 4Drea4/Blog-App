import {Link,NavLink, useNavigate, } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
    const {isAuthenticated, logout} = useAuth();
    const navigate = useNavigate();

    function handleLogout(){
        logout();
        navigate("/");
    }
    return (
        <nav>

           <NavLink  style={({ isActive }) => ({ color: isActive ? 'purple' : 'black', })} to="/" >Home
          </NavLink>

          <NavLink  style={({ isActive }) => ({ color: isActive ? 'purple' : 'black', })} to="/blog" >Blog
          </NavLink>

        {!isAuthenticated ? (
            <Link to="/login">Log in</Link>
        ) : (
            <div>
                <Link to="/admin">Admin</Link>
                <button onClick={handleLogout}>Log out</button>
            </div>
        )
    }


        </nav>
    )
}