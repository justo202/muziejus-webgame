//this will be very easy, right?
//OFFCANVAS
import React from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button, ButtonDropdown } from "reactstrap";
import { faEraser, faFont, faPencilAlt, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
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
            textID: 0,
            zIndex: 0,
            zIndexBtnsDisabled: true,
            zIndexID: 0

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
    changeItemsZIndex(index) {
        this.setState({
            zIndex: index
        })
        this.props.changezIndex(this.state.zIndexID, index);
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
    enablezIndexButtons(itemZindex, id) {
        this.setState({
            zIndex: itemZindex,
            zIndexBtnsDisabled: false,
            zIndexID: id
        })
    }
    disablezIndexButtons() {
        this.setState({
            zIndex: 0,
            zIndexBtnsDisabled: true,
            zIndexID: 0
        })
    }
    RenderDropDownMenu(){
        if(this.state.fontSelectActive){
           
            const fontSizes = [36, 22, 18, 14, 12];
            var x = 0;
            const dropDownItems = fontSizes.map(element => {
                x++;
                return(
                    <DropdownItem key={x} onMouseDown={() => this.changeFontSize(element)} onTouchStart={() => this.changeFontSize(element)}>{element}</DropdownItem>
                );
                    
            });
            return(
                <Dropdown style={{width: "50%"}}inNavbar={true} isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDowns} className="p-0" size="lg">
                <DropdownToggle style={{borderRadius: "0",width:"100%"}} caret id ="drop-custom">
                                 {this.state.fontSize}   
                </DropdownToggle>
                <DropdownMenu style={{fontSize: "22px", textAlign: "center", width: "100%", zIndex: "9999999999"}}  right>  
                
                    {dropDownItems}
    
                </DropdownMenu>
            </Dropdown>
            );
        } else {
            return(
                <Button disabled={true} style={{width: "50%", backgroundColor: "#d1847b"}} id ="drop-custom">
                             <FontAwesomeIcon icon={faFont}/>   
                </Button>
            );
        }
    }
    incrementZindex(increment) {
        var index = this.state.zIndex;
        if(increment) {
            index++
        } else
        {
            index--;
        }
        this.changeItemsZIndex(index)
    }
    RenderSideBar(){
        return(
            <div className="col-2 d-none d-md-block">

                <Row><Button size="lg" style={{border: "none", backgroundColor: this.state.delButtonPressed ? '#d40b1b' : '#d1847b'}} 
                onClick={this.DelBtnClickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></Button></Row>

                <Row className="mb-2">

                    <ButtonGroup size="lg" className="p-0">
                        {this.RenderDropDownMenu()}
                        <Button style={{width: "50%", border: "none", backgroundColor: this.state.createButtonPressed ? '#d40b1b' : '#d1847b'}} 
                        onClick={this.createBtnClickFunction} className="tool-btn"><FontAwesomeIcon icon={faPencilAlt}/></Button>
                    </ButtonGroup>
                </Row>
                <Row>
                    <ButtonGroup size="lg" className="p-0">
                        <Button disabled={this.state.zIndexBtnsDisabled} style={{ width: "33%", backgroundColor: "#a0635c", borderColor: "#d1847b"}} id ="zText">
                                    {this.state.zIndex}
                        </Button>
                        <Button onClick={() =>this.incrementZindex(false)}  disabled={this.state.zIndexBtnsDisabled} style={{width: "33%", backgroundColor: "#d1847b"}} id ="drop-custom">
                                    <FontAwesomeIcon icon={faMinus}/>   
                        </Button>
                        <Button onClick={() => this.incrementZindex(true)} disabled={this.state.zIndexBtnsDisabled} style={{width: "33%", backgroundColor: "#d1847b"}} id ="drop-custom">
                                    <FontAwesomeIcon icon={faPlus}/>   
                        </Button>
                    </ButtonGroup>
                </Row>
            </div>
        );
    }
    RenderMobileBar(){
        return(
            <div className="row d-md-none mb-2">
            <Col>
                <ButtonGroup style={{width: "100%"}} size="lg" className="p-0">
                   <Button disabled={this.state.zIndexBtnsDisabled} style={{ width: "33%", backgroundColor: "#a0635c", borderColor: "#d1847b"}} id ="zText">
                                        {this.state.zIndex}
                    </Button>
                    <Button onClick={() =>this.incrementZindex(false)}  disabled={this.state.zIndexBtnsDisabled} style={{width: "33%", backgroundColor: "#d1847b"}} id ="drop-custom">
                                        <FontAwesomeIcon icon={faMinus}/>   
                     </Button>
                     <Button onClick={() => this.incrementZindex(true)} disabled={this.state.zIndexBtnsDisabled} style={{width: "33%", backgroundColor: "#d1847b"}} id ="drop-custom">
                           <FontAwesomeIcon icon={faPlus}/>   
                     </Button>
                </ButtonGroup>
            </Col>
            <Col>
                <ButtonGroup style={{width: "100%"}} size="lg" className="p-0">
                    {this.RenderDropDownMenu()}
                    <Button style={{width: "50%", border: "none", backgroundColor: this.state.createButtonPressed ? '#d40b1b' : '#d1847b'}} 
                    onClick={this.createBtnClickFunction} className="tool-btn"><FontAwesomeIcon icon={faPencilAlt}/></Button>
                </ButtonGroup>
            </Col>
            <Col><Button style={{border: "none", backgroundColor: this.state.delButtonPressed ? '#d40b1b' : '#d1847b'}} 
            onClick={this.DelBtnClickFunction} className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></Button>  </Col>

        
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
