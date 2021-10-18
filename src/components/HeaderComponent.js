import React, {Component, createRef, useState } from "react";
import ImageUploader from 'react-images-upload';
import { Navbar, Nav, NavItem, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
            isModalOpen: false,
            image: '',
            file: []
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
       
    }
    toggleDropDown() {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
          });

      }
      toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });

      }
      onDrop(picture) {
        this.setState({
            file: this.state.file.push(picture)
        })
     //   console.log(this.state.file[0]);
       this.props.addImage(URL.createObjectURL(new Blob(this.state.file[0], {type: "image/png"})),"400px","400px","50vw","50vh","image")
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
      imageAdd(){
          
           //  console.log(this.state.file[0]);
            //this.props.addImage(URL.createObjectURL(this.state.file),"400px","400px","50vw","50vh","image")
          
      }

    render()
    {   
        return(

            <div>
            
                <Navbar className="unselect" dark>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>
                        <Nav className="ml-auto">
                        
                            <Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown} size="lg">
                            <DropdownToggle caret id ="drop-custom">
                                    ...
                            </DropdownToggle>
                                <DropdownMenu style={{zIndex: "9999999999"}}  right>
                                    <DropdownItem header>Pasirinkimai</DropdownItem>
                                    <DropdownItem onClick={() => this.takeScreenshot()} >parsiųsk nuotrauką</DropdownItem>
                                    <DropdownItem onClick={() => this.toggleModal()}>Įkelti savo nuotrauką</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            
                        
                        </Nav>
                    </div>
                </Navbar>

                <Modal zIndex='9999999' isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}>Pasirinkite paveiksliuką</ModalHeader>
                    
                    <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
            />
                   
                   
                    <ModalFooter>
                    <button onClick={this.imageAdd} className="tool-btn p-1">Ikelti paveiksliuką</button>
                    </ModalFooter>
      </Modal>
               
        </div>

        );
        
            
        
    }


}

export default Header;