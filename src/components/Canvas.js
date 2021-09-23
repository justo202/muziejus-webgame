import React from "react";
import DragableImages from './imageDrag';
const RenderCanvas= (props) =>
{

    return(
        <>
        
        
        <div id="canvas-container">
        <DragableImages onSelectImage={props.onSelectImage} dragImages={props.dragImage}/>

        </div>
        </>

    );
}

export default RenderCanvas;