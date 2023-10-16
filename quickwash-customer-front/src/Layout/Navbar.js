import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

   const navigate = useNavigate();

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="container-fluid color-primary ">
                
                <Link className="navbar-brand text-dark" to="/"><b>Quick Wash Car Service</b></Link>
            </div>
            <div className="container-fluid">
                <Link type="button" class="btn btn-outline-dark text-nowrap me-3" to="/finishaservice"><b>Finish A Service</b></Link>
                <button type="button" class="btn btn-outline-dark text-nowrap me-3" onClick={() => navigate(-1)}><b>Go back</b></button>
                <Link type="button" class="btn btn-secondary text-nowrap me-3" to="/">Home</Link>
                <Link type="button" class="btn btn-secondary text-nowrap me-3" to="/customer">Manage Customers</Link>
                <Link type="button" class="btn btn-secondary text-nowrap me-3" to="/adminlogin">Manage Employees</Link>
                <Link type="button" class="btn btn-secondary text-nowrap me-3" to="/service">Manage Services</Link>
            </div>
        </nav>
    </div>
  )
}
