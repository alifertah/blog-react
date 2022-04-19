import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from 'components/Post';
import Topbar from 'global/Topbar';
import Footer from 'global/Footer';
import ReactMarkdown from "react-markdown";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
