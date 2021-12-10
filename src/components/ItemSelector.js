import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faFolder } from '@fortawesome/free-solid-svg-icons'
import { images } from '../data/images';
import { SuspenseImg } from './SuspenseImg';
import { Suspense } from 'react';
import { Loading } from './LoadingComponent';
const RenderLeftArrow = ({ClickFunction, page}) =>
{
    if(page > 0)
        return(

            <div className="col-2 d-flex justify-content-center align-items-center unselect"  >
                <button onClick={() => ClickFunction()} className="unstyled"><FontAwesomeIcon icon={faArrowLeft} className="active arrow" /> </button>
            </div>   
        );
    else
        return(

            <div className="col-2 d-flex justify-content-center align-items-center unselect"  >
                <button className="unstyled"><FontAwesomeIcon icon={faArrowLeft} className="arrow" /> </button>
            </div>   
        );

}
const RenderRightArrow = ({ClickFunction, page}) =>
{
    if(page < 3)
        return(

            <div className="col-2 d-flex justify-content-center align-items-center unselect"  >
                <button onClick={() => ClickFunction()} className="unstyled"><FontAwesomeIcon  icon={faArrowRight} className="active arrow" /> </button>
            </div>   
        );
    else
        return(

            <div className="col-2 d-flex justify-content-center align-items-center unselect"  >
                <button className="unstyled"><FontAwesomeIcon  icon={faArrowRight} className="arrow" /> </button>
            </div>   
        );
}
class Select extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            curPage: -1,
            page: images

        };
        this.RenderImageRow = this.RenderImageRow.bind(this);
        this.handleArrowDecrease = this.handleArrowDecrease.bind(this);
        this.handleArrowIncrease = this.handleArrowIncrease.bind(this);
        this.imageClick = this.imageClick.bind(this);
    }
    imageClick =(e, {image}) => {
        var canvas = document.getElementById('canvas-container');
        var bounds = canvas.getBoundingClientRect();
        var x, y;
        x = bounds.width/2;
        y = bounds.height/2;
     //   image[2] = false; //prevents the image from being displayed in the img bar
        this.props.onImageClick(image[0], "auto", 300, x, y, "image", image[3]);
        this.setState(this.state);
    }
    handleArrowDecrease()
    {
        if(this.state.curPage >= 0)
        {
            this.setState({
                curPage: this.state.curPage - 1
            })
        } 
    }
    handleArrowIncrease()
    {
        this.setState({
            curPage: this.state.curPage + 1
        })
    }
    viewFolder(number){
        this.setState({
            curPage: number
        })
    }
    RenderImageRow()
    {
        let imageSet = [ <div onClick={() => this.viewFolder(-1)} className="images folders m-1"><FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span   className="p-0">....</span></div> ,
    ];
        if(this.state.curPage != -1){
            imageSet = [...imageSet , this.state.page[this.state.curPage].map((image) => {
                if(image[2] && this.state.curPage != 0) {
                    return(
                        

                        //  <div className="images m-1"> <img key={image[1]} onClick={(e) => this.imageClick(e, {image})}height="100%" width="100%" src={image[0]}></img></div> 
                        <div className="images m-1"><SuspenseImg onClick={(e) => this.imageClick(e, {image})} style={{maxWidth: "100%", maxHeight: "100%"}} src={image[0]}/> </div> 
                      ); 
                } else if(image[2]) {

                    return(
                       
                        //  <div className="images m-1"> <img key={image[1]} onClick={(e) => this.imageClick(e, {image})}height="100%" width="100%" src={image[0]}></img></div> 
                        <div key={image[1]} className="images m-1">
                            
                            <SuspenseImg onClick={() => this.props.changeCanvasBackground(image[0])} style={{maxWidth: "100%", maxHeight: "100%"}} src={image[3]}/>
                            
                             </div> 
                      ); 
                }
    
          })];
        }
        else {
           
            imageSet = [
                <div onClick={() => this.viewFolder(0)}className="images folders col-sm-3 col-6"><FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span   className="p-0">FONAS</span></div> ,
                <div onClick={() => this.viewFolder(1)}className="images folders col-sm-3 col-6"> <FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span  className="p-0">ARCHITEKTŪRA</span></div> ,
                <div onClick={() => this.viewFolder(2)}className="images folders col-sm-3 col-6" > <FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span  className="p-0">DETALĖS</span></div> ,
                <div onClick={() => this.viewFolder(3)}className="images folders col-sm-3 col-6"> <FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span  className="p-0">PERSONAŽAI</span></div>

            ];
        }
   
    return(
                <>
                    <div className="col-md-2"></div>
                   { /*<RenderLeftArrow ClickFunction={() => this.handleArrowDecrease()} page={this.state.curPage}/> */}
                        <div className="col-12 col-md-10">
                        <div className="image-row p-2">
                            
                        <Suspense fallback={<Loading/>}>
                        {imageSet}
                        </Suspense>
                        </div>
                        </div>
                        
                   {/* <RenderRightArrow ClickFunction={() => this.handleArrowIncrease()} page={this.state.curPage} /> */}
               </>
    );
}   
  
    render()
    {
        return(
            <>
  {this.RenderImageRow()}
           </>
              
           
        );
    }
}

export default Select;