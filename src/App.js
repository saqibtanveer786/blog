import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AllPosts from './pages/AllPosts';
import Dashboard from './pages/Dashboard';
import AddPost from './pages/AddPost';
import BlogState from './context/BlogState';
// import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <BlogState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/allposts" element={<AllPosts />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/addpost" element={<AddPost />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </BlogState>
    </>
  );
}

export default App;
