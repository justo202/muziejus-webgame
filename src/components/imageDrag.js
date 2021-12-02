import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch} from '@fortawesome/free-solid-svg-icons'

//renders the image selected
const RenderImage = ({deleteImage, onSelectImage, image}) => {
    
    var coordinateX=image.cordx;
   
    var coordinatesY=image.cordy-image.height/2;
    if(image.type == "image")
    {
        return(
            <div key={image.id} width={image.width} height={image.height} className={`draggable ${image.selected ? "selected" : ""}`} style={{zIndex: image.zIndex, top: coordinatesY, left: coordinateX }} >
            <img onClick={(e) => deleteImage(e, {image})} onMouseDown={(e) => onSelectImage(e, {image})} onTouchStart={(e) => onSelectImage(e, {image})} 
            src={image.imgUrl} width={"100%"} height={"100%"}/>
            {image.selected ? <FontAwesomeIcon className="rotation-handle" icon={faCircleNotch}/> : <> </>}
            </div>
        );
    } else if(image.type == "textbox"){
        return(
            <div onMouseDown={(e) => onSelectImage(e, {image})} onTouchStart={(e) => onSelectImage(e, {image})} width={image.width}  className={`draggable txt ${image.selected ? "selected" : ""}`} style={{zIndex: image.zIndex, top: image.cordy, left: image.cordx}}>
            <input className="inputText"style={{fontSize: image.textSize}}placeholder="....."onClick={(e) => deleteImage(e, {image})} key={image.id}  
            type="textbox"></input>
               {image.selected ? <FontAwesomeIcon className="rotation-handle" icon={faCircleNotch}/> : <> </>}
            </div>
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