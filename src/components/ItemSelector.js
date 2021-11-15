import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faFolder } from '@fortawesome/free-solid-svg-icons'




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
            page: [
                [
                    ["./assets/fonai/fonas_aikštė su fontanu.jpg", 42, true],
                    ["./assets/fonai/fonas_kazimiero tapetas raudonas.jpg", 43, true],
                    ["./assets/fonai/fonas_kazimiero tapetas.jpg", 44, true],
                    ["./assets/fonai/fonas_kluatras.png", 45, true],
                    ["./assets/fonai/fonas_medis su namukais.jpg", 46, true],
                    ["./assets/fonai/fonas_nusitrynęs.png", 47, true],
                    ["./assets/fonai/fonas_pagrindinis.jpg", 48, true],
                    ["./assets/fonai/fonas_plytelės.jpg", 49, true],
                    ["./assets/fonai/fonas_raudonas smulkus.png", 50, true],
                    ["./assets/fonai/fonas_skliautai sulygiuoti.png", 51, true],
                    ["./assets/fonai/fonas_skliautai.jpg", 52, true],
                    ["./assets/fonai/fonas_žalias smulkus.png", 53, true],


                ],
                [
                    ["./assets/detalės-architektūros/detalės_akantas.png", 0, true, "details"],
                    ["./assets/detalės-architektūros/detalės_dorėninė kolona.png", 1, true, "details"],
                    ["./assets/detalės-architektūros/detalės_durys atidarytos.png", 2, true, "details"],
                    ["./assets/detalės-architektūros/detalės_durys puošnios.png", 3, true, "details"],
                    ["./assets/detalės-architektūros/detalės_durys.png", 4, true, "details"],
                    ["./assets/detalės-architektūros/detalės_freska.png", 5, true, "details"],
                    ["./assets/detalės-architektūros/detalės_jonėninė kolona.png", 6, true, "details"],
                    ["./assets/detalės-architektūros/detalės_kolona.png", 7, true, "details"],
                    ["./assets/detalės-architektūros/detalės_korintinė kolona.png", 8, true, "details"],
                    ["./assets/detalės-architektūros/detalės_kryžius.png", 9, true, "details"],
                    ["./assets/detalės-architektūros/detalės_langas.png", 10, true, "details"],
                    ["./assets/detalės-architektūros/detalės_rankos.png", 11, true, "details"],
                    ["./assets/detalės-architektūros/detalės_relikvijorius.png",12, true, "details"],
                    ["./assets/detalės-architektūros/detalės_rūta.png", 13, true, "details"],
                    ["./assets/detalės-architektūros/detalės_skrynia.png", 14, true, "details"],
                    ["./assets/detalės-architektūros/detalės_taurė.png", 15, true, "details"],
                    ["./assets/detalės-architektūros/detalės_vargonai.png", 16, true, "details"],
                    ["./assets/detalės-architektūros/detalės_žvakė su staliuku.png", 17, true, "details"],
                    ["./assets/detalės-architektūros/detalės_žvakė.png", 18, true, "details"],
                    ["./assets/detalės-architektūros/krumas.png", 19, true, "details"]

                ],
                [
                    ["./assets/fasadai/fasadai_kripta.png", 20, true, "backgrounds"],
                    ["./assets/fasadai/fasadai_nebaigta bažnyčia.png", 21, true, "backgrounds"],
                    ["./assets/fasadai/fasadas_antkapinis paminklas_1000 px.png", 22, true, "backgrounds"],
                    ["./assets/fasadai/fasadas_itališka koplyčia_1500 px.png", 23, true, "backgrounds"],
                    ["./assets/fasadai/fasadas_katedros šešėlis.png", 24, true, "backgrounds"],
                    ["./assets/fasadai/fasadas_mykolo png_2000 px.png", 25, true, "backgrounds"]
                  
                          
                ],
                [
                    ["./assets/personažai/Animacija - vitruvijus rate 1500 px.png", 26, true, "actors"],
                    ["./assets/personažai/bpm bona su knygom.png", 27, true, "actors"],
                    ["./assets/personažai/personažai_bernardas.png", 28, true, "actors"],
                    ["./assets/personažai/personažai_bona_800 px.png", 29, true, "actors"],
                    ["./assets/personažai/personažai_darbininkas.png", 30, true, "actors"],
                    ["./assets/personažai/personažai_didikas1.png", 31, true, "actors"],
                    ["./assets/personažai/personažai_didikas2.png", 32, true, "actors"],
                    ["./assets/personažai/personažai_mona lisa.png", 33, true, "actors"], 
                    ["./assets/personažai/personažai_mykolas mojuoja.png", 34, true, "actors"],
                    ["./assets/personažai/personažai_mykolas sėdi.png", 35, true, "actors"],
                    ["./assets/personažai/personažai_renesanso žmogus.png", 36, true, "actors"] ,  
                    ["./assets/personažai/personažai_sapiega rate.png", 37, true, "actors"],   
                    ["./assets/personažai/personažai_sapiega.png", 38, true, "actors"],  
                    ["./assets/personažai/personažai_šešėliai.png", 39, true, "actors"],  
                    ["./assets/personažai/personažai_valstiečiai.png", 40, true, "actors"],   
                    ["./assets/personažai/personažai_vienuolės.png", 41, true, "actors"], 
                              
                ]
            ]

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
                        <div className="images m-1"> <img key={image[1]} onClick={(e) => this.imageClick(e, {image})} style={{maxWidth: "100%", maxHeight: "100%"}} src={image[0]}></img></div> 
                      ); 
                } else if(image[2]) {

                    return(
                        
                        //  <div className="images m-1"> <img key={image[1]} onClick={(e) => this.imageClick(e, {image})}height="100%" width="100%" src={image[0]}></img></div> 
                        <div className="images m-1"> <img key={image[1]} onClick={() => this.props.changeCanvasBackground(image[0])} style={{maxWidth: "100%", maxHeight: "100%"}} src={image[0]}></img></div> 
                      ); 
                }
    
          })];
        }
        else {
           
            imageSet = [
                <div onClick={() => this.viewFolder(0)}className="images folders m-1"><FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span   className="p-0">Fonai</span></div> ,
                <div onClick={() => this.viewFolder(1)}className="images folders m-1"> <FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span  className="p-0">Architektūros detalės</span></div> ,
                <div onClick={() => this.viewFolder(2)}className="images folders m-1"> <FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span  className="p-0">Fasadai</span></div> ,
                <div onClick={() => this.viewFolder(3)}className="images folders m-1"> <FontAwesomeIcon  style={{width: "100%", height: "85%"}}icon= {faFolder} /><span  className="p-0">Personažai</span></div>

            ];


        }
   
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