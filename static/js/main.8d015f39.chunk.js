(this.webpackJsonpcasanova=this.webpackJsonpcasanova||[]).push([[0],{40:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),i=(n(40),n(12)),o=n.n(i),l=n(19),d=n(7),j=n(21),b=n.n(j),u=(n(60),n(15)),p=n(68),h=n(1),x=function(e){return Object(h.jsx)("div",{style:{width:"100%",height:300,backgroundColor:"transparent"},children:Object(h.jsxs)("div",{children:[Object(h.jsx)(p.a.Label,{children:"\uc5b4\ub5a4 \ub9d0\uc744 \ud558\ub824 \ud558\ub098\uc694?"}),Object(h.jsx)(p.a.Control,{id:"inputbox",type:"text",placeholder:"\uc790\ub2c8? \ubcf4\uace0\uc2f6\ub2e4..",value:e.input,onChange:function(t){e.setInput(t.target.value)},onKeyDown:function(t){13===t.keyCode&&e.onClick()},required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"btn btn-lg btn-secondary fw-bold border-white bg-white",variant:"light",onClick:e.onClick,children:"\ud310\ub2e8\ud574\uc918!"})]})})},O=n(66),f=function(e){return Object(h.jsx)("div",{style:{width:"100%",backgroundColor:"transparent"},children:Object(h.jsxs)("div",{style:{padding:"50px"},children:[Object(h.jsx)(O.a,{animation:"border",role:"status",style:{margin:"10px"},children:Object(h.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(h.jsx)("p",{children:"AI\uac00 \ud310\ub2e8 \uc911.."})]})})},v=n(67),g=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:[e.score,"\uc810\uc9dc\ub9ac \uba58\ud2b8"]}),Object(h.jsx)(v.a,{now:e.score,label:"".concat(e.score,"\uc810")}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"\uc774\ub807\uac8c \ub300\uc2e0 \ub9d0\ud574\ubd10\ub3c4 \uc88b\uc744 \uac83 \uac19\uc544\uc694"}),Object(h.jsx)("h4",{children:e.similar})]})})},m=function(e){return Object(h.jsxs)("div",{style:{width:"100%",height:300,backgroundColor:"transparent"},children:[Object(h.jsx)("div",{children:e.spinner&&Object(h.jsx)(f,{})}),e.data&&Object(h.jsxs)(p.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(h.jsx)(g,{score:e.score,similar:e.similar}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{class:"btn btn-lg btn-secondary fw-bold border-white bg-white",variant:"light",onClick:e.restart,children:[Object(h.jsx)("i",{class:"fas fa-redo-alt"})," \ub2e4\uc2dc\ud558\uae30"]})]})]})},y=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(d.a)(r,2),i=s[0],j=s[1],p=Object(a.useState)(null),O=Object(d.a)(p,2),f=O[0],v=O[1],g=Object(a.useState)(null),y=Object(d.a)(g,2),w=y[0],C=y[1],k=Object(a.useState)(!1),S=Object(d.a)(k,2),I=S[0],F=S[1],T=Object(a.useState)(0),A=Object(d.a)(T,2),L=A[0],M=A[1],D=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(null),Array.from(document.querySelectorAll("#inputbox")).forEach((function(e){return e.value=""})),j(null),M(0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=2;break}return e.abrupt("return","none");case 2:return M(1),console.log("text:",n),F(!0),e.prev=5,(a=new FormData).append("text",n),a.append("num_samples",100),e.next=11,b.a.post("https://main-ko-gpt2-dino-fpem123.endpoint.ainize.ai/gen",a,{headers:{"Content-Type":"multipart/form-data",accept:"application/json"}});case 11:return c=e.sent,e.next=14,b.a.post("https://master-soongsil-bert-base-beep-deploy-jason9693.endpoint.ainize.ai/predict/logits",a,{headers:{"Content-Type":"multipart/form-data",accept:"application/json"}});case 14:r=e.sent,console.log(c.data),console.log(r.data.result),null!=c.data[1]?j(c.data[1].text_b.replace('"',"")):null!=c.data[2]?j(c.data[2].text_b.replace('"',"")):j("\uc81c\uac00 \ucd94\ucc9c\ud560 \ub2e4\ub978 \ud45c\ud604\uc774 \uc0dd\uac01\uc774 \uc548\ub098\ub294\uad70\uc694"),v(100-Math.floor(100*r.data.result.Hate)),C(100-Math.floor(100*r.data.result.Offensive)),F(!1),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(5),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[5,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)(u.a,{controls:!1,indicators:!1,activeIndex:L,onSelect:function(e,t){M(e),console.log("handleSelect",e)},interval:null,children:[Object(h.jsx)(u.a.Item,{children:Object(h.jsx)(x,{input:null,onClick:N,setInput:c})}),Object(h.jsx)(u.a.Item,{children:Object(h.jsx)(m,{spinner:I,data:i,restart:D,score:Math.min(w,f),similar:i})})]}),Object(h.jsx)("br",{})]}),Object(h.jsx)("br",{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.8d015f39.chunk.js.map