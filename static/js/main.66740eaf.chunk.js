(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),a=n(5),o=n(6),i=n(8),r=n(7),l=n(1),d=n.n(l),u=(n(13),n(14),n(2)),b=n.n(u),j=n(0),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("div",{className:"w-25 mx-auto",children:[Object(j.jsx)("h1",{className:"text-center display-6",children:""===t?"No goods selected":"".concat(t," is selected")}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)("button",{type:"button",className:b()("\n            btn\n            btn-secondary\n            my-1 \n            mx-4",{invisible:!t}),onClick:function(){e.setState({selectedGood:""})},children:"X"})}),Object(j.jsx)("ul",{className:"list-group",children:m.map((function(n){return Object(j.jsxs)("li",{className:b()("\n            list-group-item \n            d-flex \n            justify-content-between\n            align-items-center",{active:n===t}),children:[n,Object(j.jsx)("button",{type:"button",className:b()("\n                btn \n                btn-secondary",{invisible:n===t}),onClick:function(){e.setState({selectedGood:n})},children:"Select"})]})}))})]})}}]),n}(d.a.Component);s.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.66740eaf.chunk.js.map