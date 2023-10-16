import React from 'react'

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Quick Wash Car Service
        </Link>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage Customers</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/adminlogin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Employees</CDBSidebarMenuItem>
            </Link>
            <Link exact to="/service" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Manage Services</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 5px',
          }}
        >
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
    </div>
  )
}
