(this["webpackJsonpmuziejus-webgame"]=this["webpackJsonpmuziejus-webgame"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(14),r=a.n(i),o=(a(66),a(67),a(21)),c=a(15),l=a(16),d=a(18),u=a(17),g=a(13),h=a(55),p=a.n(h),j=a(104),b=a(105),m=a(106),f=a(113),k=a(115),x=a(107),O=a(114),v=a(108),y=a(109),w=a(56),_=a.n(w),I=a(2);var D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isDropDownOpen:!1,isModalOpen:!1,image:"",file:null},s.toggleDropDown=s.toggleDropDown.bind(Object(g.a)(s)),s.onDrop=s.onDrop.bind(Object(g.a)(s)),s.toggleModal=s.toggleModal.bind(Object(g.a)(s)),s.imageAdd=s.imageAdd.bind(Object(g.a)(s)),s}return Object(l.a)(a,[{key:"toggleDropDown",value:function(){this.setState({isDropDownOpen:!this.state.isDropDownOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"onDrop",value:function(e){e.length&&this.setState({file:new Blob(e,{type:"image/png"})})}},{key:"takeScreenshot",value:function(){var e=document.getElementById("canvas-container");null!=e&&_()(e,{allowTaint:!1,windowWidth:e.width,windowHeight:e.height}).then((function(e){!function(e,t){var a=document.createElement("a");"string"===typeof a.download?(a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)):window.open(e)}(e.toDataURL(),"paveiksliukas.png")})),this.setState({isDropDownOpen:!this.state.isDropDownOpen})}},{key:"imageAdd",value:function(){null!==this.state.file?(this.props.addImage(URL.createObjectURL(this.state.file),"400px","400px",0,0,"image","actors"),this.setState({file:null}),this.toggleModal()):alert("Pasirinkite paveiksliuk\u0105!")}},{key:"render",value:function(){var e=this;return Object(I.jsxs)("div",{children:[Object(I.jsx)(j.a,{className:"unselect",dark:!0,children:Object(I.jsx)("div",{className:"container",children:Object(I.jsx)(b.a,{className:"ml-auto",children:Object(I.jsxs)(m.a,{isOpen:this.state.isDropDownOpen,toggle:this.toggleDropDown,size:"lg",children:[Object(I.jsx)(f.a,{caret:!0,id:"drop-custom",children:"..."}),Object(I.jsxs)(k.a,{style:{zIndex:"9999999999"},right:!0,children:[Object(I.jsx)(x.a,{header:!0,children:"Pasirinkimai"}),Object(I.jsx)(x.a,{onClick:function(){return e.takeScreenshot()},children:"parsi\u0173sk nuotrauk\u0105"}),Object(I.jsx)(x.a,{onClick:function(){return e.toggleModal()},children:"\u012ekelti savo nuotrauk\u0105"})]})]})})})}),Object(I.jsxs)(O.a,{zIndex:"9999999",isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(I.jsx)(v.a,{toggle:this.toggleModal,children:"Pasirinkite paveiksliuk\u0105"}),Object(I.jsx)(p.a,{withIcon:!0,withPreview:!0,buttonText:"Choose images",onChange:this.onDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880,singleImage:!0}),Object(I.jsx)(y.a,{children:Object(I.jsx)("button",{onClick:this.imageAdd,className:"tool-btn p-1",children:"Ikelti paveiksliuk\u0105"})})]})]})}}]),a}(s.Component),S=a(11),C=a(12),N=[[["./assets/fonai/fonas_aik\u0161t\u0117 su fontanu.jpg",42,!0,"./assets/fonai_low/fonas_aik\u0161t\u0117 su fontanu.jpg"],["./assets/fonai/fonas_kazimiero tapetas raudonas.jpg",43,!0,"./assets/fonai_low/fonas_kazimiero tapetas raudonas.jpg"],["./assets/fonai/fonas_kazimiero tapetas.jpg",44,!0,"./assets/fonai_low/fonas_kazimiero tapetas.jpg"],["./assets/fonai/fonas_kluatras.png",45,!0,"./assets/fonai_low/fonas_kluatras.png"],["./assets/fonai/fonas_medis su namukais.jpg",46,!0,"./assets/fonai_low/fonas_medis su namukais.jpg"],["./assets/fonai/fonas_nusitryn\u0119s.png",47,!0,"./assets/fonai_low/fonas_nusitryn\u0119s.png"],["./assets/fonai/fonas_pagrindinis.jpg",48,!0,"./assets/fonai_low/fonas_pagrindinis.jpg"],["./assets/fonai/fonas_plytel\u0117s.jpg",49,!0,"./assets/fonai_low/fonas_plytel\u0117s.jpg"],["./assets/fonai/fonas_raudonas smulkus.png",50,!0,"./assets/fonai_low/fonas_raudonas smulkus.png"],["./assets/fonai/fonas_skliautai sulygiuoti.png",51,!0,"./assets/fonai_low/fonas_skliautai sulygiuoti.png"],["./assets/fonai/fonas_skliautai.jpg",52,!0,"./assets/fonai_low/fonas_skliautai.jpg"],["./assets/fonai/fonas_\u017ealias smulkus.png",53,!0,"./assets/fonai_low/fonas_\u017ealias smulkus.png"]],[["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_akantas.png",0,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_dor\u0117nin\u0117 kolona.png",1,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys atidarytos.png",2,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys puo\u0161nios.png",3,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys.png",4,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_freska.png",5,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_jon\u0117nin\u0117 kolona.png",6,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_kolona.png",7,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_korintin\u0117 kolona.png",8,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_kry\u017eius.png",9,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_langas.png",10,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_rankos.png",11,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_relikvijorius.png",12,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_r\u016bta.png",13,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_skrynia.png",14,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_taur\u0117.png",15,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_vargonai.png",16,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_\u017evak\u0117 su staliuku.png",17,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_\u017evak\u0117.png",18,!0,"details"],["./assets/detal\u0117s-architekt\u016bros/krumas.png",19,!0,"details"]],[["./assets/fasadai/fasadai_kripta.png",20,!0,"backgrounds"],["./assets/fasadai/fasadai_nebaigta ba\u017eny\u010dia.png",21,!0,"backgrounds"],["./assets/fasadai/fasadas_antkapinis paminklas_1000 px.png",22,!0,"backgrounds"],["./assets/fasadai/fasadas_itali\u0161ka koply\u010dia_1500 px.png",23,!0,"backgrounds"],["./assets/fasadai/fasadas_katedros \u0161e\u0161\u0117lis.png",24,!0,"backgrounds"],["./assets/fasadai/fasadas_mykolo png_2000 px.png",25,!0,"backgrounds"]],[["./assets/persona\u017eai/Animacija - vitruvijus rate 1500 px.png",26,!0,"actors"],["./assets/persona\u017eai/bpm bona su knygom.png",27,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_bernardas.png",28,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_bona_800 px.png",29,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_darbininkas.png",30,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_didikas1.png",31,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_didikas2.png",32,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_mona lisa.png",33,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_mykolas mojuoja.png",34,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_mykolas s\u0117di.png",35,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_renesanso \u017emogus.png",36,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_sapiega rate.png",37,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_sapiega.png",38,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_\u0161e\u0161\u0117liai.png",39,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_valstie\u010diai.png",40,!0,"actors"],["./assets/persona\u017eai/persona\u017eai_vienuol\u0117s.png",41,!0,"actors"]]],B=function(e){return F.read(e.src),Object(I.jsx)("img",{onClick:function(){return e.onClick()},style:e.style,src:e.src})},F={__cache:{},read:function(e){var t=this;if(this.__cache[e]||(this.__cache[e]=new Promise((function(a){var s=new Image;s.onload=function(){t.__cache[e]=!0,a(t.__cache[e])},s.src=e})).then((function(a){t.__cache[e]=!0}))),this.__cache[e]instanceof Promise)throw this.__cache[e];return this.__cache[e]}},z=function(){return Object(I.jsxs)("div",{style:{fontSize:32,height:"100%"},className:"text-center pt-5",children:[Object(I.jsx)(S.a,{icon:C.g,className:"fa-spin fa-pulse spinner"}),Object(I.jsx)("p",{children:"Loading . . ."})]})},A=function(e){var t=e.ClickFunction;return e.page>0?Object(I.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(I.jsxs)("button",{onClick:function(){return t()},className:"unstyled",children:[Object(I.jsx)(S.a,{icon:C.a,className:"active arrow"})," "]})}):Object(I.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(I.jsxs)("button",{className:"unstyled",children:[Object(I.jsx)(S.a,{icon:C.a,className:"arrow"})," "]})})},P=function(e){var t=e.ClickFunction;return e.page<3?Object(I.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(I.jsxs)("button",{onClick:function(){return t()},className:"unstyled",children:[Object(I.jsx)(S.a,{icon:C.b,className:"active arrow"})," "]})}):Object(I.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(I.jsxs)("button",{className:"unstyled",children:[Object(I.jsx)(S.a,{icon:C.b,className:"arrow"})," "]})})},R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).imageClick=function(e,t){var a,n,i=t.image,r=document.getElementById("canvas-container").getBoundingClientRect();a=r.width/2,n=r.height/2,s.props.onImageClick(i[0],"auto",300,a,n,"image",i[3]),s.setState(s.state)},s.state={curPage:-1,page:N},s.RenderImageRow=s.RenderImageRow.bind(Object(g.a)(s)),s.handleArrowDecrease=s.handleArrowDecrease.bind(Object(g.a)(s)),s.handleArrowIncrease=s.handleArrowIncrease.bind(Object(g.a)(s)),s.imageClick=s.imageClick.bind(Object(g.a)(s)),s}return Object(l.a)(a,[{key:"handleArrowDecrease",value:function(){this.state.curPage>=0&&this.setState({curPage:this.state.curPage-1})}},{key:"handleArrowIncrease",value:function(){this.setState({curPage:this.state.curPage+1})}},{key:"viewFolder",value:function(e){this.setState({curPage:e})}},{key:"RenderImageRow",value:function(){var e=this,t=[Object(I.jsxs)("div",{onClick:function(){return e.viewFolder(-1)},className:"images folders m-1",children:[Object(I.jsx)(S.a,{style:{width:"100%",height:"85%"},icon:C.e}),Object(I.jsx)("span",{className:"p-0",children:"...."})]})];return t=-1!=this.state.curPage?[].concat(Object(o.a)(t),[this.state.page[this.state.curPage].map((function(t){return t[2]&&0!=e.state.curPage?Object(I.jsxs)("div",{className:"images m-1",children:[Object(I.jsx)(B,{onClick:function(a){return e.imageClick(a,{image:t})},style:{maxWidth:"100%",maxHeight:"100%"},src:t[0]})," "]}):t[2]?Object(I.jsx)("div",{className:"images m-1",children:Object(I.jsx)(B,{onClick:function(){return e.props.changeCanvasBackground(t[0])},style:{maxWidth:"100%",maxHeight:"100%"},src:t[3]})},t[1]):void 0}))]):[Object(I.jsxs)("div",{onClick:function(){return e.viewFolder(0)},className:"images folders m-1",children:[Object(I.jsx)(S.a,{style:{width:"100%",height:"85%"},icon:C.e}),Object(I.jsx)("span",{className:"p-0",children:"Fonai"})]}),Object(I.jsxs)("div",{onClick:function(){return e.viewFolder(1)},className:"images folders m-1",children:[" ",Object(I.jsx)(S.a,{style:{width:"100%",height:"85%"},icon:C.e}),Object(I.jsx)("span",{className:"p-0",children:"Architekt\u016bros detal\u0117s"})]}),Object(I.jsxs)("div",{onClick:function(){return e.viewFolder(2)},className:"images folders m-1",children:[" ",Object(I.jsx)(S.a,{style:{width:"100%",height:"85%"},icon:C.e}),Object(I.jsx)("span",{className:"p-0",children:"Fasadai"})]}),Object(I.jsxs)("div",{onClick:function(){return e.viewFolder(3)},className:"images folders m-1",children:[" ",Object(I.jsx)(S.a,{style:{width:"100%",height:"85%"},icon:C.e}),Object(I.jsx)("span",{className:"p-0",children:"Persona\u017eai"})]})],Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)(A,{ClickFunction:function(){return e.handleArrowDecrease()},page:this.state.curPage}),Object(I.jsx)("div",{className:"col-8",children:Object(I.jsx)("div",{className:"image-row",children:Object(I.jsx)(s.Suspense,{fallback:Object(I.jsx)(z,{}),children:t})})}),Object(I.jsx)(P,{ClickFunction:function(){return e.handleArrowIncrease()},page:this.state.curPage})]})}},{key:"render",value:function(){return Object(I.jsx)(I.Fragment,{children:this.RenderImageRow()})}}]),a}(s.Component),M=a(110),T=a(111),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isDropDownOpen:!1,delButtonPressed:!1,createButtonPressed:!1,fontSize:18,fontSelectActive:!1,textID:0},s.RenderSideBar=s.RenderSideBar.bind(Object(g.a)(s)),s.RenderMobileBar=s.RenderMobileBar.bind(Object(g.a)(s)),s.DelBtnClickFunction=s.DelBtnClickFunction.bind(Object(g.a)(s)),s.createBtnClickFunction=s.createBtnClickFunction.bind(Object(g.a)(s)),s.toggleDropDowns=s.toggleDropDowns.bind(Object(g.a)(s)),s.changeFontSize=s.changeFontSize.bind(Object(g.a)(s)),s}return Object(l.a)(a,[{key:"toggleDropDowns",value:function(){this.setState((function(e){return{isDropDownOpen:!e.isDropDownOpen}}))}},{key:"DelBtnClickFunction",value:function(){this.props.onDelButtonClick(),this.setState({delButtonPressed:!this.state.delButtonPressed})}},{key:"createBtnClickFunction",value:function(){this.props.createWordButtonToggle(),this.setState({createButtonPressed:!this.state.createButtonPressed})}},{key:"changeCreatebtn",value:function(){this.setState({createButtonPressed:!this.state.createButtonPressed})}},{key:"changeFontSize",value:function(e){this.setState({fontSize:e}),this.props.changeFont(this.state.textID,e)}},{key:"enableDropBtn",value:function(e,t,a){"textbox"===e?this.setState({fontSelectActive:!0,fontSize:t,textID:a}):this.setState({fontSelectActive:!1,fontSize:0,textID:0})}},{key:"RenderDropDownMenu",value:function(){var e=this;if(this.state.fontSelectActive){var t=0,a=[34,30,26,22,18,14,10].map((function(a){return t++,Object(I.jsx)(x.a,{onMouseDown:function(){return e.changeFontSize(a)},onTouchStart:function(){return e.changeFontSize(a)},children:a},t)}));return Object(I.jsxs)(m.a,{inNavbar:!0,isOpen:this.state.isDropDownOpen,toggle:this.toggleDropDowns,className:"p-0",size:"lg",children:[Object(I.jsx)(f.a,{style:{width:"100%"},caret:!0,id:"drop-custom",children:this.state.fontSize}),Object(I.jsx)(k.a,{style:{textAlign:"center",width:"100%",zIndex:"9999999999"},right:!0,children:a})]})}return Object(I.jsx)("button",{style:{backgroundColor:"gray",height:"45px",width:"100%"},id:"drop-custom"})}},{key:"RenderSideBar",value:function(){return Object(I.jsxs)("div",{className:"col-2 d-none d-md-block",children:[Object(I.jsx)(M.a,{children:Object(I.jsx)("button",{style:{backgroundColor:this.state.createButtonPressed?"#d40b1b":"#d1847b"},onClick:this.createBtnClickFunction,className:"tool-btn mb-2",children:Object(I.jsx)(S.a,{icon:C.f})})}),Object(I.jsx)(M.a,{children:Object(I.jsx)("button",{style:{backgroundColor:this.state.delButtonPressed?"#d40b1b":"#d1847b"},onClick:this.DelBtnClickFunction,className:"tool-btn mb-2",children:Object(I.jsx)(S.a,{icon:C.d})})}),Object(I.jsx)(M.a,{children:this.RenderDropDownMenu()})]})}},{key:"RenderMobileBar",value:function(){return Object(I.jsxs)("div",{className:"row d-md-none mb-2",children:[Object(I.jsx)(T.a,{children:this.RenderDropDownMenu()}),Object(I.jsx)(T.a,{children:Object(I.jsx)("button",{style:{backgroundColor:this.state.createButtonPressed?"#d40b1b":"#d1847b"},onClick:this.createBtnClickFunction,className:"tool-btn mb-2",children:Object(I.jsx)(S.a,{icon:C.f})})}),Object(I.jsxs)(T.a,{children:[Object(I.jsx)("button",{style:{backgroundColor:this.state.delButtonPressed?"#d40b1b":"#d1847b"},onClick:this.DelBtnClickFunction,className:"tool-btn mb-2",children:Object(I.jsx)(S.a,{icon:C.d})}),"  "]})]})}},{key:"render",value:function(){return Object(I.jsxs)(I.Fragment,{children:[this.RenderSideBar(),this.RenderMobileBar()]})}}]),a}(s.Component),E=a(112),Z=function(e){var t=e.deleteImage,a=e.onSelectImage,s=e.image,n=s.cordx,i=s.cordy-s.height/2;return"image"==s.type?Object(I.jsxs)("div",{width:s.width,height:s.height,className:"draggable ".concat(s.selected?"selected":""),style:{zIndex:s.zIndex,top:i,left:n},children:[Object(I.jsx)("img",{onClick:function(e){return t(e,{image:s})},onMouseDown:function(e){return a(e,{image:s})},onTouchStart:function(e){return a(e,{image:s})},src:s.imgUrl,width:"100%",height:"100%"}),s.selected?Object(I.jsx)(S.a,{className:"rotation-handle",icon:C.c}):Object(I.jsx)(I.Fragment,{children:" "})]},s.id):"textbox"==s.type?Object(I.jsxs)("div",{onMouseDown:function(e){return a(e,{image:s})},onTouchStart:function(e){return a(e,{image:s})},width:s.width,height:s.height,className:"draggable ".concat(s.selected?"selected":""),style:{zIndex:s.zIndex,top:s.cordy,left:s.cordx},children:[Object(I.jsx)("input",{className:"inputText",style:{fontSize:s.textSize},placeholder:".....",onClick:function(e){return t(e,{image:s})},type:"textbox"},s.id),s.selected?Object(I.jsx)(S.a,{className:"rotation-handle",icon:C.c}):Object(I.jsx)(I.Fragment,{children:" "})]}):void 0},L=function(e){var t=e.dragImages.map((function(t){return Object(I.jsx)(Z,{deleteImage:e.deleteImage,onSelectImage:e.onSelectImage,image:t})}));return Object(I.jsx)(I.Fragment,{children:t})},U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={backgroundImage:""},s}return Object(l.a)(a,[{key:"changeBackground",value:function(e){console.log(e),this.setState({backgroundImage:e})}},{key:"render",value:function(){return console.log("render!"),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{style:{backgroundImage:'url("'.concat(this.state.backgroundImage,'")')},onClick:this.props.createNewWord,id:"canvas-container",children:Object(I.jsx)(L,{deleteImage:this.props.deleteImage,onSelectImage:this.props.onSelectImage,dragImages:this.props.dragImage})})})}}]),a}(s.Component),H=function(){return Object(I.jsx)("div",{className:"footer unselect"})},X=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).createNewArray=function(e){var t=[].concat(Object(o.a)(s.state.dragImage),[e]);return null!=s.state.selectedID&&(t.find((function(e){return e.id===s.state.selectedID})).selected=!1),t},s.changeFontSize=function(e,t){var a=Object(o.a)(s.state.dragImage);a.find((function(t){return t.id===e})).textSize=t,s.setState({dragImage:a})},s.delButtonToggle=function(){var e=s.state.deleteOnSelect?"default":"alias";s.setState({deleteOnSelect:!s.state.deleteOnSelect,cursor:e})},s.createWordButtonToggle=function(){var e=s.state.createWord?"default":"alias";s.setState({createWord:!s.state.createWord,cursor:e})},s.getZindex=function(e){var t=s.state.selectedZindex;return"actors"===e?t+=1e4:"backgrounds"===e?t+=0:"details"===e&&(t+=5e3),t},s.onImageClick=function(e,t,a,n,i,r,o){var c=s.state.dragImage.length,l={type:r,imgUrl:e,width:t,height:a,cordx:n,cordy:i,id:c,zIndex:999999,selected:!0,textSize:18,imagePrio:o};l.zIndex=s.getZindex(l.imagePrio);var d=s.createNewArray(l);s.setState({dragImage:d,selectedID:c,selectedZindex:s.state.selectedZindex+1})},s.deleteImage=function(e,t){var a=t.image;if(s.state.deleteOnSelect){e.target.parentNode.remove();var n=Object(o.a)(s.state.dragImage);n.filter((function(e){return e!=={image:a}})),s.setState({dragImage:n,selectedID:null}),s.toolbtns.current.enableDropBtn("")}},s.createNewWord=function(e){var t=document.getElementById("canvas-container").getBoundingClientRect();if(s.state.createWord){var a,n;if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type){var i="undefined"===typeof e.originalEvent?e:e.originalEvent,r=i.touches[0]||i.changedTouches[0];a=r.pageX,n=r.pageY}else"mousedown"==e.type||"mouseup"==e.type||"mousemove"==e.type||"mouseover"==e.type||"mouseout"==e.type||"mouseenter"==e.type||e.type,a=e.clientX,n=e.clientY;var o=a-t.left,c=n-t.top;s.onImageClick("","auto","auto",o,c,"textbox","actors"),s.createWordButtonToggle(),s.toolbtns.current.changeCreatebtn()}},s.onSelectImage=function(e,t){var a=t.image;if(a.id!=s.state.selectedID){var n=Object(o.a)(s.state.dragImage);null!=s.state.selectedID&&(n.find((function(e){return e.id===s.state.selectedID})).selected=!1),n.find((function(e){return e.id===a.id})).selected=!0,n.find((function(e){return e.id===a.id})).zIndex=s.getZindex(a.imagePrio),s.setState({dragImage:n,selectedID:a.id,selectedZindex:s.state.selectedZindex+1}),s.toolbtns.current.enableDropBtn(a.type,a.textSize,a.id)}},s.CancelSelect=function(e){var t=e.target.nodeName;if(null!=s.state.selectedID&&"IMG"!=t&&"INPUT"!=t){var a=Object(o.a)(s.state.dragImage);a.find((function(e){return e.id===s.state.selectedID})).selected=!1,s.setState({dragImage:a,selectedID:null})}},s.changeCanvasBackground=function(e){s.canvasRef.current.changeBackground(e)},s.state={dragImage:[],selectedID:null,deleteOnSelect:!1,createWord:!1,cursor:"default",selectedZindex:1},s.toolbtns=n.a.createRef(),s.canvasRef=n.a.createRef(),s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return window.onclick=function(t){return e.CancelSelect(t)},Object(I.jsxs)("div",{style:{cursor:this.state.cursor},children:[Object(I.jsx)(D,{addImage:this.onImageClick}),Object(I.jsxs)(E.a,{fluid:"lg unselect",children:[Object(I.jsx)("div",{className:"row mt-2 unselect",children:Object(I.jsx)(R,{changeCanvasBackground:this.changeCanvasBackground,onImageClick:this.onImageClick})}),Object(I.jsxs)("div",{className:"row mt-2",children:[Object(I.jsx)(W,{ref:this.toolbtns,changeFont:this.changeFontSize,createWordButtonToggle:this.createWordButtonToggle,onDelButtonClick:this.delButtonToggle}),Object(I.jsxs)("div",{className:"col-12 col-md-8",children:[" ",Object(I.jsx)(U,{ref:this.canvasRef,createNewWord:this.createNewWord,deleteImage:this.deleteImage,onSelectImage:this.onSelectImage,dragImage:this.state.dragImage})," "]})]})]}),Object(I.jsx)(H,{})]})}}]),a}(s.Component),Y=a(26),J=a.n(Y);function G(e){var t=e.target.parentElement,a=parseFloat(t.getAttribute("data-angle"))||0,s=parseFloat(t.getAttribute("data-center-x"))||0,n=parseFloat(t.getAttribute("data-center-y"))||0;return Math.atan2(n-e.clientY,s-e.clientX)-a}function q(e){var t=e.target,a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,s=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+a+"px, "+s+"px) rotate("+(t.getAttribute("data-angle")||0)+"rad)",t.setAttribute("data-x",a),t.setAttribute("data-y",s)}J()(".draggable").draggable({inertia:!1,modifiers:[J.a.modifiers.restrictRect({endOnly:!0})],autoScroll:!0,listeners:{move:q,end:function(e){}}}).resizable({edges:{left:!1,right:!0,bottom:!0,top:!1},listeners:{move:function(e){var t=e.target,a=parseFloat(t.getAttribute("data-x"))||0,s=parseFloat(t.getAttribute("data-y"))||0;t.getAttribute("data-angle");t.setAttribute("data-angle",0),t.style.width=e.rect.width+"px",t.style.height=e.rect.height+"px",a+=e.deltaRect.left,s+=e.deltaRect.top,t.style.transform="translate("+a+"px,"+s+"px) rotate(0rad)"}},modifiers:[J.a.modifiers.restrictEdges({}),J.a.modifiers.restrictSize({min:{width:10,height:10}})],inertia:!1}),J()(".rotation-handle").draggable({onstart:function(e){var t=e.target.parentElement,a=t.getBoundingClientRect();t.setAttribute("data-center-x",a.left+a.width/2),t.setAttribute("data-center-y",a.top+a.height/2),t.setAttribute("data-angle",G(e))},onmove:function(e){var t=e.target.parentElement,a=parseFloat(t.getAttribute("data-x"))||0,s=parseFloat(t.getAttribute("data-y"))||0,n=G(e);t.style.transform="translate("+a+"px, "+s+"px) rotate("+n+"rad)"},onend:function(e){e.target.parentElement.setAttribute("data-angle",G(e))}}),window.dragMoveListener=q;var K=function(){return Object(I.jsx)(X,{})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))},V=(a(100),a(61));r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(V.a,{children:Object(I.jsx)(K,{})})}),document.getElementById("root")),Q()},66:function(e,t,a){},67:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.d420a1ba.chunk.js.map