//this will be very easy, right?
//OFFCANVAS
import React from "react";
import { Row, Col } from "reactstrap";
import { faEraser, faMousePointer, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RenderSideBar = () =>
{


    return(
        <div>

        <Row> <button className="tool-btn mb-2"><FontAwesomeIcon icon={faMousePointer}/></button></Row>
        <Row><button className="tool-btn mb-2"><FontAwesomeIcon icon={faPencilAlt}/></button></Row>
        <Row><button className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></button></Row>
        </div>

    );
}

const RenderMobileBar = () =>
{
    return(
        <>

        <Col> <button className="tool-btn mb-2"><FontAwesomeIcon icon={faMousePointer}/></button></Col>
        <Col><button className="tool-btn mb-2"><FontAwesomeIcon icon={faPencilAlt}/></button></Col>
        <Col><button className="tool-btn mb-2"><FontAwesomeIcon icon={faEraser}/></button></Col>
        </>
    );
}
const RenderBar = () => {
    /*d-md-none makes it not display unless it's a certain size screen */
    return(
        <>
        <div className="row d-md-none mb-2"> <RenderMobileBar /></div> 
        <div className="col-2 d-none d-md-block"> <RenderSideBar /></div>
        
        </>
    );

}


export default RenderBar;
