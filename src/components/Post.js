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

  const [comment, setComment] = useState("");

  return (
    <div>
      <h1 className="title">1337</h1>
      <div className="article">
        <h2 className="another-title">1337</h2>
        <img src={pic} />
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
          <input type="text" id="comment" />
          <button className="comment-button" onClick={() => setComment(document.getElementById("comment").value)}>Comment</button>
          <p className="comment"> {comment} </p>
        </div>
      </div>
    </div>
  );
}


export default Post;
