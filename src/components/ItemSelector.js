import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';


function RenderImageRow({images})
{
        const imageSet = images.map((image) => {
            return(
                <div className="col-6 col-md"> <CardImg height="200" width="100%" src={image}></CardImg></div>
            );
      });
    return(

        <Card className="p-2">
            <div className="row">
                {imageSet}
                
            </div>
        </Card>
    );

}

class Select extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            page: 1,
            testImages: [
                "https://picsum.photos/400/400?random=1",
                "https://picsum.photos/400/400?random=2",
                "https://picsum.photos/400/400?random=3",
                "https://picsum.photos/400/400?random=4",
                "https://picsum.photos/400/400?random=5"        
            ]
           

        };
    }

    render()
    {
        return(
            <div>
                <RenderImageRow images={this.state.testImages} />
            </div>
        );
    }
}

export default Select;