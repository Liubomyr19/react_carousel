(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(9),i=n.n(a),s=n(2),r=n(8),c=n(3),o=n(4),l=n(6),m=n(5),u=n(1),p=n.n(u),h=(n(14),n(15),n(0)),b=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={position:0},t.handlePrevButton=function(){var e=t.props,n=e.images,a=e.step,i=e.frameSize,s=t.state.position,r=n.length-i,c=s-a;0===s&&(c=r),c<0&&(c=0),t.setState({position:c})},t.handleNextButton=function(){var e=t.props,n=e.images,a=e.step,i=e.frameSize,s=t.state.position,r=n.length-i,c=s+a;s===r&&(c=0),c>r&&(c=r),t.setState({position:c})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,a=t.itemWidth,i=t.animationDuration,s=t.infinite,r=this.state.position,c=r<=0&&!s,o=r>=e.length-n&&!s,l=n*a;return Object(h.jsxs)("div",{className:"Carousel",style:{width:"".concat(l,"px"),transition:"".concat(i,"ms")},children:[Object(h.jsx)("ul",{className:"Carousel__list",children:e.map((function(t,e){return Object(h.jsx)("li",{children:Object(h.jsx)("img",{style:{transform:"translateX(".concat(-r*a,"px)"),transition:"transform ".concat(i,"ms ease-in-out")},src:t,alt:"".concat(e),width:a})},e)}))}),Object(h.jsxs)("div",{className:"Carousel__buttons",children:[Object(h.jsx)("button",{type:"button",className:"Carousel__button",disabled:c,onClick:this.handlePrevButton,children:"Prev"}),Object(h.jsx)("button",{type:"button",className:"Carousel__button",disabled:o,onClick:this.handleNextButton,children:"Next"})]})]})}}]),n}(p.a.Component),j=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.setInput=function(e){var n=e.target,a=n.value,i=n.name,c=n.checked,o=n.type;t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},i,"checkbox"===o?c:+a))}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,a=t.frameSize,i=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h1",{children:["Carousel with ",e.length," images"]}),Object(h.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(h.jsxs)("form",{action:"/",children:[Object(h.jsxs)("label",{className:"form__label",htmlFor:"itemId",children:["Item width",Object(h.jsx)("input",{type:"number",className:"form__input",name:"itemWidth",id:"itemId",min:130,max:260,value:i,onChange:this.setInput})]}),Object(h.jsxs)("label",{className:"form__label",htmlFor:"frameId",children:["Frame Size",Object(h.jsx)("input",{type:"number",className:"form__input",name:"frameSize",id:"fromeId",min:1,max:e.length,step:1,value:a,onChange:this.setInput})]}),Object(h.jsxs)("label",{className:"form__label",htmlFor:"stepId",children:["Step",Object(h.jsx)("input",{type:"number",className:"form__input",name:"step",id:"stepId",min:1,max:e.length,step:1,value:n,onChange:this.setInput})]}),Object(h.jsxs)("label",{className:"form__label",children:["Animation Duration",Object(h.jsx)("input",{type:"number",className:"form__input",name:"animationDuration",id:"animationDurationId",min:500,max:3e3,step:500,value:s,onChange:this.setInput})]}),Object(h.jsxs)("label",{className:"form__label",children:["Infinite",Object(h.jsx)("input",{type:"checkbox",className:"form__input",name:"infinite",id:"infiniteId",onChange:this.setInput})]})]}),Object(h.jsx)(b,{images:e,itemWidth:i,frameSize:a,step:n,animationDuration:s,infinite:r})]})}}]),n}(p.a.Component),d=j;i.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.99210969.chunk.js.map