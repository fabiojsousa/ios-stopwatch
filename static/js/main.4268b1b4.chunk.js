(this["webpackJsonpreact-app-model"]=this["webpackJsonpreact-app-model"]||[]).push([[0],{14:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),c=t(6),r=t.n(c),l=t(12),i=t(1),u=t(2),s=t(3),d=t(7),p=t.n(d);function f(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 0 20px;\n\n  .bZeebZ .ps__rail-y {\n    background-color: black;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n  min-height: 100%;\n  width: 100%;\n\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  main {\n    max-width: 800px;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n    flex-direction: column;\n    height: 100%;\n    padding: 0 5px;\n\n    #stopwatch {\n      color: #ffffff;\n      margin-bottom: 60px;\n      width: 700px;\n      padding-left: 61px;\n\n      h1 {\n        font-weight: normal;\n        font-size: 150px;\n      }\n    }\n\n    #buttons {\n      display: flex;\n      justify-content: space-between;\n      padding: 0 65px;\n\n      div {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        button {\n          width: 115px;\n          height: 115px;\n          border-radius: 50%;\n          font-size: 30px;\n          border: 3px solid black;\n        }\n      }\n\n      div.leftButton {\n        &::before {\n          z-index: -1;\n          position: absolute;\n          width: 122px;\n          height: 122px;\n          border-radius: 50%;\n          border: 2px solid black;\n          content: '';\n          background-color: #333333;\n        }\n\n        button {\n          background-color: #333333;\n          color: #ffffff;\n          font-weight: 500;\n        }\n      }\n\n      div.rightButton {\n        &::before {\n          z-index: -1;\n          position: absolute;\n          width: 122px;\n          height: 122px;\n          border-radius: 50%;\n          content: '';\n          background-color: #330000;\n          border: 2px solid black;\n        }\n\n        button {\n          background-color: #330000;\n          color: #ff6633;\n          font-weight: 500;\n        }\n      }\n    }\n\n    #laps {\n      padding: 0 65px;\n      margin-top: 20px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 285px;\n\n      p {\n        display: flex;\n        justify-content: space-between;\n        color: ",";\n        font-size: 25px;\n        width: 100%;\n        padding: 20px 0;\n        border: 1px solid #333333;\n        border-left: 0;\n        border-right: 0;\n\n        span {\n          width: 120px;\n          span {\n            text-align: left;\n            padding-left: 25px;\n          }\n        }\n      }\n\n      p + p {\n        border: 1px solid #333333;\n        border-left: 0;\n        border-right: 0;\n        border-top: 0;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var m=s.b.div(b(),(function(n){return n.lap&&"best"===n.lap?"green":"worse"===n.lap?"red":"#ffffff"})),x=Object(s.b)(p.a)(f());t(28);function g(){var n=Object(u.a)(["\n\n    *{\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    *:focus{\n        outline: 0;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    body{\n        -webkit-font-smoothing: antialiased;\n        background-color: #000000;\n    }\n\n    body, input, button {\n        font: 14px 'Roboto', sans-serif;\n    }\n\n    button{\n        cursor: pointer;\n    }\n"]);return g=function(){return n},n}var h=Object(s.a)(g());r.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),o.a.createElement((function(){var n=Object(a.useState)(!1),e=Object(i.a)(n,2),t=e[0],c=e[1],r=Object(a.useState)(!1),u=Object(i.a)(r,2),s=u[0],d=u[1],p=Object(a.useState)(0),f=Object(i.a)(p,2),b=f[0],g=f[1],h=Object(a.useState)(R(b)),E=Object(i.a)(h,2),j=E[0],O=E[1],w=Object(a.useState)(),v=Object(i.a)(w,2),y=v[0],k=v[1],S=Object(a.useState)(),L=Object(i.a)(S,2),z=L[0],T=L[1],B=Object(a.useState)([]),I=Object(i.a)(B,2),D=I[0],C=I[1],F=Object(a.useState)(0),J=Object(i.a)(F,2),M=J[0],N=J[1];function R(n){var e=n/1e3,t=Math.floor(e/60),a=Math.floor(e%60),o=(e%1).toFixed(2).substring(2),c={totalTime:e,minutes:t>=10?t:"0".concat(t),seconds:a>=10?a:"0".concat(a),miliseconds:o};return c.formatedTime="".concat(c.minutes,":").concat(c.seconds,".").concat(c.miliseconds),c}return Object(a.useEffect)((function(){s&&t&&(T(setInterval((function(){var n=b>0?Date.now()-y+b:Date.now()-y;g(n)}),10)),d(!1))}),[t,s,b,y,M]),Object(a.useEffect)((function(){O(R(b))}),[b]),Object(a.useEffect)((function(){b&&N(M+10)}),[b]),o.a.createElement(m,null,o.a.createElement("main",null,o.a.createElement("div",{id:"stopwatch"},o.a.createElement("h1",null,j.minutes,":",j.seconds,".",j.miliseconds)),o.a.createElement("div",{id:"buttons"},o.a.createElement("div",{className:"leftButton"},o.a.createElement("button",{type:"button",onClick:t?function(){C([{index:D.length+1,time:R(M)}].concat(Object(l.a)(D))),N(0)}:function(){clearInterval(z),g(0),C([]),N(0),c(!1),d(!0)}},t?"Lap":b>0?"Reset":"Lap")),o.a.createElement("div",{className:"rightButton"},o.a.createElement("button",{type:"button",onClick:t?function(){c(!1),clearInterval(z)}:function(){c(!0),k(Date.now()),d(!0)}},t?"Stop":"Start"))),o.a.createElement("div",{id:"laps"},o.a.createElement(x,{options:{maxScrollbarLength:80}},o.a.createElement("p",null,o.a.createElement("span",null,b>0&&"Lap ".concat(D.length+1)),o.a.createElement("span",null,o.a.createElement("span",null,b>0&&R(M).formatedTime))),o.a.createElement("p",null,o.a.createElement("span",null,D[0]&&"Lap ".concat(D[0].index)),o.a.createElement("span",null,o.a.createElement("span",null,D[0]&&"".concat(D[0].time.formatedTime)))),o.a.createElement("p",null,o.a.createElement("span",null,D[1]&&"Lap ".concat(D[1].index)),o.a.createElement("span",null,o.a.createElement("span",null,D[1]&&"".concat(D[1].time.formatedTime)))),o.a.createElement("p",null,o.a.createElement("span",null,D[2]&&"Lap ".concat(D[2].index)),o.a.createElement("span",null,o.a.createElement("span",null,D[2]&&"".concat(D[2].time.formatedTime))))))))}),null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4268b1b4.chunk.js.map