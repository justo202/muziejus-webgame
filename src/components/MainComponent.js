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
            selectedID: null,
            deleteOnSelect: false,
            cursor: 'default',
            selectedZindex: 1
        }
    }
    //Creates a new object array with the new item added to it  
    createNewArray = (item) =>
    {
        let newDragImages = [...this.state.dragImage, item]
        if(this.state.selectedID!= null)
            {
                newDragImages.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
                newDragImages.find(selectedImg => selectedImg.id === this.state.selectedID).zIndex = this.state.selectedZindex;
            }
        return newDragImages;

    }
    delButtonToggle = () => {
        
      
        var cursor = !this.state.deleteOnSelect ? 'alias' : 'default';
        this.setState({
            deleteOnSelect: !this.state.deleteOnSelect,
            cursor: cursor
        })
    }
    onImageClick = (imgUrl, width, height, xx, yy, id) =>{
        var idd = this.state.dragImage.length;
        let item = {
            imgUrl: imgUrl, 
            width: width,
            height: height,
            cordx: xx,
            cordy: yy,
            id: idd,
            zIndex: 999999,
            selected: true
            } 
            
        let newDragImages = this.createNewArray(item);
            
            this.setState({
                dragImage: newDragImages,
                selectedID: idd,
                selectedZindex: this.state.selectedZindex+1
            })
    }
    deleteImage = (e, {image}) =>
    {
        if(this.state.deleteOnSelect)
        {
            e.target.remove();

            let updatedArray = [...this.state.dragImage]; //make a copy of the state
                updatedArray.filter(removeImage => removeImage !== {image})
             //changes the selected item
            this.setState({
                dragImage: updatedArray,
                selectedID: null
            })



        }
    }
    //changes the selected image
    onSelectImage = (e, {image}) =>
    {
        if(image.id != this.state.selectedID)
        {
            let activeImageArray = [...this.state.dragImage]; //make a copy of the state
            if(this.state.selectedID!= null)
            {
                activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
                activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).zIndex = this.state.selectedZindex;
            }
            activeImageArray.find(selectedImg => selectedImg.id === image.id).selected = true; //finds the item selected
            activeImageArray.find(selectedImg => selectedImg.id === image.id).zIndex = 99999;
            this.setState({
                dragImage: activeImageArray,
                selectedID: image.id,
                selectedZindex: this.state.selectedZindex+1
            })

        }


    }
    CancelSelect = (e) =>
    {  
        var selectedItem = e.target.nodeName;
        if(this.state.selectedID!= null && selectedItem != 'IMG')
        {
           
            let activeImageArray = [...this.state.dragImage]; //make a copy of the state
            activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
            activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).zIndex = this.state.selectedZindex;
            this.setState({
                dragImage: activeImageArray,
                selectedID: null,
                
            })
        }
    }
    
    render()
    {
        window.onclick = (e) => this.CancelSelect(e); //cancels the select on click
        return(
            
            <div style={{cursor: this.state.cursor}}>
                
                <NavBar />
                <Container fluid="lg unselect">
                    <div className="row mt-2 unselect">
                        
                            <Select onImageClick={this.onImageClick}/>
                        
                    </div>
                    
                    <div className="row mt-2">
                        <RenderBar onDelButtonClick={this.delButtonToggle}/>
                    <div className="col-12 col-md-10" > <RenderCanvas deleteImage={this.deleteImage} onSelectImage={this.onSelectImage} dragImage={this.state.dragImage}/> </div>
                        
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Main;