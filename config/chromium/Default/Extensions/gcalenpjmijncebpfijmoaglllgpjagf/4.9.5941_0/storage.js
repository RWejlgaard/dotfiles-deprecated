(function(){Registry.require(["promise"],function(){var g=rea.FEATURES,d=Registry.get("promise"),z=[],n=!0,t=function(){var a=[g.CONSTANTS.STORAGE.VERSION,g.CONSTANTS.STORAGE.TYPE],c={};a.forEach(function(a){c[a]=!0});return{keys:a,has:function(a){return!!c[a]}}}(),p=g.HTML5.LOCALSTORAGE,A=function(){return rea.other.openDatabase("tmStorage","1.0","TM Storage",31457280)},C=function(a){return a},u=function(a,c){if(!a)return c;var b=a[0];a=a.substring(1);switch(b){case "b":return"true"==a;case "n":return Number(a);
case "o":try{return JSON.parse(a)}catch(e){console.error("Storage: getValue ERROR: "+e.message)}return c;default:return a}},v=function(a){var c=(typeof a)[0];switch(c){case "o":try{a=c+JSON.stringify(a)}catch(b){console.error("Storage: setValue ERROR: "+b.message);return}break;default:a=c+a}return a},q=function(a,c){var b=d(),e=Array.prototype.slice.call(arguments,2),f;"string"==typeof a?a==g.DB.USE&&"clean"==c?console.warn("Storage: can't clean currently active storage"):f=k.implementations[a][c]:
f=a[c];if(f)if(e=f.apply(this,e),"object"===typeof e&&e.then)e.then(function(){b.resolve.apply(this,arguments)},function(a){b.reject()});else return e;else b.resolve();return b.promise()},w=function(a,c){var b=d(),e=[];Object.getOwnPropertyNames(c).forEach(function(b){void 0!==c[b]&&e.push(q(a,"setValue",b,c[b]))});d.when(e).done(function(){b.resolve()});return b.promise()},x=function(a,c){var b={};c.forEach(function(c){b[c]=q(a,"getValue",c)});return b},k={secure:{cookie:function(){var a=function(a){document.cookie=
"s_"+a+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"},c=function(){for(var a=document.cookie.split(";"),c=[],b=0;b<a.length;b++){var h=a[b].trim(),l=h.indexOf("="),h=h.substr(0,l);"s_"==h.substr(0,2)&&c.push(h.substr(2))}return c},b={setValue:function(a,c){var b=d(),h=c=v(c),l=new Date;l.setTime(l.getTime()+47304E7);l="expires="+l.toUTCString();document.cookie="s_"+a+"="+h+";"+l+";path=/";b.resolve();return b.promise()},setValues:function(a){var c=[];Object.keys(a).forEach(function(B){c.push(b.setValue(B,
a[B]))});return d.sidebyside(c)},getValue:function(a,c){var b;a:{b="s_"+a+"=";for(var h=document.cookie.split(";"),l=0;l<h.length;l++){for(var d=h[l];" "==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(b)){b=d.substring(b.length,d.length);break a}}b=null}return u(b,c)},deleteAll:function(){var c=d();b.listValues().forEach(function(c){a(c)});c.resolve();return c.promise()},deleteValue:function(c){var b=d();a(c);b.resolve();return b.promise()},listValues:function(){return c().map(function(a){return a})}};
return b}()},implementations:{localStorage:function(){var a={setValue:function(a,b){var e=d(),f=v(b);n&&p.setItem(a,f);e.resolve();return e.promise()},setValues:function(c){var b=[];Object.keys(c).forEach(function(d){b.push(a.setValue(d,c[d]))});return d.sidebyside(b)},getValue:function(a,b){return u(p.getItem(a,b),b)},deleteAll:function(){var c=d();n&&a.listValues().forEach(function(a){t.has(a)||p.removeItem(a)});c.resolve();return c.promise()},deleteValue:function(a){var b=d();n&&p.removeItem(a);
b.resolve();return b.promise()},listValues:function(){for(var a=[],b=0;b<p.length;b++)a.push(C(p.key(b)));return a}};return{options:{},methods:a}}(),sql:function(){var a=null,c=null,b=function(){var a=d();c.db.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)",[],a.resolve,c.onError)});return a.promise()},e=function(){var a=d();c={db:A(),onSuccess:function(a,c){},onError:function(a,c){console.error("webSQL: localDB Error ",c)}};
c.db?b().done(a.resolve):(c=null,a.reject());return a.promise()},f={setValue:function(b,h){var l=d(),e=v(h);n&&(a[b]?c.db.transaction(function(a){a.executeSql("UPDATE config SET value=? WHERE name=?",[e,b],function(){rea.runtime.lastError&&console.warn(rea.runtime.lastError);l.resolve()},c.onError)}):c.db.transaction(function(a){a.executeSql("INSERT INTO config(name, value) VALUES (?,?)",[b,e],function(){rea.runtime.lastError&&console.warn(rea.runtime.lastError);l.resolve()},c.onError)}));a[b]=e;
n||l.resolve();return l.promise()},setValues:function(a){var c=[];Object.keys(a).forEach(function(b){c.push(f.setValue(b,a[b]))});return d.sidebyside(c)},getValue:function(c,b){return u(a[c],b)},deleteAll:function(){var e=d(),h=x(f,t.keys);a=h;n?c.db.transaction(function(a){a.executeSql("DROP TABLE config",[],function(){b().done(function(){w(f,h).done(e.resolve)})},c.onError)}):e.resolve();return e.promise()},deleteValue:function(b){var h=d();delete a[b];n?c.db.transaction(function(a){a.executeSql("DELETE FROM config WHERE name=?",
[b],h.resolve,c.onError)}):h.resolve();return h.promise()},listValues:function(){var c=[];Object.getOwnPropertyNames(a).forEach(function(a){c.push(a)});return c},isWorking:function(){return d.Pledge()}};return{init:function(){var b=d(),h=function(c,m){a={};if(m)for(var h=0;h<m.rows.length;h++)a[m.rows.item(h).name]=m.rows.item(h).value;b.resolve()},l=function(){a?b.resolve():c.db.transaction(function(a){a.executeSql("SELECT * FROM config",[],h,c.onError)})};c?l():e().done(l).fail(b.reject);return b.promise()},
clean:function(){a=null;return d.Pledge()},options:{},methods:f}}(),chromeStorage:function(){var a=null,c=!1,b=!1,e=rea.extension.inIncognitoContext?"incognito":"normal",f=function(c,d){n&&b&&"local"==d&&c&&Object.keys(c).forEach(function(b){var m=c[b];m.newValue?m.newValue.origin!==e&&(a[b]=m.newValue.value,k.notifyDifferentOriginChangeListeners(b,m.newValue)):m.oldValue&&m.oldValue.origin!==e&&delete a[b]})},g={setValue:function(c,b){var f=d();a[c]=b;if(n){var m={};m[c]={origin:e,value:b};rea.storage.local.set(m,
f.resolve)}else f.resolve();return f.promise()},setValues:function(c){var b=d(),f={};Object.keys(c).forEach(function(b){var d=c[b];a[b]=d;n&&(f[b]={origin:e,value:d})});n?rea.storage.local.set(f,b.resolve):b.resolve();return b.promise()},getValue:function(b,c){return void 0===a[b]?c:a[b]},deleteAll:function(){var b=d(),c=x(g,t.keys);a=c;n?rea.storage.local.clear(function(){w(g,c).done(b.resolve)}):b.resolve();return b.promise()},deleteValue:function(b){var c=d();delete a[b];n?rea.storage.local.remove(b,
c.resolve):c.resolve();return c.promise()},listValues:function(){var b=[];Object.getOwnPropertyNames(a).forEach(function(a){b.push(a)});return b},setTemporary:function(a){n=!a;b=!0},isSupported:function(){return d.Pledge()},isWorking:function(){var a=d(),b=0,c=Date.now(),m={};m.foo=c;var y=function(c){5>=++b?(console.warn("storage:",c?c:"storage set/get test failed!"),window.setTimeout(e,b*b*100)):(console.warn("storage: storage set/get test finally failed!"),r&&(window.clearTimeout(r),r=null,a.reject()))},
r=window.setTimeout(function(){r=null},18E4),e=function(){console.debug("Storage: test -> start");var b=Date.now();rea.storage.local.set(m,function(){console.debug("Storage: test -> set after "+(Date.now()-b)+"ms");rea.storage.local.get("foo",function(m){console.debug("Storage: test -> get after "+(Date.now()-b)+"ms");if(m){if(m.foo!==c)return y("read value is different "+JSON.stringify(m.foo)+" != "+JSON.stringify(c));if(rea.runtime.lastError)return y(rea.runtime.lastError&&rea.runtime.lastError.message||
"lastError is set")}else return y("read value is"+m);rea.storage.local.remove("foo",function(){console.debug("Storage: test -> remove after "+(Date.now()-b)+"ms");r&&(window.clearTimeout(r),r=null,a.resolve())})})})};e();return a.promise()}};return{init:function(){var b=d();a?b.resolve():rea.storage.local.get(null,function(d){a={};d&&Object.keys(d).forEach(function(b){var c=d[b];a[b]=c&&c.hasOwnProperty("origin")&&c.hasOwnProperty("value")?c.value:c});c||(rea.storage.onChanged.addListener(f),c=!0);
b.resolve()});return b.promise()},clean:function(){var b=d();a=null;b.resolve();return b.promise()},options:{},methods:g}}(),file:function(){var a=null,c=null,b=function(){var a=d(),b=function(b){console.warn("fileStorage: listFiles() error:",b);a.reject()};c.root.getDirectory("data",{create:!0},function(c){var d=c.createReader(),e=[],f=function(){d.readEntries(function(b){b.length?(e=e.concat(b),f()):a.resolve(e)},b)};f()},b);return a.promise()},e=function(a,b){var e=d(),f=function(b){console.warn("fileStorage: writeFileData(",
a,") error:",b);e.reject()};c.root.getDirectory("data",{create:!0},function(c){c.getFile(a,{create:!0},function(a){a.createWriter(function(a){a.onwriteend=function(c){a.onwriteend=function(a){e.resolve()};a.onerror=f;c=new Blob([b],{type:"text/plain"});a.write(c)};a.truncate(0)},f)},f)},f);return e.promise()},f=function(a){var b=d(),e=function(c){console.warn("fileStorage: getFileData(",a,") error:",c);b.reject()},f=function(a){var c=new FileReader;c.onloadend=function(){b.resolve(this.result)};c.onerror=
e;c.onabort=e;c.readAsText(a)};c.root.getDirectory("data",{create:!0},function(b){b.getFile(a,{},function(a){a.file(function(a){f(a)},e)},e)},e);return b.promise()},g=function(a){var b=d(),e=function(c){console.warn("fileStorage: deleteFile(",a,") error:",c);b.reject()};c.root.getDirectory("data",{create:!0},function(c){c.getFile(a,{create:!1},function(a){a.remove(b.resolve,e)},e)},e);return b.promise()},h=function(){var a=d(),b=function(b){console.warn("fileStorage: removeDir() error:",b);a.reject()};
c.root.getDirectory("data",{create:!0},function(c){c.removeRecursively(a.resolve,b)},b);return a.promise()},l=function(){var c=d();a={};var e=[];b().done(function(b){b.forEach(function(b){"string"!==typeof b&&(b=b.name);e.push(f(b).always(function(c){a[b]=c}))});d.when(e).always(function(){c.resolve()})}).fail(c.resolve);return c.promise()},k={isSupported:function(){var a=d();window.File&&window.FileReader&&window.FileList&&window.Blob?a.resolve():a.reject();return a.promise()},isWorking:function(){return d.Pledge()},
setValue:function(b,c){var f=d(),h=v(c);a[b]=h;n?e(b,h).always(f.resolve):f.resolve();return f.promise()},setValues:function(a){var b=[];Object.keys(a).forEach(function(c){b.push(k.setValue(c,a[c]))});return d.sidebyside(b)},getValue:function(b,c){return u(a[b],c)},deleteAll:function(){var b=d(),c=x(k,t.keys);a=c;n?h().always(function(){w(k,c).always(b.resolve)}):b.resolve();return b.promise()},deleteValue:function(b){var c=d();delete a[b];n?g(b).always(c.resolve):c.resolve();return c.promise()},
listValues:function(){var b=[];Object.getOwnPropertyNames(a).forEach(function(a){b.push(a)});return b}};return{init:function(){var b=d();a?b.resolve():rea.other.requestFileSystem(window.PERSISTENT,31457280,function(a){c=a;l().done(b.resolve)},function(a){a&&console.warn("fileStorage: ",a);b.reject()});return b.promise()},clean:function(){a=null;return d.Pledge()},options:{},methods:k}}()},migrate:function(a,c,b){var e=d(),f=k.implementations[a],g=k.implementations[c];b=b||{};f&&g?q(a,"init").then(function(){return q(c,
"init")}).then(function(){var a=d(),c=[];f.methods.listValues().forEach(function(a){var d=f.methods.getValue(a);b.drop&&c.push(f.methods.deleteValue(a));c.push(g.methods.setValue(a,d))});d.when(c).done(function(){a.resolve()});return a.promise()}).then(function(){return q(c,"clean")}).then(function(){return q(a,"clean")}).done(function(){e.resolve()}).fail(function(){e.reject()}):(console.error("Migration: unknown storage implementation(s) ",a,c),e.reject());return e.promise()},isSupported:function(){return d.Pledge()},
isWorking:function(){return d.Pledge()},setTemporary:function(a){n=!a},init:function(){console.debug("Storage: use "+g.DB.USE);Object.getOwnPropertyNames(k.implementations[g.DB.USE].methods).forEach(function(a){k.__defineGetter__(a,function(){return k.implementations[g.DB.USE].methods[a]})});return k.implementations[g.DB.USE].init?k.implementations[g.DB.USE].init():d.Pledge()},getValues:function(a,c){var b={};c||(c={});Object.getOwnPropertyNames(a).forEach(function(a){b[a]=k.implementations[g.DB.USE].getValue(a,
c[a])});return b},factoryReset:function(){p&&p.removeItem(g.CONSTANTS.STORAGE.LEGACY_VERSION);return k.deleteAll()},isWiped:function(){if("localStorage"===g.DB.USE||!p)return d.Pledge(!1);var a=d(),c=k.getValue(g.CONSTANTS.STORAGE.VERSION),b=!1;p.getItem(g.CONSTANTS.STORAGE.LEGACY_VERSION)&&!c&&(k.listValues().length?console.warn("storage: unable to find version information"):b=!0);a.resolve(b);return a.promise()},setVersion:function(a,c){var b=d();n?(p&&p.setItem(g.CONSTANTS.STORAGE.LEGACY_VERSION,
a),k.setValue(g.CONSTANTS.STORAGE.VERSION,a).then(function(){return c?k.setValue(g.CONSTANTS.STORAGE.SCHEMA,c):d.Pledge()}).always(b.resolve)):b.resolve();return b.promise()},getVersion:function(a){var c=d(),b=k.getValue(g.CONSTANTS.STORAGE.VERSION)||k.getValue(g.CONSTANTS.STORAGE.LEGACY_VERSION)||(p?p.getItem(g.CONSTANTS.STORAGE.LEGACY_VERSION):null);b?c.resolve(b):q("sql","init").then(function(c){b=k.implementations.sql.methods.getValue(g.CONSTANTS.STORAGE.LEGACY_VERSION)||a;return q("sql","clean")}).always(function(){c.resolve(b||
a)});return c.promise()},getSchemaVersion:function(){return k.getValue(g.CONSTANTS.STORAGE.SCHEMA,"3.5")},addDifferentOriginChangeListener:function(a,c){z.push({search:a,cb:c})},notifyDifferentOriginChangeListeners:function(a,c){z.forEach(function(b){0==a.search(b.search)&&b.cb(a,c)})},recover:function(a,c){"string"===typeof a&&(a={method:a,storages:["sql","chromeStorage"]});var b={};a.storages.forEach(function(a){b[a]=!0});if("log"==a.method){var d=null,f,g,h=[{method:"sql",fn:function(a){console.debug("check sql storage for data...");
try{g=A();if(rea.runtime.lastError||!g)return d=rea.runtime.lastError,a();g.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS config(ID INTEGER PRIMARY KEY ASC, name TEXT, value TEXT)",[],function(){console.debug("sql table found/created");a()},function(b,c){d=c;a()})})}catch(b){d=b,window.setTimeout(a,1)}}},{method:"sql",fn:function(a){var b={};g.transaction(function(c){c.executeSql("SELECT * FROM config",[],function(c,d){if(d)for(var e=0;e<d.rows.length;e++)b[d.rows.item(e).name]=
d.rows.item(e).value;f=b;window.setTimeout(a,1)},function(b,c){d=c;a()})})}},{method:"sql",fn:function(a){var c=f?Object.getOwnPropertyNames(f):[];f&&c.length?(console.debug("found values:"),c.forEach(function(a){console.debug("    ",a,f[a]&&30<f[a].length?f[a].substr(0,30):f[a])})):(console.warn("no data found"),b.sql=!1);window.setTimeout(a,1)}},{method:"chromeStorage",fn:function(a){console.debug("check chromeStorage for data...");rea.storage.local.get(null,function(b){f=b;a()})}},{method:"chromeStorage",
fn:function(a){var c=f?Object.getOwnPropertyNames(f):[];f&&c.length?(console.debug("found values:"),c.forEach(function(a){console.debug("    ",a,f[a]&&30<f[a].length?f[a].substr(0,30):f[a])})):(console.warn("no data found"),b.chromeStorage=!1,window.setTimeout(a,1))}}],l=0,k=function(){if(d)console.warn("error:",d);else for(;h[l];){if(b[h[l].method]){h[l].fn(k);l++;return}l++}c&&c()};k()}}};Registry.register("storage","5941",function(){return k})})})();
