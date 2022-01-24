import { Col, Row } from "reactstrap"

export const Logos = () => {


    return(
        <>
        <Row className="justify-content-center">
            <Col xs={6} >
            <h4 style={{textAlign: "center"}}>Projektą finansuoja</h4>
            </Col>
        </Row>
        <Row height={"auto"} className="justify-content-center">
            <Col md={3}>
            <img width={"100%"} src="./assets/logos/Arkivyskupijos_logo_LT.png"/>
            </Col>
            <Col md={3}>
            <img  width={"100%"} src="./assets/logos/LTK_Logotipas.png"/>
            </Col>
        </Row>
        </>


    )


}