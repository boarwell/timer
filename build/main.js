(()=>{var P,l,V,ge,A,j,z,ke,D={},G=[],Ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function X(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var r,a,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?a=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?P.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return F(e,c,r,a,null)}function F(e,t,n,r,a){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a??++V};return a==null&&l.vnode!=null&&l.vnode(o),o}function M(e){return e.children}function T(e,t){this.props=e,this.context=t}function x(e,t){if(t==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?x(e):null}function Y(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Y(e)}}function J(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!L.__r++||z!==l.debounceRendering)&&((z=l.debounceRendering)||j)(L)}function L(){for(var e;L.__r=A.length;)e=A.sort(function(t,n){return t.__v.__b-n.__v.__b}),A=[],e.some(function(t){var n,r,a,o,c,p;t.__d&&(c=(o=(n=t).__v).__e,(p=n.__P)&&(r=[],(a=C({},o)).__v=o.__v+1,I(p,o,a,n.__n,p.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c??x(o),o.__h),re(r,o),o.__e!=c&&Y(o)))})}function K(e,t,n,r,a,o,c,p,f,d){var _,m,u,i,s,w,h,y=r&&r.__k||G,g=y.length;for(n.__k=[],_=0;_<t.length;_++)if((i=n.__k[_]=(i=t[_])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?F(null,i,null,null,i):Array.isArray(i)?F(M,{children:i},null,null,null):i.__b>0?F(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(u=y[_])===null||u&&i.key==u.key&&i.type===u.type)y[_]=void 0;else for(m=0;m<g;m++){if((u=y[m])&&i.key==u.key&&i.type===u.type){y[m]=void 0;break}u=null}I(e,i,u=u||D,a,o,c,p,f,d),s=i.__e,(m=i.ref)&&u.ref!=m&&(h||(h=[]),u.ref&&h.push(u.ref,null,i),h.push(m,i.__c||s,i)),s!=null?(w==null&&(w=s),typeof i.type=="function"&&i.__k===u.__k?i.__d=f=Q(i,f,e):f=Z(e,i,u,y,s,f),typeof n.type=="function"&&(n.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=x(u))}for(n.__e=w,_=g;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=x(r,_+1)),_e(y[_],y[_]));if(h)for(_=0;_<h.length;_++)oe(h[_],h[++_],h[++_])}function Q(e,t,n){for(var r,a=e.__k,o=0;a&&o<a.length;o++)(r=a[o])&&(r.__=e,t=typeof r.type=="function"?Q(r,t,n):Z(n,r,r,a,r.__e,t));return t}function Z(e,t,n,r,a,o){var c,p,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||a!=o||a.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(a),c=null;else{for(p=o,f=0;(p=p.nextSibling)&&f<r.length;f+=2)if(p==a)break e;e.insertBefore(a,o),c=o}return c!==void 0?c:a.nextSibling}function we(e,t,n,r,a){var o;for(o in n)o==="children"||o==="key"||o in t||R(e,o,null,n[o],r);for(o in t)a&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||R(e,o,t[o],n[o],r)}function ee(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Ce.test(t)?n:n+"px"}function R(e,t,n,r,a){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ee(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ee(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?ne:te,o):e.removeEventListener(t,o?ne:te,o);else if(t!=="dangerouslySetInnerHTML"){if(a)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch(c){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function te(e){this.l[e.type+!1](l.event?l.event(e):e)}function ne(e){this.l[e.type+!0](l.event?l.event(e):e)}function I(e,t,n,r,a,o,c,p,f){var d,_,m,u,i,s,w,h,y,g,H,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,p=t.__e=n.__e,t.__h=null,o=[p]),(d=l.__b)&&d(t);try{e:if(typeof k=="function"){if(h=t.props,y=(d=k.contextType)&&r[d.__c],g=d?y?y.props.value:d.__:r,n.__c?w=(_=t.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?t.__c=_=new k(h,g):(t.__c=_=new T(h,g),_.constructor=k,_.render=Ae),y&&y.sub(_),_.props=h,_.state||(_.state={}),_.context=g,_.__n=r,m=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=C({},_.__s)),C(_.__s,k.getDerivedStateFromProps(h,_.__s))),u=_.props,i=_.state,m)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&h!==u&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(h,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(h,_.__s,g)===!1||t.__v===n.__v){_.props=h,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(E){E&&(E.__=t)}),_.__h.length&&c.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(h,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(u,i,s)})}_.context=g,_.props=h,_.state=_.__s,(d=l.__r)&&d(t),_.__d=!1,_.__v=t,_.__P=e,d=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(r=C(C({},r),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(s=_.getSnapshotBeforeUpdate(u,i)),H=d!=null&&d.type===M&&d.key==null?d.props.children:d,K(e,Array.isArray(H)?H:[H],t,n,r,a,o,c,p,f),_.base=t.__e,t.__h=null,_.__h.length&&c.push(_),w&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=xe(n.__e,t,n,r,a,o,c,f);(d=l.diffed)&&d(t)}catch(E){t.__v=null,(f||o!=null)&&(t.__e=p,t.__h=!!f,o[o.indexOf(p)]=null),l.__e(E,t,n)}}function re(e,t){l.__c&&l.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){l.__e(r,n.__v)}})}function xe(e,t,n,r,a,o,c,p){var f,d,_,m=n.props,u=t.props,i=t.type,s=0;if(i==="svg"&&(a=!0),o!=null){for(;s<o.length;s++)if((f=o[s])&&(f===e||(i?f.localName==i:f.nodeType==3))){e=f,o[s]=null;break}}if(e==null){if(i===null)return document.createTextNode(u);e=a?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,p=!1}if(i===null)m===u||p&&e.data===u||(e.data=u);else{if(o=o&&P.call(e.childNodes),d=(m=n.props||D).dangerouslySetInnerHTML,_=u.dangerouslySetInnerHTML,!p){if(o!=null)for(m={},s=0;s<e.attributes.length;s++)m[e.attributes[s].name]=e.attributes[s].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(we(e,u,m,a,p),_)t.__k=[];else if(s=t.props.children,K(e,Array.isArray(s)?s:[s],t,n,r,a&&i!=="foreignObject",o,c,o?o[0]:n.__k&&x(n,0),p),o!=null)for(s=o.length;s--;)o[s]!=null&&X(o[s]);p||("value"in u&&(s=u.value)!==void 0&&(s!==e.value||i==="progress"&&!s)&&R(e,"value",s,m.value,!1),"checked"in u&&(s=u.checked)!==void 0&&s!==e.checked&&R(e,"checked",s,m.checked,!1))}return e}function oe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){l.__e(r,n)}}function _e(e,t,n){var r,a;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||oe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){l.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&_e(r[a],t,typeof e.type!="function");n||e.__e==null||X(e.__e),e.__e=e.__d=void 0}function Ae(e,t,n){return this.constructor(e,n)}function ae(e,t,n){var r,a,o;l.__&&l.__(e,t),a=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],I(t,e=(!r&&n||t).__k=v(M,null,[e]),a||D,D,t.ownerSVGElement!==void 0,!r&&n?[n]:a?null:t.firstChild?P.call(t.childNodes):null,o,!r&&n?n:a?a.__e:t.firstChild,r),re(o,e)}P=G.slice,l={__e:function(e,t){for(var n,r,a;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),a=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),a=n.__d),a)return n.__E=n}catch(o){e=o}throw e}},V=0,ge=function(e){return e!=null&&e.constructor===void 0},T.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),J(this))},T.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),J(this))},T.prototype.render=M,A=[],j=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L.__r=0,ke=0;var U,b,ie,W=0,$=[],le=l.__b,ce=l.__r,ue=l.diffed,se=l.__c,pe=l.unmount;function q(e,t){l.__h&&l.__h(b,e,W||t),W=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function fe(e,t,n){var r=q(U++,2);return r.t=e,r.__c||(r.__=[n?n(t):Ee(void 0,t),function(a){var o=r.t(r.__[0],a);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=b),r.__}function de(e,t){var n=q(U++,3);!l.__s&&ve(n.__H,t)&&(n.__=e,n.__H=t,b.__H.__h.push(n))}function Se(e,t){var n=q(U++,7);return ve(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function S(e,t){return W=8,Se(function(){return e},t)}function He(){$.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(N),e.__H.__h.forEach(O),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}),$=[]}l.__b=function(e){b=null,le&&le(e)},l.__r=function(e){ce&&ce(e),U=0;var t=(b=e.__c).__H;t&&(t.__h.forEach(N),t.__h.forEach(O),t.__h=[])},l.diffed=function(e){ue&&ue(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&($.push(t)!==1&&ie===l.requestAnimationFrame||((ie=l.requestAnimationFrame)||function(n){var r,a=function(){clearTimeout(o),he&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(a,100);he&&(r=requestAnimationFrame(a))})(He)),b=null},l.__c=function(e,t){t.some(function(n){try{n.__h.forEach(N),n.__h=n.__h.filter(function(r){return!r.__||O(r)})}catch(r){t.some(function(a){a.__h&&(a.__h=[])}),t=[],l.__e(r,n.__v)}}),se&&se(e,t)},l.unmount=function(e){pe&&pe(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(N)}catch(n){l.__e(n,t.__v)}};var he=typeof requestAnimationFrame=="function";function N(e){var t=b;typeof e.__c=="function"&&e.__c(),b=t}function O(e){var t=b;e.__c=e.__(),b=t}function ve(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ee(e,t){return typeof t=="function"?t(e):t}function B(){return new Promise(e=>{window.requestAnimationFrame(()=>{e()})})}async function*me(e){for(;!e.signal.aborted;)await B(),yield}var ye=({percentage:e})=>{let t=10,r=2*Math.PI*t*e/t,a=e<.5?1:0,o="rebeccapurple",c=Math.cos(r)*t,p=Math.sin(r)*t*-1;return v("svg",{viewBox:"-11 -11 22 22",xmlns:"http://www.w3.org/2000/svg",style:{rotate:"-90deg"}},e===0?v("circle",{cx:"0",cy:"0",r:t,fill:"none","stroke-width":"2",stroke:o}):v("path",{fill:"none",stroke:o,d:`M ${t},0 A ${t} ${t} 0 ${a} 1 ${c} ${p}`,"stroke-width":2}),v("g",{fill:"none",stroke:o,"stroke-width":"2"},v("path",{d:"M -4,-4 4,4"}),v("path",{d:"M 4,-4 -4,4"})))},Pe={label:"standby",started:null,percentage:0,controller:new AbortController},De=(e,t)=>{switch(t.type){case"start":return{...e,label:"active",percentage:0,started:Date.now(),controller:new AbortController};case"tick":return e.label!=="active"?e:{...e,percentage:t.payload.percentage};case"pause":return e.label!=="active"?e:(e.controller.abort(),{...e,label:"paused"});case"resume":return e.label!=="paused"?e:{...e,label:"active",started:Date.now()-t.payload.durationMS*e.percentage,controller:new AbortController};case"done":return e.label!=="active"?e:(e.controller.abort(),{...e,label:"done",percentage:1})}return e},be=({durationMS:e,onTimeIsUP:t})=>{let[n,r]=fe(De,Pe);de(()=>(n.label==="active"&&(async()=>{for await(let f of me(n.controller)){let d=Date.now()-n.started,_=Math.min(d/e,1);if(_===1){r({type:"done"}),t!==void 0&&(await B(),t());break}r({type:"tick",payload:{percentage:_}})}})(),()=>{n.controller.abort()}),[n.label]);let a=S(()=>{r({type:"start"})},[r]),o=S(()=>{r({type:"pause"})},[r]),c=S(()=>{r({type:"resume",payload:{durationMS:e}})},[r]),p=S(()=>{r({type:"start"})},[r]);return{percentage:n.percentage,state:n.label,start:a,pause:o,restart:p,resume:c}};var Fe=()=>{let e=3e3,{percentage:t,start:n,pause:r,restart:a,resume:o,state:c}=be({durationMS:e,onTimeIsUP:()=>alert("time's up!")});return v("div",null,c!=="done"?v(ye,{percentage:t}):v("div",{style:{width:"100%",aspectRatio:"1 / 1"}}),c==="standby"&&v("div",null,v("button",{type:"button",onClick:n},"\u25B6\uFE0F start")),c==="active"&&v("div",null,v("button",{type:"button",onClick:r},"\u23F8\uFE0F pause")),c==="paused"&&v("div",null,v("button",{type:"button",onClick:o},"\u25B6\uFE0F resume")),v("div",null,v("button",{type:"button",onClick:a},"\u21AA\uFE0F restart")))};function Me(){ae(v(Fe,null),document.body)}Me();})();
