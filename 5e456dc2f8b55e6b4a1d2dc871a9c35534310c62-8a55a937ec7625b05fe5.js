(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[216],{6494:function(e){"use strict";e.exports=Object.assign},3302:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(5007),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",u),f}}},967:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5007),a=r(5444),o=r(2359),i=function(e){var t=e.siteTitle;return n.default.createElement("header",null,n.default.createElement("div",{className:"f_h1"},n.default.createElement("div",{className:"hlog"},n.default.createElement(a.Link,{to:"/"},n.default.createElement(o.S,{src:"../images/zemepisec_logo.png",alt:"Logo projektu Zeměpisec.cz",placeholder:"blurred",layout:"fixed",width:60,height:60,imgClassName:"logimg",__imageData:r(16)})),n.default.createElement(a.Link,{to:"/",className:"href-bg"},t)),n.default.createElement("nav",null,n.default.createElement("ul",{className:"nv-l"},n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/",className:"href-bg"},"Úvod")),n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/blog",className:"href-bg"},"Blog")),n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/studijni-materialy",className:"href-bg"},"Studijní materiály"),n.default.createElement("ul",{className:"submenu"},n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/biogeografie",className:"href-bg"},"Biogeografie")),n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/ekologie-zivotni-prostredi",className:"href-bg"},"Ekologie a životní prostředí")),n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/gis",className:"href-bg"},"GIS a kartografie")),n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/hydrologie",className:"href-bg"},"Hydrologie")),n.default.createElement("li",null,n.default.createElement(a.Link,{to:"/zaklady-geodezie-gps",className:"href-bg"},"Základy geodézie a GPS"))))))))};i.defaultProps={siteTitle:""};var u=i,c=function(){return n.default.createElement("footer",null,n.default.createElement("div",{className:"f_h1"},n.default.createElement("p",{className:"footer-text"},"Projekt spravuje a tvoří ",n.default.createElement("a",{className:"href-bg footer-bold",target:"_blank",rel:"nofollow noopener",href:"https://www.linkedin.com/in/vojtechovskych/"},"Míša Vojtěchovská"),", ©2019-",(new Date).getFullYear())))},l=function(e){var t,r=e.children,o=(0,a.useStaticQuery)("3649515864");return n.default.createElement(n.default.Fragment,null,n.default.createElement(u,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.default.createElement("main",null,r),n.default.createElement(c,null))}},3751:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,a,o,i,u=r(5007),c=r(5697),l=r.n(c),s=r(4839),f=r.n(s),d=r(3302),p=r.n(d),m=r(6494),h=r.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",A="href",E="http-equiv",C="innerHTML",S="itemprop",O="name",k="property",j="rel",N="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",I="defer",R="encodeSpecialCharacters",M="onChangeClientState",K="titleTemplate",z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),U=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,v.TITLE),r=X(e,K);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,x);return t||n||void 0},V=function(e){return X(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||r===j&&"canonical"===e[r].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==C&&u!==w&&u!==S||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=h()({},n[u],a[u]);n[u]=c}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,a),ue(f,d);var p={baseTag:le(v.BASE,r),linkTags:le(v.LINK,o),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,u),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(H):r.getAttribute(H)!==i.join(",")&&r.setAttribute(H,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(H,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,a=fe(r,n),[u.default.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),u.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Q(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(b,a,n),link:de(v.LINK,o,n),meta:de(v.META,i,n),noscript:de(v.NOSCRIPT,u,n),script:de(v.SCRIPT,c,n),style:de(v.STYLE,l,n),title:de(v.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:Z([A,P],e),bodyAttributes:G(y,e),defer:X(e,I),encode:X(e,R),htmlAttributes:G(b,e),linkTags:J(v.LINK,[j,A],e),metaTags:J(v.META,[O,T,E,k,S],e),noscriptTags:J(v.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:J(v.SCRIPT,[N,C],e),styleTags:J(v.STYLE,[w],e),title:W(e),titleAttributes:G(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return B(this,t),_(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case v.BODY:return Y({},a,{bodyAttributes:Y({},o)});case v.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(q(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.default.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(u.default.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=r(5444);function be(e){var t,r,n=e.description,a=e.lang,o=e.meta,i=e.title,c=(0,ye.useStaticQuery)("63159454").site,l=n||c.siteMetadata.description,s=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return u.default.createElement(he,{htmlAttributes:{lang:a},title:i,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(o)})}be.defaultProps={lang:"cs",meta:[],description:""};var ge=be},16:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6klEQVQ4y2WU728URRjHt1T/AvWNNrUxKoSSUtCURIg1KColvjCGkOgLbYzRF4DGAJHQSmpJldLERkETLCZS0QiNFhqsIkGQqtQfKKWSKtzOtGd7vevezN3uzF3v9m6+ZnZn61VfbCbz6/N8n+e781iSU0swor8qqce0bXnxiVvz/uxWPnltqMAn/0Ih5bhOLOUxe0xy+rFg5CnBSLW+KzldIlkwBp8lmFkMwNQSjv2ydKdSGTKO+MbtOPvY8zhzcRDIz6GQicNNxyAYgeR0TDCywQiqWgBKTqoEJ3pys+T0c+HYyM3PIHV62L9iPeA3WjeVa3c2qn3nOxWJXy5DpPwcn/QNVH+79X3BQ2ik0JKMDukDgpGix0i54MVx7fiAWv/cw6qus1HVdjWo5r5Nqu+H9xWfu44cpxqqzJ2dulyS0eoIuCeIxkhBcqokI/qQKhaTKudN4sjZ99C8/3Es29eEu3ruU88ef0FlnBsaWo6gktN1wiisk5wKs6gPQARQCs+JwUvbQDGLkavDWN7ehHt7mrD/3FsouwnlMVsHjtIf0alrYIcIFRUNVJl5UCNtgu9OY8exHajZuwKbjm6Gk5rAfCYOL1SnAiHh3Wad7qUQREpmU1XCIGdx7vdTuKd9NZa+vQYnfu0HRBLZdCwKriQ3Khk5oF3OyhCgBKNRkRcU5vgkNh96BjVvrEDrwIvBPNo3EH3HN4yvtDOIjKhUpxUgl0L/+T7c2daAVYea8f3E11BeAm7aRhTYZFUy85+tcIFUyKe6NpjPTCGR+AMPdW9EbddK7B7eA+Um4IZG4N//kCwAJaej2hRHsMXASF3XYCfuaKvHg30tuD71E4rZv6GdrVAX3fPD344O6ZS/1WkLFpripW1V8mYwfmMEjR1rUde9Cu9+1wuIVGDS/2HB6IelIx065VfNZlEf9JitIJPYdnQ7bt9bj6c/a0XWiS1K8z/pqqhsgpPV+g3eIjid1YfcdKykYV/8+Imqea0eDe+sw0uD2zCTGAe8JHKLodELKZr5Kd11orbTatT5vjutLoydRkvvk6qufaW6u/t+rP/wCRwZ/QBuNh6AKt5wZMa84GRZ+PQ4jVrPwdBhu6REwte1PPzNQbX2zUfUbe3L1YaeNWrm0jGl5ueQywRGFCvS32IY1VFztUxfOxC+kMDJEnJz/vT0FX/XibbSQP8rJXy6y5/48rCfSsZUPhPA8oLTLYaxJOyHpltXQFskp5dNTVHIxgGZQp5RFGbHceHkR7j620WofGIwnfhzadS1I2FW1KmDNm6imACPSk57PWafyaZjvwhORoU7fRJwX0dprhFlx3KdWNADKxn/AMxeJofLO1f1AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/35376547481493bb4865ba2fef8a579a/7ab40/zemepisec_logo.png","srcSet":"/static/35376547481493bb4865ba2fef8a579a/7ab40/zemepisec_logo.png 60w,\\n/static/35376547481493bb4865ba2fef8a579a/a8b52/zemepisec_logo.png 120w","sizes":"60px"},"sources":[{"srcSet":"/static/35376547481493bb4865ba2fef8a579a/927d1/zemepisec_logo.webp 60w,\\n/static/35376547481493bb4865ba2fef8a579a/507b0/zemepisec_logo.webp 120w","type":"image/webp","sizes":"60px"}]},"width":60,"height":60}')}}]);
//# sourceMappingURL=5e456dc2f8b55e6b4a1d2dc871a9c35534310c62-8a55a937ec7625b05fe5.js.map