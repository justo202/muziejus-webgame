import React, {Component} from "react";



const RenderImage = ({onSelectImage, image}) => {
    
    var coordinateX=image.cordx-image.width/2;
    var coordinatesY=image.cordy-image.height/2;
    let element = document.getElementById('canvas-container')
    
    return(
        <img key={image.id} onClick={() => onSelectImage({image})}className={`draggable ${image.selected ? "selected" : ""}`} style={{top: coordinatesY, left: coordinateX }}src={image.imgUrl} width={image.width} height={image.height}/>
       
    );
}

const RenderDragableImages = (props) => {
    const activeImages = props.dragImages.map((image) => {
            return(
                <RenderImage onSelectImage={props.onSelectImage} image={image}/>  
        );
});
    return(
        <>
        {activeImages}
        </>
    );
    }


export default RenderDragableImages;