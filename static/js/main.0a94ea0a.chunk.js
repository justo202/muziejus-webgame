(this["webpackJsonpmuziejus-webgame"]=this["webpackJsonpmuziejus-webgame"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),i=a(14),r=a.n(i),o=(a(67),a(68),a(20)),c=a(15),l=a(16),d=a(18),g=a(17),u=a(13),h=a(55),b=a.n(h),j=a(105),p=a(106),m=a(107),f=a(108),x=a(117),O=a(118),k=a(109),v=a(116),I=a(110),y=a(111),w=a(56),_=a.n(w),D=a(1),S=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("img",{style:{height:"50px"},width:"100%",src:"./assets/logos/u\u017era\u0161as.png"})})};var z=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isDropDownOpen:!1,isModalOpen:!1,image:"",file:null},s.toggleDropDown=s.toggleDropDown.bind(Object(u.a)(s)),s.onDrop=s.onDrop.bind(Object(u.a)(s)),s.toggleModal=s.toggleModal.bind(Object(u.a)(s)),s.imageAdd=s.imageAdd.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"toggleDropDown",value:function(){this.state.isDropDownOpen||this.props.removeSelect(),this.setState({isDropDownOpen:!this.state.isDropDownOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"onDrop",value:function(e){e.length&&this.setState({file:new Blob(e,{type:"image/png"})})}},{key:"takeScreenshot",value:function(){var e=document.getElementById("canvas-container");null!=e&&_()(e,{allowTaint:!1,windowWidth:e.width,windowHeight:e.height}).then((function(e){!function(e,t){var a=document.createElement("a");"string"===typeof a.download?(a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)):window.open(e)}(e.toDataURL(),"paveiksliukas.png")})),this.setState({isDropDownOpen:!this.state.isDropDownOpen})}},{key:"imageAdd",value:function(){null!==this.state.file?(this.props.addImage(URL.createObjectURL(this.state.file),"400px","400px",0,0,"image","actors"),this.setState({file:null}),this.toggleModal()):alert("Pasirinkite paveiksliuk\u0105!")}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{children:[Object(D.jsx)(j.a,{className:"unselect",dark:!0,children:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)(p.a,{className:"mr-auto",href:"/",children:[Object(D.jsx)("img",{src:"./assets/logos/LOGO2.png",height:"60",width:"100",alt:"BP muziejus"}),"  "]}),Object(D.jsxs)(p.a,{className:"mr-auto",children:[" ",Object(D.jsx)(S,{})," "]}),Object(D.jsx)(m.a,{className:"ml-auto",children:Object(D.jsxs)(f.a,{isOpen:this.state.isDropDownOpen,toggle:this.toggleDropDown,size:"lg",children:[Object(D.jsx)(x.a,{id:"drop-custom",children:"..."}),Object(D.jsxs)(O.a,{style:{zIndex:"9999999999"},right:!0,children:[Object(D.jsx)(k.a,{onClick:function(){return e.takeScreenshot()},children:"ATSISI\u0172SK ATVIRUT\u0118"}),Object(D.jsx)(k.a,{onClick:function(){return e.toggleModal()},children:"\u012eKELK SAVO NUOTRAUK\u0104"})]})]})})]})}),Object(D.jsxs)(v.a,{zIndex:"9999999",isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(D.jsx)(I.a,{toggle:this.toggleModal,children:"Pasirinkite paveiksliuk\u0105"}),Object(D.jsx)(b.a,{withIcon:!0,withPreview:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880,singleImage:!0}),Object(D.jsx)(y.a,{children:Object(D.jsx)("button",{onClick:this.imageAdd,className:"tool-btn p-1",children:"Ikelti paveiksliuk\u0105"})})]})]})}}]),a}(s.Component),C=a(10),B=a(11),N=[[["./assets/fonai/fonas_aik\u0161t\u0117 su fontanu.jpg",42,!0,"./assets/fonai_low/fonas_aik\u0161t\u0117 su fontanu.jpg"],["./assets/fonai/fonas_kazimiero tapetas raudonas.jpg",43,!0,"./assets/fonai_low/fonas_kazimiero tapetas raudonas.jpg"],["./assets/fonai/fonas_kazimiero tapetas.jpg",44,!0,"./assets/fonai_low/fonas_kazimiero tapetas.jpg"],["./assets/fonai/fonas_kluatras.png",45,!0,"./assets/fonai_low/fonas_kluatras.png"],["./assets/fonai/fonas_medis su namukais.jpg",46,!0,"./assets/fonai_low/fonas_medis su namukais.jpg"],["./assets/fonai/fonas_nusitryn\u0119s.png",47,!0,"./assets/fonai_low/fonas_nusitryn\u0119s.png"],["./assets/fonai/fonas_pagrindinis.jpg",48,!0,"./assets/fonai_low/fonas_pagrindinis.jpg"],["./assets/fonai/fonas_plytel\u0117s.jpg",49,!0,"./assets/fonai_low/fonas_plytel\u0117s.jpg"],["./assets/fonai/fonas_raudonas smulkus.png",50,!0,"./assets/fonai_low/fonas_raudonas smulkus.png"],["./assets/fonai/fonas_skliautai sulygiuoti.png",51,!0,"./assets/fonai_low/fonas_skliautai sulygiuoti.png"],["./assets/fonai/fonas_skliautai.jpg",52,!0,"./assets/fonai_low/fonas_skliautai.jpg"],["./assets/fonai/fonas_\u017ealias smulkus.png",53,!0,"./assets/fonai_low/fonas_\u017ealias smulkus.png"]],[["./assets/fasadai/fasadai_kripta.png",20,!0,"backgrounds"],["./assets/fasadai/fasadai_nebaigta ba\u017eny\u010dia.png",21,!0,"backgrounds"],["./assets/fasadai/fasadas_antkapinis paminklas_1000 px.png",22,!0,"backgrounds"],["./assets/fasadai/fasadas_itali\u0161ka koply\u010dia_1500 px.png",23,!0,"backgrounds"],["./assets/fasadai/fasadas_katedros \u0161e\u0161\u0117lis.png",24,!0,"backgrounds"],["./assets/fasadai/fasadas_mykolo png_2000 px.png",25,!0,"backgrounds"]],[["./assets/fonai_low/fonas_pagrindinis.jpg",54,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_akantas.png",0,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_dor\u0117nin\u0117 kolona.png",1,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys atidarytos.png",2,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys puo\u0161nios.png",3,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys.png",4,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_freska.png",5,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_jon\u0117nin\u0117 kolona.png",6,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_kolona.png",7,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_korintin\u0117 kolona.png",8,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_kry\u017eius.png",9,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_langas.png",10,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_rankos.png",11,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_relikvijorius.png",12,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_r\u016bta.png",13,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_skrynia.png",14,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_taur\u0117.png",15,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_vargonai.png",16,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_\u017evak\u0117 su staliuku.png",17,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_\u017evak\u0117.png",18,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/krumas.png",19,!0,"details"]],[["./assets/persona\u017eai/Animacija - vitruvijus rate 1500 px.png",26,!0,"actors"],["./assets/persona\u017eai/bpm bona su knygom.png",27,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_bernardas.png",28,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_bona_800 px.png",29,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_darbininkas.png",30,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_didikas1.png",31,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_didikas2.png",32,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_mona lisa.png",33,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_mykolas mojuoja.png",34,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_mykolas s\u0117di.png",35,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_renesanso \u017emogus.png",36,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_sapiega rate.png",37,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_sapiega.png",38,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_\u0161e\u0161\u0117liai.png",39,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_valstie\u010diai.png",40,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_vienuol\u0117s.png",41,!0,"actors"]]],A=function(e){return F.read(e.src),Object(D.jsx)("img",{onClick:function(){return e.onClick()},style:e.style,src:e.src})},F={__cache:{},read:function(e){var t=this;if(this.__cache[e]||(this.__cache[e]=new Promise((function(a){var s=new Image;s.onload=function(){t.__cache[e]=!0,a(t.__cache[e])},s.src=e})).then((function(a){t.__cache[e]=!0}))),this.__cache[e]instanceof Promise)throw this.__cache[e];return this.__cache[e]}},R=function(){return Object(D.jsxs)("div",{style:{fontSize:32,height:"100%"},className:"text-center pt-5",children:[Object(D.jsx)(C.a,{icon:B.j,className:"fa-spin fa-pulse spinner"}),Object(D.jsx)("p",{children:"Loading . . ."})]})},P=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).imageClick=function(e,t){var a,n,i=t.image,r=document.getElementById("canvas-container").getBoundingClientRect();a=r.width/2,n=r.height/2,s.props.onImageClick(i[0],"auto",300,a,n,"image",i[3]),s.setState(s.state)},s.state={curPage:-1,page:N},s.RenderImageRow=s.RenderImageRow.bind(Object(u.a)(s)),s.handleArrowDecrease=s.handleArrowDecrease.bind(Object(u.a)(s)),s.handleArrowIncrease=s.handleArrowIncrease.bind(Object(u.a)(s)),s.imageClick=s.imageClick.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"handleArrowDecrease",value:function(){this.state.curPage>=0&&this.setState({curPage:this.state.curPage-1})}},{key:"handleArrowIncrease",value:function(){this.setState({curPage:this.state.curPage+1})}},{key:"viewFolder",value:function(e){this.setState({curPage:e})}},{key:"RenderImageRow",value:function(){var e=this,t=[Object(D.jsxs)("div",{onClick:function(){return e.viewFolder(-1)},className:"images folders m-1",children:[Object(D.jsx)(C.a,{style:{width:"100%",height:"85%"},icon:B.e}),Object(D.jsx)("span",{className:"p-0",children:"...."})]})];return t=-1!=this.state.curPage?[].concat(Object(o.a)(t),[this.state.page[this.state.curPage].map((function(t){return t[2]&&0!=e.state.curPage?Object(D.jsxs)("div",{className:"images m-1",children:[Object(D.jsx)(A,{onClick:function(a){return e.imageClick(a,{image:t})},style:{maxWidth:"100%",maxHeight:"100%"},src:t[0]})," "]}):t[2]?Object(D.jsx)("div",{className:"images m-1",children:Object(D.jsx)(A,{onClick:function(){return e.props.changeCanvasBackground(t[0])},style:{maxWidth:"100%",maxHeight:"100%"},src:t[3]})},t[1]):void 0}))]):[Object(D.jsxs)("div",{onClick:function(){return e.viewFolder(0)},className:"images folders col-sm-3 col-6",children:[Object(D.jsx)(C.a,{style:{width:"100%",height:"85%"},icon:B.e}),Object(D.jsx)("span",{className:"p-0",children:"FONAS"})]}),Object(D.jsxs)("div",{onClick:function(){return e.viewFolder(1)},className:"images folders col-sm-3 col-6",children:[" ",Object(D.jsx)(C.a,{style:{width:"100%",height:"85%"},icon:B.e}),Object(D.jsx)("span",{className:"p-0",children:"ARCHITEKT\u016aRA"})]}),Object(D.jsxs)("div",{onClick:function(){return e.viewFolder(2)},className:"images folders col-sm-3 col-6",children:[" ",Object(D.jsx)(C.a,{style:{width:"100%",height:"85%"},icon:B.e}),Object(D.jsx)("span",{className:"p-0",children:"DETAL\u0116S"})]}),Object(D.jsxs)("div",{onClick:function(){return e.viewFolder(3)},className:"images folders col-sm-3 col-6",children:[" ",Object(D.jsx)(C.a,{style:{width:"100%",height:"85%"},icon:B.e}),Object(D.jsx)("span",{className:"p-0",children:"PERSONA\u017dAI"})]})],Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"col-md-2"}),Object(D.jsx)("div",{className:"col-12 col-md-10",children:Object(D.jsx)("div",{className:"image-row p-2",children:Object(D.jsx)(s.Suspense,{fallback:Object(D.jsx)(R,{}),children:t})})})]})}},{key:"render",value:function(){return Object(D.jsx)(D.Fragment,{children:this.RenderImageRow()})}}]),a}(s.Component),T=a(57),M=a(112),E=a(113),W=a(114),Z=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isDropDownOpen:!1,delButtonPressed:!1,createButtonPressed:!1,fontSize:18,fontSelectActive:!1,textID:0,zIndex:0,zIndexBtnsDisabled:!0,zIndexID:0},s.RenderSideBar=s.RenderSideBar.bind(Object(u.a)(s)),s.RenderMobileBar=s.RenderMobileBar.bind(Object(u.a)(s)),s.DelBtnClickFunction=s.DelBtnClickFunction.bind(Object(u.a)(s)),s.createBtnClickFunction=s.createBtnClickFunction.bind(Object(u.a)(s)),s.toggleDropDowns=s.toggleDropDowns.bind(Object(u.a)(s)),s.changeFontSize=s.changeFontSize.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"toggleDropDowns",value:function(){this.setState((function(e){return{isDropDownOpen:!e.isDropDownOpen}}))}},{key:"DelBtnClickFunction",value:function(){this.props.onDelButtonClick(),this.setState({delButtonPressed:!this.state.delButtonPressed})}},{key:"createBtnClickFunction",value:function(){this.props.createWordButtonToggle(),this.setState({createButtonPressed:!this.state.createButtonPressed})}},{key:"changeCreatebtn",value:function(){this.setState({createButtonPressed:!this.state.createButtonPressed})}},{key:"changeFontSize",value:function(e){this.setState({fontSize:e}),this.props.changeFont(this.state.textID,e)}},{key:"changeItemsZIndex",value:function(e){this.setState({zIndex:e}),this.props.changezIndex(this.state.zIndexID,e)}},{key:"enableDropBtn",value:function(e,t,a){"textbox"===e?this.setState({fontSelectActive:!0,fontSize:t,textID:a}):this.setState({fontSelectActive:!1,fontSize:0,textID:0})}},{key:"enablezIndexButtons",value:function(e,t){this.setState({zIndex:e,zIndexBtnsDisabled:!1,zIndexID:t})}},{key:"disablezIndexButtons",value:function(){this.setState({zIndex:0,zIndexBtnsDisabled:!0,zIndexID:0})}},{key:"RenderDropDownMenu",value:function(){var e=this;if(this.state.fontSelectActive){var t=0,a=[48,40,34,26,18].map((function(a){return t++,Object(D.jsx)(k.a,{onMouseDown:function(){return e.changeFontSize(a)},onTouchStart:function(){return e.changeFontSize(a)},children:a},t)}));return Object(D.jsxs)(f.a,{style:{width:"50%"},inNavbar:!0,isOpen:this.state.isDropDownOpen,toggle:this.toggleDropDowns,className:"p-0",size:"lg",children:[Object(D.jsx)(x.a,{style:{borderRadius:"0",width:"100%"},caret:!0,id:"drop-custom",children:this.state.fontSize}),Object(D.jsx)(O.a,{style:{fontSize:"22px",textAlign:"center",width:"100%",zIndex:"9999999999"},right:!0,children:a})]})}return Object(D.jsx)(T.a,{disabled:!0,style:{width:"50%",backgroundColor:"#d1847b"},id:"drop-custom",children:Object(D.jsx)(C.a,{icon:B.f})})}},{key:"incrementZindex",value:function(e){var t=this.state.zIndex;e?t++:t--,this.changeItemsZIndex(t)}},{key:"RenderSideBar",value:function(){var e=this;return Object(D.jsxs)("div",{className:"col-2 d-none d-md-block",children:[Object(D.jsx)(M.a,{children:Object(D.jsx)(T.a,{size:"lg",style:{border:"none",backgroundColor:this.state.delButtonPressed?"#d40b1b":"#d1847b"},onClick:this.DelBtnClickFunction,className:"tool-btn mb-2",children:Object(D.jsx)(C.a,{icon:B.d})})}),Object(D.jsx)(M.a,{className:"mb-2",children:Object(D.jsxs)(E.a,{size:"lg",className:"p-0",children:[this.RenderDropDownMenu(),Object(D.jsx)(T.a,{style:{width:"50%",border:"none",backgroundColor:this.state.createButtonPressed?"#d40b1b":"#d1847b"},onClick:this.createBtnClickFunction,className:"tool-btn",children:Object(D.jsx)(C.a,{icon:B.h})})]})}),Object(D.jsx)(M.a,{children:Object(D.jsxs)(E.a,{size:"lg",className:"p-0",children:[Object(D.jsx)(T.a,{disabled:this.state.zIndexBtnsDisabled,style:{width:"33%",backgroundColor:"#a0635c",borderColor:"#d1847b"},id:"zText",children:this.state.zIndex}),Object(D.jsx)(T.a,{onClick:function(){return e.incrementZindex(!1)},disabled:this.state.zIndexBtnsDisabled,style:{width:"33%",backgroundColor:"#d1847b"},id:"drop-custom",children:Object(D.jsx)(C.a,{icon:B.g})}),Object(D.jsx)(T.a,{onClick:function(){return e.incrementZindex(!0)},disabled:this.state.zIndexBtnsDisabled,style:{width:"33%",backgroundColor:"#d1847b"},id:"drop-custom",children:Object(D.jsx)(C.a,{icon:B.i})})]})})]})}},{key:"RenderMobileBar",value:function(){var e=this;return Object(D.jsxs)("div",{className:"row d-md-none mb-2",children:[Object(D.jsx)(W.a,{children:Object(D.jsxs)(E.a,{style:{width:"100%"},size:"lg",className:"p-0",children:[Object(D.jsx)(T.a,{disabled:this.state.zIndexBtnsDisabled,style:{width:"33%",backgroundColor:"#a0635c",borderColor:"#d1847b"},id:"zText",children:this.state.zIndex}),Object(D.jsx)(T.a,{onClick:function(){return e.incrementZindex(!1)},disabled:this.state.zIndexBtnsDisabled,style:{width:"33%",backgroundColor:"#d1847b"},id:"drop-custom",children:Object(D.jsx)(C.a,{icon:B.g})}),Object(D.jsx)(T.a,{onClick:function(){return e.incrementZindex(!0)},disabled:this.state.zIndexBtnsDisabled,style:{width:"33%",backgroundColor:"#d1847b"},id:"drop-custom",children:Object(D.jsx)(C.a,{icon:B.i})})]})}),Object(D.jsx)(W.a,{children:Object(D.jsxs)(E.a,{style:{width:"100%"},size:"lg",className:"p-0",children:[this.RenderDropDownMenu(),Object(D.jsx)(T.a,{style:{width:"50%",border:"none",backgroundColor:this.state.createButtonPressed?"#d40b1b":"#d1847b"},onClick:this.createBtnClickFunction,className:"tool-btn",children:Object(D.jsx)(C.a,{icon:B.h})})]})}),Object(D.jsxs)(W.a,{children:[Object(D.jsx)(T.a,{style:{border:"none",backgroundColor:this.state.delButtonPressed?"#d40b1b":"#d1847b"},onClick:this.DelBtnClickFunction,className:"tool-btn mb-2",children:Object(D.jsx)(C.a,{icon:B.d})}),"  "]})]})}},{key:"render",value:function(){return Object(D.jsxs)(D.Fragment,{children:[this.RenderSideBar(),this.RenderMobileBar()]})}}]),a}(s.Component),L=a(115),U=function(e){var t=e.deleteImage,a=e.onSelectImage,s=e.image,n=s.cordx,i=s.cordy-s.height/2;return"image"==s.type?Object(D.jsxs)("div",{width:s.width,height:s.height,className:"draggable ".concat(s.selected?"selected":""),style:{zIndex:s.zIndex,top:i,left:n},children:[Object(D.jsx)("img",{onClick:function(e){return t(e,{image:s})},onMouseDown:function(e){return a(e,{image:s})},onTouchStart:function(e){return a(e,{image:s})},src:s.imgUrl,width:"100%",height:"100%"}),s.selected?Object(D.jsx)(C.a,{className:"rotation-handle",icon:B.c}):Object(D.jsx)(D.Fragment,{children:" "})]},s.id):"textbox"==s.type?Object(D.jsxs)("div",{onMouseDown:function(e){return a(e,{image:s})},onTouchStart:function(e){return a(e,{image:s})},width:s.width,className:"draggable txt ".concat(s.selected?"selected":""),style:{zIndex:s.zIndex,top:s.cordy,left:s.cordx},children:[Object(D.jsx)("p",{contentEditable:"true",className:"inputText m-0",style:{fontSize:s.textSize},onClick:function(e){return t(e,{image:s})}},s.id),s.selected?Object(D.jsx)(C.a,{className:"rotation-handle",icon:B.c}):Object(D.jsx)(D.Fragment,{children:" "})]}):void 0},H=function(e){var t=e.dragImages.map((function(t){return Object(D.jsx)(U,{deleteImage:e.deleteImage,onSelectImage:e.onSelectImage,image:t})}));return Object(D.jsx)(D.Fragment,{children:t})},K=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={backgroundImage:"",canvasHeight:"500px"},s}return Object(l.a)(a,[{key:"changeBackground",value:function(e){console.log(e),this.setState({backgroundImage:e})}},{key:"render",value:function(){var e=this;return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{style:{height:this.state.canvasHeight},onClick:this.props.createNewWord,id:"canvas-container",children:[""!==this.state.backgroundImage&&Object(D.jsx)("img",{onLoad:function(){e.setState({canvasHeight:"auto"})},className:"canvas-img",src:this.state.backgroundImage}),Object(D.jsx)(H,{deleteImage:this.props.deleteImage,onSelectImage:this.props.onSelectImage,dragImages:this.props.dragImage})]})})}}]),a}(s.Component),X=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(M.a,{className:"justify-content-center",children:Object(D.jsx)(W.a,{xs:6,children:Object(D.jsx)("h5",{style:{textAlign:"center"},children:"Projekt\u0105 finansuoja"})})}),Object(D.jsxs)(M.a,{height:"auto",className:"justify-content-center",children:[Object(D.jsx)(W.a,{md:3,children:Object(D.jsx)("img",{width:"100%",src:"./assets/logos/Arkivyskupijos logo_LT.png"})}),Object(D.jsx)(W.a,{md:3,children:Object(D.jsx)("img",{width:"100%",src:"./assets/logos/LTK_Logotipas.png"})})]})]})},Y=function(){return Object(D.jsx)("div",{className:"footer unselect",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)(X,{})})})},G=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).createNewArray=function(e){var t=[].concat(Object(o.a)(s.state.dragImage),[e]);return null!=s.state.selectedID&&(t.find((function(e){return e.id===s.state.selectedID})).selected=!1),t},s.changeFontSize=function(e,t){var a=Object(o.a)(s.state.dragImage);a.find((function(t){return t.id===e})).textSize=t,s.setState({dragImage:a})},s.changezIndex=function(e,t){var a=Object(o.a)(s.state.dragImage);a.find((function(t){return t.id===e})).zIndex=t,s.setState({dragImage:a,selectedZindex:s.state.selectedZindex>=t?s.state.selectedZindex:t})},s.delButtonToggle=function(){var e=s.state.deleteOnSelect?"default":"alias";s.setState({deleteOnSelect:!s.state.deleteOnSelect,cursor:e})},s.createWordButtonToggle=function(){var e=s.state.createWord?"default":"alias";s.setState({createWord:!s.state.createWord,cursor:e})},s.getZindex=function(e){return s.state.selectedZindex},s.onImageClick=function(e,t,a,n,i,r,o){var c=s.state.dragImage.length,l={type:r,imgUrl:e,width:t,height:a,cordx:n,cordy:i,id:c,zIndex:999999,selected:!0,textSize:18,imagePrio:o};l.zIndex=s.getZindex(l.imagePrio);var d=s.createNewArray(l);s.toolbtns.current.enablezIndexButtons(l.zIndex,l.id),s.setState({dragImage:d,selectedID:c,selectedZindex:s.state.selectedZindex+1})},s.deleteImage=function(e,t){var a=t.image;if(s.state.deleteOnSelect){e.target.parentNode.remove();var n=Object(o.a)(s.state.dragImage);n.filter((function(e){return e!=={image:a}})),s.setState({dragImage:n,selectedID:null}),s.delButtonToggle(),s.toolbtns.current.DelBtnClickFunction(),s.toolbtns.current.enableDropBtn(""),s.toolbtns.current.disablezIndexButtons()}},s.createNewWord=function(e){var t=document.getElementById("canvas-container").getBoundingClientRect();if(s.state.createWord){var a,n;if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type){var i="undefined"===typeof e.originalEvent?e:e.originalEvent,r=i.touches[0]||i.changedTouches[0];a=r.pageX,n=r.pageY}else"mousedown"==e.type||"mouseup"==e.type||"mousemove"==e.type||"mouseover"==e.type||"mouseout"==e.type||"mouseenter"==e.type||e.type,a=e.clientX,n=e.clientY;var o=a-t.left,c=n-t.top;s.onImageClick("","auto","auto",o,c,"textbox","actors"),s.createWordButtonToggle(),s.toolbtns.current.changeCreatebtn()}},s.onSelectImage=function(e,t){var a=t.image;if(a.id!=s.state.selectedID){var n=Object(o.a)(s.state.dragImage);null!=s.state.selectedID&&(n.find((function(e){return e.id===s.state.selectedID})).selected=!1),n.find((function(e){return e.id===a.id})).selected=!0,s.setState({dragImage:n,selectedID:a.id}),s.toolbtns.current.enableDropBtn(a.type,a.textSize,a.id),s.toolbtns.current.enablezIndexButtons(a.zIndex,a.id)}},s.CancelSelect=function(e){var t=e.target.nodeName;null!=s.state.selectedID&&"IMG"!=t&&"P"!=t&&"BUTTON"!=t&&s.removeSelect()},s.removeSelect=function(){if(null!=s.state.selectedID){var e=Object(o.a)(s.state.dragImage);e.find((function(e){return e.id===s.state.selectedID})).selected=!1,s.setState({dragImage:e,selectedID:null})}},s.changeCanvasBackground=function(e){s.canvasRef.current.changeBackground(e)},s.state={dragImage:[],selectedID:null,deleteOnSelect:!1,createWord:!1,cursor:"default",selectedZindex:1},s.toolbtns=n.a.createRef(),s.canvasRef=n.a.createRef(),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return window.onclick=function(t){return e.CancelSelect(t)},Object(D.jsxs)("div",{style:{cursor:this.state.cursor},children:[Object(D.jsx)(z,{removeSelect:this.removeSelect,addImage:this.onImageClick}),Object(D.jsxs)(L.a,{fluid:"lg unselect",children:[Object(D.jsx)("div",{className:"row mt-2 unselect",children:Object(D.jsx)(P,{changeCanvasBackground:this.changeCanvasBackground,onImageClick:this.onImageClick})}),Object(D.jsxs)("div",{className:"row mt-2",children:[Object(D.jsx)(Z,{ref:this.toolbtns,changezIndex:this.changezIndex,changeFont:this.changeFontSize,createWordButtonToggle:this.createWordButtonToggle,onDelButtonClick:this.delButtonToggle}),Object(D.jsxs)("div",{className:"col-12 col-md-10",style:{minHeight:"500px"},children:[" ",Object(D.jsx)(K,{ref:this.canvasRef,createNewWord:this.createNewWord,deleteImage:this.deleteImage,onSelectImage:this.onSelectImage,dragImage:this.state.dragImage})," "]})]})]}),Object(D.jsx)(Y,{})]})}}]),a}(s.Component),J=a(21),V=a.n(J);function q(e){var t=e.target.parentElement,a=parseFloat(t.getAttribute("data-angle"))||0,s=parseFloat(t.getAttribute("data-center-x"))||0,n=parseFloat(t.getAttribute("data-center-y"))||0;return Math.atan2(n-e.clientY,s-e.clientX)-a}function Q(e){var t=e.target,a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,s=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+a+"px, "+s+"px) rotate("+(t.getAttribute("data-angle")||0)+"rad)",t.setAttribute("data-x",a),t.setAttribute("data-y",s)}V()(".resizable").resizable({edges:{left:!1,right:!0,bottom:!0,top:!1},listeners:{move:function(e){var t=e.target,a=parseFloat(t.getAttribute("data-x"))||0,s=parseFloat(t.getAttribute("data-y"))||0;t.getAttribute("data-angle");t.setAttribute("data-angle",0),t.style.width=e.rect.width+"px",t.style.height=e.rect.height+"px",a+=e.deltaRect.left,s+=e.deltaRect.top,t.style.transform="translate("+a+"px,"+s+"px) rotate(0rad)"}},modifiers:[V.a.modifiers.restrictEdges({}),V.a.modifiers.restrictSize({min:{width:10,height:10}})],inertia:!1}),V()(".draggable").draggable({inertia:!1,modifiers:[V.a.modifiers.restrictRect({endOnly:!0})],autoScroll:!0,listeners:{move:Q,end:function(e){}}}).resizable({edges:{left:!1,right:!0,bottom:!0,top:!1},listeners:{move:function(e){var t=e.target,a=parseFloat(t.getAttribute("data-x"))||0,s=parseFloat(t.getAttribute("data-y"))||0;t.getAttribute("data-angle");t.setAttribute("data-angle",0),t.style.width=e.rect.width+"px",t.style.height=e.rect.height+"px",a+=e.deltaRect.left,s+=e.deltaRect.top,t.style.transform="translate("+a+"px,"+s+"px) rotate(0rad)"}},modifiers:[V.a.modifiers.restrictEdges({}),V.a.modifiers.restrictSize({min:{width:10,height:10}})],inertia:!1}),V()(".rotation-handle").draggable({onstart:function(e){var t=e.target.parentElement,a=t.getBoundingClientRect();t.setAttribute("data-center-x",a.left+a.width/2),t.setAttribute("data-center-y",a.top+a.height/2),t.setAttribute("data-angle",q(e))},onmove:function(e){var t=e.target.parentElement,a=parseFloat(t.getAttribute("data-x"))||0,s=parseFloat(t.getAttribute("data-y"))||0,n=q(e);t.style.transform="translate("+a+"px, "+s+"px) rotate("+n+"rad)"},onend:function(e){e.target.parentElement.setAttribute("data-angle",q(e))}}),window.dragMoveListener=Q,window.onresize=function(){document.getElementById("canvas-container").style.width="100%",document.getElementById("canvas-container").style.height="100%"};var $=function(){return Object(D.jsx)(G,{})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))},te=(a(101),a(62));r.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(te.a,{children:Object(D.jsx)($,{})})}),document.getElementById("root")),ee()},67:function(e,t,a){},68:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.0a94ea0a.chunk.js.map