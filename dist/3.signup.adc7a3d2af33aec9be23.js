webpackJsonp([3],{42:function(e,t,r){var o=r(30),n=r(12)("toStringTag"),a="Arguments"==o(function(){return arguments}()),i=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=i(t=Object(e),n))?r:a?o(t):"Object"==(s=o(t))&&"function"==typeof t.callee?"Arguments":s}},47:function(e,t,r){var o,n,a,i=r(31),s=r(82),c=r(118),u=r(106),l=r(18),f=l.process,d=l.setImmediate,m=l.clearImmediate,v=l.MessageChannel,p=0,h={},y="onreadystatechange",_=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},w=function(e){_.call(e.data)};d&&m||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++p]=function(){s("function"==typeof e?e:Function(e),t)},o(p),p},m=function(e){delete h[e]},"process"==r(30)(f)?o=function(e){f.nextTick(i(_,e,1))}:v?(n=new v,a=n.port2,n.port1.onmessage=w,o=i(a.postMessage,a,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(e){l.postMessage(e+"","*")},l.addEventListener("message",w,!1)):o=y in u("script")?function(e){c.appendChild(u("script"))[y]=function(){c.removeChild(this),_.call(e)}}:function(e){setTimeout(i(_,e,1),0)}),e.exports={set:d,clear:m}},77:function(e,t,r){e.exports={"default":r(78),__esModule:!0}},78:function(e,t,r){r(122),r(123),r(124),r(94),e.exports=r(17).Promise},79:function(e,t){e.exports=function(e,t,r,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(r+": incorrect invocation!");return e}},80:function(e,t,r){var o=r(31),n=r(84),a=r(83),i=r(21),s=r(121),c=r(93),u={},l={},t=e.exports=function(e,t,r,f,d){var m,v,p,h,y=d?function(){return e}:c(e),_=o(r,f,t?2:1),w=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(a(y)){for(m=s(e.length);m>w;w++)if(h=t?_(i(v=e[w])[0],v[1]):_(e[w]),h===u||h===l)return h}else for(p=y.call(e);!(v=p.next()).done;)if(h=n(p,_,v.value,t),h===u||h===l)return h};t.BREAK=u,t.RETURN=l},82:function(e,t){e.exports=function(e,t,r){var o=void 0===r;switch(t.length){case 0:return o?e():e.call(r);case 1:return o?e(t[0]):e.call(r,t[0]);case 2:return o?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},83:function(e,t,r){var o=r(45),n=r(12)("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||a[n]===e)}},84:function(e,t,r){var o=r(21);e.exports=function(e,t,r,n){try{return n?t(o(r)[0],r[1]):t(r)}catch(a){var i=e["return"];throw void 0!==i&&o(i.call(e)),a}}},85:function(e,t,r){var o=r(12)("iterator"),n=!1;try{var a=[7][o]();a["return"]=function(){n=!0},Array.from(a,function(){throw 2})}catch(i){}e.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var a=[7],i=a[o]();i.next=function(){return{done:r=!0}},a[o]=function(){return i},e(a)}catch(s){}return r}},87:function(e,t,r){var o=r(18),n=r(47).set,a=o.MutationObserver||o.WebKitMutationObserver,i=o.process,s=o.Promise,c="process"==r(30)(i);e.exports=function(){var e,t,r,u=function(){var o,n;for(c&&(o=i.domain)&&o.exit();e;){n=e.fn,e=e.next;try{n()}catch(a){throw e?r():t=void 0,a}}t=void 0,o&&o.enter()};if(c)r=function(){i.nextTick(u)};else if(a){var l=!0,f=document.createTextNode("");new a(u).observe(f,{characterData:!0}),r=function(){f.data=l=!l}}else if(s&&s.resolve){var d=s.resolve();r=function(){d.then(u)}}else r=function(){n.call(o,u)};return function(o){var n={fn:o,next:void 0};t&&(t.next=n),e||(e=n,r()),t=n}}},88:function(e,t,r){var o=r(53);e.exports=function(e,t,r){for(var n in t)r&&e[n]?e[n]=t[n]:o(e,n,t[n]);return e}},89:function(e,t,r){"use strict";var o=r(18),n=r(17),a=r(46),i=r(43),s=r(12)("species");e.exports=function(e){var t="function"==typeof n[e]?n[e]:o[e];i&&t&&!t[s]&&a.f(t,s,{configurable:!0,get:function(){return this}})}},91:function(e,t,r){var o=r(21),n=r(60),a=r(12)("species");e.exports=function(e,t){var r,i=o(e).constructor;return void 0===i||void 0==(r=o(i)[a])?t:n(r)}},93:function(e,t,r){var o=r(42),n=r(12)("iterator"),a=r(45);e.exports=r(17).getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||a[o(e)]}},94:function(e,t,r){"use strict";var o,n,a,i=r(86),s=r(18),c=r(31),u=r(42),l=r(44),f=r(61),d=(r(21),r(60)),m=r(79),v=r(80),p=(r(120).set,r(91)),h=r(47).set,y=r(87)(),_="Promise",w=s.TypeError,x=s.process,g=s[_],x=s.process,N="process"==u(x),b=function(){},P=!!function(){try{var e=g.resolve(1),t=(e.constructor={})[r(12)("species")]=function(e){e(b,b)};return(N||"function"==typeof PromiseRejectionEvent)&&e.then(b)instanceof t}catch(o){}}(),F=function(e,t){return e===t||e===g&&t===a},j=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},E=function(e){return F(g,e)?new M(e):new n(e)},M=n=function(e){var t,r;this.promise=new e(function(e,o){if(void 0!==t||void 0!==r)throw w("Bad Promise constructor");t=e,r=o}),this.resolve=d(t),this.reject=d(r)},T=function(e){try{e()}catch(t){return{error:t}}},k=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var o=e._v,n=1==e._s,a=0,i=function(t){var r,a,i=n?t.ok:t.fail,s=t.resolve,c=t.reject,u=t.domain;try{i?(n||(2==e._h&&O(e),e._h=1),i===!0?r=o:(u&&u.enter(),r=i(o),u&&u.exit()),r===t.promise?c(w("Promise-chain cycle")):(a=j(r))?a.call(r,s,c):s(r)):c(o)}catch(l){c(l)}};r.length>a;)i(r[a++]);e._c=[],e._n=!1,t&&!e._h&&S(e)})}},S=function(e){h.call(s,function(){var t,r,o,n=e._v;if(U(e)&&(t=T(function(){N?x.emit("unhandledRejection",n,e):(r=s.onunhandledrejection)?r({promise:e,reason:n}):(o=s.console)&&o.error&&o.error("Unhandled promise rejection",n)}),e._h=N||U(e)?2:1),e._a=void 0,t)throw t.error})},U=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,o=0;r.length>o;)if(t=r[o++],t.fail||!U(t.promise))return!1;return!0},O=function(e){h.call(s,function(){var t;N?x.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})})},A=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),k(t,!0))},R=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw w("Promise can't be resolved itself");(t=j(e))?y(function(){var o={_w:r,_d:!1};try{t.call(e,c(R,o,1),c(A,o,1))}catch(n){A.call(o,n)}}):(r._v=e,r._s=1,k(r,!1))}catch(o){A.call({_w:r,_d:!1},o)}}};P||(g=function(e){m(this,g,_,"_h"),d(e),o.call(this);try{e(c(R,this,1),c(A,this,1))}catch(t){A.call(this,t)}},o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=r(88)(g.prototype,{then:function(e,t){var r=E(p(this,g));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=N?x.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&k(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),M=function(){var e=new o;this.promise=e,this.resolve=c(R,e,1),this.reject=c(A,e,1)}),l(l.G+l.W+l.F*!P,{Promise:g}),r(90)(g,_),r(89)(_),a=r(17)[_],l(l.S+l.F*!P,_,{reject:function(e){var t=E(this),r=t.reject;return r(e),t.promise}}),l(l.S+l.F*(i||!P),_,{resolve:function(e){if(e instanceof g&&F(e.constructor,this))return e;var t=E(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(P&&r(85)(function(e){g.all(e)["catch"](b)})),_,{all:function(e){var t=this,r=E(t),o=r.resolve,n=r.reject,a=T(function(){var r=[],a=0,i=1;v(e,!1,function(e){var s=a++,c=!1;r.push(void 0),i++,t.resolve(e).then(function(e){c||(c=!0,r[s]=e,--i||o(r))},n)}),--i||o(r)});return a&&n(a.error),r.promise},race:function(e){var t=this,r=E(t),o=r.reject,n=T(function(){v(e,!1,function(e){t.resolve(e).then(r.resolve,o)})});return n&&o(n.error),r.promise}})},196:574,477:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(38),a=o(n),i=r(14),s=o(i),c=r(35),u=o(c),l=r(36),f=o(l),d=r(37),m=o(d),v=r(40),p=o(v),h=r(39),y=o(h),_=r(1),w=o(_),x=r(102);r(196);var g=(0,s["default"])("i",{className:"fa fa-user"}),N=(0,s["default"])("header",{},void 0,"Реєстрація"),b=(0,s["default"])("label",{htmlFor:"username",className:"control-label col-sm-4"},void 0,"Імя користувача"),P=(0,s["default"])("label",{htmlFor:"username",className:"control-label col-sm-4"},void 0,"Імя"),F=(0,s["default"])("label",{htmlFor:"username",className:"control-label col-sm-4"},void 0,"Email"),j=(0,s["default"])("label",{htmlFor:"password",className:"control-label col-sm-4"},void 0,"Пароль*"),E=(0,s["default"])("label",{htmlFor:"password",className:"control-label col-sm-4"},void 0,"Підтвердіть пароль*"),M=(0,s["default"])(x.Link,{to:"/",className:"btn btn-default"},void 0,"Назад"),T=(0,s["default"])("p",{className:"text-center"},void 0,"Зареєстровані?"),k=(0,s["default"])("p",{className:"text-center"},void 0,(0,s["default"])(x.Link,{to:"/login"},void 0,"Ввійти")," зараз"),S=function(e){function t(){return(0,f["default"])(this,t),(0,p["default"])(this,(0,u["default"])(t).apply(this,arguments))}return(0,y["default"])(t,e),(0,m["default"])(t,[{key:"componentWillUnmount",value:function(){this.props.resetMe()}},{key:"componentWillReceiveProps",value:function(e){!e.user||"authenticated"!==e.user.status||e.user.error||e.user.loading||this.context.router.push("/")}},{key:"render",value:function(){var e=this.props,t=e.fields,r=t.username,o=t.name,n=t.email,i=t.password,c=t.confirmPassword,u=e.handleSubmit,l=e.submitting,f=e.signup;return(0,s["default"])("div",{className:"col-xs-offset-2 col-xs-8 col-md-offset-3 col-md-6 form-container"},void 0,g,N,(0,s["default"])("form",{className:"form-horizontal",onSubmit:u(f)},void 0,(0,s["default"])("div",{className:"form-group "+(r.touched&&r.error?"has-error":"")},void 0,b,(0,s["default"])("div",{className:"col-sm-8"},void 0,w["default"].createElement("input",(0,a["default"])({id:"username",placeholder:"@username",type:"text",className:"form-control"},r))),(0,s["default"])("div",{className:"col-sm-8 col-sm-offset-4  text-danger"},void 0,r.touched?r.error:"")),(0,s["default"])("div",{className:"form-group "+(o.touched&&o.error?"has-error":"")},void 0,P,(0,s["default"])("div",{className:"col-sm-8"},void 0,w["default"].createElement("input",(0,a["default"])({id:"name",placeholder:"name",type:"text",className:"form-control"},o))),(0,s["default"])("div",{className:"col-sm-8 col-sm-offset-4  text-danger"},void 0,o.touched?o.error:"")),(0,s["default"])("div",{className:"form-group "+(n.touched&&n.error?"has-error":"")},void 0,F,(0,s["default"])("div",{className:"col-sm-8"},void 0,w["default"].createElement("input",(0,a["default"])({id:"email",placeholder:"@email",type:"text",className:"form-control"},n))),(0,s["default"])("div",{className:"col-sm-8 col-sm-offset-4  text-danger"},void 0,n.touched?n.error:"")),(0,s["default"])("div",{className:"form-group "+(i.touched&&i.error?"has-error":"")},void 0,j,(0,s["default"])("div",{className:"col-sm-8"},void 0,w["default"].createElement("input",(0,a["default"])({id:"password",type:"password",className:"form-control"},i))),(0,s["default"])("div",{className:"col-sm-8 col-sm-offset-4  text-danger"},void 0,i.touched?i.error:"")),(0,s["default"])("div",{className:"form-group "+(c.touched&&c.error?"has-error":"")},void 0,E,(0,s["default"])("div",{className:"col-sm-8"},void 0,w["default"].createElement("input",(0,a["default"])({id:"password",type:"password",className:"form-control"},c))),(0,s["default"])("div",{className:"col-sm-8 col-sm-offset-4  text-danger"},void 0,c.touched?c.error:"")),(0,s["default"])("div",{className:"form-group text-center"},void 0,(0,s["default"])("button",{type:"submit",className:"btn btn-primary submit"},void 0,(0,s["default"])("i",{className:l?"fa fa-spinner fa-spin":"fa fa-paper-plane"}),"Зареєструватись"),M)),T,k)}}]),t}(_.Component);S.contextTypes={router:_.PropTypes.object},t["default"]=S},478:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){return new i["default"](function(r,o){t((0,s.signup)(e)).then(function(e){var n=e.payload.data;200!==e.payload.status?(t((0,s.signupFailure)(e.payload)),o(n)):(t((0,s.signupSuccess)(e.payload)),r())})})}Object.defineProperty(t,"__esModule",{value:!0});var a=r(77),i=o(a),s=r(76),c=r(274),u=r(117),l=r(477),f=o(l),d=function(e){var t={};return e.username&&""!==e.username.trim()||(t.username="Введіть імя користувача"),e.name&&""!==e.name.trim()||(t.name="Введіть імя"),e.email&&""!==e.email.trim()||(t.email="Введіть email"),e.password&&""!==e.password.trim()||(t.password="Введіть пароль"),e.confirmPassword&&""!==e.confirmPassword.trim()||(t.confirmPassword="Введіть підтвердження паролю"),e.password&&""!==e.password.trim()&&e.confirmPassword&&""!==e.confirmPassword.trim()&&e.password!==e.confirmPassword&&(t.confirmPassword="Паролі не співпадають"),t},m=function(e,t){return new i["default"](function(r,o){t((0,c.validateUserFields)(e)).then(function(e){var n=e.payload.data;200!==e.payload.status?(t((0,c.validateUserFieldsFailure)(e.payload)),o(n)):(t((0,c.validateUserFieldsSuccess)(e.payload)),r())})})},v=function(e){return{user:e.user}},p=function(e){return{signup:n,resetMe:function(){e((0,c.resetValidateUserFields)())}}};t["default"]=(0,u.reduxForm)({form:"SignupForm",fields:["username","name","email","password","confirmPassword"],asyncValidate:m,asyncBlurFields:["username","email"],validate:d},v,p)(f["default"])}});