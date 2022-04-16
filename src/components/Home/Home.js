import React from 'react'
import Topbar from 'global/Topbar'
import Footer from 'global/Footer'

function Home() {
  return (
    <div>
        <Topbar />
        <ul>
            <li><a href="#">1337</a><span>07 Apr 2022</span></li> 
            <li><a href="#">1337</a><span>07 Apr 2022</span></li> 
            <li><a href="#">1337</a><span>07 Apr 2022</span></li> 
        </ul>
        <Footer />
    </div>
  )
}

export default Home