(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(4),r=c.n(l),s=c(2),o=c(0),i=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"TextUtils"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/",children:"About"})})]}),Object(o.jsxs)("div",{className:"form-check form-switch",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.togglemode}),Object(o.jsxs)("label",{className:"form-check-label text-".concat("dark"===e.mode?"light":"dark"),htmlFor:"flexSwitchCheckDefault",children:["Enable ",e.mode," Mode"]})]})]})]})})})};c(10);function b(e){var t=a.a.useState("Enter Your Text"),c=Object(s.a)(t,2),n=c[0],l=c[1],r=function(){var e=document.querySelector(".textmodificationdiv");"none"===e.style.display?e.style.display="block":e.style.display="none"},i=function(){var e=document.querySelector(".textmodificationdiv");"block"===e.style.display&&(e.style.display="none")};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"container mt-5 px-5 py-5",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",rows:"8",value:n,onClick:function(){"Enter Your Text"!==n&&"ENTER YOUR TEXT"!==n||l("")},onChange:function(e){l(e.target.value)},style:e.style})}),Object(o.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[Object(o.jsx)("button",{className:"btn btn-primary btn-sm mx-1",onClick:function(){navigator.clipboard.writeText(n)},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary btn-sm mx-1",onClick:function(){l(n.toLowerCase())},children:"Convert To Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary btn-sm mx-1",onClick:function(){l(n.toUpperCase())},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary replace btn-sm mx-1",onClick:function(){document.querySelector("#newword").style.display="block",document.querySelector(".capitalise-btn").style.display="none",document.querySelector(".replace-btn").style.display="block",r()},children:"Replace Word"}),Object(o.jsx)("button",{className:"btn btn-primary replace btn-sm mx-1",onClick:function(){document.querySelector("#newword").style.display="none",document.querySelector(".replace-btn").style.display="none",document.querySelector(".capitalise-btn").style.display="block",r()},children:"Capitalise Specific Word"}),Object(o.jsx)("button",{className:"btn btn-primary btn-sm mx-1",onClick:function(){var e=n.split(/[ ]+/);l(e.join(" "))},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-primary btn-sm mx-1",onClick:function(){l("")},children:"Reset Box"})]}),Object(o.jsxs)("div",{className:"container text-center textmodificationdiv",children:[Object(o.jsx)("p",{children:"Case Sensitive!"}),Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)("input",{className:"form-control mt-3",id:"replacingword",placeholder:"Enter the word to replace"}),Object(o.jsx)("input",{className:"form-control mt-3",id:"newword",placeholder:"Enter the New Word"}),Object(o.jsx)("button",{className:"btn btn-primary btn-sm mt-3 replace-btn",onClick:function(){for(var e=document.querySelector("#newword").value,t=document.querySelector("#replacingword").value,c=n;-1!==c.indexOf(t);)c=c.replace(t,e),l(c);i()},children:"Replace"}),Object(o.jsx)("button",{className:"btn btn-primary btn-sm mt-3 capitalise-btn",onClick:function(){document.querySelector("#replacingword").value;i()},children:"Capitalise"})]})]})]}),Object(o.jsxs)("div",{className:"container px-5 pb-5",children:[Object(o.jsxs)("h3",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsx)("h2",{className:"py-2",children:"Preview:"}),Object(o.jsx)("p",{children:n})]})]})}var d=function(){var e=Object(n.useState)({backgroundColor:"white",color:"black"}),t=Object(s.a)(e,2),c=t[0],a=t[1],l=Object(n.useState)("dark"),r=Object(s.a)(l,2),d=r[0],m=r[1];return Object(o.jsxs)("div",{style:c,children:[Object(o.jsx)(i,{mode:d,togglemode:function(){"black"===c.color?(a({backgroundColor:"#061524",color:"white"}),m("light")):(a({backgroundColor:"white",color:"black"}),m("dark"))},style:c}),Object(o.jsx)(b,{style:c,heading:"Enter your Text below"})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4c8c6fc9.chunk.js.map