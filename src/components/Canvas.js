import React from "react";
import DragableImages from './imageDrag';
const RenderCanvas= (props) =>
{

    return(
        <>
        
        
        <div onClick={props.createNewWord} id="canvas-container">
        <DragableImages deleteImage={props.deleteImage} onSelectImage={props.onSelectImage} dragImages={props.dragImage}/>

        </div>
        </>

    );
}

export default RenderCanvas;