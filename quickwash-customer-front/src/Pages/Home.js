import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container py-4 shadow position-absolute top-50 start-50 translate-middle" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <h1 className='bg-light bg-opacity-50 bg-gradient'>Welcome!</h1>
        <h1>Quick Wash Home Page</h1>
        <h3 className='mt-4 '>Please select a site to visit</h3><br/>
        <Link type="button" class="btn btn-light text-nowrap me-3 mt-4 mb-4 p-3" to="/customer"><h3><b>Manage Customers</b></h3></Link>
        <Link type="button" class="btn btn-secondary text-nowrap me-3 mt-4 mb-4 p-3" to="/adminlogin"><h3><b>Manage Employees</b></h3></Link>
        <Link type="button" class="btn btn-dark text-nowrap me-3 mt-4 mb-4 p-3" to="/service"><h3><b>Manage Services</b></h3></Link>
    </div>
  )
}
