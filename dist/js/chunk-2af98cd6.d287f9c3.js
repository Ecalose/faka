(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2af98cd6"],{"25f0":function(t,e,c){"use strict";var s=c("6eeb"),n=c("825a"),a=c("d039"),o=c("ad6d"),l="toString",r=RegExp.prototype,i=r[l],u=a((function(){return"/a/b"!=i.call({source:"a",flags:"b"})})),j=i.name!=l;(u||j)&&s(RegExp.prototype,l,(function(){var t=n(this),e=String(t.source),c=t.flags,s=String(void 0===c&&t instanceof RegExp&&!("flags"in r)?o.call(t):c);return"/"+e+"/"+s}),{unsafe:!0})},"4d63":function(t,e,c){var s=c("83ab"),n=c("da84"),a=c("94ca"),o=c("7156"),l=c("9bf2").f,r=c("241c").f,i=c("44e7"),u=c("ad6d"),j=c("9f7f"),b=c("6eeb"),f=c("d039"),p=c("69f3").set,d=c("2626"),m=c("b622"),O=m("match"),g=n.RegExp,v=g.prototype,w=/a/g,y=/a/g,h=new g(w)!==w,x=j.UNSUPPORTED_Y,E=s&&a("RegExp",!h||x||f((function(){return y[O]=!1,g(w)!=w||g(y)==y||"/a/i"!=g(w,"i")})));if(E){var R=function(t,e){var c,s=this instanceof R,n=i(t),a=void 0===e;if(!s&&n&&t.constructor===R&&a)return t;h?n&&!a&&(t=t.source):t instanceof R&&(a&&(e=u.call(t)),t=t.source),x&&(c=!!e&&e.indexOf("y")>-1,c&&(e=e.replace(/y/g,"")));var l=o(h?new g(t,e):g(t,e),s?this:v,R);return x&&c&&p(l,{sticky:c}),l},U=function(t){t in R||l(R,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},_=r(g),k=0;while(_.length>k)U(_[k++]);v.constructor=R,R.prototype=v,b(n,"RegExp",R)}d("RegExp")},7156:function(t,e,c){var s=c("861d"),n=c("d2bb");t.exports=function(t,e,c){var a,o;return n&&"function"==typeof(a=e.constructor)&&a!==c&&s(o=a.prototype)&&o!==c.prototype&&n(t,o),t}},"92d9":function(t,e,c){"use strict";c.r(e);var s=c("7a23"),n=Object(s["j"])("div",{class:"section-header"},[Object(s["j"])("h1",null,"邮箱配置")],-1),a={class:"section-body"},o=Object(s["j"])("h2",{class:"section-title"},"SMTP邮箱设置",-1),l=Object(s["j"])("p",{class:"section-lead"}," 搜索相关邮箱的SMTP设置教程，按下面提示输入参数接口 ",-1),r={class:"row"},i={class:"col"},u={class:"card"},j={class:"card-body"},b={class:"form-group row"},f=Object(s["j"])("label",{for:"inputEmail3",class:"col-sm-3 col-form-label"},"发件人邮箱",-1),p={class:"col-sm-9"},d={class:"form-group row"},m=Object(s["j"])("label",{for:"inputEmail3",class:"col-sm-3 col-form-label"},"发件人昵称",-1),O={class:"col-sm-9"},g={class:"form-group row"},v=Object(s["j"])("label",{for:"inputEmail3",class:"col-sm-3 col-form-label"},"SMTP服务器地址",-1),w={class:"col-sm-9"},y={class:"form-group row"},h=Object(s["j"])("label",{for:"inputPassword3",class:"col-sm-3 col-form-label"},"端口",-1),x={class:"col-sm-9"},E={class:"form-group row"},R=Object(s["j"])("label",{for:"inputPassword3",class:"col-sm-3 col-form-label"},"邮箱密码",-1),U={class:"col-sm-9"},_={class:"card-footer"},k=Object(s["j"])("h2",{class:"section-title"},"测试邮箱是否正常发送邮件",-1),K={class:"row"},P={class:"col"},S={class:"card"},V={class:"card-header"},T=Object(s["j"])("h4",null,"邮箱测试",-1),z={class:"card-header-action"},M=Object(s["i"])("发送 "),C=Object(s["j"])("i",{class:"fas fa-chevron-right"},null,-1),J={class:"card-body"},D={class:"form-group"},F=Object(s["j"])("label",null,"接收邮箱:",-1),H={class:"form-group"},I=Object(s["j"])("label",null,"测试内容：",-1);function N(t,e,c,N,Y,$){return Object(s["u"])(),Object(s["f"])(s["a"],null,[n,Object(s["j"])("div",a,[o,l,Object(s["j"])("div",r,[Object(s["j"])("div",i,[Object(s["j"])("div",u,[Object(s["j"])("div",j,[Object(s["j"])("div",b,[f,Object(s["j"])("div",p,[Object(s["O"])(Object(s["j"])("input",{type:"email",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.smtp.config.sendmail=e})},null,512),[[s["K"],t.smtp.config.sendmail]])])]),Object(s["j"])("div",d,[m,Object(s["j"])("div",O,[Object(s["O"])(Object(s["j"])("input",{type:"email",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.smtp.config.sendname=e})},null,512),[[s["K"],t.smtp.config.sendname]])])]),Object(s["j"])("div",g,[v,Object(s["j"])("div",w,[Object(s["O"])(Object(s["j"])("input",{type:"email",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.smtp.config.smtp_address=e})},null,512),[[s["K"],t.smtp.config.smtp_address]])])]),Object(s["j"])("div",y,[h,Object(s["j"])("div",x,[Object(s["O"])(Object(s["j"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.smtp.config.smtp_port=e})},null,512),[[s["K"],t.smtp.config.smtp_port]])])]),Object(s["j"])("div",E,[R,Object(s["j"])("div",U,[Object(s["O"])(Object(s["j"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.smtp.config.smtp_pwd=e})},null,512),[[s["K"],t.smtp.config.smtp_pwd]])])])]),Object(s["j"])("div",_,[Object(s["j"])("button",{onClick:e[6]||(e[6]=function(){return N.save.apply(N,arguments)}),type:"submit",class:"btn btn-primary"},"保存")])])])]),k,Object(s["j"])("div",K,[Object(s["j"])("div",P,[Object(s["j"])("div",S,[Object(s["j"])("div",V,[T,Object(s["j"])("div",z,[Object(s["j"])("a",{class:"btn btn-success",onClick:e[7]||(e[7]=function(){return N.test.apply(N,arguments)})},[M,C])])]),Object(s["j"])("div",J,[Object(s["j"])("div",D,[F,Object(s["O"])(Object(s["j"])("input",{type:"text",class:"form-control mx-sm-3","aria-describedby":"passwordHelpInline","onUpdate:modelValue":e[8]||(e[8]=function(e){return t.email=e})},null,512),[[s["K"],t.email]])]),Object(s["j"])("div",H,[I,Object(s["O"])(Object(s["j"])("textarea",{class:"form-control",spellcheck:"false","onUpdate:modelValue":e[9]||(e[9]=function(e){return t.message=e})},null,512),[[s["K"],t.message]])])])])])])])],64)}c("4d63"),c("ac1f"),c("25f0");var Y=c("5530"),$=c("f96b"),q=c("6c42"),A={setup:function(){var t=Object(s["w"])({smtp:{config:{}},email:"",message:""}),e=Object(q["b"])(),c=function(){$["a"].getEmail().then((function(e){t.smtp=e}))};Object(s["s"])((function(){c()}));var n=function(){$["a"].updateEmial({data:t.smtp}).then((function(t){console.log(t),e.success("修改成功")})).catch((function(){e.error("啊呀呀，出错了！"),c()}))},a=function(){var c=new RegExp("(^[\\w.\\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\\.)+[a-z]{2,3}$)");c.test(t.email)?(e.success("测试邮件已发送，请查收"),$["a"].testEmail({email:t.email,data:t.smtp,message:t.message}).then((function(){e.success("服务端邮箱发送成功"),t.cag_id=null})).catch((function(){e.warning("服务端邮箱发送失败")}))):e.error("请输入正确的邮箱!")};return Object(Y["a"])(Object(Y["a"])({},Object(s["F"])(t)),{},{test:a,save:n,get_data:c})}};A.render=N;e["default"]=A}}]);
//# sourceMappingURL=chunk-2af98cd6.d287f9c3.js.map