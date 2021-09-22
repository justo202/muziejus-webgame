import React from "react";



const RenderImage = ({image}) => {
    
    var coordinateX=image.cordx-image.width/2;
    var coordinatesY=image.cordy-image.height/2;


    return(
        <img className="draggable" style={{top: coordinatesY, left: coordinateX }}src={image.imgUrl} width={image.width} height={image.height}/>
    );


}

const RenderDragableImages = (props) => {
    
    console.log(props.dragImages)
    const activeImages = props.dragImages.map((image) => {
            return(
                <RenderImage image={image}/>  
        );
});
    return(
        <>
        {activeImages}
        </>
    );
    }

export default RenderDragableImages;