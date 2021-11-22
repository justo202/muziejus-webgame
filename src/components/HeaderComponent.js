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
            file: null
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.imageAdd = this.imageAdd.bind(this);
       
    }
    toggleDropDown() {
        this.setState({
            isDropDownOpen: !this.state.isDropDownOpen
          });

      }
      toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            
          });

      }
      onDrop(picture) {
          
          if(picture.length) //if pictures isn't an empty object
          {
            this.setState({
                file: new Blob(picture, {type: "image/png"})
            })
          }
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
        if(this.state.file !== null){
            
            this.props.addImage(URL.createObjectURL(this.state.file),"400px","400px",0,0,"image", "actors");   
            this.setState({
                file: null
            })
            this.toggleModal();  
        }else {
            alert("Pasirinkite paveiksliuką!");
        } 
      }

    render()
    {   
        return(

            <div>
            
                <Navbar className="unselect" dark>
                    <div className="container">
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
                withPreview={true}
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