import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Editcustomer() {
  
    let navigate = useNavigate();

    const {id} = useParams()

    const [customer, setCustomer] = useState({
        name:"",
        address:"",
        vehicleNo:"",
        mobileNo:"",
    });

    const {name, address, vehicleNo, mobileNo} = customer;

    const onInputChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadCustomer();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:8081/customers/${id}`, customer);
        navigate("/customer");
    }

    const loadCustomer = async ()=>{
        const result= await axios.get(`http://localhost:8081/customers/${id}`)
        setCustomer(result.data);
    }
  
    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h2 className="text-center m-4">Edit Customer</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  <h5>Name</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
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
                <label htmlFor="vehicleNo" className="form-label">
                  <h5>Vehicle Number</h5>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your vehicle number"
                  name="vehicleNo"
                  value={vehicleNo}
                  required
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
                  required
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
