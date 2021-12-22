import React, { Component } from "react";
import DragableImages from './imageDrag';


class RenderCanvas extends Component {
    constructor(props){
        super(props)
        this.state={
            backgroundImage: "",
            canvasHeight: "500px"
        }
    }
    changeBackground(backgroundURL){
        console.log(backgroundURL);
        this.setState({
           backgroundImage: backgroundURL
        })
    }

    render() {
        return (
            <>
            <div style={{height: this.state.canvasHeight}} /*style={{backgroundImage: `url("${this.state.backgroundImage}")`}} */onClick={this.props.createNewWord} className="resizable" id="canvas-container"> 
            {(this.state.backgroundImage !== "") && <img onLoad={() => {this.setState({canvasHeight: "auto"})}}className="canvas-img" src={this.state.backgroundImage}/>}
            <DragableImages deleteImage={this.props.deleteImage} onSelectImage={this.props.onSelectImage} dragImages={this.props.dragImage}/>
            </div>
            </>
        );
    }
}


export default RenderCanvas;