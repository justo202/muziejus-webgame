import React, {Component, createRef, useState } from "react";

import { Navbar, Nav, NavItem, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useScreenshot } from 'use-react-screenshot'
import html2canvas from "html2canvas";



class Header extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isDropDownOpen: false,
            image: ''
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }
    toggleDropDown() {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
          });

      }
      takeScreenshot()
      {
          let element = document.getElementById('canvas-container')
        html2canvas(element, { allowTaint: true, windowWidth: element.width,
            windowHeight: element.height}).then(function(canvas) {
            document.body.appendChild(canvas);
        });
      }
    render()
    {   
        const ref = createRef(null)
        
        return(

            <div ref={ref}>
            
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
                                    <DropdownItem><button className="unstyled" onClick={this.takeScreenshot}> parsiųsk nuotrauką </button></DropdownItem>
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