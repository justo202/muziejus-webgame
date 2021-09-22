import React, { Component } from 'react';
import NavBar from './HeaderComponent';
import Select from './ItemSelector';
import RenderBar from './ToolsSideBar';
import { Container } from 'reactstrap';
import RenderCanvas from './Canvas';
import Footer from './FooterComponent';
import RenderDragableImages from './imageDrag';


class Main extends Component {

    constructor(props)
    {
        super(props);
        this.state= {

            dragImage: []

        }
    }

    onImageClick = (imgUrl, width, height, xx, yy, id) =>
    {
        let item = {
            imgUrl: imgUrl,
            width: width,
            height: height,
            cordx: xx,
            cordy: yy,
            id: id
            }
            
        let newDragImages = [...this.state.dragImage, item]
            this.setState({
                dragImage: newDragImages
            })
    }
    render()
    {
        
        return(
            
            <div>
                <RenderDragableImages dragImages={this.state.dragImage}/>
                <NavBar />
                <Container fluid="lg">
                    <div className="row mt-2">
                        
                            <Select onImageClick={this.onImageClick}/>
                        
                    </div>
                    
                    <div className="row mt-2">
                        <RenderBar />
                    <div className="col-12 col-md-10"> <RenderCanvas /> </div>
                        
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Main;