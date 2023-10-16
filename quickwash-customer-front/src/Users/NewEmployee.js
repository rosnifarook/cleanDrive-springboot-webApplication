import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function NewEmployee() {
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name:"",
        address:"",
        mobileNumber: "",
    });

    const {name, address, mobileNo} = employee;

    const onInputChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {

        const re = /^[0-9\b]+$/;

        if(re.test(name)===true)   
        {
            alert("Please enter a valid name.");
        }
        else
        {
            e.preventDefault();
            await axios.post(`http://localhost:8082/employees`, employee);
            navigate("/employee");
        }
    }

  return (
    <div>
    <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h2 className="text-center m-4">Register New Employee</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  <h5>Employee Name</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  <h5>Address</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your address"
                  name="address"
                  value={address}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  <h5>Mobile Number</h5>
                </label>
                <input
                  type={"number"}
                  className="form-control border-dark"
                  placeholder="Enter your mobile number"
                  name="mobileNumber"
                  value={mobileNo}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary p-3 m-3">
                Submit
              </button>
              <Link className="btn btn-danger p-3 m-3" to="/employee">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div> 
  )
}
