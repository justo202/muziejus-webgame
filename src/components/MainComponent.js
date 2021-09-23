import React, { Component } from 'react';
import NavBar from './HeaderComponent';
import Select from './ItemSelector';
import RenderBar from './ToolsSideBar';
import { Container } from 'reactstrap';
import RenderCanvas from './Canvas';
import Footer from './FooterComponent';




class Main extends Component {

    constructor(props)
    {
        super(props);
        this.state= {

            dragImage: [],
            selectedID: null

        }
    }
    //Creates a new object array with the new item added to it
    createNewArray = (item) =>
    {
        let newDragImages = [...this.state.dragImage, item]
        if(this.state.selectedID!= null)
            {
                newDragImages.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
            }
        return newDragImages;

    }
    onImageClick = (imgUrl, width, height, xx, yy, id) =>
    {
        let item = {
            imgUrl: imgUrl,
            width: width,
            height: height,
            cordx: xx,
            cordy: yy,
            id: id,
            selected: true
            }    
        let newDragImages = this.createNewArray(item);
            
            this.setState({
                dragImage: newDragImages,
                selectedID: id
            })
    }
    //changes the selected image
    onSelectImage = ({image}) =>
    {
        let activeImageArray = [...this.state.dragImage]; //make a copy of the state
        if(this.state.selectedID!= null)
        {
            activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
        }
        activeImageArray.find(selectedImg => selectedImg.id === image.id).selected = true; //finds the item selected
        this.setState({
            dragImage: activeImageArray,
            selectedID: image.id
        })

    }
    CancelSelect = (e) =>
    {  
        var selectedItem = e.target.nodeName;
        if(this.state.selectedID!= null && selectedItem != 'IMG')
        {
           
            let activeImageArray = [...this.state.dragImage]; //make a copy of the state
            activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
            this.setState({
                dragImage: activeImageArray,
                selectedID: null
            })
        }
    }
    
    render()
    {
        window.onclick = (e) => this.CancelSelect(e); //cancels the select on click
        return(
            
            <div>
                
                <NavBar />
                <Container fluid="lg unselect">
                    <div className="row mt-2 unselect">
                        
                            <Select onImageClick={this.onImageClick}/>
                        
                    </div>
                    
                    <div className="row mt-2">
                        <RenderBar />
                    <div className="col-12 col-md-10" > <RenderCanvas onSelectImage={this.onSelectImage} dragImage={this.state.dragImage}/> </div>
                        
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Main;