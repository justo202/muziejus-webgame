import { Col, Row } from "reactstrap"

export const Logos = () => {


    return(
        <>
        <Row>
            <h1>Projektą finansuoja</h1>
        </Row>
        <Row style={{backgroundColor: 'white'}}height={"auto"}>
            <Col>
            <img  width={"100%"} src="./assets/logos/Arkivyskupijos_logo_LT.jpg"/>
            </Col>
            <Col>
            <img  width={"100%"} src="./assets/logos/LTK_Logotipas.png"/>
            </Col>
        </Row>
        </>


    )


}