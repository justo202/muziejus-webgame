import React, { Component } from 'react';
import { Card, CardImg, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'




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
    if(page < 2)
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
            curPage: 0,
            page: [
                [
                    ["./assets/detalės-architektūros/detalės_akantas.png", 0, true],
                    ["./assets/detalės-architektūros/detalės_dorėninė kolona.png", 1, true],
                    ["./assets/detalės-architektūros/detalės_durys atidarytos.png", 2, true],
                    ["./assets/detalės-architektūros/detalės_durys puošnios.png", 3, true],
                    ["./assets/detalės-architektūros/detalės_durys.png", 4, true]        
                ],
                [
                    ["./assets/fasadai/fasadas_antkapinis paminklas.png", 5, true],
                    ["./assets/fasadai/fasadas_itališka koplyčia.png", 6, true],
                    ["./assets/fasadai/fasadas_mykolo png.png", 7, true], 
                          
                ],
                [
                    ["./assets/personažai/Animacija - vitruvijus rate.png", 8, true],
                    ["./assets/personažai/personažai_bona.png", 9, true],
                    ["./assets/personažai/personažai_darbininkas.png", 10, true],
                    ["./assets/personažai/personažai_mykolas mojuoja.png", 11, true],
                    ["./assets/personažai/personažai_mykolas sėdi.png", 12, true],
                    ["./assets/personažai/personažai_renesanso žmogus.png", 13, true] ,  
                    ["./assets/personažai/personažai_sapiega.png", 14, true],   
                    ["./assets/personažai/personažai_vienuolės.png", 15, true], 
                              
                ]
            ]

        };
        this.RenderImageRow = this.RenderImageRow.bind(this);
        this.handleArrowDecrease = this.handleArrowDecrease.bind(this);
        this.handleArrowIncrease = this.handleArrowIncrease.bind(this);
        this.imageClick = this.imageClick.bind(this);
    }

    imageClick =(e, {image}) => {
        var x, y;
        if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
            var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            var touch = evt.touches[0] || evt.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
            x = e.clientX;
            y = e.clientY;
        }
        else{
            x=e.clientX;
            y=e.clientY;
        }

     //   image[2] = false; //prevents the image from being displayed in the img bar
        this.props.onImageClick(image[0], 300, 300, x, y, image[1]);
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
     RenderImageRow()
    {
    
        const imageSet = this.state.page[this.state.curPage].map((image) => {
            if(image[2])
                return(
                    
                    <div className="images m-1"> <img key={image[1]} onClick={(e) => this.imageClick(e, {image})}height="100%" width="100%" src={image[0]}></img></div>  
                );     
      });
    return(
                <div className="row">
                    <RenderLeftArrow ClickFunction={() => this.handleArrowDecrease()} page={this.state.curPage}/>
                    <div className="col-8">     
                        <div className="image-row">
                        {imageSet}
                        </div>
                        </div>
                   <RenderRightArrow ClickFunction={() => this.handleArrowIncrease()} page={this.state.curPage} />
                </div>
         
    );

}
    render()
    {
        return(
            <div>
                {this.RenderImageRow()}
            </div>
        );
    }
}

export default Select;