//this will be very easy, right?
//OFFCANVAS
import React from "react";
import { Row, Col } from "reactstrap";
import { faEraser, faMousePointer, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

 class RenderBar extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            delButtonPressed: false
        }
        this.RenderSideBar = this.RenderSideBar.bind(this);
        this.RenderMobileBar = this.RenderMobileBar.bind(this);
        this.clickFunction = this.clickFunction.bind(this);
    }
    clickFunction()  {
        this.props.onDelButtonClick();
        this.setState({
            delButtonPressed: !this.state.delButtonPressed
        });
    }
    RenderSideBar(){
        return(
            <div className="col-2 d-none d-md-block">
            <Row> <button className="tool-btn mb-2"><FontAwesomeIcon icon={faMousePointer}/></button></Row>
            <Row><button className="tool-btn mb-2"><FontAwesomeIcon icon={faPencilAlt}/></button></Row>
            <Row><button style={{backgroundColor: this.state.delButtonPressed ? '#d40b1b' : '#512DA8'}} 
            onClick={this.clickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></button></Row>
            </div>
        );
    }
    RenderMobileBar(){
        return(
            <div className="row d-md-none mb-2">
            <Col> <button className="tool-btn mb-2"><FontAwesomeIcon icon={faMousePointer}/></button></Col>
            <Col><button className="tool-btn mb-2"><FontAwesomeIcon icon={faPencilAlt}/></button></Col>
            <Col><button style={{backgroundColor: this.state.delButtonPressed ? '#d40b1b' : '#512DA8'}} 
            onClick={this.clickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></button>  </Col>
            </div> 
        );
    }
    render(){

        return(
            <>
            {this.RenderSideBar()}
            {this.RenderMobileBar()}
            
            </>
        );
    }



 }   




export default RenderBar;
