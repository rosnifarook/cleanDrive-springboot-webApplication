import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function FinishAService() {

    let navigate = useNavigate();

    const [services, setServices] = useState({
        vehicleNumber:""
    });


    const {vehicleNumber} = services;

    const onInputChange = (e) => {
        setServices({...services, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:8083/quickServices/${vehicleNumber}`);
        navigate("/service");
    }

  return (
    <div>
        <div className="container top-50 start-50 translate-middle position-absolute">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow " style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
                <h1 className="text-center m-4 text-dark">Finish A Service</h1>
                <h5 className="text-center m-4 text-dark">Enter the vehicle number to complete the service.</h5>

                <form autoComplete='off' onSubmit={(e) => onSubmit(e)}>
                
                <div className="mb-3">
                    <label htmlFor="vehicleNumber" className="form-label">
                    <h5><b>Enter Vechicle Number</b></h5>
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your vehicle number"
                    name="vehicleNumber"
                    value={vehicleNumber}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-primary m-3 p-3">
                    <b>Submit</b>
                </button>
                <Link className="btn btn-danger p-3 m-3" to="/service">
                    <b>Cancel</b>
                </Link>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}
