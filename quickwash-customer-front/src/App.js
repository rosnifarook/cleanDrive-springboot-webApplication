import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Customer from './Pages/Customer';
import Employee from './Pages/Employee';
import Services from './Pages/Services';
import Editcustomer from './Users/Editcustomer';
import Viewcustomer from './Users/Viewcustomer';
import Newcustomer from './Users/Newcustomer';
import AdminLogin from './Pages/AdminLogin';
import NewEmployee from './Users/NewEmployee';
import ViewEmployee from './Users/ViewEmployee';
import EditEmployee from './Users/EditEmployee';
import ViewService from './Users/ViewService';
import NewService from './Users/NewService';
import ServicesFinished from './Users/ServicesFinished';
import FinishAService from './Users/FinishAService';
import ViewFinishedService from './Users/ViewFinishedService';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/customer' element={<Customer/>}/>
          <Route exact path='/employee' element={<Employee/>}/>
          <Route exact path='/service' element={<Services/>}/>
          <Route exact path='/viewcustomer/:id' element={<Viewcustomer/>}/>
          <Route exact path='/editcustomer/:id' element={<Editcustomer/>}/>
          <Route exact path='/newcustomer' element={<Newcustomer/>}/>
          <Route exact path='/adminlogin' element={<AdminLogin/>}/>
          <Route exact path='/newemployee' element={<NewEmployee/>}/>
          <Route exact path='/editemployee/:id' element={<EditEmployee/>}/>
          <Route exact path='/viewemployee/:id' element={<ViewEmployee/>}/>
          <Route exact path='/newservice' element={<NewService/>}/>
          <Route exact path='/viewservice/:vehicleNumber' element={<ViewService/>}/>
          <Route exact path='/servicesfinished' element={<ServicesFinished/>}/>
          <Route exact path='/finishaservice' element={<FinishAService/>}/>
          <Route exact path='/viewfinishedservice/:id' element={<ViewFinishedService/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
