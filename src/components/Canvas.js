import React, { Component } from "react";
import DragableImages from './imageDrag';


class RenderCanvas extends Component {
    constructor(props){
        super(props)
        this.state={
            backgroundImage: ""
        }
    }
    changeBackground(backgroundURL){
        console.log(backgroundURL);
        this.setState({
           backgroundImage: backgroundURL
        })
    }

    render() {
        console.log("render!");
        return (
            <>
            <div  style={{backgroundImage: `url("${this.state.backgroundImage}")`, backgroundSize: "cover",backgroundRepeat: "no-repeat"}} onClick={this.props.createNewWord} id="canvas-container">
            <DragableImages deleteImage={this.props.deleteImage} onSelectImage={this.props.onSelectImage} dragImages={this.props.dragImage}/>
            </div>
            </>
        );
    }
}


export default RenderCanvas;