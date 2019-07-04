import React from 'react';
import {
    Navbar,
    NavbarBrand} from 'reactstrap';

const HeaderComponent = () => {
    return(
        
        <Navbar className="navbar shadow p-3 mb-5 bg-white rounded" color="light" light expand="md">
            <div className="container">
                <NavbarBrand className="navbarBrand" href="/"><b>BOOK</b> </NavbarBrand>
            </div>
        </Navbar>
    )
}

export default HeaderComponent