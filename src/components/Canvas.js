import React from "react";
import RenderDragableImages from './imageDrag';
const RenderCanvas= (props) =>
{

    return(
        <>
        
        
        <div id="canvas-container">
        <RenderDragableImages dragImages={props.dragImage}/>

        </div>
        </>

    );
}

export default RenderCanvas;