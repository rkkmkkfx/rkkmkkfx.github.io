_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"3XHS":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),u=t("YFqc"),a=t.n(u),c=o.a.createElement;n.default=function(){return c("div",null,c("div",null,"About us"),c("div",null,"Back to ",c(a.a,{href:"/",as:"/rkkmkkfx.github.io/"},c("a",null,"Home"))))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var u=o(t("q1tI")),a=t("elyg"),c=t("nOHt"),i=t("vNVm"),f={};function l(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",s=u.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),u=t[0],c=t[1];return{href:u,as:e.as?(0,a.resolveHref)(o,e.as):c||u}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,w=e.scroll,b=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var _=u.Children.only(v),g=_&&"object"===typeof _&&_.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),m=r(E,2),k=m[0],M=m[1],L=u.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);(0,u.useEffect)((function(){var e=M&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,M,b,n,t]);var N={ref:L,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:u,locale:i}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,y,w,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===_.type&&!("href"in _.props))&&(N.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof b?b:t&&t.locale,t&&t.defaultLocale))),u.default.cloneElement(_,N)};n.default=s},rB5V:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("3XHS")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,o=(0,u.useRef)(),f=(0,u.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,u.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||s||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,u=r.observer,a=r.elements;return a.set(e,n),u.observe(e),function(){u.unobserve(e),0===a.size&&(u.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,u.useEffect)((function(){c||s||(0,a.default)((function(){return d(!0)}))}),[s]),[p,s]};var u=t("q1tI"),a=o(t("0G5g")),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["rB5V",0,2,1]]]);