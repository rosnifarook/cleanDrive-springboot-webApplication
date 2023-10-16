import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function AdminLogin() {

    let navigate = useNavigate();

    const [admin, setAdmin] = useState({
        username:"",
        password:"",
    });

    const {username, password} = admin;

    const onInputChange = (e) => {
        setAdmin({...admin, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            navigate("/employee");
        } else {
          alert("Invalid username or password");
        }
    }

  return (
    <div>
        <div className="container top-50 start-50 translate-middle position-absolute">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow " style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h2 className="text-center m-4 text-dark">Admin Login</h2>
            <h5 className="text-center m-4 text-dark">Please provide your login details to proceed</h5>
  
            <form autoComplete='off' onSubmit={(e) => onSubmit(e)}>
              
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  <h5>Username</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                <h5>Password</h5>
                </label>
                <input
                  type={"password"}
                  className="form-control border-dark"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary p-3 m-3">
                Submit
              </button>
              <Link className="btn btn-danger p-3 m-3" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
