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
        return (
            <>
            <div  /*style={{backgroundImage: `url("${this.state.backgroundImage}")`}} */onClick={this.props.createNewWord} id="canvas-container"> 
            {(this.state.backgroundImage !== "") && <img className="canvas-img" src={this.state.backgroundImage}/>}
            <DragableImages deleteImage={this.props.deleteImage} onSelectImage={this.props.onSelectImage} dragImages={this.props.dragImage}/>
            </div>
            </>
        );
    }
}


export default RenderCanvas;