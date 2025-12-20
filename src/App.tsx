import { Routes, Route, Navigate} from 'react-router-dom';
import BlogPostPage from './pages/blogs/IndividualBlog';
import AllBlogPosts from './pages/blogs/AllBlogPosts';
// import Home from './pages/home/Home';
// import Admin from './pages/admin/Admin';
// import Login from './pages/login/Login'
// import NotFound from './pages/NotFound/NotFound'

import './App.css'

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<AllBlogPosts/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/blog/:slug' element={<IndividualBlog/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<NotFound/>} />
   

    </Routes >
  )
}

