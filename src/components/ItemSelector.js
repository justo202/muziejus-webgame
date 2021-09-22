import React, { Component } from 'react';
import { Card, CardImg, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'




const RenderLeftArrow = ({ClickFunction, page}) =>
{
    if(page > 0)
        return(

            <div className="col-2 d-flex justify-content-center align-items-center"  >
                <button onClick={() => ClickFunction()} className="unstyled"><FontAwesomeIcon icon={faArrowLeft} className="active arrow" /> </button>
            </div>   
        );
    else
        return(

            <div className="col-2 d-flex justify-content-center align-items-center"  >
                <button className="unstyled"><FontAwesomeIcon icon={faArrowLeft} className="arrow" /> </button>
            </div>   
        );

}
const RenderRightArrow = ({ClickFunction, page}) =>
{
    if(page < 2)
        return(

            <div className="col-2 d-flex justify-content-center align-items-center"  >
                <button onClick={() => ClickFunction()} className="unstyled"><FontAwesomeIcon  icon={faArrowRight} className="active arrow" /> </button>
            </div>   
        );
    else
        return(

            <div className="col-2 d-flex justify-content-center align-items-center"  >
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
                    ["https://picsum.photos/400/400?random=1", 0, true],
                    ["https://picsum.photos/400/400?random=2", 1, true],
                    ["https://picsum.photos/400/400?random=3", 2, true],
                    ["https://picsum.photos/400/400?random=4", 3, true],
                    ["https://picsum.photos/400/400?random=5", 4, true]        
                ],
                [
                    ["https://picsum.photos/400/400?random=6", 5, true],
                    ["https://picsum.photos/400/400?random=7", 6, true],
                    ["https://picsum.photos/400/400?random=8", 7, true],
                    ["https://picsum.photos/400/400?random=9", 8, true],
                    ["https://picsum.photos/400/400?random=10", 9, true]        
                ],
                [
                    ["https://picsum.photos/400/400?random=11", 10, true],
                    ["https://picsum.photos/400/400?random=12", 11, true],
                    ["https://picsum.photos/400/400?random=13", 12, true],
                    ["https://picsum.photos/400/400?random=14", 13, true],
                    ["https://picsum.photos/400/400?random=15", 14, true]        
                ]
            ]

        };
        this.RenderImageRow = this.RenderImageRow.bind(this);
        this.handleArrowDecrease = this.handleArrowDecrease.bind(this);
        this.handleArrowIncrease = this.handleArrowIncrease.bind(this);
        this.imageClick = this.imageClick.bind(this);
    }

    imageClick =(event, {image}) => {
        
        console.log(event.clientY);
        //Make the button invoke a function with parameters in a parent, and it will contain the state of all curently placed objects, their coordinates/sizes/img urls.
        //var index = this.state.page[this.state.curPage].findIndex(stateImg => stateImg[1] === image[1]) finds index
        image[2] = false;
        this.props.onImageClick(image[0], 300, 300, event.clientX, event.clientY, image[1]);
       // let newImage = [ image[0], 300, 300];
       // <ImageDrag image={newImage} />
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