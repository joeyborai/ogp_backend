(this.webpackJsonpogp_web=this.webpackJsonpogp_web||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(15),s=c.n(i),r=(c(31),c(4)),o=c(5),j=c(7),l=c(6),O=(c(32),c(33),c(8)),u=c(9),b=c(0),m=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"navbar",className:"sticky",children:[Object(b.jsx)("img",{className:"top-left-logo",src:"OGPlogo3.png"}),Object(b.jsx)(O.a,{icon:u.b,className:"shopping-icon"})]})}}]),c}(a.a.Component),d=(c(39),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"missionStatement",children:[Object(b.jsxs)("div",{className:"missionText",children:[Object(b.jsx)("p",{children:"PETRICHOR IS A PALATABLE SENSORY EXPERIENCE THAT REPRESENTS A CONNECTION BETWEEN THE RICHNESS OF THE NATURAL ENVIRONMENT WE ARE GROUNDED BY, AND PRESENCE IN BODY, MIND, AND SPIRIT."}),Object(b.jsx)("p",{children:"THESE THREE IDEAS; ORGANIZE, GALVANIZE, AND PETRICHOR ARE THE MISSION AND CALL TO ACTION FOR UNITY AND INCLUSIVENESS BEHIND THE COMMUNITY THAT OGP IS."}),Object(b.jsx)("p",{children:"THE COMMUNITY EMPHASIZES ACKNOWLEDGEMENT, ADMIRATION, GRATITUDE, PASSION, MULTIFACETED CREATIVITY, AND CONNECTION TO OUR NATURAL ENVIRONMENT."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"catalogIndicator",children:"CATALOG"}),Object(b.jsx)("p",{className:"arrow down"})]})]})}}]),c}(a.a.Component)),h=c(16),N=(c(40),c(26)),E=(c(58),function(e){var t=null;return e.active&&(t=Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("div",{className:"modal-nav",children:Object(b.jsx)("button",{className:"modal-close",onClick:function(){e.closeItem()},children:Object(b.jsx)(O.a,{icon:u.c,className:"closing-icon"})})}),Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("img",{className:"modal-image",src:e.item.src}),Object(b.jsx)("p",{children:e.item.name}),Object(b.jsx)("p",{children:e.item.price})]})]})),t}),f=(c(59),function(e){var t=Object(n.useState)(!1),c=Object(N.a)(t,2),a=c[0],i=c[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(E,{item:e.item,active:a,closeItem:i}),Object(b.jsxs)("button",{className:"catalogItem",onClick:function(){return i(!a)},children:[Object(b.jsx)("img",{className:"catalog-pic",src:e.item.src}),Object(b.jsx)("p",{className:"catalog-item-name",children:e.item.name}),Object(b.jsx)("p",{className:"catalog-item-price",children:e.item.price})]})]})}),p=(c(60),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={list:[]},n}return Object(o.a)(c,[{key:"arrayBufferToBase64",value:function(e){var t="";return[].slice.call(new Uint8Array(e)).forEach((function(e){return t+=String.fromCharCode(e)})),window.btoa(t)}},{key:"componentDidMount",value:function(){var e=this;fetch("localhost:3000/catalog/").then((function(e){return e.json()})).then((function(t){for(var c=0;c<t.length;c++){var n=e.arrayBufferToBase64(t[c].image.data.data),a={name:t[c].name,price:t[c].price,src:"data:image/jpeg;base64,"+n};console.log([].concat(Object(h.a)(e.state.list),[a])),e.setState({list:[].concat(Object(h.a)(e.state.list),[a])})}}))}},{key:"render",value:function(){var e=this.state.list;console.log(e);var t=e.map((function(e){return Object(b.jsx)(f,{item:e})}));return Object(b.jsx)("div",{className:"catalog",children:t})}}]),c}(a.a.Component)),v=(c(61),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),c}(a.a.Component)),x=(c(62),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),c}(a.a.Component)),T=(c(63),function(e){return Object(b.jsxs)("div",{className:"contact-container",children:[Object(b.jsxs)("p",{children:["EMAIL: ",Object(b.jsx)("a",{className:"contact-link",href:"mailto:makennadouglasart@gmail.com",children:"makennadouglasart@gmail.com"})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)(O.a,{icon:u.a,className:"insta-icon"})," INSTA: ",Object(b.jsx)("a",{className:"contact-link",href:"https://www.instagram.com/o.g_petrichor/",target:"_blank",children:"o.g_petrichor"})]})]})}),I=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).main=Object(b.jsxs)("div",{id:"main",children:[Object(b.jsxs)("div",{className:"App-header",children:[Object(b.jsx)(m,{}),Object(b.jsx)(d,{})]}),Object(b.jsx)(p,{}),Object(b.jsx)(T,{})]}),n.item=Object(b.jsxs)("div",{id:"item",children:[Object(b.jsx)(v,{}),Object(b.jsx)(x,{})]}),n.cart=Object(b.jsx)("div",{id:"cart"}),n.state={current_view:"main",cart_items:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"background",children:Object(b.jsxs)("div",{className:"App",children:["main"===this.state.current_view?this.main:null,"item"===this.state.current_view?this.item:null,"cart"===this.state.current_view?this.cart:null]})})}}]),c}(a.a.Component),g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.92a5a2aa.chunk.js.map