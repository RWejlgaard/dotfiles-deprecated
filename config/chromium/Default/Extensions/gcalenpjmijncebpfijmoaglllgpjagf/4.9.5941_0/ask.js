window.sendMessage=function(a,b){a.origin="ask";rea.extension.sendMessage(a,b)};Registry.require(["layout","curtain","i18n"],function(){var a=Registry.get("curtain"),b=Registry.get("i18n"),c=Registry.get("layout");$(document.body).addClass(rea.FEATURES.RUNTIME.MOBILE?"mobile":"desktop");c.init("ask.js",{suc:function(){a.wait(b.getMessage("Please_wait___"))},fail:function(){window.confirm(b.getOriginalMessage("An_internal_error_occured_Do_you_want_to_visit_the_forum_"))&&(window.location.href="https://www.tampermonkey.net/bug")}})});
document.title="...";
