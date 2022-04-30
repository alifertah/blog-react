import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from 'components/Post';
import Topbar from 'global/Topbar';
import Footer from 'global/Footer';
import ReactMarkdown from "react-markdown";
import Login from 'components/Login/Login';
import Signin from 'components/Signin/Signin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/Login" element={<Login />} />  
          <Route path='/Signin' element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
