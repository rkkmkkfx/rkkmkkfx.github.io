_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"7Cbv":function(t,e,n){"use strict";var r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(t){return"string"===typeof t&&i.test(t)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};e.a=function(t,e,n){var r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return p(r)}},QIpX:function(t,e,n){t.exports={root:"Greetings_root__2llIx",heading:"Greetings_heading__2Nwpi",line:"Greetings_line__3xQ5B"}},QeBL:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("angI"),i=o.a.createElement;e.default=function(){return i(a.a,{text:["Hello","There"]})}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},angI:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("7Cbv"),i=n("QIpX"),s=n.n(i),u=o.a.createElement;e.a=function(t){var e=t.text,n=t.imgSrc;return u("div",{className:s.a.root},u("h1",{className:s.a.heading},e.map((function(t){return u("span",{key:Object(a.a)(),className:s.a.line},t)}))),n&&u("img",{src:n,alt:""}))}}},[["/EDR",0,1]]]);