var InstantClick=function(t,e){function i(t){var e=t.indexOf("#");return-1==e?t:t.substr(0,e)}function n(t){for(;"A"!=t.nodeName;)t=t.parentNode;return t}function r(t){for(var e=0;e<O[t].length;e++)O[t][e]()}function o(e,i){var n=t.implementation.createHTMLDocument("");n.documentElement.innerHTML=i,t.documentElement.replaceChild(n.body,t.body);var r=t.createElement("i");r.innerHTML=e,t.title=r.textContent}function a(t){g(n(t.target).href)}function s(t){var e=n(t.target);e.addEventListener("mouseout",d),T?(v=e.href,b=setTimeout(g,T)):g(e.href)}function l(t){t.which>1||t.metaKey||t.ctrlKey||(t.preventDefault(),c(n(t.target).href))}function d(){return b?(clearTimeout(b),b=!1,void 0):(!L.isPreloading||L.isPreloading&&L.isWaitingForCompletion||(L.xhr.abort(),L.isPreloading=!1,L.isWaitingForCompletion=!1),void 0)}function u(){if(!(L.xhr.readyState<4)&&0!=L.xhr.status){L.timing.ready=+new Date-L.timing.start;var t=L.xhr.responseText,e=t.indexOf("<title");e>-1&&(L.title=t.substr(t.indexOf(">",e)+1),L.title=L.title.substr(0,L.title.indexOf("</title")));var n=t.indexOf("<body");if(n>-1){L.body=t.substr(n);var r=L.body.indexOf("</body");r>-1&&(L.body=L.body.substr(0,r));var o=i(L.url);C[o]={body:L.body,title:L.title,scrollY:o in C?C[o].scrollY:0}}else L.hasBody=!1;L.isWaitingForCompletion&&(L.isWaitingForCompletion=!1,c(L.url))}}function f(n){for(var o,d=t.getElementsByTagName("a"),u=e.protocol+"//"+e.host,f=d.length-1;f>=0;f--)o=d[f],o.target||o.hasAttribute("download")||0!=o.href.indexOf(u+"/")||o.href.indexOf("#")>-1&&i(o.href)==y||(E?o.hasAttribute("data-no-instant"):!o.hasAttribute("data-instant"))||(x?o.addEventListener("mousedown",a):o.addEventListener("mouseover",s),o.addEventListener("click",l));if(!n){var g,c,h,m,p=t.getElementsByTagName("script");for(f=0,j=p.length;j>f;f++)g=p[f],g.hasAttribute("data-no-instant")||(c=t.createElement("script"),g.src&&(c.src=g.src),g.innerHTML&&(c.innerHTML=g.innerHTML),h=g.parentNode,m=g.nextSibling,h.removeChild(g),h.insertBefore(c,m))}r("change")}function g(t){!x&&"display"in L.timing&&+new Date-(L.timing.start+L.timing.display)<100||(b&&(clearTimeout(b),b=!1),t||(t=v),L.isPreloading&&t==L.url||L.isPreloading&&L.isWaitingForCompletion||(L.isPreloading=!0,L.isWaitingForCompletion=!1,L.url=t,L.body=!1,L.hasBody=!0,L.timing={},L.timing.start=+new Date,L.xhr.open("GET",t),L.xhr.send()))}function c(n){if("display"in L.timing||(L.timing.display=+new Date-L.timing.start),b)return L.url&&L.url!=n?(e.href=n,void 0):(g(n),L.isWaitingForCompletion=!0,void 0);if(!L.isPreloading||L.isPreloading&&L.isWaitingForCompletion)return e.href=n,void 0;if(!L.hasBody)return e.href=L.url,void 0;if(!L.body)return L.isWaitingForCompletion=!0,void 0;C[y].scrollY=pageYOffset,L.isPreloading=!1,L.isWaitingForCompletion=!1,o(L.title,L.body);var r=L.url.indexOf("#"),a=r>-1&&t.getElementById(L.url.substr(r+1)),s=0;if(L.url!=e.href&&a)for(;a.offsetParent;a=a.offsetParent)s+=a.offsetTop;scrollTo(0,s),history.pushState(null,null,L.url),y=i(e.href),f()}function h(){if(!P)return r("change"),void 0;if(!y){for(var n=0;n<arguments.length;n++){var a=arguments[n];a===!0?E=!1:"mousedown"==a?x=!0:"number"==typeof a&&(T=a)}y=i(e.href),C[y]={body:t.body.outerHTML,title:t.title,scrollY:pageYOffset},L.xhr=new XMLHttpRequest,L.xhr.addEventListener("readystatechange",u),L.url=!1,L.body=!1,L.hasBody=!0,L.title=!1,L.isPreloading=!1,L.isWaitingForCompletion=!1,L.timing={},f(!0),addEventListener("popstate",function(){var t=i(e.href);if(t!=y){if(!(t in C))return e.href=e.href,void 0;C[y].scrollY=pageYOffset,y=t,o(C[t].title,C[t].body),scrollTo(0,C[t].scrollY),f()}})}}function m(t,e){O[t].push(e)}function p(){return{currentLocationWithoutHash:y,p:L,pHistory:C,supported:P,useBlacklist:E}}var y,v,b,x,T,C={},L={},E=!0,O={change:[]},P="pushState"in history;return{supported:P,init:h,on:m,debug:p}}(document,location);