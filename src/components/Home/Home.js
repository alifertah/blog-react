import React from 'react'
import Topbar from 'global/Topbar'
import Footer from 'global/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <ul>
            <li><Link to="/post/1337">1337</Link><span>07 Apr 2022</span></li>
        </ul>
    </div>
  )
}

export default Home