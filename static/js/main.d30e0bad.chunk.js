(this["webpackJsonpmuziejus-webgame"]=this["webpackJsonpmuziejus-webgame"]||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(26),i=a.n(c),r=(a(59),a(60),a(28)),o=a(18),l=a(19),d=a(22),u=a(21),j=a(13),g=a(85),m=a(86),h=a(87),b=a(88),p=a(93),O=a(94),x=a(89),f=a(49),v=a.n(f),w=a(2);var y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isDropDownOpen:!1,image:""},n.toggleDropDown=n.toggleDropDown.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"toggleDropDown",value:function(){this.setState({isDropDownOpen:!this.state.isDropDownOpen})}},{key:"takeScreenshot",value:function(){var e=document.getElementById("canvas-container");null!=e&&v()(e,{allowTaint:!1,windowWidth:e.width,windowHeight:e.height}).then((function(e){!function(e,t){var a=document.createElement("a");"string"===typeof a.download?(a.href=e,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)):window.open(e)}(e.toDataURL(),"paveiksliukas.png")})),this.setState({isDropDownOpen:!this.state.isDropDownOpen})}},{key:"render",value:function(){var e=this;return Object(w.jsx)("div",{children:Object(w.jsx)(g.a,{className:"unselect",dark:!0,children:Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(m.a,{className:"mr-auto",href:"/",children:Object(w.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"logo"})}),Object(w.jsx)(h.a,{className:"ml-auto",children:Object(w.jsxs)(b.a,{isOpen:this.state.isDropDownOpen,toggle:this.toggleDropDown,size:"lg",children:[Object(w.jsx)(p.a,{caret:!0,id:"drop-custom",children:"..."}),Object(w.jsxs)(O.a,{right:!0,children:[Object(w.jsx)(x.a,{header:!0,children:"Pasirinkimai"}),Object(w.jsx)(x.a,{onClick:function(){return e.takeScreenshot()},children:"parsi\u0173sk nuotrauk\u0105"})]})]})})]})})})}}]),a}(n.Component),k=a(11),I=a(12),D=function(e){var t=e.ClickFunction;return e.page>0?Object(w.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(w.jsxs)("button",{onClick:function(){return t()},className:"unstyled",children:[Object(w.jsx)(k.a,{icon:I.a,className:"active arrow"})," "]})}):Object(w.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(w.jsxs)("button",{className:"unstyled",children:[Object(w.jsx)(k.a,{icon:I.a,className:"arrow"})," "]})})},N=function(e){var t=e.ClickFunction;return e.page<2?Object(w.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(w.jsxs)("button",{onClick:function(){return t()},className:"unstyled",children:[Object(w.jsx)(k.a,{icon:I.b,className:"active arrow"})," "]})}):Object(w.jsx)("div",{className:"col-2 d-flex justify-content-center align-items-center unselect",children:Object(w.jsxs)("button",{className:"unstyled",children:[Object(w.jsx)(k.a,{icon:I.b,className:"arrow"})," "]})})},C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).imageClick=function(e,t){var a,s,c=t.image;if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type){var i="undefined"===typeof e.originalEvent?e:e.originalEvent,r=i.touches[0]||i.changedTouches[0];a=r.pageX,s=r.pageY}else"mousedown"==e.type||"mouseup"==e.type||"mousemove"==e.type||"mouseover"==e.type||"mouseout"==e.type||"mouseenter"==e.type||e.type,a=e.clientX,s=e.clientY;c[2]=!1,n.props.onImageClick(c[0],300,300,a,s,c[1]),n.setState(n.state)},n.state={curPage:0,page:[[["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_akantas.png",0,!0],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_dor\u0117nin\u0117 kolona.png",1,!0],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys atidarytos.png",2,!0],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys puo\u0161nios.png",3,!0],["./assets/detal\u0117s-architekt\u016bros/detal\u0117s_durys.png",4,!0]],[["./assets/fasadai/fasadas_antkapinis paminklas.png",5,!0],["./assets/fasadai/fasadas_itali\u0161ka koply\u010dia.png",6,!0],["./assets/fasadai/fasadas_mykolo png.png",7,!0]],[["./assets/persona\u017eai/Animacija - vitruvijus rate.png",8,!0],["./assets/persona\u017eai/persona\u017eai_bona.png",9,!0],["./assets/persona\u017eai/persona\u017eai_darbininkas.png",10,!0],["./assets/persona\u017eai/persona\u017eai_mykolas mojuoja.png",11,!0],["./assets/persona\u017eai/persona\u017eai_mykolas s\u0117di.png",12,!0],["./assets/persona\u017eai/persona\u017eai_renesanso \u017emogus.png",13,!0],["./assets/persona\u017eai/persona\u017eai_sapiega.png",14,!0],["./assets/persona\u017eai/persona\u017eai_vienuol\u0117s.png",15,!0]]]},n.RenderImageRow=n.RenderImageRow.bind(Object(j.a)(n)),n.handleArrowDecrease=n.handleArrowDecrease.bind(Object(j.a)(n)),n.handleArrowIncrease=n.handleArrowIncrease.bind(Object(j.a)(n)),n.imageClick=n.imageClick.bind(Object(j.a)(n)),n}return Object(l.a)(a,[{key:"handleArrowDecrease",value:function(){this.state.curPage>=0&&this.setState({curPage:this.state.curPage-1})}},{key:"handleArrowIncrease",value:function(){this.setState({curPage:this.state.curPage+1})}},{key:"RenderImageRow",value:function(){var e=this,t=this.state.page[this.state.curPage].map((function(t){if(t[2])return Object(w.jsxs)("div",{className:"images m-1",children:[" ",Object(w.jsx)("img",{onClick:function(a){return e.imageClick(a,{image:t})},height:"100%",width:"100%",src:t[0]},t[1])]})}));return Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)(D,{ClickFunction:function(){return e.handleArrowDecrease()},page:this.state.curPage}),Object(w.jsx)("div",{className:"col-8",children:Object(w.jsx)("div",{className:"image-row",children:t})}),Object(w.jsx)(N,{ClickFunction:function(){return e.handleArrowIncrease()},page:this.state.curPage})]})}},{key:"render",value:function(){return Object(w.jsx)("div",{children:this.RenderImageRow()})}}]),a}(n.Component),S=a(90),A=a(91),F=function(){return Object(w.jsxs)("div",{className:"unselect",children:[Object(w.jsxs)(S.a,{children:[" ",Object(w.jsx)("button",{className:"tool-btn mb-2",children:Object(w.jsx)(k.a,{icon:I.d})})]}),Object(w.jsx)(S.a,{children:Object(w.jsx)("button",{className:"tool-btn mb-2",children:Object(w.jsx)(k.a,{icon:I.e})})}),Object(w.jsx)(S.a,{children:Object(w.jsx)("button",{className:"tool-btn mb-2",children:Object(w.jsx)(k.a,{icon:I.c})})})]})},_=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(A.a,{children:[" ",Object(w.jsx)("button",{className:"tool-btn mb-2",children:Object(w.jsx)(k.a,{icon:I.d})})]}),Object(w.jsx)(A.a,{children:Object(w.jsx)("button",{className:"tool-btn mb-2",children:Object(w.jsx)(k.a,{icon:I.e})})}),Object(w.jsx)(A.a,{children:Object(w.jsx)("button",{className:"tool-btn mb-2",children:Object(w.jsx)(k.a,{icon:I.c})})})]})},P=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"row d-md-none mb-2",children:[" ",Object(w.jsx)(_,{})]}),Object(w.jsxs)("div",{className:"col-2 d-none d-md-block",children:[" ",Object(w.jsx)(F,{})]})]})},R=a(92),z=function(e){var t=e.onSelectImage,a=e.image,n=a.cordx-a.width/2,s=a.cordy-a.height/2;document.getElementById("canvas-container");return Object(w.jsx)("img",{onMouseDown:function(){return t({image:a})},onTouchStart:function(){return t({image:a})},className:"draggable ".concat(a.selected?"selected":""),style:{top:s,left:n},src:a.imgUrl,width:a.width,height:a.height},a.id)},E=function(e){var t=e.dragImages.map((function(t){return Object(w.jsx)(z,{onSelectImage:e.onSelectImage,image:t})}));return Object(w.jsx)(w.Fragment,{children:t})},M=function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{id:"canvas-container",children:Object(w.jsx)(E,{onSelectImage:e.onSelectImage,dragImages:e.dragImage})})})},T=function(){return Object(w.jsx)("div",{className:"footer unselect"})},B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).createNewArray=function(e){var t=[].concat(Object(r.a)(n.state.dragImage),[e]);return null!=n.state.selectedID&&(t.find((function(e){return e.id===n.state.selectedID})).selected=!1),t},n.onImageClick=function(e,t,a,s,c,i){var r={imgUrl:e,width:t,height:a,cordx:s,cordy:c,id:i,selected:!0},o=n.createNewArray(r);n.setState({dragImage:o,selectedID:i})},n.onSelectImage=function(e){var t=e.image,a=Object(r.a)(n.state.dragImage);null!=n.state.selectedID&&(a.find((function(e){return e.id===n.state.selectedID})).selected=!1),a.find((function(e){return e.id===t.id})).selected=!0,n.setState({dragImage:a,selectedID:t.id})},n.CancelSelect=function(e){var t=e.target.nodeName;if(null!=n.state.selectedID&&"IMG"!=t){var a=Object(r.a)(n.state.dragImage);a.find((function(e){return e.id===n.state.selectedID})).selected=!1,n.setState({dragImage:a,selectedID:null})}},n.state={dragImage:[],selectedID:null},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return window.onclick=function(t){return e.CancelSelect(t)},Object(w.jsxs)("div",{children:[Object(w.jsx)(y,{}),Object(w.jsxs)(R.a,{fluid:"lg unselect",children:[Object(w.jsx)("div",{className:"row mt-2 unselect",children:Object(w.jsx)(C,{onImageClick:this.onImageClick})}),Object(w.jsxs)("div",{className:"row mt-2",children:[Object(w.jsx)(P,{}),Object(w.jsxs)("div",{className:"col-12 col-md-10",children:[" ",Object(w.jsx)(M,{onSelectImage:this.onSelectImage,dragImage:this.state.dragImage})," "]})]})]}),Object(w.jsx)(T,{})]})}}]),a}(n.Component);var L=function(){return Object(w.jsx)(B,{})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))},J=(a(81),a(27)),X=a.n(J);function Y(e){var t=e.target;t.style.zIndex="9999";var a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,n=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+a+"px, "+n+"px)",t.setAttribute("data-x",a),t.setAttribute("data-y",n)}X()(".draggable").draggable({inertia:!1,modifiers:[],autoScroll:!0,listeners:{move:Y,end:function(e){e.target.style.zIndex="1"}}}).resizable({edges:{left:!0,right:!0,bottom:!0,top:!0},listeners:{move:function(e){var t=e.target,a=parseFloat(t.getAttribute("data-x"))||0,n=parseFloat(t.getAttribute("data-y"))||0;t.style.width=e.rect.width+"px",t.style.height=e.rect.height+"px",a+=e.deltaRect.left,n+=e.deltaRect.top,t.style.transform="translate("+a+"px,"+n+"px)",t.setAttribute("data-x",a),t.setAttribute("data-y",n),t.textContent=Math.round(e.rect.width)+"\xd7"+Math.round(e.rect.height)}},modifiers:[X.a.modifiers.restrictEdges({}),X.a.modifiers.restrictSize({min:{width:100,height:50}})],inertia:!1}),window.dragMoveListener=Y;var G=a(54);i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(G.a,{children:Object(w.jsx)(L,{})})}),document.getElementById("root")),U()}},[[84,1,2]]]);
//# sourceMappingURL=main.d30e0bad.chunk.js.map