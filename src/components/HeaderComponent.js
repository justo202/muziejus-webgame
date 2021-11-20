import React, {Component, createRef, useState } from "react";
import ImageUploader from 'react-images-upload';
import { Navbar, Nav, NavItem, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import html2canvas from "html2canvas";
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageFile, removeBackgroundFromImageUrl } from "remove.bg";
import axios from "axios";
import formData from "form-data";


async function removebg() {

    // Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

var inputPath = "test.png";
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': '4ZfXWakShACXzcmxDuJxNrGt',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync("no-bg.png", response.data);
})
.catch((error) => {
    return console.error('Request failed:', error);
});
} 

async function removeFromImgUrl(url) {
    try {
      const outputFile = "./img-removed-from-url.png";
      const result = await removeBackgroundFromImageUrl({
        url,
        apiKey: "4ZfXWakShACXzcmxDuJxNrGt",
        size: "regular",
        type: "product",
        outputFile
      });
  
      console.log(`File saved to ${outputFile}`);
      console.log(`${result.creditsCharged} credit(s) charged for this image`);
      console.log(`Result width x height: ${result.resultWidth} x ${result.resultHeight}, type: ${result.detectedType}`);
      console.log(result.base64img.substring(0, 40) + "..");
      console.log(`Rate limit: ${result.rateLimit}, remaining: ${result.rateLimitRemaining}, reset: ${result.rateLimitReset}, retryAfter: ${result.retryAfter}`);
    } catch (e) {
      const errors = e;
      console.log(JSON.stringify(errors));
    }
    return null;
  }

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
          removebg();

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
        //<NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='logo' /></NavbarBrand>

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