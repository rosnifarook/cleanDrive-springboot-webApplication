import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewService() {
    
  let navigate = useNavigate();

  const [service, setService] = useState({
      vehicleNumber:"",
      serviceName:"",
      serviceCost:"",
      enqueueDate: new Date().toLocaleString(),
  });

  const {vehicleNumber, serviceName, serviceCost, enqueueDate} = service;

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
        const response = await axios.get('http://localhost:8083/quickServices');
        setVehicles(response.data);
    };
    fetchVehicles();
  }, []);

  const onInputChange = (e) => {
      setService({...service, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e)=> {
      e.preventDefault();

      const existingVehicle = vehicles.find(v => v.vehicleNumber === vehicleNumber)

      if(existingVehicle) {
        alert(`Vehicle Number ${vehicleNumber} is already in the queue for service.`);
      }
      else{
        await axios.post(`http://localhost:8083/quickServices`, {...service, vehicleNumber, serviceName, serviceCost});
        navigate("/service");
      }
  }
  
  return (
    <div>
    <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundImage: "url(https://e0.pxfuel.com/wallpapers/430/343/desktop-wallpaper-light-colors-geometric-pattern-abstract.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
            <h1 className="text-center m-4">Add New Service</h1>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="vehicleNumber" className="form-label">
                  <h4>Vehicle Number:</h4>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your Vehicle Number"
                  name="vehicleNumber"
                  value={vehicleNumber}
                  required
                  onChange={(e) => onInputChange(e)}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="serviceName" className="form-label">
                  <h4>Enter the service to provide:</h4>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  placeholder="Enter your service"
                  name="serviceName"
                  value={serviceName}
                  required
                  onChange={(e) => onInputChange(e)}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="serviceCost" className="form-label">
                    <h4 >Service Cost</h4>
                </label>
                <input
                  type={"number"}
                  className="form-control border-dark"
                  placeholder="Enter your Cost"
                  name="serviceCost"
                  value={serviceCost}
                  required
                  onChange={(e) => onInputChange(e)}
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="enqueueDate" className="form-label">
                    <h4 >Service Added Time</h4>
                </label>
                <input
                  type={"text"}
                  className="form-control border-dark"
                  name="enqueueDate"
                  value={enqueueDate}
                  readOnly
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-primary p-3 m-3">
                Submit
              </button>
              <Link className="btn btn-danger p-3 m-3" to="/service">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div> 
  )
  
}
