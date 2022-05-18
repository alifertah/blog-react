import React from 'react'
import { Link } from 'react-router-dom'

// const Newpost = () => {
//   return React.createElement(
//     "div",
//     {style:{color:"red"}, id: 'someId', className: "someClass"},
//     "hello world!",
//   );
// }

const Newpost = () => {
  return React.createElement(
    "a",
    "hello world!",
     "hey",
  );
  }
  const Wpan= () => {
    return React.createElement(
      "span",
      "hello world!",
       "07 Apr 2022",
    );
    }


// const TryRequire = (path) => {
//   try {
//    return require(`/post/1337`);
//   } catch (err) {
//    return null;
//   }
// };


function Home() {
  return (
    <div>
        <ul>
            <li><Link to="/post/1337">1337</Link><span>07 Apr 2022</span></li>
            <li><Link to="/post/1337"><Newpost /></Link> <Wpan /> </li>
            {/* <li className="snd"> <Newpost /> <Wpan /></li> */}
        </ul>
    </div>
  )
}

export default Home;