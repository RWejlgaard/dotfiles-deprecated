Registry.registerRaw("page.js","5941",function(){return{backup:function(a,F,q,x){var c={safeWindow:{},safeDocument:{},eval:eval,Context:{D:x},exec_fn:function(a,b,c){g(new e.Function(a),b,c)},exec_csp:function(a,b,e){var D="__u__"+(19831206*c.Context.M_r()+1);c.Message.send("csp",{id:D,src:a});c.exec_script(D,b,e)},exec_script:function(b,c,e){var D=a[b];delete a[b];g(D,c,e)}},g,b,A,K,y,S,N,B,u,G,n,ha,e=c.safeWindow;x=function(b){a.console.error("Tampermonkey sandbox preparation failed. This usually is caused by a third-party extension.",
b)};try{(function(){var d=function(a){var b=function(b){return g(a,b,g(A.wrappedJSObject,arguments,[1]))};b.wrappedJSObject=a;return b},ga=function(a,b){for(var c;null!==a&&void 0!==a&&!(c=u(a,b));)a=B(a);return c},C={i_N:G=function(){return function(a){return!("prototype"in a)}}(),i_SS:n=function(){return function(a,b,c){var d=ga(a,b);if(!d||!d.set||G(d.set))return a[b]=c,!0}}(),i_SG:ha=function(){return function(a,b){var c=ga(a,b);if(!c||!c.get||G(c.get))return a[b]}}(),F_a:g=function(){"use strict";
var b=a.Function.apply;return function(a,c,d){var e;ha(a,"apply")===b?e=a.apply(c,d):n(a,q,b)&&(e=a[q](c,d),delete a[q]);return e}}(),E_u:function(b,d){if(c.exec_eval){var e="__u__"+(19831206*c.Context.M_r()+1),g=e+"_";a[g]=d;var u=c.Context.F_c(c.Context.eval,a,"(function() {"+b+'}).apply(window["'+g+'"])');delete a[e];delete a[g];return u}c.exec_csp(b,d)},E_c:function(a,b){c.exec_eval?g(new e.Function(a),b):c.exec_csp(a,b)},F_c:d(a.Function.call),F_b:b=d(a.Function.bind),F_tS:d(a.Function.toString),
A_fE:y=d(a.Array.prototype.forEach),A_sl:A=d(a.Array.prototype.slice),A_sp:d(a.Array.prototype.splice),A_sh:d(a.Array.prototype.shift),A_j:d(a.Array.prototype.join),A_pu:K=d(a.Array.prototype.push),A_po:d(a.Array.prototype.pop),A_m:d(a.Array.prototype.map),A_c:d(a.Array.prototype.concat),A_f:d(a.Array.prototype.filter),A_iO:d(a.Array.prototype.indexOf),O_k:a.Object.keys,O_dP:a.Object.defineProperties,O_dPy:a.Object.defineProperty,O_gOPN:a.Object.getOwnPropertyNames,O_gOPD:u=a.Object.getOwnPropertyDescriptor,
O_gOPDs:a.Object.getOwnPropertyDescriptors||function(a){var b={},c;for(c in a)b[c]=C.O_gOPD(a,c);return b},O_gPO:B=a.Object.getPrototypeOf,O_tS:d(a.Object.prototype.toString),J_p:N=a.JSON.parse,J_s:S=a.JSON.stringify,c_l:a.console.log.bind(a.console),c_i:a.console.info.bind(a.console),c_w:a.console.warn.bind(a.console),c_e:a.console.error.bind(a.console),c_d:a.console.debug.bind(a.console),M_f:a.Math.floor,M_r:a.Math.random,M_m:a.Math.max,N_tS:d(a.Number.prototype.toString),P_r:a.Promise?a.Promise.resolve.bind(a.Promise):
void 0,P_t:a.Promise?d(a.Promise.prototype.then):void 0,P_c:a.Promise?d(a.Promise.prototype.catch):void 0,R_rAAB:a.FileReader?d(a.FileReader.prototype.readAsArrayBuffer):void 0,S_fCC:a.String.fromCharCode,S_m:d(a.String.prototype.match),S_su:d(a.String.prototype.substr),S_se:d(a.String.prototype.search),S_sp:d(a.String.prototype.split),S_r:d(a.String.prototype.replace),S_cCA:d(a.String.prototype.charCodeAt),S_tLC:d(a.String.prototype.toLowerCase),S_tUC:d(a.String.prototype.toUpperCase),D_pFS:d(a.DOMParser.prototype.parseFromString),
X_o:d(a.XMLHttpRequest.prototype.open),X_sRH:d(a.XMLHttpRequest.prototype.setRequestHeader),X_oMT:d(a.XMLHttpRequest.prototype.overrideMimeType),X_gARH:d(a.XMLHttpRequest.prototype.getAllResponseHeaders),X_gRH:d(a.XMLHttpRequest.prototype.getResponseHeader),X_s:d(a.XMLHttpRequest.prototype.send),X_a:d(a.XMLHttpRequest.prototype.abort),D_n:a.Date.now};Object.keys(C).forEach(function(a){c.Context[a]=C[a]});"String Array Object Number parseInt JSON Math Date Event MutationEvent console location Error Uint8Array Blob FileReader DOMParser XMLHttpRequest Function RegExp frames self top document location Promise".split(" ").forEach(function(b){e[b]=
a[b]});["postMessage","addEventListener","removeEventListener","setTimeout","setInterval","clearTimeout","clearInterval","alert","prompt","confirm","encodeURIComponent",function(a){return a.a+a.b}({a:"decodeURI",b:"Component"}),"encodeURI","decodeURI","escape","unescape","atob","btoa","close"].forEach(function(b){var c=a[b];e[b]=function(){return g(c,a,arguments)}});c.createSafeDocument=function(a){"getElementById createEvent createElement dispatchEvent addEventListener removeEventListener".split(" ").forEach(function(b){var d=
a[b];c.safeDocument[b]=function(){return g(d,a,arguments)}})};c.createSafeDocument(F)})()}catch(d){return x(d)}try{c.Message=function(a,b){var c=function(){return g(b.dispatchEvent,b,arguments)},e=function(){return g(b.addEventListener,b,arguments)},u=function(){return g(b.removeEventListener,b,arguments)},q=function(a,c){var d=b.createEvent("MutationEvent");d.initMutationEvent(a,!1,!1,null,null,null,S(c),d.ADDITION);return d},A=function(a,b){var c;a&&(c=G[a])&&(c(b),delete G[a])},n,F,p,L,x=1,G={},
B=[],U=function(a){var b=N(a.attrName);"message.response"==b.m?A(b.r,b.a):n&&!1===n(b,b.r?function(a){a=q(p,{m:"message.response",a:a,r:b.r});c(a)}:function(){})&&K(B,a)};return{init:function(a){L||(L=a);p="2C_"+L;F="2P_"+L;e(F,U,!1)},send:function(a,b,d){if(d){var e=++x;G[x]=d;d=e}else d=null;a=q(p,{m:a,a:b,r:d});c(a)},onMessage:{setListener:function(a,b){n=a;b||(y(B,function(a){U(a)}),B=null)}},cleanup:function(){U&&u(F,U,!1);U=null}}}(e,c.safeDocument),c.Message.init(q),c.Message.onMessage.setListener(function(d){if(c)if("load"==
d.m)c.Context.pageLoaded=!0;else if("DOMContentLoaded"==d.m)c.Context.domContentLoaded=!0;else if("cleanup"==d.m)c.Message.cleanup(),c=null;else if("next"==d.m)if(d.a.id)c.exec_script(d.a.id,c),c.exec_eval=!1;else{if(void 0===c.exec_eval)try{c.exec_eval=b(c.eval,a)("true")}catch(e){c.exec_eval=!1}c.exec_eval?c.exec_fn(d.a.src,c):c.exec_csp(d.a.src,c)}else return!1},!0)}catch(d){return x(d)}},next:function(a,F,q,x,c,g,b,A,K,y,S,N,B,u,G){var n="";A&&(n+="var V = true;\n");y&&(n+="var EV = true;\n");
K&&(n+="var ENV = true;\n");y="";if(B||"complete"==document.readyState)y+="Context.pageLoaded |= true;\nContext.domContentLoaded |= true;\n";else if(u||"interactive"==document.readyState)y+="Context.domContentLoaded |= true;\n";return['var backup = this;\n(function TM_back() {var Context = backup.Context;\nvar copy = function(src) {"use strict";var props = Context.O_gOPN(src);for (var kk, ii=0; (kk=props[ii]) !== undefined; ii++) {Context[kk] = src[kk];};};copy(backup);with (Context) {(function() {"use strict";copy({Context: Context,V:',
A?"true":"false",",ENV:",K?"true":"false",",TS:",S?"true":"false",",D:",N?"true":"false",",use:",g,",windowProps:",x,",scripts:",F,",powers:",q,",_content: false,flags:",c,',write_listeners: []});var cleanup = function(evt) {Message.cleanup();safeWindow.removeEventListener("unload", cleanup, false);};safeWindow.addEventListener("unload", cleanup, false);Context.write_listeners.push(function(d) {Context.createSafeDocument(d);Message.init();});',n+("var logLevel = "+b+";\n")+('var contextId = "'+a+
'";\n')+"var Event = function() {};var Window = function() {};Window.prototype = {};"+y+"("+G+")(Context, contextId);\n","})();};})()"].join("")},environment:function(a,F){var q=a.V,x=a.EV,c=a.D,g=a.Message,b=a.safeWindow,A=window,K=a.safeDocument,y=a.flags,S=a.i_N,N=a.i_SS,B=a.i_SG,u=a.F_a,G=a.F_c,n=a.F_b,ha=a.F_tS,e=a.A_fE,d=a.A_sl,ga=a.A_sp,C=a.A_pu,D=a.A_po,ta=a.A_sh,T=a.A_j,ua=a.A_f,ma=a.A_iO,Ea=a.A_c,p=a.O_k,L=a.O_dP,ba=a.O_dPy,Da=a.O_gOPN,Fa=a.O_gOPD,U=a.O_gOPDs,Ca=a.O_tS,va=a.J_p,qa=a.J_s,
v=a.c_l,Ga=a.c_i,P=a.c_w,ia=a.c_e,H=a.c_d,Ha=a.M_f,wa=a.M_r,xa=a.M_m,Ia=a.P_r,Ja=a.P_t,Ka=a.P_c,ca=a.S_fCC,na=a.S_m,ya=a.S_su,za=a.S_sp,V=a.S_r,da=a.S_se,Aa=a.S_cCA,ja=a.S_tLC,La=a.S_tUC,Ma=a.R_rAAB,Na=a.D_pFS,Oa=a.X_o,Pa=a.X_sRH,Qa=a.X_oMT,Ra=a.X_gARH,Sa=a.X_gRH,Ta=a.X_s,Ua=a.X_a,Va=a.N_tS,oa=a.D_n,pa=b.Promise||function(){P("There is no browser Promise support!")};a.domContentLoaded|=0;a.pageLoaded|=0;a.domNodeInserted|=0;a.props={};var ea=function(){var d=[],X=function(a){if(document.body)a&&(a(),
a=null);else{var b=["load","DOMNodeInserted","DOMContentLoaded"],c=function(){e(b,function(a){K.removeEventListener(a,c,!1)});X(a)};e(b,function(a){K.addEventListener(a,c,!1)})}},h=function(c){C(d,function(){b.setTimeout(c,1)});a.domContentLoaded&&r.runListeners()},r={runListeners:function(){for(var a;a=ta(d);)a()},run:function(b){var e=function(){Wa.create(b)};"document-start"==b.script.options.run_at?(c&&H('env: run "'+b.script.name+'" ASAP -> document-start'),e()):"document-body"==b.script.options.run_at?
(c&&H('env: schedule "'+b.script.name+'" for document-body'),X(e)):"context-menu"==b.script.options.run_at?(c&&H('env: run "'+b.script.name+'" ASAP -> context-menu'),e()):"document-end"==b.script.options.run_at?(c&&H('env: schedule "'+b.script.name+'" for document-end'),C(d,e),a.domContentLoaded&&r.runListeners()):(c&&H('env: schedule "'+b.script.name+'" for document-idle'),h(e))}};return r}();(q||c)&&H("env: initialized (content, id:"+ya(F,0,10)+"..., "+b.location.origin+b.location.pathname+") ");
var Y={createUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*wa()|0;return Va("x"==a?b:b&3|8,16)})},toType:function(a){return na(Ca(a,{}),new b.RegExp("\\s([a-z|A-Z]+)"))[1]}},M={UTF8:{encode:function(a){return b.unescape(b.encodeURIComponent(a))},decode:function(a){return b.decodeURIComponent(b.escape(a))}},Base64:{encode:function(a){for(var c="",d=0;d<a.length;d++)c+=ca(Aa(a,d)&255);return b.btoa(c)},decode:function(a){return b.atob(a)}},str2arrbuf:function(a){for(var c=
new b.Uint8Array(a.length),d=0;d<a.length;d++)c[d]=Aa(a,d);return c.buffer},arrbuf2str:function(a){var c="";a=new b.Uint8Array(a);for(var d=0;d<a.length;d+=32687)c+=u(ca,null,a.subarray(d,d+32687));return c}},Q=function(){var a={},b,d=function(b){var c=[],d=[],h=function(){p=d=c=null;delete a[b]},p={postMessage:function(a){g.send("port.message",{response_id:b,value:a})},onMessage:{addListener:function(a){C(c,a)}},onDisconnect:{addListener:function(a){C(d,a)}},disconnect:function(){g.send("port.message",
{response_id:b,disconnect:!0});h()}};a[b]={message:function(a){c&&e(c,function(b){b(a)})},disconnect:function(a){d&&e(d,function(b){b(a)});h()}};return p};return{message:function(e){var h;e.connect?b&&b(e.destination,d(e.response_id)):(h=a[e.response_id])?e.disconnect?h.disconnect():h.message(e.value):c&&P("ports: unkown id",e.response_id,e)},connect:function(a){var b=Y.createUUID();g.send("port.message",{response_id:b,connect:!0,destination:a});return d(b)},onConnect:{addListener:function(a){b=a}}}}(),
ra=function(){var a={objs:{},push:function(b,c){0!==c&&1!==c&&(c=0);var d=Ha(19831206*wa()+1);a.objs[d]={fn:b,prio:c};return d},remove:function(b){delete a.objs[b]},get:function(b){for(var c=[],d=0;1>=d;d++)e(p(a.objs),function(e){a.objs[e].prio!==d||void 0!==b&&e!=b||C(c,a.objs[e].fn)});return void 0===b?c:c[0]},finalize:function(b){if(void 0===b){b=a.get();for(var c=0;c<b.length;c++)b[c]()}else return a.objs[b]&&(c=a.objs[b].fn(),delete a.objs[b]),c}};return a}(),h=y.statistics?function(a,c){b.setTimeout(function(){g.send("api",
{name:a,type:c},null)},1)}:function(){},aa=function(){var a=function(a,b){h("GM_openInTab");var d=null,e=!1,g=null,p,u=function(){var a=[];return{run:function(b){b&&C(a,b);if(d)for(;a.length;)D(a)()}}}(),q=Q.connect("openInTab");q.onMessage.addListener(function(a){a.tabId?e?q&&q.postMessage({close:!0}):(d=a.tabId,u.run()):a.name?p=a.name:a.closed&&(e=!0,g&&(g(),g=void 0))});q.onDisconnect.addListener(function(){q=null});q.postMessage({method:"openTab",url:a,options:b});var v={};L(v,{close:{value:function(){h("GM_openInTab.close");
e?c&&H("env: attempt to close already closed tab!"):(e=!0,q&&q.postMessage({close:!0}))}},closed:{get:function(){h("GM_openInTab.closed");return e}},onclose:{get:function(){return g},set:function(a){h("GM_openInTab.onclose=");g=a}},name:{get:function(){return p},set:function(a){u.run(function(){h("GM_openInTab.name=");q&&q.postMessage({name:a})})}}});return v},d=function(a,c){h("GM_download");var d="Object"===Y.toType(a)?a:{url:a,name:c},e=function(a,c){c=c||{};a&&b.setTimeout(function(){u(a,c,[c])},
1)},g=Q.connect("download");g.onMessage.addListener(function(a){try{a.load?d.onload&&e(d.onload,a.data):a.progress?d.onprogress&&e(d.onprogress,a.data):a.timeout?d.ontimeout&&e(d.ontimeout,a.data):d.onerror&&e(d.onerror,a.data)}catch(b){v("env: Error: TM_download - ",b,d)}});g.onDisconnect.addListener(function(){g=null});g.postMessage({details:d});return{abort:function(){if(g)return g.postMessage({cancel:!0}),g.disconnect(),g=null,!0}}},A={};return{log:function(){h("GM_log");u(v,this,arguments)},
addStyle:function(a,b){h("GM_addStyle");var c=Y.createUUID();g.send("addStyle",{css:a,id:c},b?function(){b()}:null);return K.getElementById(c)},closeTab:function(a){h("window.close");g.send("closeTab",null,a?function(){a()}:null)},focusTab:function(a){h("window.focus");g.send("focusTab",null,a?function(){a()}:null)},setClipboard:function(a,b,c){h("GM_setClipboard");g.send("setClipboard",{content:a,info:b,id:F},c?function(){c()}:null)},syntaxCheck:function(a,b){g.send("syntaxCheck",{code:a},function(a){b(a)})},
of:function(r){var E=r.script,n=function(){var a=[],d=r.storage,k=0,f=function(a,d){if("string"===typeof a){var c=a[0];a=ya(a,1);switch(c){case "b":return"true"===a;case "n":return b.Number(a);case "x":return M.UTF8.decode(M.Base64.decode(a));case "o":try{return va(a)}catch(k){v("values: parseValueFromStorage: "+k)}return d;default:return a}}else return d},t=function(b,d,k,m){d!=k&&e(a,function(a){if(a&&a.key==b&&a.cb)try{a.cb(b,f(d),f(k),m)}catch(I){c&&P('values: change listener of "'+b+'" failed with: '+
I.message)}})},l=function(a){m.postMessage({method:"saveStorageKey",uuid:E.uuid,key:a,value:d.data[a],id:F,ts:d.ts})},m=Q.connect("values");m.onMessage.addListener(function(a){a.storage&&e(p(a.storage.data),function(b){var c=d.data[b];d.data[b]=a.storage.data[b];var k=d.data[b];q&&v("values: message - config key "+b+": "+c+" -> "+k);t(b,c,k,!0)});a.removed&&(d[a.removed]=void 0)});m.onDisconnect.addListener(function(){c&&v("values: port disconnected")});m.postMessage({method:"addStorageListener",
uuid:E.uuid,id:F});return{set:function(a,b){h("GM_setValue");var c=d.data[a];d.ts=oa();var k=d.data,I;a:{I=b;var f=(typeof I)[0];switch(f){case "o":try{I=f+qa(I)}catch(e){v(e);I=void 0;break a}break;case "s":var w=ca(8232),z=ca(8233);if(-1!==da(I,w)||-1!==da(I,z))f="x",I=M.Base64.encode(M.UTF8.encode(I));I=f+I;break;default:I=f+I}}k[a]=I;l(a);t(a,c,d.data[a],!1)},get:function(a,b){h("GM_getValue");return f(d.data[a],b)},remove:function(a){h("GM_deleteValue");var b=d.data[a];d.ts=oa();delete d.data[a];
l(a);t(a,b,d.data[a],!1)},list:function(){h("GM_listValues");return p(d.data)},registerChangeListener:function(b,d){h("GM_addValueChangeListener");var c=++k;C(a,{id:c,key:b,cb:d});return c},unregisterChangeListener:function(b){h("GM_removeValueChangeListener");a=ua(a,function(a){return a.id!==b?!0:!1})}}}(),x=function(){return{getText:function(a){h("GM_getResourceText");for(var b=0;b<E.resources.length;b++){var c=E.resources[b];if(c.name==a&&!c.failed){try{if(null!==c.content)return M.UTF8.decode(c.content)}catch(d){}return""}}return null},
getURL:function(a){h("GM_getResourceURL");for(var b=0;b<E.resources.length;b++){var c=E.resources[b];if(c.name==a&&!c.failed){if(null===c.content)return"";try{return"data:"+(c.meta||"application")+";base64,"+M.Base64.encode(c.content)}catch(d){}return c.url}}return null}}}(),G=function(){return{set:function(a,b){h("GM_setTab");g.send("tabs",{action:"set",uuid:E.uuid,tab:a},b?function(){b()}:null)},get:function(a){h("GM_getTab");g.send("tabs",{action:"get",uuid:E.uuid},a?function(b){a(b||{})}:null)},
getAll:function(a){h("GM_getTabs");g.send("tabs",{action:"list",uuid:E.uuid},a?function(b){a(b||{})}:null)}}}(),L=function(a){h("GM_xmlhttpRequest");var c=!1,d=a.context;delete a.context;var f=function(){var a={};e(p(b.XMLHttpRequest.__proto__),function(b){a[b]=!0});var c=function(){};e(p(b.XMLHttpRequest),function(w){a[w]||(c[w]=b.XMLHttpRequest[w])});return c}(),t=function(){c=!0},l=function(a,d,w){d=d||{};!a||c&&!w||b.setTimeout(function(){d.__proto__=f;u(a,d,[d])},1)};"object"===typeof a.url&&
a.url.href&&(a.url=a.url.href);var m=function(a,c){var d=new b.FileReader;d.onload=function(){c(M.arrbuf2str(d.result))};Ma(d,a)},O=function(a,c){var d,z,k,f=Y.toType(a);if("Blob"===f||"File"===f)m(a,function(b){c({type:f,value:b,meta:a.type,name:a.name,lastModified:a.lastModified})});else if("FormData"===f)if(z=a.keys&&a.getAll?a.keys():null){var e,I={};for(d=[];!(e=z.next()).done;)C(d,e.value);k=function(){if(d.length){var b=D(d),z=a.getAll(b);-1===da(b,/\[\]$/)&&(z=z[0]);O(z,function(a){I[b]=a;
k()})}else c({type:"FormData",value:I})};k()}else c({error:f});else if(!(f=Y.toType(a))||"Array"!==f&&"Object"!==f)c({value:a});else{var t,l,J=0;z=0;"Object"===f?(d=p(a),l=function(a){return a<d.length?d[a]:null},t={}):(l=function(b){return b<a.length?b:null},t=[]);k=function(){var d=l(J);null===d?c({type:f,value:t}):O(a[d],function(a){a.error?c(a):(t[d]=a,J++,1024>z++?k():(z=0,b.setTimeout(k,1)))})};k()}},J=function(a){var b={};a&&a.split("\n").forEach(function(a){(a=a.match(/^([^:]+): ?(.*)/))&&
(b[a[1].toLowerCase()]=a[2]||"")});return b},la=function(a,c,d,z){if("text"==d)a="document"==c?a.document:a;else if("arraybuffer"==c)a=M.str2arrbuf(a);else if("blob"==c)a=new b.Blob([M.str2arrbuf(a)],{type:z});else if("json"==c)a=va(a);else if("document"==c){if(a.error){P("GM_xmlhttpRequest:",a.error);return}c=new b.DOMParser;return Na(c,a.document,a.contentType)}return a},g=!0;(function(b){if(a.url){var c=a.url.substr(0,5);if(-1!=["data:","blob:"].indexOf(c))return g=!1,b()}if(!a.data)return b();
O(a.data,function(c){c.error?(g=!1,P("GM_xmlhttpRequest:","unable to handle data type "+c.error+". Going to use default xhr as fallback.")):(a.binary&&(c.type="Blob"),a.data=c,a.data_type="typified");b()})})(function(){"use strict";if(!c)if(g){var f=Q.connect("xhr"),m=[];a.headers&&e(p(a.headers),function(b){"cookie"===ja(b)&&(a.cookie=a.headers[b],delete a.headers[b])});f.postMessage({method:"xhr",details:a,callbacks:{onloadstart:!!a.onloadstart,onload:!!a.onload,onreadystatechange:!!a.onreadystatechange,
onerror:!0,ontimeout:!!a.ontimeout,onprogress:!!a.onprogress,onpartial:!0},id:F,url:b.location.href,uuid:E.uuid});f.onMessage.addListener(function(b){b.data&&d&&(b.data.context=d);if(b.data&&b.onload){m.length&&(b.data.response_data=T(m,""),m=null);if(b.data.response_data){var c=b.data.response_data,f=b.data;e(["response_data"],function(a){delete b.data[a]});var w={response:function(b,c){h("GM_xmlhttpRequest.response["+(a.responseType||"unknown")+"]");var d=a.responseType?ja(a.responseType):"",f=
"binary/octet-stream";c&&(f=J(c.responseHeaders)["content-type"]||f);return la(b,d,null,f)},responseText:function(b){h("GM_xmlhttpRequest.responseText");var c=a.responseType?ja(a.responseType):"";return la(b,c,"text")},responseXML:function(a){h("GM_xmlhttpRequest.responseXML");return la({document:a,contentType:"text/xml"},"document")}};e(p(w),function(a){ba(b.data,a,{get:function(){try{return w[a](c,f)}catch(b){P("GM_xmlhttpRequest:",b)}}})})}l(a.onreadystatechange,b.data);l(a.onload,b.data)}else if(b.onreadystatechange)4!=
b.data.readyState&&l(a.onreadystatechange,b.data);else if(b.onpartial)C(m,b.data.partial);else if(b.onerror)b.exception&&ia(b.exception),l(a.onerror,b.data);else{var t=ua(["onloadstart","onprogress","ontimeout"],function(a){return!!b[a]})[0]||"onerror";l(a[t],b.data)}});q&&f.onDisconnect.addListener(function(){v("env: GM_xmlhttpRequest.onDisconnect! :)")});t=function(){h("GM_xmlhttpRequest.abort");f&&(f.disconnect(),f=null,c=!0,l(a.onabort,null,!0))}}else{var w=new b.XMLHttpRequest;void 0===a.async&&
(a.async=!0);Oa(w,a.method,a.url,a.async,a.user,a.password);a.headers&&e(p(a.headers),function(b){Pa(w,b,a.headers[b])});a.overrideMimeType&&Qa(w,a.overrideMimeType);a.responseType&&(w.responseType=a.responseType);e("abort error load loadstart progress readystatechange timeout".split(" "),function(b){var c="abort"==b;w["on"+b]=function(){var f="",e=a.url;if(2<w.readyState&&(f=Ra(w),4==w.readyState)){f&&(f=V(f,/TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/,""));var m;try{m=Sa(w,"TM-finalURL"+y.short_id)}catch(t){}m&&
(e=m)}f={readyState:w.readyState,status:"",statusText:"",responseHeaders:f,finalUrl:e,context:d};4==w.readyState&&(w.responseType?f.response=w.response:(f.responseText=w.responseText,f.responseXML=w.responseXML),f.status=w.status,f.statusText=w.statusText);l(a["on"+b],f,c)}});Ta(w,a.data);t=function(){h("GM_xmlhttpRequest.abort");Ua(w);c=!0}}});return{abort:function(){t()}}},N=function(a){var b={};e(p(a),function(c){b[c]=a[c]});b.id=F;h("GM_notification");b.text||b.highlight?g.send("notification",
b,function(a){if(b.onclick&&a.clicked)b.onclick();if(b.ondone)b.ondone(!0===a.clicked)}):P("GM_notification: neither a message text nor hightlight options were given!")},B,K=function(){if(B)return B;var a=r.script,b={id:1,enabled:1,hash:1,fileURL:1},c={script:{}};e(p(a),function(d){b[d]||(c.script[d]=a[d])});var d=a.options.updateURL||a.options.fileURL;c.script["run-at"]=a.options.override.run_at||a.options.run_at;c.script.excludes=a.options.override.orig_excludes;c.script.includes=a.options.override.orig_includes;
c.script.matches=a.options.override.orig_matches;c.script.grant=a.grant;c.script.unwrap=!1;c.scriptMetaStr=r.header;c.scriptSource=r.code;c.scriptWillUpdate=!!d;c.scriptUpdateURL=d;c.version=y.version;c.scriptHandler="Tampermonkey";c.isIncognito=y.inIncognitoContext;c.downloadMode=y.downloadMode;return B=c},H,J=function(a,b){h("GM_webRequest");var c=function(){H==d&&(H=null);d=null};H&&H.disconnect();var d=H=Q.connect("webRequest");b&&d.onMessage.addListener(function(a){b(a.type,a.message||"ok",a.details)});
d.onDisconnect.addListener(c);d.postMessage({rules:a,uuid:E.uuid});return{abort:function(){h("GM_webRequest.abort");d&&d.disconnect();c()}}},O=function(){var a=0,c={},d={register:function(f,e,l){h("GM_registerMenuCommand");var m=Q.connect("registerMenuCommand");m.onMessage.addListener(function(a){"run"===a&&b.setTimeout(e,1)});m.onDisconnect.addListener(function(){d.unregister(O)});m.postMessage({method:"register",name:f,uuid:E.uuid,accessKey:l});q&&v("env: registerMenuCommand "+ha(e));var O=++a;
c[O]=m.disconnect;return O},unregister:function(a){h("GM_unregisterMenuCommand");q&&v("env: unregisterMenuCommand "+a);var b;if(b=c[a])b(),delete c[a]}};return d}(),la=function(){"use strict";var a=function(a,c){return{action:a,uuid:E.uuid,url:b.location.href,details:c}};return{set:function(b,c){h("GM_cookie.set");g.send("cookie",a("set",b),c?function(a){c(a.error)}:null)},delete:function(b,c){h("GM_cookie.delete");g.send("cookie",a("delete",b),c?function(a){c(a.error)}:null)},list:function(b,c){h("GM_cookie.list");
g.send("cookie",a("list",b),c?function(a){c(a.cookies,a.error)}:null)}}}();A[r.script.uuid]=A[r.script.uuid]||{getInfo:K,registerMenuCommand:O.register,unregisterMenuCommand:O.unregister,download:d,webRequest:J,openInTab:a,setValue:n.set,getValue:n.get,deleteValue:n.remove,listValues:n.list,addValueChangeListener:n.registerChangeListener,removeValueChangeListener:n.unregisterChangeListener,getResourceText:x.getText,getResourceURL:x.getURL,notification:N,xmlhttpRequest:L,cookie:la,setTab:G.set,getTab:G.get,
getTabs:G.getAll};return A[r.script.uuid]}}}(),Wa=function(){var W=function(a,b,c,d){var g=U(b);e(p(g),function(c){var f=g[c];if(!f||!f.get||S(f.get)||d)"function"===typeof b[c]?a[c]=n(b[c],b):function(){ba(a,c,{get:function(){"use strict";return b[c]}})}()});e(p(c),function(b){a[b]=c[b]});return a},F=function(a,c,d,g){var h={attrChange:0,attrName:null,bubbles:!0,cancelBubble:!1,cancelable:!1,clipboardData:void 0,currentTarget:null,defaultPrevented:!1,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,
returnValue:!0,srcElement:null,target:null,timeStamp:oa()};d="string"===typeof d?new b.Function(d):d;var k=new Event;e(p(h),function(a){k[a]=h[a]});e(p(c),function(a){k[a]=c[a]});k.type=a;u(d,g,[k])},K=function(a,b,c,d){void 0===d&&(d=function(a,b){return b});e(Ea(["GM_info","GM.info"],b),function(b){var e,f=c[b];f&&(e=d(b,f))&&(a[b]=e)})},r=function(a,b){void 0===b&&(b=100);return b&&a&&(a==document||r(a.parentNode,b-1))},E=function(){var b=null;return function(c){b||(b={instance:c,is_open:!1},e(["write",
"writeln","open","close"],function(d){b[d]=c[d];c[d]=function(){var h=!1;-1!=ma(["write","writeln","open"],d)?b.is_open?h=!0:b.is_open=!0:"close"===d&&(b.is_open=!1);!h&&b.is_open&&g.send("document.write");var p=document.documentElement,k=u(b[d],c,arguments);if(!h&&b.is_open)return p!==document.documentElement&&(b.instance!==c&&(b=null,E(document)),e(a.write_listeners,function(a){a(document)})),k}}))}}(),M={},D=[],Q=function(d,e,h){if(!d.__addEventListener){L(d,{__addEventListener:{value:d.addEventListener,
enumerable:!1,configurable:!1},__removeEventListener:{value:d.removeEventListener,enumerable:!1,configurable:!1}});var g=[],p=function(a){for(var b=0;b<g.length;b++)if(g[b].fn===a)return b};d.removeEventListener=function(a,b,c){c=!!c;var d,e,k;if(void 0!==(d=p(b))&&(e=g[d].listeners)){if(k=e[a+"-"+c])this.__removeEventListener(a,k,c),delete e[a+"-"+c];Da(e).length||ga(g,d,1)}else return u(this.__removeEventListener,this,arguments)};var k=function(a,c,d,e){if(c){var k=D.length;c=b.parseInt(T(["DOMContentLoaded"==
d?1:2,e?1:2,e?c:3-c,oa()],"0"));for(d=0;d<D.length;d++)if(e=D[d],!e||!e.prio||e.prio>c){k=d;break}ga(D,k,0,{prio:c,fn:a})}else C(D,{fn:a})};d.addEventListener=function(d,t,l){(q||x)&&v("env: addEventListener "+d);if(t&&(1==e&&"load"==d||"DOMContentLoaded"==d||"DOMNodeInserted"==d)){l=!!l;var m,J=!0,n=this;try{try{throw new b.Error;}catch(R){var r=/tms_[0-9a-f_]+/,fa=R.stack||R.stacktrace;if(fa)for(var A=za(fa,"\n"),Ba,fa=0;fa<A.length&&(!(Ba=na(A[fa],r))||!(m=M[Ba[0]]));fa++);else{var w=function(a,
d){void 0===d&&(d=10);if(0===d)return null;if(a.caller){var e,f;try{return f=ha(a.caller),na(f,new b.RegExp("^function[^(]+"))&&(void 0).length&&(e=na((void 0)[0],r))?e[0]:w(a.caller,d-1)}catch(z){c&&P("env: unable to detect caller context",z)}}return null},z;if(z=w(arguments.callee))m=M[z]}}}catch(R){c&&ia("env: Error: event "+d,R)}m&&"document-idle"!==m.run_at&&(m=null,"load"==d?a.pageLoaded&&(m=function(){var a=t,c=n,d=n.document||n;(q||x)&&v("env: postLoadEvent!");d=d||document;F("load",{attrName:"null",
newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:d,relatedNode:d,srcElement:d},a,c)},J=!1,k(m,e,d,l)):"DOMContentLoaded"==d&&a.domContentLoaded&&(m=function(){var a=t,c=n,d=n.document||n;(q||x)&&v("env: postDomEventListener!");d=d||document;F("DOMContentLoaded",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:d,relatedNode:d,srcElement:d},a,c)},J=!1,k(m,e,d,l)),m&&(b.setTimeout(function(){if(D.length){var a=
ta(D);a&&a.fn&&a.fn()}},1),J=!1));J&&(m=function(a){return ka(G,[t,this,h(a)],0,!0,n)},void 0===(J=p(t))&&(J=g.length,C(g,{fn:t,listeners:{}})),g[J].listeners[d+"-"+l]=m,this.__addEventListener(d,m,l))}else return u(this.__addEventListener,this,arguments)};C(ra,function(){d.removeEventListener=d.__removeEventListener;d.addEventListener=d.__addEventListener})}},ca=function(a){a.__evaluate||(L(a,{__evaluate:{value:a.evaluate,enumerable:!1,configurable:!1}}),a.evaluate=function(a,b,c,d,e){q&&v("env: document.evaluate "+
a);b||(b=this);var f;if("undefined"!=typeof XPathResult){var g=a,h=null;try{f=this.__evaluate(g,b,c,d,e)}catch(p){h=p}var m=!1;try{m|=!!f.snapshotLength}catch(p){}try{m|=!!f.singleNodeValue}catch(p){}if(m||"."==a[0]||r(b))q&&v("env: queried document for "+g);else{q&&v("env: query added elem for "+g);g=("/"==a[0]?".":"./")+a;try{f=this.__evaluate(g,b,c,d,e)}catch(p){}}q&&v("env: query returned ",f,h);if(!m&&h)throw h;}else q&&v("env: XPathResult == undefined, but selectNodes via ",a),f=b.selectNodes(a);
return f},C(ra,function(){a.evaluate=a.__evaluate}))},ka=function(a,c,d,e,g){var k=c[d],f=typeof k;e&&"string"===f?c[d]=new b.Function(k):g&&"function"===f&&(c[d]=function(){return u(k,g,arguments)});return u(a,A,c)},ea=function(c,d){var g=["eval"],h={};e(p(c),function(a){c[a].context_prop&&(h[(a.split(".")||[])[1]]=!0)});var q=function(a,c,d,l){var m=function(b){return b===c?a:b},q=function(a,b,c,d){c||(c=a);var e=a[b];a=function(){"use strict";var a=u(e,c,arguments);d&&(a=d(a));return a};a.__proto__=
e;a.prototype=e.prototype;return a},O=function(c){var d,e=c.substr(2),f;ba(a,c,{get:function(){return d},set:function(c){"use strict";(d=c)&&!f?(f=function(){if("function"===typeof d)return u(d,a,arguments)},b.addEventListener(e,f,!0)):!d&&f&&(b.removeEventListener(e,f,!0),f=null)}})},J=function(b,d,e,g){var h,l={};l.get="function"===typeof d?d:function(){"use strict";g&&g.get_cb&&u(g.get_cb,this,[arguments,J]);return void 0===h?m(c[b]):h};"function"===typeof e?l.set=e:d||(l.set=function(a){h=a});ba(a,
b,l)};e(p(l),function(a){d[a]=d[a]||!1!==l[a]});var v=y.sandbox_allow_getters,r=y.detect_constructors_by_keys;e(p(d),function(b){var e,z,R,C,y,sa,Z,E,F,x,W,D,G,H;try{var B;(B=Fa(c,b))&&B.get&&(y=!S(B.get));try{if(!(z=l[b])||z.needs_grant&&!0!==h[b])if((e=d[b])&&e.event)G=!0;else if(B&&B.get)if(y)if(v)Z=!0;else return;else Z=function(){"use strict";return m(u(B.get,A))};else"function"===(C=typeof(R=c[b]))?e.proto?sa=!0:(B.enumerable||!(r&&p(R).length||!S(R)))&&-1==ma(g,b)&&"bind"in R?W=!0:x=!0:"number"===
C||"string"===C?Z=!0:x=!0;else if(z.wrap)sa=!0,D=z.that;else if(z.direct)x=!0;else if(z.enhance)H=z.enhance;else if(z.get||z.set)Z=z.get,E=z.set,F=z.opts}catch(K){Z=E=!0}if(H)a[b]=H;else if(!y||v)G?O(b):Z||E?J(b,Z,E,F):sa?a[b]=q(c,b,D,m):x?a[b]=m(c[b]):W&&(a[b]=n(c[b],c))}catch(K){P("env: error while creating a new sandbox["+b+"]: "+K.message)}});return a};return function(){var c=new Window,f={setTimeout:{enhance:function(){"use strict";return ka(b.setTimeout,arguments,0,!0,c)}},setInterval:{enhance:function(){"use strict";
return ka(b.setInterval,arguments,0,!0,c)}},close:{needs_grant:!0,get:function(){"use strict";return b.self==b.top?function(a){return aa.closeTab(a)}:b.close}},focus:{needs_grant:!0,get:function(){return function(a){"use strict";return aa.focusTab(a)}}},location:{get:!0,set:function(a){"use strict";b.location.href=a}},name:{get:function(){"use strict";return B(A,"name")},set:function(a){"use strict";N(A,"name",a)}},document:{get:function(){"use strict";var a=b.document;d(a);return a}},clearInterval:{get:function(){"use strict";
return b.clearInterval}},clearTimeout:{get:function(){"use strict";return b.clearTimeout}},addEventListener:{enhance:function(){"use strict";return ka(b.addEventListener,arguments,1,!0)}},removeEventListener:{enhance:function(){"use strict";return ka(b.removeEventListener,arguments,1,!0)}}};(function(){var a=xa(b.frames.length,7);f.length={get:!0,opts:{get_cb:function(c,d){"use strict";for(var e=b.frames.length,f=a;f<e;f++)d(b.String(f),{get:!0});a=xa(e,a)}}};for(var c=0;c<a;c++)f[b.String(c)]={get:!0}})();e(p(b),
function(a){b[a]!=A&&(f[a]=f[a]||{enhance:b[a]})});var g=q(c,A,a.windowProps,f),h={context:g,filter:function(a){"use strict";return a==A?g:a},filterEvent:function(a){var b={},c;for(c in a)if("function"===typeof a[c])b[c]=function(){var b=c;return function(){return u(a[b],a,arguments)}}();else{var d=h.filter(a[c]);b[c]=d}return b}};return h}()},da=function(){return W({},b.console,{debug:H,log:v,info:Ga,warn:P,error:ia},!1)},ja=function(d,g,h,q,n,k,f){var t=null,l=function(){return"[Tampermonkey property]"};
try{var m=q.sandboxes[d.uuid],v=["context","fapply"],r=[void 0,void 0],E=q.elements[d.uuid];e(p(E),function(a){var b=E[a];b.overwrite?(C(v,a),C(r,b.value)):b.context_prop||(C(v,a),C(r,"context."+a),b.getter?ba(m,a,{get:b.getter}):m[a]=b.value);b.protect&&m[a]&&N(m[a],"toString",l)});var A,t=T(["(function(context, fapply, console) {","with (context) {","(function(module) {",'"use strict";',"try {\n",y.measure_scripts?'console.time("'+(A="SCRIPT RUN TIME["+d.name.replace(/\W+/g," ")+"]")+'");\n':"","fapply(module, context, [",
T(r,","),"]);",y.measure_scripts?'console.timeEnd("'+A+'");\n':"","} catch (e) {","if (e.message && e.stack) {","console.error(\"ERROR: Execution of script '",V(d.name,new b.RegExp("[\"']","g"),"\\$1"),"' failed! \" + e.message);",'console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));',"} else {","console.error(e);","}","}\n","})","(function ",k,"(",T(v,","),") {",y.enforce_strict_mode?'"use strict";\n':"",h,g,"\n","})","}","})(this.context, this.fapply, this.console);\n",
f?"//# sourceURL="+f+"\n":""],""),B={context:m,fapply:u,console:da()};n?n(t,B):a.E_c(t,B)}catch(x){aa.syntaxCheck(T([h,g],""),function(a){var f="";if(a.errors){var k=za(h,"\n").length-1,l="";a.errors&&e(p(a.errors),function(b){if((b=a.errors[b])&&0<=b.line&&b.reason){var c=b.line;l+=T([c>k?"script:":"require:"," (",b.code,") ",V(b.reason,/.$/,"")," on line: ",c>k?c-k:c," at character: ",b.character,"\n"],"")}});f="JSHINT output:\n"+l}else f=g;var m=x.stack?V(x.stack,/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g,
""):"";c||a.errors?ia('Syntax error @ "'+d.name+'"!\n##########################\n'+f+"##########################\n\n"+m):ia('Syntax error @ "'+d.name+'"!\n\n',m);b.setTimeout(function(){throw x;},1)})}};return{create:function(g){var n=g.script,r={},y=-1!==ma(n.grant,"none")?function(b,c){a.E_u(b,c)}:null,x=n.namespace+"_"+!!y;void 0===a.props[x]&&(a.props[x]={sandboxes:{},elements:{}},C(ra,function(){a.props[x]=null}));r.CDATA={value:function(a){h("CDATA");this.src=a;this.toXMLString=this.toString=
function(){return this.src}}};r.uneval={value:function(a){h("window.uneval");try{return"\\$1 = "+qa(a)+";"}catch(b){v(b)}}};r.define={value:void 0};r.module={value:void 0};r.exports={value:void 0};var k={},f={},t={},l=aa.of(g);h(n.options.run_at||"<default>","run_at");if(y)h("none","grant");else{h("sandbox","grant");r.window={value:"context",overwrite:!0};var m={window:A};e(p(m),function(a){var b="unsafe"+V(a,/^(.)/g,function(a){return La(a)});r[b]={value:m[a]};-1!=ma(n.grant,b)&&h(b,"grant")});r.console=
{value:da()};r.cloneInto={value:function(a){h("compat.cloneInto");return a}};r.exportFunction={value:function(a,b,c){h("compat.exportFunction");c&&void 0!==c.defineAs&&(b[c.defineAs]=a);return a}};r.createObjectIn={value:function(a,b){h("compat.createObjectIn");var c={};b&&void 0!==b.defineAs&&(a[b.defineAs]=c);return c}};k.addStyle=aa.addStyle;k.deleteValue=l.deleteValue;k.listValues=l.listValues;k.getValue=l.getValue;k.setValue=l.setValue;k.log=aa.log;k.registerMenuCommand=l.registerMenuCommand;
k.unregisterMenuCommand=l.unregisterMenuCommand;k.openInTab=l.openInTab;k.addValueChangeListener=l.addValueChangeListener;k.removeValueChangeListener=l.removeValueChangeListener;t.xmlhttpRequest=l.xmlhttpRequest;t.download=l.download;k.webRequest=l.webRequest;t.setClipboard=aa.setClipboard;k.getTab=l.getTab;k.setTab=l.setTab;k.saveTab=l.setTab;k.getTabs=l.getTabs;k.getResourceText=l.getResourceText;t.getResourceURL=l.getResourceURL;var B=function(a){return function(){var b=Ia(u(a,this,arguments));
N(b,"then",function(a){return Ja(b,a)});N(b,"catch",function(a){return Ka(b,a)});return b}},F=function(a,b){var c,d=new pa(function(d,f){var g={},h=b.onload,k=b.ontimeout,l=b.onerror;e(p(b),function(a){g[a]=b[a]});g.onerror=function(a){f(a);l&&u(l,this,arguments)};g.ontimeout=function(a){f(a);k&&u(k,this,arguments)};g.onload=function(a){d(a);h&&u(h,this,arguments)};var m=a(g).abort;!0===c?m():c=m});N(d,"abort",function(){c?c():c=!0});return d};e(p(t),function(a){f["GM_"+a]={value:t[a]}});f["GM.getResourceUrl"]=
{getter:function(){return B(t.getResourceURL)}};f["GM.xmlHttpRequest"]={value:function(a){return F(t.xmlhttpRequest,a)}};f["GM.download"]={value:function(a){return F(t.download,a)}};f["GM.setClipboard"]={value:function(a,b){return new pa(function(c){t.setClipboard(a,b,c)})}};f.GM_notification={value:function(a,b,c,d){var f=null,g=["timeout","text","image","title","highlight"],h=null,k={};"object"===typeof a&&(h=a);h?(e(g,function(a){k[a]=h[a]}),f=h.ondone,d=h.onclick,"function"===typeof b&&(f=b)):
(k.image=c,k.title=b,k.text=a);k.text&&(k.image=k.image||n.icon64||n.icon,k.title=k.title||n.name);k.onclick=d;k.ondone=f;l.notification(k)}};f["GM.notification"]={value:function(a){return"object"!==typeof a?P("GM.notification(details): received no details"):new pa(function(b,c){e(p(a),function(a){});l.notification(a)})}};f.GM_cookie={value:function(){var a=l.cookie,b=function(b,c,d){return(a[b]||function(){})(c,d)};e(p(a),function(c){b[c]=a[c]});return b}()};f["GM.cookie"]={value:function(){var a=
function(a,b){return new pa(function(c,d){"list"==a?f.GM_cookie.value(a,b,function(a,b){b?d(b):c(a)}):f.GM_cookie.value(a,b,function(a){a?d(a):c()})})};e(p(l.cookie),function(b){a[b]=function(c){return a(b,c)}});return a}()};e(p(k),function(a){var b=k[a];f["GM_"+a]={value:b};f["GM."+a]={getter:function(){return B(b)}}});f["window.close"]={context_prop:!0};f["window.focus"]={context_prop:!0}}f.GM_info=f["GM.info"]={getter:l.getInfo};var W={};r.GM={value:W,protect:!0};K(r,n.grant,f,function(a,b){if("GM."===
a.substr(0,3))a=a.split(".")[1],ba(W,a,{get:b.getter?b.getter:function(){return b.value}});else return b.protect=!0,b});n.options.compat_prototypes&&((q||c)&&v("env: option: add toSource"),b.Object.prototype.toSource||L(b.Object.prototype,{toSource:{value:function(){h("Object.toSource");var a=Y.toType(this);if("String"===a)return'(String("'+V(this,new b.RegExp('"',"g"),'\\"')+'"))';if("Number"===a)return'(Number("'+b.Number(this)+'"))';if("Array"===a){for(var a="(new Array(",c=0;c<this.length;c++){var d=
Y.toType(this[c]),a="Null"===d?a+"null":"Undefined"===d?a+"undefined":a+this[c].toSource();c+1<this.length&&(a+=",")}return a+"))"}return'JSON.parse(unescape("'+b.escape(qa(this))+'"))'},enumerable:!1,writable:!0,configurable:!0}}),(q||c)&&v("env: option: add some array generics"),e("indexOf lastIndexOf filter forEach every map some slice".split(" "),function(a){if("function"!==typeof b.Array[a]){var c={};c[a]={value:function(c){h("Array."+a);return u(b.Array.prototype[a],c,u(d.wrappedJSObject,arguments,
[1]))},enumerable:!1,writable:!0,configurable:!0};L(b.Array,c)}}));var D,G="";if(y)D=new Window;else{var X=ea(r,function(a){ca(a);E(a);Q(a,2,X.filterEvent)});D={run_at:n.options.run_at,uuid:n.uuid};G="tms_"+V(n.uuid,/-/g,"_");M[G]=D;Q(X.context,1,X.filterEvent);D=X.context}a.props[x].sandboxes[n.uuid]=D;a.props[x].elements[n.uuid]=r;(q||c)&&H("env: execute script "+n.name+" @ the "+(y?"un":"")+"safe context now!");ja(n,g.code,g.requires,a.props[x],y,G,g.source_url)}}}();(function(){if(y.external_connect){var a;
if(a=A.external){var b=function(a,b){g.send("external.message",a,function(a){b&&b(a)})};try{L(a,{Tampermonkey:{get:function(){return{getVersion:function(a){b({method:"getVersion"},a)},isInstalled:function(a,c,d){"function"===typeof c&&(d=c,c=null);b({method:"isInstalled",script:{name:a,namespace:c}},d)}}},configurable:!0}})}catch(c){}}}})();g.onMessage.setListener(function(b){var d=b.a;"load"==b.m?(a.pageLoaded=!0,ea.runListeners()):"DOMContentLoaded"==b.m?(a.domContentLoaded=!0,ea.runListeners()):
"setForeignAttr"==b.m?A[d.attr]=d.value:"port.message"==b.m?Q.message(d):"executeScript"==b.m?ea.run(b.a):"cleanup"==b.m?g.cleanup():c&&v("env: unkown method",b)});c&&v("Tampermonkey started");e(a.scripts,function(a){ea.run(a)})}}}());
