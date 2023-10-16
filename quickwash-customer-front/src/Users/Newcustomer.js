import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Newcustomer() {

    let navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name:"",
        address:"",
        vehicleNo:"",
        mobileNo: null,
    });

    const {name, address, vehicleNo, mobileNo} = customer;

    const onInputChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e)=> {
        e.preventDefault();
        await axios.post(`http://localhost:8081/customers`, customer);
        navigate("/customer");
    }

  return (
    <div className="container position-absolute top-50 start-50 translate-middle" >
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h2 className="text-center m-4">Register New Customer</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  <h5>Name</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
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
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="vehicleNo" className="form-label">
                  <h5>Vehicle Number</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your vehicle number"
                  name="vehicleNo"
                  value={vehicleNo}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNo" className="form-label">
                  <h5>Mobile Number</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your mobile number"
                  name="mobileNo"
                  value={mobileNo}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary p-3 m-3">
                Submit
              </button>
              <Link className="btn btn-danger p-3 m-3" to="/customer">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
  )
}
