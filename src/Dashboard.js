import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard=()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand ></Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features">Auditor</Nav.Link>
            <Nav.Link> <Link to="/login">Logout</Link></Nav.Link>
            <Nav.Link> <Link to="/dashboard">DashBoard</Link></Nav.Link>
        </Nav>
    </Navbar>
        <h1>This is dashboard page</h1>
        </div>
        
    )
}

export default Dashboard