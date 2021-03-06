import React, { Component } from 'react';
import NavBar from './HeaderComponent';
import Select from './ItemSelector';
import RenderBar from './ToolsSideBar';
import { Container } from 'reactstrap';
import RenderCanvas from './Canvas';
import Footer from './FooterComponent';
import { Logos } from './LogoSection';

const backgrounds = 0;
const details = 5000;
const actors = 10000;
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
        this.canvasRef = React.createRef();
    }
    //Creates a new object array with the new item added to it  
    createNewArray = (item) =>
    {
        let newDragImages = [...this.state.dragImage, item]
        if(this.state.selectedID!= null)
            {
                newDragImages.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
              //  newDragImages.find(selectedImg => selectedImg.id === this.state.selectedID).zIndex = this.state.selectedZindex;
            }
        return newDragImages;

    }
    changeFontSize = (id, fontSize) => {
        let tempArray = [...this.state.dragImage];
        tempArray.find(selectedTextBox => selectedTextBox.id === id).textSize = fontSize;
        this.setState({
            dragImage: tempArray
        })
    }
    changezIndex = (id, itemZindex) => {
        let tempArray = [...this.state.dragImage];
        tempArray.find(selectedTextBox => selectedTextBox.id === id).zIndex = itemZindex;
        this.setState({
            dragImage: tempArray,
            selectedZindex: this.state.selectedZindex >= itemZindex ? this.state.selectedZindex : itemZindex
        })
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
    getZindex = (imageType) => {
        var zindex = this.state.selectedZindex;
        /*
        if(imageType === "actors") {
            zindex+=actors;
        } else if(imageType === "backgrounds"){
            zindex+=backgrounds;
        } else if(imageType === "details"){
            zindex+=details;
        }
        */
        return zindex;

    }
    onImageClick = (imgUrl, width, height, xx, yy, typee, imageType) =>{
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
            selected: true,
            textSize: 18,
            imagePrio: imageType
            } 
            item.zIndex = this.getZindex(item.imagePrio);
        let newDragImages = this.createNewArray(item);
        this.toolbtns.current.enablezIndexButtons(item.zIndex, item.id);
            this.setState({
                dragImage: newDragImages,
                selectedID: idd,
                selectedZindex: this.state.selectedZindex+1
            })
          //  this.toolbtns.current.enableDropBtn(typee);
    }
    deleteImage = (e, {image}) =>
    {
        if(this.state.deleteOnSelect)
        {
            e.target.parentNode.remove();

            let updatedArray = [...this.state.dragImage]; //make a copy of the state
                updatedArray.filter(removeImage => removeImage !== {image})
             //changes the selected item
            this.setState({
                dragImage: updatedArray,
                selectedID: null
            })
            this.delButtonToggle();
            this.toolbtns.current.DelBtnClickFunction();
            this.toolbtns.current.enableDropBtn("");
            this.toolbtns.current.disablezIndexButtons();
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
        
            
            var xx = x - bounds.left;
            var yy = y - bounds.top;
            this.onImageClick("","auto","auto",xx,yy,"textbox", "actors"); //creates new text box
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
               // activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).zIndex = this.state.selectedZindex;
            }
            activeImageArray.find(selectedImg => selectedImg.id === image.id).selected = true; //finds the item selected
         
            //activeImageArray.find(selectedImg => selectedImg.id === image.id).zIndex = this.getZindex(image.imagePrio);
            this.setState({
                dragImage: activeImageArray,
                selectedID: image.id,
               // selectedZindex: this.state.selectedZindex+1
            })
           this.toolbtns.current.enableDropBtn(image.type, image.textSize, image.id);
           this.toolbtns.current.enablezIndexButtons(image.zIndex, image.id);
        }
    }
    CancelSelect = (e) =>
    {  
        var selectedItem = e.target.nodeName;
      
       
        if(this.state.selectedID!= null && selectedItem != 'IMG' && selectedItem != "P" && selectedItem != "BUTTON")
        {
           
           this.removeSelect();
  
        }
    }
    removeSelect = () => {
        

        if(this.state.selectedID != null) {
            let activeImageArray = [...this.state.dragImage]; //make a copy of the state

            activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).selected = false; //changes the selected item
           // activeImageArray.find(selectedImg => selectedImg.id === this.state.selectedID).zIndex = this.state.selectedZindex;
            this.setState({
                dragImage: activeImageArray,
                selectedID: null,
                
            })

        }

    }

    changeCanvasBackground = (backgroundURL) => {
       
        this.canvasRef.current.changeBackground(backgroundURL);
        
    }
    render()
    {
       
        window.onclick = (e) => this.CancelSelect(e); //cancels the select on click 
        return(
            <div style={{cursor: this.state.cursor}}>
                
                <NavBar removeSelect={this.removeSelect} addImage={this.onImageClick} />
                <Container fluid="lg unselect">
                    <div className="row mt-2 unselect">   
                            <Select changeCanvasBackground={this.changeCanvasBackground} onImageClick={this.onImageClick}/>
                    </div>
                    
                    <div className="row mt-2">
                        <RenderBar ref={this.toolbtns} changezIndex={this.changezIndex} changeFont={this.changeFontSize} createWordButtonToggle={this.createWordButtonToggle} onDelButtonClick={this.delButtonToggle}/>
                    <div className="col-12 col-md-10" style={{minHeight: "500px"}} > <RenderCanvas ref={this.canvasRef} createNewWord={this.createNewWord} deleteImage={this.deleteImage} onSelectImage={this.onSelectImage} dragImage={this.state.dragImage}/> </div>
                          
                    </div>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Main;