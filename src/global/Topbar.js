import { Link } from "react-router-dom"

function Topbar() {
  return (
    <div>
        <span><Link to="/">Home </Link>| Ali Fertah | 1337 student</span> <span><Link to="/Login" className="Login"> Login</Link></span>
    </div>
  )
}

export default Topbar