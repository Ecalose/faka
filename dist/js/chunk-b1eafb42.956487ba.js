(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1eafb42"],{"25f0":function(t,e,c){"use strict";var r=c("6eeb"),a=c("825a"),o=c("d039"),n=c("ad6d"),l="toString",i=RegExp.prototype,s=i[l],d=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),j=s.name!=l;(d||j)&&r(RegExp.prototype,l,(function(){var t=a(this),e=String(t.source),c=t.flags,r=String(void 0===c&&t instanceof RegExp&&!("flags"in i)?n.call(t):c);return"/"+e+"/"+r}),{unsafe:!0})},"4b5d":function(t,e,c){"use strict";c.r(e);c("b0c0");var r=c("7a23"),a=Object(r["j"])("h2",{class:"section-title"},"支付",-1),o={class:"row"},n={class:"col-12"},l={class:"card"},i=Object(r["j"])("div",{class:"card-header"},[Object(r["j"])("h4",null,"购物信息")],-1),s={class:"card-body"},d={class:"row mt-4"},j={class:"col-12 col-lg-8 offset-lg-2"},b={class:"wizard-steps"},u={class:"wizard-step-icon"},O={class:"wizard-step-label"},p={key:0,class:"wizard-content mt-2"},f={class:"wizard-pane"},v={class:"form-group row align-items-center"},m=Object(r["j"])("label",{class:"col-md-4 text-md-right text-left"},"手机号或邮箱",-1),g={class:"col-lg-4 col-md-6"},_={class:"form-group row"},h=Object(r["j"])("label",{class:"col-md-4 text-md-right text-left mt-2"},"备注信息：",-1),y={class:"col-lg-4 col-md-6"},w={class:"form-group row"},x=Object(r["j"])("label",{class:"col-md-4 text-md-right text-left mt-2"},"支付方式",-1),z={class:"col-lg-4 col-md-6"},k={class:"selectgroup w-100"},D={class:"selectgroup-button"},P={class:"form-group row"},R=Object(r["j"])("div",{class:"col-md-4"},null,-1),S={class:"col-lg-4 col-md-6 text-right"},C=Object(r["i"])("Next "),A=Object(r["j"])("i",{class:"fas fa-arrow-right"},null,-1),E={key:1,class:"wizard-content "},Y={class:"wizard-pane"},U={class:"invoice pt-0"},J={class:"invoice-print"},M={class:"row"},I={class:"col-lg-12"},q=Object(r["j"])("hr",null,null,-1),N={class:"row"},V={class:"col-md-6"},K=Object(r["j"])("strong",null,"收货信息:",-1),L=Object(r["j"])("br",null,null,-1),T=Object(r["j"])("br",null,null,-1),$={class:"col-md-6 text-md-right"},B=Object(r["j"])("strong",null,"订单日期:",-1),F=Object(r["j"])("br",null,null,-1),G=Object(r["j"])("br",null,null,-1),H=Object(r["j"])("br",null,null,-1),Q={class:"row mt-4"},W={class:"col-md-12"},X={class:"section-title text-uppercase"},Z={class:"table-responsive"},tt={class:"table table-striped table-hover table-md"},et=Object(r["j"])("tr",null,[Object(r["j"])("th",{"data-width":"40"},"#"),Object(r["j"])("th",null,"名称"),Object(r["j"])("th",{class:"text-center"},"单价"),Object(r["j"])("th",{class:"text-center"},"数量"),Object(r["j"])("th",{class:"text-right"},"总价")],-1),ct=Object(r["j"])("td",null,"1",-1),rt={class:"text-center"},at={class:"text-center"},ot={class:"text-right"},nt={class:"row mt-4"},lt={class:"col-lg-8"},it=Object(r["j"])("div",{class:"section-title"},"扫码支付",-1),st={class:"d-flex"},dt={class:"col-lg-4 text-right"},jt=Object(r["j"])("hr",{class:"mt-2 mb-2"},null,-1),bt={class:"invoice-detail-item"},ut=Object(r["j"])("div",{class:"invoice-detail-name"},"总计",-1),Ot={class:"invoice-detail-value invoice-detail-value-lg"},pt=Object(r["j"])("hr",null,null,-1),ft={class:"text-md-right"},vt={class:"float-lg-left mb-lg-0 mb-3"},mt=Object(r["j"])("i",{class:"fas fa-times"},null,-1),gt=Object(r["i"])(" Cancel"),_t=Object(r["j"])("i",{class:"fas fa-print"},null,-1),ht=Object(r["i"])(" Print"),yt={key:2,class:"wizard-content mt-2"},wt={class:"wizard-pane"},xt={class:"row"},zt={class:"col"},kt={class:"card"},Dt=Object(r["j"])("div",{class:"card-header"},[Object(r["j"])("h4",null,"订单详情"),Object(r["j"])("div",{class:"card-header-action"})],-1),Pt={class:"card-body"},Rt={class:"form-group block mb-0"},St={class:"row"},Ct={class:"col-6"},At={class:"col-6"},Et=Object(r["j"])("p",{"mt-0":""},"卡密信息：",-1);function Yt(t,e,c,Yt,Ut,Jt){var Mt=Object(r["A"])("router-link");return Object(r["u"])(),Object(r["f"])(r["a"],null,[a,Object(r["j"])("div",o,[Object(r["j"])("div",n,[Object(r["j"])("div",l,[i,Object(r["j"])("div",s,[Object(r["j"])("div",d,[Object(r["j"])("div",j,[Object(r["j"])("div",b,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(t.wizard_step,(function(t){return Object(r["u"])(),Object(r["f"])("div",{class:["wizard-step ",t.isactive?"wizard-step-active":""],key:t.id},[Object(r["j"])("div",u,[Object(r["j"])("i",{class:t.icon},null,2)]),Object(r["j"])("div",O,Object(r["D"])(t.title),1)],2)})),128))])])]),t.wizard_step[0].isactive?(Object(r["u"])(),Object(r["f"])("form",p,[Object(r["j"])("div",f,[Object(r["j"])("div",v,[m,Object(r["j"])("div",g,[Object(r["O"])(Object(r["j"])("input",{type:"email",name:"email",class:"form-control",placeholder:"(用于接收卡密信息)","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.order.contact=e})},null,512),[[r["K"],t.order.contact]])])]),Object(r["j"])("div",_,[h,Object(r["j"])("div",y,[Object(r["O"])(Object(r["j"])("textarea",{class:"form-control",name:"address",placeholder:"(此处可留空)","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.order.contact_txt=e})},null,512),[[r["K"],t.order.contact_txt]])])]),Object(r["j"])("div",w,[x,Object(r["j"])("div",z,[Object(r["j"])("div",k,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(t.payment,(function(c){return Object(r["u"])(),Object(r["f"])("label",{class:"selectgroup-item",key:c.id},[Object(r["O"])(Object(r["j"])("input",{type:"radio",name:"value",value:c.name,class:"selectgroup-input","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.order.payment=e})},null,8,["value"]),[[r["I"],t.order.payment]]),Object(r["j"])("span",D,Object(r["D"])(c.name),1)])})),128))])])]),Object(r["j"])("div",P,[R,Object(r["j"])("div",S,[Object(r["j"])("a",{onClick:e[4]||(e[4]=function(t){return Yt.second()}),class:"btn btn-icon icon-right btn-primary"},[C,A])])])])])):Object(r["g"])("",!0),t.wizard_step[1].isactive?(Object(r["u"])(),Object(r["f"])("form",E,[Object(r["j"])("div",Y,[Object(r["j"])("div",U,[Object(r["j"])("div",J,[Object(r["j"])("div",M,[Object(r["j"])("div",I,[q,Object(r["j"])("div",N,[Object(r["j"])("div",V,[Object(r["j"])("address",null,[K,L,Object(r["i"])(" 联系方式："+Object(r["D"])(t.order.contact),1),T,Object(r["i"])(" "+Object(r["D"])(t.order.contact_txt?"备注："+t.order.contact_txt:""),1)])]),Object(r["j"])("div",$,[Object(r["j"])("address",null,[B,F,Object(r["i"])(" "+Object(r["D"])(t.order.date),1),G,H])])])])]),Object(r["j"])("div",Q,[Object(r["j"])("div",W,[Object(r["j"])("div",X,"订单信息"+Object(r["D"])(t.order.out_order_id),1),Object(r["j"])("div",Z,[Object(r["j"])("table",tt,[et,Object(r["j"])("tr",null,[ct,Object(r["j"])("td",null,Object(r["D"])(t.order.name),1),Object(r["j"])("td",rt,"￥"+Object(r["D"])(t.order.price),1),Object(r["j"])("td",at,Object(r["D"])(t.order.num),1),Object(r["j"])("td",ot,Object(r["D"])(t.order.total_price),1)])])]),Object(r["j"])("div",nt,[Object(r["j"])("div",lt,[it,Object(r["j"])("div",st,[Object(r["j"])("img",{src:t.order.pay_qrcode,onClick:e[5]||(e[5]=function(e){return t.window.open(t.order.pay_url)})},null,8,["src"])])]),Object(r["j"])("div",dt,[jt,Object(r["j"])("div",bt,[ut,Object(r["j"])("div",Ot,"￥"+Object(r["D"])(t.order.total_price),1)])])])])])]),pt,Object(r["j"])("div",ft,[Object(r["j"])("div",vt,[Object(r["j"])(Mt,{to:{name:"detail"},onClick:e[6]||(e[6]=function(t){return Yt.cancel_order()}),class:"btn btn-danger btn-icon icon-left"},{default:Object(r["N"])((function(){return[mt,gt]})),_:1})]),Object(r["j"])("button",{onClick:e[7]||(e[7]=function(t){return Yt.print()}),class:"btn btn-warning btn-icon icon-left"},[_t,ht])])])])])):Object(r["g"])("",!0),t.wizard_step[2].isactive?(Object(r["u"])(),Object(r["f"])("form",yt,[Object(r["j"])("div",wt,[Object(r["j"])("div",xt,[Object(r["j"])("div",zt,[Object(r["j"])("div",kt,[Dt,Object(r["j"])("div",Pt,[Object(r["j"])("h6",null,"订单号："+Object(r["D"])(t.order.out_order_id),1),Object(r["j"])("div",Rt,[Object(r["j"])("div",St,[Object(r["j"])("p",Ct,"交易时间："+Object(r["D"])(t.order.date),1),Object(r["j"])("p",At,"联系方式："+Object(r["D"])(t.order.contact),1)])]),Et,Object(r["j"])("p",null,Object(r["D"])(t.order.card),1)])])])])])])):Object(r["g"])("",!0)])])])])],64)}c("fb6a"),c("d3b7"),c("4d63"),c("ac1f"),c("25f0");var Ut=c("5530"),Jt=c("6c42"),Mt=c("d055"),It=c.n(Mt),qt=c("f96b"),Nt=c("6c02"),Vt={setup:function(){var t=Object(Jt["b"])(),e=Object(r["w"])({wizard_step:[{title:"创建订单",icon:"far fa-user",isactive:!0},{title:"支付订单",icon:"fas fa-box-open",isactive:!1},{title:"卡密查看",icon:"fas fa-server",isactive:!1}],payment:{},order:{date:"",num:"",price:"",pay_url:"",card:""},shop:{}}),c=Object(Nt["c"])(),a=c.currentRoute.value.params.id;Object(r["s"])((function(){console.log("4"),qt["a"].getDetail({prod_id:a}).then((function(t){e.order=t})),qt["a"].getPayList().then((function(t){e.payment=t,console.log(t)})).catch((function(){t.info("暂未发下支付接口，请联系客服解决")}))}));var o=function(){if(""!=e.order.contact&&null!=e.order.contact){var c=new RegExp("(^[\\w.\\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\\.)+[a-z]{2,3}$)|(^1[3|4|5|8]\\d{9}$)");c.test(e.order.contact)?""!=e.order.payment&&null!=e.order.payment?(e.wizard_step[0].isactive=!1,e.wizard_step[1].isactive=!0,e.order.num=1,e.order.date=window.moment().format("MMMM Do YYYY"),e.order.out_order_id="Order_"+(new Date).getTime()+Math.random().toString(36).slice(-8),e.order.total_price=e.order.price*e.order.num,qt["a"].postPayUrl(e.order).then((function(c){e.order.pay_url=c.qr_code,"PAYJS支付宝"!=e.order.payment&&"PAYJS微信"!=e.order.payment||(e.order.payjs_order_id=c.payjs_order_id),It.a.toDataURL(c.qr_code).then((function(c){e.order.pay_qrcode=c;var r=0,a=setInterval((function(){"PAYJS支付宝"!=e.order.payment||"PAYJS微信"!=e.order.payment?qt["a"].postCheckPay({out_order_id:e.order.out_order_id,methord:"check",payment:e.order.payment,name:e.order.name,contact:e.order.contact,contact_txt:e.order.contact_txt,price:e.order.price,num:e.order.num,total_price:e.order.total_price}).then((function(e){"success"==e.msg&&(clearInterval(a),t.success("^_^订单支付成功！"),s())})):qt["a"].postCheckPay({payjs_order_id:e.order.payjs_order_id,methord:"check",payment:e.order.payment,name:e.order.name,contact:e.order.contact,contact_txt:e.order.contact_txt,price:e.order.price,num:e.order.num,total_price:e.order.total_price}).then((function(e){"success"==e.msg&&(clearInterval(a),t.success("^_^订单支付成功！"),s())})),r+=4,console.log("支付等待"+r+"s"),12==r&&t.info("请尽快支付，否则订单超时会自动取消"),r>60&&(clearInterval(a),t.info("订单已超时，如已支付，请联系客服"),n())}),4e3)}))})).catch((function(){t.warning("二维码调用失败，请联系客服解决")})),"支付宝当面付"==e.order.payment?t.success("请使用手机支付宝扫码支付"):"虎皮椒微信"==e.order.payment?t.success("请使用手机微信扫码支付"):"虎皮椒支付宝"==e.order.payment?t.success("请使用手机支付宝扫码支付"):t.error("更多支付方式，正在计划中")):t.info("请选择一种支付方式"):t.error("请输入正确的邮箱或手机号!")}else t.info("请输入有效的手机号或邮箱")},n=function(){qt["a"].postCheckPay({out_order_id:e.order.out_order_id,methord:"cancel"}).then((function(){t.info("交易订单已关闭"),history.back(),history.back(),location.reload(),console.log("2")}))},l=function(){qt["a"].getCardByid({out_order_id:e.order.out_order_id}).then((function(c){e.order.card=c.card,t.success("卡密查询成功"),console.log("卡密查询完成")})).catch((function(){t.warning("卡密信息获取失败"),console.log("卡密查询失败")}))},i=function(){e.wizard_step[0].isactive=!0,e.wizard_step[1].isactive=!1,c.push({name:"detail"})},s=function(){t.success("订单支付成功333"),l(),e.wizard_step[1].isactive=!1,e.wizard_step[2].isactive=!0},d=function(){window.print()};return Object(Ut["a"])(Object(Ut["a"])({},Object(r["F"])(e)),{},{second:o,back_first:i,third:s,cancel_order:n,print:d})}};Vt.render=Yt;e["default"]=Vt},"4d63":function(t,e,c){var r=c("83ab"),a=c("da84"),o=c("94ca"),n=c("7156"),l=c("9bf2").f,i=c("241c").f,s=c("44e7"),d=c("ad6d"),j=c("9f7f"),b=c("6eeb"),u=c("d039"),O=c("69f3").set,p=c("2626"),f=c("b622"),v=f("match"),m=a.RegExp,g=m.prototype,_=/a/g,h=/a/g,y=new m(_)!==_,w=j.UNSUPPORTED_Y,x=r&&o("RegExp",!y||w||u((function(){return h[v]=!1,m(_)!=_||m(h)==h||"/a/i"!=m(_,"i")})));if(x){var z=function(t,e){var c,r=this instanceof z,a=s(t),o=void 0===e;if(!r&&a&&t.constructor===z&&o)return t;y?a&&!o&&(t=t.source):t instanceof z&&(o&&(e=d.call(t)),t=t.source),w&&(c=!!e&&e.indexOf("y")>-1,c&&(e=e.replace(/y/g,"")));var l=n(y?new m(t,e):m(t,e),r?this:g,z);return w&&c&&O(l,{sticky:c}),l},k=function(t){t in z||l(z,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},D=i(m),P=0;while(D.length>P)k(D[P++]);g.constructor=z,z.prototype=g,b(a,"RegExp",z)}p("RegExp")},7156:function(t,e,c){var r=c("861d"),a=c("d2bb");t.exports=function(t,e,c){var o,n;return a&&"function"==typeof(o=e.constructor)&&o!==c&&r(n=o.prototype)&&n!==c.prototype&&a(t,n),t}},fb6a:function(t,e,c){"use strict";var r=c("23e7"),a=c("861d"),o=c("e8b5"),n=c("23cb"),l=c("50c4"),i=c("fc6a"),s=c("8418"),d=c("b622"),j=c("1dde"),b=c("ae40"),u=j("slice"),O=b("slice",{ACCESSORS:!0,0:0,1:2}),p=d("species"),f=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!u||!O},{slice:function(t,e){var c,r,d,j=i(this),b=l(j.length),u=n(t,b),O=n(void 0===e?b:e,b);if(o(j)&&(c=j.constructor,"function"!=typeof c||c!==Array&&!o(c.prototype)?a(c)&&(c=c[p],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return f.call(j,u,O);for(r=new(void 0===c?Array:c)(v(O-u,0)),d=0;u<O;u++,d++)u in j&&s(r,d,j[u]);return r.length=d,r}})}}]);
//# sourceMappingURL=chunk-b1eafb42.956487ba.js.map