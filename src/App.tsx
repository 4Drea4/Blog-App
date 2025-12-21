import { Routes, Route, Navigate} from 'react-router-dom';
import IndividualBlog from './pages/blogs/IndividualBlog';
import AllBlogPosts from './pages/blogs/AllBlogPosts';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login'
import NotFound from './pages/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoutes';
import Navbar from './components/NavBar';


import './App.css'

export default function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<AllBlogPosts/>}/>
      <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path='/blog/:slug' element={<IndividualBlog/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound/>} />
     
    
    </Routes >
    </>
  )
}

