(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1e02"],{"225a":function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),l=Object(c["j"])("div",{class:"section-header"},[Object(c["j"])("h1",null,"商品分类")],-1),n={class:"section-body"},o=Object(c["j"])("h2",{class:"section-title"},"Tips",-1),d=Object(c["j"])("p",{class:"section-lead"}," 商品分类最终可在访客首页显示 ",-1),s={class:"row"},i={class:"col"},j={class:"card"},b=Object(c["j"])("div",{class:"card-header"},[Object(c["j"])("h4",null,"Invoices"),Object(c["j"])("div",{class:"card-header-action"},[Object(c["j"])("a",{class:"btn btn-danger","data-toggle":"modal","data-target":"#add"},[Object(c["i"])("新增 "),Object(c["j"])("i",{class:"fas fa-chevron-right"})])])],-1),r={class:"card-body p-0"},u={class:"table-responsive table-invoice"},O={class:"table table-striped"},m=Object(c["j"])("tr",null,[Object(c["j"])("th",null,"ID"),Object(c["j"])("th",null,"名称"),Object(c["j"])("th",null,"描述"),Object(c["j"])("th",null,"排序"),Object(c["j"])("th",null,"操作")],-1),f={class:"font-weight-600"},g={class:"font-weight-600"},p={class:"font-weight-600"},h=Object(c["j"])("i",{class:"fas fa-pencil-alt"},null,-1),v=Object(c["j"])("i",{class:"fas fa-trash"},null,-1),_={class:"modal fade",id:"add",tabindex:"-1",role:"dialog","data-backdrop":"false","aria-labelledby":"add","aria-hidden":"true"},y={class:"modal-dialog",role:"document"},C={class:"modal-content"},k=Object(c["j"])("div",{class:"modal-header"},[Object(c["j"])("h5",{class:"modal-title",id:"exampleModalLabel"},"新增分类"),Object(c["j"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["j"])("span",{"aria-hidden":"true"},"×")])],-1),w={class:"modal-body"},x={class:"form-group"},K=Object(c["j"])("label",null,"分类名称",-1),U=Object(c["j"])("label",null,[Object(c["i"])("分类描述 "),Object(c["j"])("code",null,"【一句话描述或备注】")],-1),V=Object(c["j"])("label",null,[Object(c["i"])("分类排序 "),Object(c["j"])("code",null,"【用于商品分类展示排序，取值1~1000】")],-1),D={class:"modal-footer"},I=Object(c["j"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close",-1),J={class:"modal fade",id:"edit",tabindex:"-1",role:"dialog","data-backdrop":"false","aria-labelledby":"edit","aria-hidden":"true"},L={class:"modal-dialog",role:"document"},M={class:"modal-content"},S=Object(c["j"])("div",{class:"modal-header"},[Object(c["j"])("h5",{class:"modal-title",id:"exampleModalLabel"},"编辑分类"),Object(c["j"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["j"])("span",{"aria-hidden":"true"},"×")])],-1),E={class:"modal-body"},F={class:"form-group"},T=Object(c["j"])("label",null,"分类名称",-1),q=Object(c["j"])("label",null,[Object(c["i"])("分类描述 "),Object(c["j"])("code",null,"【一句话描述或备注】")],-1),z=Object(c["j"])("label",null,[Object(c["i"])("分类排序 "),Object(c["j"])("code",null,"【用于商品分类展示排序，取值1~1000】")],-1),A={class:"modal-footer"};function B(t,e,a,B,G,H){return Object(c["u"])(),Object(c["f"])(c["a"],null,[l,Object(c["j"])("div",n,[o,d,Object(c["j"])("div",s,[Object(c["j"])("div",i,[Object(c["j"])("div",j,[b,Object(c["j"])("div",r,[Object(c["j"])("div",u,[Object(c["j"])("table",O,[Object(c["j"])("tbody",null,[m,(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(t.cags,(function(t,e){return Object(c["u"])(),Object(c["f"])("tr",{key:t.id},[Object(c["j"])("td",null,Object(c["D"])(t.id),1),Object(c["j"])("td",f,Object(c["D"])(t.name),1),Object(c["j"])("td",g,Object(c["D"])(t.info),1),Object(c["j"])("td",p,Object(c["D"])(t.sort),1),Object(c["j"])("td",null,[Object(c["j"])("a",{onClick:function(t){return B.edit(e)},class:"btn btn-primary btn-action mr-1","data-toggle":"modal",title:"","data-original-title":"Edit","data-target":"#edit"},[h],8,["onClick"]),Object(c["j"])("a",{onClick:function(t){return B.del(e)},class:"btn btn-danger btn-action "},[v],8,["onClick"])])])})),128))])])])])])])])]),Object(c["j"])("div",_,[Object(c["j"])("div",y,[Object(c["j"])("div",C,[k,Object(c["j"])("div",w,[Object(c["j"])("div",x,[K,Object(c["O"])(Object(c["j"])("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.add_cag.name=e})},null,512),[[c["K"],t.add_cag.name]]),U,Object(c["O"])(Object(c["j"])("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.add_cag.info=e})},null,512),[[c["K"],t.add_cag.info]]),V,Object(c["O"])(Object(c["j"])("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.add_cag.sort=e}),placeholder:t.add_cag.sort},null,8,["placeholder"]),[[c["K"],t.add_cag.sort]])])]),Object(c["j"])("div",D,[I,Object(c["j"])("button",{onClick:e[4]||(e[4]=function(e){return B.add(t.add_cag)}),type:"button",class:"btn btn-primary","data-dismiss":"modal"},"Save changes")])])])]),Object(c["j"])("div",J,[Object(c["j"])("div",L,[Object(c["j"])("div",M,[S,Object(c["j"])("div",E,[Object(c["j"])("div",F,[T,Object(c["O"])(Object(c["j"])("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.edit_cag.name=e})},null,512),[[c["K"],t.edit_cag.name]]),q,Object(c["O"])(Object(c["j"])("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.edit_cag.info=e})},null,512),[[c["K"],t.edit_cag.info]]),z,Object(c["O"])(Object(c["j"])("input",{type:"number",class:"form-control form-control-sm","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.edit_cag.sort=e})},null,512),[[c["K"],t.edit_cag.sort]])])]),Object(c["j"])("div",A,[Object(c["j"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:e[8]||(e[8]=function(t){return B.get_data()})},"Close"),Object(c["j"])("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal",onClick:e[9]||(e[9]=function(t){return B.edit_save()})},"Save changes")])])])])],64)}var G=a("5530"),H=a("f96b"),N=a("6c42"),P={setup:function(){var t=Object(c["w"])({cags:[],edit_cag:{},edit_cag_new:{},cag_id:null,add_cag:{name:"",info:"",sort:100}}),e=Object(N["b"])(),a=function(){H["a"].getCag().then((function(e){t.cags=e}))};Object(c["s"])((function(){a()}));var l=function(e){t.edit_cag=t.cags[e],console.log(t.edit_cag)},n=function(){console.log(t.edit_cag),t.edit_cag.methord="update",H["a"].postCag(t.edit_cag).then((function(t){console.log(t),e.success("修改成功")})).catch((function(){e.error("啊呀呀，出错了！"),a()}))},o=function(c){t.cag_id=t.cags[c].id,console.log(t.cag_id),H["a"].postCag({id:t.cag_id,methord:"delete"}).then((function(c){console.log(c),e.success("删除成功"),a(),t.cag_id=null})).catch((function(){e.warning("删除失败")}))},d=function(c){H["a"].postCag({name:c.name,info:c.info,sort:c.sort,methord:"add"}).then((function(c){e.success("新增分类成功"),console.log(c),a(),t.add_cag={name:"",info:"",sort:100}})).catch((function(t){e.error("请检查是否重复分类"+t)}))};return Object(G["a"])(Object(G["a"])({},Object(c["F"])(t)),{},{del:o,edit:l,add:d,edit_save:n,get_data:a})}};P.render=B;e["default"]=P}}]);
//# sourceMappingURL=chunk-2d0b1e02.3b55ecc9.js.map