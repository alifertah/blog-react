import pic from "assets/1337.jpeg";
import { BsTag } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

import ReactDom from 'react-dom'
import { useEffect, useState } from "react";

function Post() {
  const [content, setContent] = useState("")

  useEffect(() => {
    fetch("/posts/my-first-post.md")
    .then((res) => res.text())
    .then((text) => setContent(text))
  }, [])

  return (
    <div>
      <h1 className="title">1337</h1>
      <div className="article">
        <h2 className="another-title">1337</h2>
        <img src={pic} />
        {/* <p className="paragraph">
          1337 , or “leet”, an informed language or code on the internet, in
          which standar letters are often replaced by numerals or special
          characters. 1337 is the first to provide IT training in Morocco,
          completely free of charge, open and accessible to anyone between the
          age of 18 & 30, no need for an IT degree, or of having undergone
          extensive IT training, JUST BE CREATIVE. 1337 is our home, the place
          where we learn everything, not only how to code, we learn how to be
          friendly with everyone, how to help your peers, how to find the
          information tou need, how to share what you found… I have never seen a
          place more beautifull than my second home “1337”.
        </p> */}
        <ReactMarkdown className="text-md" children={content} />
        <p className="author">By : Ali Fertah</p>
        <div className="informations">
          <p className="info">
            <BsTag /> <span>leet | 1337</span>
          </p>
          <p className="info">
            <AiOutlineFileText /> <span>131 word</span>
          </p>
          <p className="info">
            <AiOutlineCalendar /> <span> 24 Mar 2022</span>
          </p>
        </div>
      </div>
    </div>
  );
}


export default Post;
