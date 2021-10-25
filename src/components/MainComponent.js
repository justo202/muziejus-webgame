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
            createWord: false,
            cursor: 'default',
            selectedZindex: 1
        }
        this.toolbtns = React.createRef();
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
    createWordButtonToggle = () => {
        var cursor = !this.state.createWord ? 'alias' : 'default';
        this.setState({
            createWord: !this.state.createWord,
            cursor: cursor
        })
    }
    onImageClick = (imgUrl, width, height, xx, yy, typee) =>{
        var idd = this.state.dragImage.length;
        let item = {
            type: typee,
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
    createNewWord = (e) => {
        var canvas = document.getElementById('canvas-container');
        var bounds = canvas.getBoundingClientRect();
        if(this.state.createWord) {
            var x, y;
            if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
                var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
                var touch = evt.touches[0] || evt.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
                x = e.clientX;
                y = e.clientY;
            }
            else{
                x=e.clientX;
                y=e.clientY;
            }
            console.log(x);
            
            var xx = x - bounds.left;
            var yy = y - bounds.top;
            this.onImageClick("","auto","auto",xx,yy,"textbox"); //creates new text box
            this.createWordButtonToggle();
            this.toolbtns.current.changeCreatebtn();
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
                
                <NavBar addImage={this.onImageClick} />
                <Container fluid="lg unselect">
                    <div className="row mt-2 unselect">
                        
                            <Select onImageClick={this.onImageClick}/>
                        
                    </div>
                    
                    <div className="row mt-2">
                        <RenderBar ref={this.toolbtns} createWordButtonToggle={this.createWordButtonToggle} onDelButtonClick={this.delButtonToggle}/>
                    <div className="col-12 col-md-10" > <RenderCanvas createNewWord={this.createNewWord} deleteImage={this.deleteImage} onSelectImage={this.onSelectImage} dragImage={this.state.dragImage}/> </div>
                        
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Main;