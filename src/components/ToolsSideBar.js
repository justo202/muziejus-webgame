//this will be very easy, right?
//OFFCANVAS
import React from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { faEraser, faMousePointer, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

 class RenderBar extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            isDropDownOpen: false,
            delButtonPressed: false,
            createButtonPressed: false,
            fontSize: 18,
            fontSelectActive: false,
            textID: 0

        }
        this.RenderSideBar = this.RenderSideBar.bind(this);
        this.RenderMobileBar = this.RenderMobileBar.bind(this);
        this.DelBtnClickFunction = this.DelBtnClickFunction.bind(this);
        this.createBtnClickFunction = this.createBtnClickFunction.bind(this);
        this.toggleDropDowns = this.toggleDropDowns.bind(this);
        this.changeFontSize = this.changeFontSize.bind(this);
    }
    toggleDropDowns() {
     
          this.setState(prevState => ({
            isDropDownOpen: !prevState.isDropDownOpen
          }));
      }
    DelBtnClickFunction()  {
        this.props.onDelButtonClick();
        this.setState({
            delButtonPressed: !this.state.delButtonPressed
        });
    }
    createBtnClickFunction()  {
        this.props.createWordButtonToggle();
        this.setState({
            createButtonPressed: !this.state.createButtonPressed
        });
    }
    changeCreatebtn() {
        this.setState({
            createButtonPressed: !this.state.createButtonPressed
        });
    }
    changeFontSize(size) {
        
        this.setState({
            fontSize: size
        })
        this.props.changeFont(this.state.textID, size);
    }
    enableDropBtn(type, fontSize, textID){
        if(type === "textbox"){
            this.setState({
                fontSelectActive: true,
                fontSize: fontSize,
                textID: textID
            })
        } else {
            this.setState({
                fontSelectActive: false,
                fontSize: 0,
                textID: 0
            })
        }
    }
    RenderDropDownMenu(){
        if(this.state.fontSelectActive){
           
            const fontSizes = [34, 30, 26, 22, 18, 14, 10];
            var x = 0;
            const dropDownItems = fontSizes.map(element => {
                x++;
                return(
                    <DropdownItem key={x} onMouseDown={() => this.changeFontSize(element)} onTouchStart={() => this.changeFontSize(element)}>{element}</DropdownItem>
                );
                    
            });
            return(
                <Dropdown inNavbar={true} isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDowns} className="p-0" size="lg">
                <DropdownToggle style={{width:"100%"}} caret id ="drop-custom">
                                 {this.state.fontSize}   
                </DropdownToggle>
                <DropdownMenu style={{textAlign: "center", width: "100%", zIndex: "9999999999"}}  right>  
                
                    {dropDownItems}
    
                </DropdownMenu>
            </Dropdown>
            );
        } else {
            return(
                <button style={{backgroundColor: "#d47d74", height: "45px",width:"100%"}} id ="drop-custom">
                                  
                </button>
            );
        }
      

    }
    RenderSideBar(){
        return(
            <div className="col-2 d-none d-md-block">
            <Row><button style={{backgroundColor: this.state.createButtonPressed ? '#d40b1b' : '#d1847b'}} 
            onClick={this.createBtnClickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faPencilAlt}/></button></Row>
            <Row><button style={{backgroundColor: this.state.delButtonPressed ? '#d40b1b' : '#d1847b'}} 
            onClick={this.DelBtnClickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></button></Row>
            <Row>{this.RenderDropDownMenu()}</Row>
            </div>
        );
    }
    RenderMobileBar(){
        return(
            <div className="row d-md-none mb-2">
            <Col>{this.RenderDropDownMenu()}</Col>
            <Col><button style={{backgroundColor: this.state.createButtonPressed ? '#d40b1b' : '#d1847b'}} 
            onClick={this.createBtnClickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faPencilAlt}/></button></Col>
            <Col><button style={{backgroundColor: this.state.delButtonPressed ? '#d40b1b' : '#d1847b'}} 
            onClick={this.DelBtnClickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></button>  </Col>
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
