(self.webpackChunkieee_gect=self.webpackChunkieee_gect||[]).push([[178],{4836:function(e){e.exports=function(){"use strict";var e={27:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.FORM_BASE_URL=t.POPUP_SIZE=t.SLIDER_WIDTH=t.SLIDER_POSITION=t.SIDETAB_ATTRIBUTE=t.WIDGET_ATTRIBUTE=t.SLIDER_ATTRIBUTE=t.POPUP_ATTRIBUTE=t.POPOVER_ATTRIBUTE=void 0,t.POPOVER_ATTRIBUTE="data-tf-popover",t.POPUP_ATTRIBUTE="data-tf-popup",t.SLIDER_ATTRIBUTE="data-tf-slider",t.WIDGET_ATTRIBUTE="data-tf-widget",t.SIDETAB_ATTRIBUTE="data-tf-sidetab",t.SLIDER_POSITION="right",t.SLIDER_WIDTH=800,t.POPUP_SIZE=100,t.FORM_BASE_URL="https://form.typeform.com"},528:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createPopover=void 0;var r=n(747),i=n(972),a=function(e){return!!e.parentNode},c=function(e,t){var n=e.parentNode;n&&(n.removeChild(e),n.appendChild(t))},u={buttonColor:"#3a7685"},d=function(e){var t;null===(t=e.parentNode)||void 0===t||t.removeChild(e)};t.createPopover=function(e,t){void 0===t&&(t={});var n,s,l,p=o(o({},u),t),f=r.createIframe(e,"popover",p),m=function(e,t){var n=document.createElement("div");return n.className="typeform-popover",n.dataset.testid="typeform-popover",r.setElementSize(n,{width:e,height:t})}(p.width,p.height),v=function(){var e=document.createElement("div");return e.className="typeform-popover-wrapper",e.dataset.testid="typeform-popover-wrapper",e}(),h=(n=p.customIcon,(s=document.createElement("div")).className="typeform-popover-button-icon",s.innerHTML=n?"<img alt='popover trigger icon button' style='max-width: 32px; max-height:32px;' src='"+n+"'/>":'<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n    xmlns="http://www.w3.org/2000/svg">\n      <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="white"></path>\n    </svg>',s.dataset.testid="default-icon",s),y=function(){var e=document.createElement("div");e.className="typeform-spinner";var t=document.createElement("div");return t.className="typeform-popover-button-icon",t.dataset.testid="spinner-icon",t.append(e),t}(),b=function(){var e=document.createElement("div");return e.className="typeform-popover-button-icon",e.innerHTML="&times;",e.dataset.testid="close-icon",e}(),_=function(e){var t=document.createElement("button");return t.className="typeform-popover-button",t.dataset.testid="typeform-popover-button",t.style.backgroundColor=e,t}(p.buttonColor||u.buttonColor);(p.container||document.body).append(m),v.append(f),m.append(_),_.append(h);var g=function(){l&&l.parentNode&&(l.classList.add("closing"),setTimeout((function(){l.parentNode&&l.parentNode.removeChild(l)}),250))};p.tooltip&&p.tooltip.length>0&&(l=function(e,t){var n=document.createElement("span");n.className="typeform-popover-tooltip-close",n.dataset.testid="typeform-popover-tooltip-close",n.innerHTML="&times;",n.onclick=t;var o=document.createElement("div");return o.className="typeform-popover-tooltip",o.innerHTML=e,o.dataset.testid="typeform-popover-tooltip",o.appendChild(n),o}(p.tooltip,g),m.append(l)),f.onload=function(){m.classList.add("open"),v.style.opacity="1",c(y,b)};var O=function(){a(v)||(g(),setTimeout((function(){m.append(v),v.style.opacity="0",c(h,y)})))},w=function(){a(m)&&setTimeout((function(){d(v),m.classList.remove("open"),c(b,h)}),250)},P=function(){a(v)?w():O()};return _.onclick=P,p.open&&!a(v)&&i.handleCustomOpen(O,p.open,p.openValue),{open:O,close:w,toggle:P,refresh:function(){var e;null===(e=f.contentWindow)||void 0===e||e.location.reload()},unmount:function(){d(m)}}}},797:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(528),t)},630:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.createPopup=void 0;var r=n(747),i=n(27),a=n(972),c=function(e){return!!e.parentNode};t.createPopup=function(e,t){if(void 0===t&&(t={}),!r.hasDom())return{open:function(){},close:function(){},toggle:function(){},refresh:function(){}};var n=t.width,u=t.height,d=t.size,s=void 0===d?i.POPUP_SIZE:d,l=o(t,["width","height","size"]),p=r.createIframe(e,"popup",l),f=function(){var e=document.createElement("div");return e.className="typeform-popup",e.style.opacity="0",e}(),m=function(){var e=document.createElement("div");return e.className="typeform-spinner",e}(),v=function(e,t,n){var o=document.createElement("div");return o.className="typeform-iframe-wrapper",o.style.opacity="0",r.isDefined(e)&&r.isDefined(t)?r.setElementSize(o,{width:e,height:t}):(o.style.width="calc("+n+"% - 80px)",o.style.height="calc("+n+"% - 80px)",o)}(n,u,s);v.append(p),f.append(m),f.append(v);var h=l.container||document.body;p.onload=function(){v.style.opacity="1",setTimeout((function(){m.style.display="none"}),250)};var y=function(){c(f)||(h.append(f),setTimeout((function(){f.style.opacity="1"})))},b=function(){c(f)&&(f.style.opacity="0",v.style.opacity="0",setTimeout((function(){f.parentNode.removeChild(f),m.style.display="block"}),250))};return v.append(function(e){var t=document.createElement("a");return t.className="typeform-close",t.innerHTML="&times;",t.onclick=e,t}(b)),l.open&&!c(f)&&a.handleCustomOpen(y,l.open,l.openValue),{open:y,close:b,toggle:function(){c(f)?b():y()},refresh:function(){var e;null===(e=p.contentWindow)||void 0===e||e.location.reload()}}}},970:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(630),t),r(n(394),t)},394:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},382:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createSidetab=void 0;var r=n(747),i=n(972),a={buttonColor:"#3a7685",buttonText:"Launch me"},c=function(e){return!!e.parentNode},u=function(e,t){var n=e.parentNode;n&&(n.removeChild(e),n.appendChild(t))},d=function(e){var t;null===(t=e.parentNode)||void 0===t||t.removeChild(e)};t.createSidetab=function(e,t){void 0===t&&(t={});var n,s,l,p,f,m,v=o(o({},a),t),h=r.createIframe(e,"side-tab",v),y=(n=v.width,s=v.height,(l=document.createElement("div")).className="typeform-sidetab",l.dataset.testid="typeform-sidetab",r.setElementSize(l,{width:n,height:s})),b=function(){var e=document.createElement("div");return e.className="typeform-sidetab-wrapper",e.dataset.testid="typeform-sidetab-wrapper",e}(),_=function(){var e=document.createElement("div");e.className="typeform-spinner";var t=document.createElement("div");return t.className="typeform-sidetab-button-icon",t.dataset.testid="spinner-icon",t.append(e),t}(),g=function(e){var t=document.createElement("button");return t.className="typeform-sidetab-button",t.style.backgroundColor=e,t}(v.buttonColor||a.buttonColor),O=function(e){var t=document.createElement("span");return t.className="typeform-sidetab-button-text",t.innerHTML=e,t}(v.buttonText||a.buttonText),w=(p=v.customIcon,(f=document.createElement("div")).className="typeform-sidetab-button-icon",f.innerHTML=p?"<img alt='sidetab trigger icon button' src='"+p+"'/>":'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="white"></path>\n</svg>',f.dataset.testid="default-icon",f),P=((m=document.createElement("div")).className="typeform-sidetab-button-icon",m.innerHTML="&times;",m.dataset.testid="close-icon",m);document.body.append(y),b.append(h),y.append(g),g.append(w),g.append(O),setTimeout((function(){y.classList.add("ready")}),250),h.onload=function(){y.classList.add("open"),u(_,P)};var E=function(){c(b)||(y.append(b),u(w,_))},j=function(){c(b)&&setTimeout((function(){d(b),y.classList.remove("open"),u(P,w)}),250)},T=function(){c(b)?j():E()};return g.onclick=T,v.open&&!c(b)&&i.handleCustomOpen(E,v.open,v.openValue),{open:E,close:j,toggle:T,refresh:function(){var e;null===(e=h.contentWindow)||void 0===e||e.location.reload()},unmount:function(){d(y)}}}},434:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(382),t)},603:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.createSlider=void 0;var r=n(747),i=n(27),a=n(972),c=function(e){return!!e.parentNode};t.createSlider=function(e,t){if(void 0===t&&(t={}),!r.hasDom())return{open:function(){},close:function(){},toggle:function(){},refresh:function(){}};var n=t.position,u=void 0===n?i.SLIDER_POSITION:n,d=t.width,s=void 0===d?i.SLIDER_WIDTH:d,l=o(t,["position","width"]),p=r.createIframe(e,"slider",l),f=function(e){var t=document.createElement("div");return t.className="typeform-slider "+e,t.style.opacity="0",t}(u),m=function(){var e=document.createElement("div");return e.className="typeform-spinner",e}(),v=function(e,t){var n=document.createElement("div");return n.className="typeform-iframe-wrapper",n.style[e]="-100%",r.setElementSize(n,{width:t})}(u,s);v.append(p),f.append(m),f.append(v);var h=l.container||document.body;p.onload=function(){v.style[u]="0",setTimeout((function(){m.style.display="none"}),500)};var y=function(){c(f)||(h.append(f),setTimeout((function(){f.style.opacity="1"})))},b=function(){c(f)&&(f.style.opacity="0",v.style[u]="-100%",setTimeout((function(){f.parentNode.removeChild(f),m.style.display="block"}),500))};return v.append(function(e){var t=document.createElement("a");return t.className="typeform-close",t.innerHTML="&times;",t.onclick=e,t}(b)),l.open&&!c(f)&&a.handleCustomOpen(y,l.open,l.openValue),{open:y,close:b,toggle:function(){c(f)?b():y()},refresh:function(){var e;null===(e=p.contentWindow)||void 0===e||e.location.reload()}}}},331:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(603),t),r(n(162),t)},162:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},718:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createWidget=void 0;var o=n(747),r=n(313);t.createWidget=function(e,t){if(!o.hasDom())return{refresh:function(){}};var n=o.createIframe(e,"widget",t),i=r.buildWidget(n,t.width,t.height);return t.container.innerHTML="",t.container.append(i),{refresh:function(){var e;return null===(e=n.contentWindow)||void 0===e?void 0:e.location.reload()}}}},419:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.buildWidget=void 0;var o=n(747);t.buildWidget=function(e,t,n){var r=document.createElement("div");return r.className="typeform-widget",r.append(e),o.setElementSize(r,{width:t,height:n})}},313:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(419),t)},321:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(718),t),r(n(58),t)},58:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},920:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(797),t),r(n(970),t),r(n(331),t),r(n(321),t),r(n(434),t)},626:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildIframeSrc=void 0;var r=n(27),i=n(527),a=n(346),c=n(698),u={widget:"embed-widget",popup:"popup-blank",slider:"popup-drawer",popover:"popup-popover","side-tab":"popup-side-panel"};t.buildIframeSrc=function(e){var t=e.formId,n=e.type,d=e.embedId,s=e.options,l=function(e,t,n){var r=c.getTransitiveSearchParams(n.transitiveSearchParams),i={"typeform-embed-id":t,"typeform-embed":u[e],"typeform-source":n.source,"typeform-medium":n.medium,"typeform-medium-version":n.mediumVersion,"embed-hide-footer":n.hideFooter?"true":void 0,"embed-hide-headers":n.hideHeaders?"true":void 0,"embed-opacity":n.opacity,"disable-tracking":n.disableTracking?"true":void 0,"disable-auto-focus":n.disableAutoFocus?"true":void 0,"__dangerous-disable-submissions":n.enableSandbox?"true":void 0};return o(o({},i),r)}(n,d,function(e){return o(o({},{source:null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.hostname.replace(/^www\./,""),medium:"embed-sdk",mediumVersion:"next"}),i.removeUndefinedKeys(e));var t}(s)),p=function(e,t){void 0===t&&(t=!1);var n=t?"c":"to";return new URL(r.FORM_BASE_URL+"/"+n+"/"+e)}(t,s.chat);if(Object.entries(l).filter((function(e){var t=e[1];return a.isDefined(t)})).forEach((function(e){var t=e[0],n=e[1];p.searchParams.set(t,n)})),s.hidden){var f=new URL(r.FORM_BASE_URL);Object.entries(s.hidden).filter((function(e){var t=e[1];return a.isDefined(t)})).forEach((function(e){var t=e[0],n=e[1];f.searchParams.set(t,n)}));var m=f.searchParams.toString();m&&(p.hash=m)}return p.href}},972:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.handleCustomOpen=void 0,t.handleCustomOpen=function(e,t,n){switch(t){case"load":e();break;case"exit":n&&function(e,t){var n=0,o=function o(r){r.clientY<e&&r.clientY<n?(document.removeEventListener("mousemove",o),t()):n=r.clientY};document.addEventListener("mousemove",o)}(n,e);break;case"time":setTimeout((function(){e()}),n);break;case"scroll":n&&function(e,t){var n=function n(){var o=window.pageYOffset||document.documentElement.scrollTop,r=document.documentElement.clientTop||0,i=document.documentElement.scrollHeight,a=o-r,c=a/i*100,u=a+window.innerHeight>=i;(c>=e||u)&&(t(),document.removeEventListener("scroll",n))};document.addEventListener("scroll",n)}(n,e)}}},553:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createIframe=void 0;var o=n(626),r=n(866),i=n(554),a=n(256);t.createIframe=function(e,t,n){var c=r.generateEmbedId(),u=o.buildIframeSrc({formId:e,embedId:c,type:t,options:n}),d=document.createElement("iframe");return d.src=u,d.dataset.testid="iframe",d.addEventListener("load",a.triggerIframeRedraw,{once:!0}),window.addEventListener("message",i.getFormReadyHandler(c,n)),window.addEventListener("message",i.getFormQuestionChangedHandler(c,n)),window.addEventListener("message",i.getFormSubmitHandler(c,n)),d}},866:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.generateEmbedId=void 0,t.generateEmbedId=function(){var e=Math.random();return String(e).split(".")[1]}},554:function(e,t){var n=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function o(e,t,o){return function(r){var i=r.data,a=i.type,c=i.embedId,u=n(i,["type","embedId"]);a===e&&c===t&&(null==o||o(u))}}Object.defineProperty(t,"__esModule",{value:!0}),t.getFormEventHandler=t.getFormSubmitHandler=t.getFormQuestionChangedHandler=t.getFormReadyHandler=void 0,t.getFormReadyHandler=function(e,t){return o("form-ready",e,t.onReady)},t.getFormQuestionChangedHandler=function(e,t){return o("form-screen-changed",e,t.onQuestionChanged)},t.getFormSubmitHandler=function(e,t){return o("form-submit",e,t.onSubmit)},t.getFormEventHandler=o},339:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(553),t)},256:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.triggerIframeRedraw=void 0,t.triggerIframeRedraw=function(){this.style.transform="translateZ(0)"}},698:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTransitiveSearchParams=void 0,t.getTransitiveSearchParams=function(e){var t=new URL(window.location.href),n={};return e&&e.length>0&&e.forEach((function(e){t.searchParams.has(e)&&(n[e]=t.searchParams.get(e))})),n}},252:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hasDom=void 0,t.hasDom=function(){return"undefined"!=typeof document&&"undefined"!=typeof window}},71:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.includeCss=void 0,t.includeCss=function(e){var t=function(e){return"https://embed.typeform.com/next/css/"+e}(e);if(!document.querySelector('link[href="'+t+'"]')){var n=document.createElement("link");n.rel="stylesheet",n.href=t,document.head.append(n)}}},747:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(626),t),r(n(339),t),r(n(252),t),r(n(71),t),r(n(346),t),r(n(377),t),r(n(527),t),r(n(533),t)},346:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isDefined=void 0,t.isDefined=function(e){return null!=e}},377:function(e,t){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.loadOptionsFromAttributes=t.transformAttributeValue=t.camelCaseToKebabCase=void 0,t.camelCaseToKebabCase=function(e){return e.split("").map((function(e,t){return e.toUpperCase()===e?(0!==t?"-":"")+e.toLowerCase():e})).join("")},t.transformAttributeValue=function(e,t){switch(t){case"string":return function(e){return e||void 0}(e);case"boolean":return function(e){return""===e||"yes"===e||"true"===e}(e);case"integer":return function(e){var t=e?parseInt(e,10):NaN;return isNaN(t)?void 0:t}(e);case"function":return function(e){var t=e&&e in window?window[e]:void 0;return"function"==typeof t?t:void 0}(e);case"array":return function(e){if(e)return null==e?void 0:e.replace(/\s/g,"").split(",").filter((function(e){return!!e}))}(e);case"record":return function(e){if(e)return e.split(",").filter((function(e){return!!e})).reduce((function(e,t){var o,r=t.match(/^([^=]+)=(.*)$/);if(r){var i=r[1],a=r[2];return n(n({},e),((o={})[i.trim()]=a,o))}return e}),{})}(e);default:throw new Error("Invalid attribute transformation "+t)}},t.loadOptionsFromAttributes=function(e,o){return Object.keys(o).reduce((function(r,i){var a;return n(n({},r),((a={})[i]=t.transformAttributeValue(e.getAttribute("data-tf-"+t.camelCaseToKebabCase(i)),o[i]),a))}),{})}},527:function(e,t,n){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.removeUndefinedKeys=void 0;var r=n(346);t.removeUndefinedKeys=function(e){return Object.entries(e).filter((function(e){var t=e[1];return r.isDefined(t)})).reduce((function(e,t){var n,r=t[0],i=t[1];return o(o({},e),((n={})[r]=i,n))}),{})}},533:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.setElementSize=void 0,t.setElementSize=function(e,t){var n=t.width,o=t.height;return n&&(e.style.width=n+"px"),o&&(e.style.height=o+"px"),e}}},t={};return function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(920)}()}}]);
//# sourceMappingURL=b08eed7a14c8c9d32cfdaad31799e18377f238ce-216376cd683b4b378997.js.map