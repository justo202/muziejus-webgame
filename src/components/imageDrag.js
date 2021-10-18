import React from "react";



const RenderImage = ({deleteImage, onSelectImage, image}) => {
    
    var coordinateX=image.cordx-image.width/2;
    var coordinatesY=image.cordy-image.height/2;
    if(image.type == "image")
    {
        return(
            <img onClick={(e) => deleteImage(e, {image})} key={image.id} onMouseDown={(e) => onSelectImage(e, {image})} onTouchStart={(e) => onSelectImage(e, {image})} 
            className={`draggable ${image.selected ? "selected" : ""}`} style={{zIndex: image.zIndex, top: coordinatesY, left: coordinateX }}
            src={image.imgUrl} width={image.width} height={image.height}/>
           
        );
    } else if(image.type == "textbox"){
        return(
            <input placeholder="....."onClick={(e) => deleteImage(e, {image})} key={image.id} onMouseDown={(e) => onSelectImage(e, {image})} onTouchStart={(e) => onSelectImage(e, {image})} 
            className={`draggable ${image.selected ? "selected" : ""}`} style={{zIndex: image.zIndex, top: image.cordy, left: image.cordx}}
             width={image.width} height={image.height} type="text"></input>
        );
    }
 
}

const RenderDragableImages = (props) => {
    const activeImages = props.dragImages.map((image) => {
            return(
                <RenderImage deleteImage={props.deleteImage} onSelectImage={props.onSelectImage} image={image}/>  
        );
});
    return(
        <>
        {activeImages}
        </>
    );
    }


export default RenderDragableImages;