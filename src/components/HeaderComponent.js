import React, {Component } from "react";

import { Navbar, Nav, NavItem, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";



class Header extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isDropDownOpen: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }
    toggleDropDown() {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
          });

      }
    render()
    {
        return(

            <div>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                    <Nav className="ml-auto">
                       
                        <Dropdown isOpen={this.state.isDropDownOpen} size="lg">
                        <DropdownToggle caret id ="drop-custom" onClick={this.toggleDropDown}>
                                ...
                         </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem header>Pasirinkimai</DropdownItem>
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem text>Dropdown Item Text</DropdownItem>
                                <DropdownItem disabled>Action (disabled)</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Foo Action</DropdownItem>
                                <DropdownItem>Bar Action</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        
                    
                    </Nav>
                </div>
            </Navbar>

        </div>

        );
        
            
        
    }


}

export default Header;