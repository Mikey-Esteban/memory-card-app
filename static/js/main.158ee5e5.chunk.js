(this["webpackJsonpmemory-card-app"]=this["webpackJsonpmemory-card-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),s=a.n(i),n=a(6),r=a.n(n),m=(a(13),a(14),a(7)),l=a(2),g=function(e){var t=e.resetGame;return Object(c.jsxs)("nav",{className:"font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full",children:[Object(c.jsx)("div",{className:"mb-2 sm:mb-0",children:Object(c.jsx)("a",{href:"/home",className:"text-lg no-underline text-gray-700 hover:text-blue-dark",children:"Code on Github"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded",onClick:t,children:"Reset Game"})})]})},d=function(e){var t=e.currentScore,a=e.bestScore,i=e.feedback,s=e.feedbackSpacing;return Object(c.jsx)("div",{className:"max-w-lg mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl",children:Object(c.jsxs)("div",{className:"ml-6 pt-1",children:[Object(c.jsx)("h1",{className:"text-2xl text-red-300 leading-tight",children:"Memory Card Game!"}),Object(c.jsx)("p",{className:"text-sm text-gray-500 leading-normal mb-3",children:"keep clicking on images you haven't seen"}),Object(c.jsxs)("div",{className:"flex justify-around",children:[Object(c.jsxs)("span",{className:"text-gray-700",children:["Current score: ",t," "]}),Object(c.jsxs)("span",{className:"text-gray-700",children:["Best score: ",a," "]})]}),Object(c.jsx)("p",{className:"text-lg font-bold text-blue-900 leading-normal my-3 ".concat(s," fancy-transition"),children:i})]})})},o=function(){return Object(c.jsx)("nav",{className:"font-sans flex text-center justify-center py-2 px-6 bg-white shadow sm:items-baseline w-full",children:Object(c.jsx)("div",{className:"mb-2 sm:mb-0 text-center",children:Object(c.jsx)("a",{href:"/home",className:"text-sm no-underline text-gray-700 hover:text-blue-900",children:"Site by Mikey Esteban"})})})},j=function(e){var t=e.src,a=e.id,i=e.onClick;return Object(c.jsxs)("div",{className:"bg-white border rounded-lg overflow-hidden card-container fancy-transition",id:a,children:[Object(c.jsx)("img",{className:"h-96 min-w-full",src:t,alt:"",onClick:function(){return i(a)},onMouseEnter:function(e){(e.target.classList.contains("card-container")?e.target:e.target.parentNode).style="cursor: pointer; transform: scale(1.1);"},onMouseLeave:function(e){(e.target.classList.contains("card-container")?e.target:e.target.parentNode).style="transform: scale(1);"}}),Object(c.jsxs)("div",{className:"p-6",children:[Object(c.jsxs)("h4",{className:"text-gray-600",children:["Beautiful shots by",Object(c.jsx)("a",{className:"text-red-300",href:"https://unsplash.com/@heysupersimi",children:" Simone Hutsch"})]}),Object(c.jsx)("h4",{className:"text-xs text-gray-300",children:"\xa9 Simone Hutsch"})]})]})},b=a.p+"static/media/image1.d4031728.jpg",u=a.p+"static/media/image2.cea564ee.jpg",f=a.p+"static/media/image3.2fc28bcf.jpg",x=a.p+"static/media/image4.553d6ef1.jpg",p=a.p+"static/media/image5.a4956958.jpg",h=a.p+"static/media/image6.fab721b2.jpg",O=a.p+"static/media/image7.ca95f50b.jpg",v=a.p+"static/media/image8.60ac6a8f.jpg",y=a.p+"static/media/image9.4a165a3e.jpg",N=a.p+"static/media/image10.eb9ad3b1.jpg",S=a.p+"static/media/image11.af7cf68c.jpg",w=a.p+"static/media/image12.21b3c017.jpg",k=a.p+"static/media/image13.efc0e605.jpg",C=a.p+"static/media/image14.1c252fea.jpg",G=a.p+"static/media/image15.facb0e4a.jpg",M=a.p+"static/media/image16.6f06f1ee.jpg",E=a.p+"static/media/image17.1c4c858f.jpg",L=function(){var e=["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15","image16","image17"],t={image1:b,image2:u,image3:f,image4:x,image5:p,image6:h,image7:O,image8:v,image9:y,image10:N,image11:S,image12:w,image13:k,image14:C,image15:G,image16:M,image17:E},a=Object(i.useState)([]),s=Object(l.a)(a,2),n=s[0],r=s[1],L=Object(i.useState)(0),B=Object(l.a)(L,2),F=B[0],D=B[1],H=Object(i.useState)(F),I=Object(l.a)(H,2),J=I[0],P=I[1],R=Object(i.useState)(""),T=Object(l.a)(R,2),U=T[0],q=T[1],z=Object(i.useState)("text-left"),A=Object(l.a)(z,2),K=A[0],Q=A[1],V=Object(i.useRef)();Object(i.useEffect)((function(){V.current=X}));var W=function(e){n.includes(e)?(q("Oh no, you already picked that :/"),F>J&&P(F),D(0),r([])):(q("GOOD GUESS!"),Q("text-left"===K?"text-right":"text-left"),D(F+1),r((function(t){return[].concat(Object(m.a)(t),[e])})))},X=function(){for(;;){for(var t=[];t.length<3;){var a=e[Math.floor(Math.random()*e.length)];void 0===V.current?!t.includes(a)&&t.push(a):!V.current.includes(a)&&!t.includes(a)&&t.push(a)}for(var c=0,i=t;c<i.length;c++){var s=i[c];if(!n.includes(s))return t}}}();return Object(c.jsxs)("div",{className:"bg-blue-50 min-h-screen",children:[Object(c.jsx)(g,{resetGame:function(){P(0),D(0),q(""),r([])}}),Object(c.jsx)(d,{currentScore:F,bestScore:J,feedback:U,feedbackSpacing:K}),Object(c.jsx)("div",{className:"flex items-center justify-center my-10 space-x-8",children:X.map((function(e){return Object(c.jsx)(j,{id:e,src:t[e],onClick:W},e)}))}),Object(c.jsx)(o,{})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),B()}},[[15,1,2]]]);
//# sourceMappingURL=main.158ee5e5.chunk.js.map