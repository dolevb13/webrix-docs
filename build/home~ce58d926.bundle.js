(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0VEO":function(e,t,n){e.exports=n.p+"0.bundle.worker.js"},"1Nrx":function(e,t,n){var r=n("LboF"),a=n("usnk");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},"7a9B":function(e,t,n){var r=n("LboF"),a=n("yt4Z");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},UmoI:function(e,t,n){var r=n("LboF"),a=n("yA1t");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},bfV8:function(e,t,n){"use strict";n.r(t);var r=n("cDcd"),a=n.n(r),o=n("ufU5"),i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",l=i.split(" "),c=function(e){for(var t=e.words,n="",r=0;r<t/l.length-1;r++)n+=i+" ";return n+=l.slice(0,t%l.length).join(" ")},s=(n("1Nrx"),function(e){var t=e.title,n=e.children;return a.a.createElement("div",{className:"info-box"},a.a.createElement("h3",null,t),n)}),u=n("Kvkj"),m=n.p+"ecfed5f6bafe4b0d34d657c504146eb8.png";n("UmoI"),t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"title"},a.a.createElement("img",{src:m,alt:"Webrix logo",loading:"lazy"}),a.a.createElement("h2",null,"Powerful building blocks for React-based web applications"),a.a.createElement("div",{className:"actions"},a.a.createElement(u.a,null,"Get Started"),a.a.createElement(u.a,{type:u.a.Types.SECONDARY},"Documentation"))),a.a.createElement(o.a,null),a.a.createElement(u.b,null,a.a.createElement("section",null,a.a.createElement(s,{title:"Amazing"},a.a.createElement("p",null,a.a.createElement(c,{words:20})),a.a.createElement("p",null,a.a.createElement(c,{words:50}))),a.a.createElement(s,{title:"Awesome"},a.a.createElement("p",null,a.a.createElement(c,{words:20})),a.a.createElement("p",null,a.a.createElement(c,{words:50}))),a.a.createElement(s,{title:"Incredible"},a.a.createElement("p",null,a.a.createElement(c,{words:20})),a.a.createElement("p",null,a.a.createElement(c,{words:50}))))))}},ufU5:function(e,t,n){"use strict";(function(e){var r=n("cDcd"),a=n.n(r),o=(n("7a9B"),function(e){return"OffscreenCanvas"in window&&"transferControlToOffscreen"in e});t.a=function(){var t=Object(r.useRef)(),i=Object(r.useRef)(),l=Object(r.useRef)(new Worker(e,void 0)),c=Object(r.useCallback)((function(){if(o(t.current)){var e=t.current,n=e.clientWidth,r=e.clientHeight;l.current.postMessage({type:"resize",size:{width:n,height:r}})}else i.current.resize()}),[l.current]);return Object(r.useEffect)((function(){if(o(t.current)){t.current.width=t.current.clientWidth,t.current.height=t.current.clientHeight;var e=t.current.transferControlToOffscreen();l.current.postMessage({type:"canvas",canvas:e},[e])}else Promise.all([n.e(27),n.e(6),n.e(13),n.e(21),n.e(8),n.e(17),n.e(9),n.e(14),n.e(24),n.e(12),n.e(18),n.e(7),n.e(11),n.e(4),n.e(26),n.e(3),n.e(19),n.e(10),n.e(5),n.e(25),n.e(22),n.e(23),n.e(20),n.e(16),n.e(15),n.e(28),n.e(31)]).then(n.bind(null,"4dGD")).then((function(e){var n=e.Engine;i.current=new n(t.current)}));return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c),l.current.terminate()}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("canvas",{id:"scene",ref:t}),a.a.createElement("div",{className:"gradient-overlay"}))}}).call(this,n("0VEO"))},usnk:function(e,t,n){(t=n("JPst")(!1)).push([e.i,".info-box{color:#fff;margin:0 20px}.info-box h3{font-weight:100;letter-spacing:2px;text-transform:uppercase;font-size:2em;color:#fff;margin:0 0 10px}\n",""]),e.exports=t},yA1t:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#route-home{position:relative;background-color:#273D76}#route-home .title{position:absolute;top:50vh;left:50%;color:white;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center}@media screen and (max-width: 768px){#route-home .title img{width:300px}}#route-home .title h2{font-weight:normal;font-size:1em;text-align:center;margin:0;text-shadow:0 0 16px #162447}#route-home .title .actions{margin-top:15px;display:flex;justify-content:center}#route-home .title .actions .button+.button{margin-left:10px;color:#fff}#route-home section{display:flex;padding:30px 0}@media screen and (max-width: 768px){#route-home section{flex-direction:column}}\n",""]),e.exports=t},yt4Z:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"#route-home #scene{width:100%;height:106vh;background-color:#223870}#route-home .gradient-overlay{width:100%;position:absolute;height:6vh;top:100vh;background-image:linear-gradient(transparent, #273D76)}\n",""]),e.exports=t}}]);