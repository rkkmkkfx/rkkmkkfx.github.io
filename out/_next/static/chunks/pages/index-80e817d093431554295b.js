_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RXBc:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),c=t("YFqc"),a=t.n(c),u=o.a.createElement;n.default=function(){return u("div",null,"Hello World. ",u(a.a,{href:"/about"},u("a",null,"About")))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),f={};function l(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,w=e.scroll,_=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=c.Children.only(v),E=b&&"object"===typeof b&&b.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),m=r(g,2),M=m[0],R=m[1],L=c.default.useCallback((function(e){M(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,M]);(0,c.useEffect)((function(){var e=R&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof _?_:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,R,_,n,t]);var N={ref:L,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,y,w,_)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===b.type&&!("href"in b.props))&&(N.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof _?_:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(b,N)};n.default=s},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),f=(0,c.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||s||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,c.useEffect)((function(){u||s||(0,a.default)((function(){return d(!0)}))}),[s]),[p,s]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RXBc")}])}},[["vlRD",0,2,1]]]);