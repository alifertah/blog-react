import React from 'react'
import { Link } from 'react-router-dom'

const Newpost = () => {
  return React.createElement(
    "div",
    {style:{color:"red"}, id: 'someId', className: "someClass"},
    "hello world!",
  );
}


const TryRequire = (path) => {
  try {
   return require(`/post/1337`);
  } catch (err) {
   return null;
  }
};


function Home() {
  return (
    <div>
        <ul>
            <li><Link to="/post/1337">1337</Link><span>07 Apr 2022</span></li>
            <TryRequire />
        </ul>
    </div>
  )
}

export default Home