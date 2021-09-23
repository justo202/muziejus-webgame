import React, {Component, createRef, useState } from "react";

import { Navbar, Nav, NavItem, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import html2canvas from "html2canvas";


function  saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}
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
      //Snippet taken from https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas
   
      takeScreenshot()
      {
          let element = document.getElementById('canvas-container')
          if(element != null)
            html2canvas(element, { allowTaint: false , windowWidth: element.width,
                windowHeight: element.height}).then(function(canvas) {
                    saveAs(canvas.toDataURL(), 'paveiksliukas.png');
            });
            this.setState({
                isDropDownOpen: !this.state.isDropDownOpen
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
                        
                            <Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown} size="lg">
                            <DropdownToggle caret id ="drop-custom">
                                    ...
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Pasirinkimai</DropdownItem>
                                    <DropdownItem onClick={() => this.takeScreenshot()} >parsiųsk nuotrauką</DropdownItem>
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