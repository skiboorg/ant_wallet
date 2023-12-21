"use strict";(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[0],{8e3:(e,a,l)=>{l.r(a),l.d(a,{default:()=>I});l(72879);var t=l(59835),u=l(86970),s=l(60499),n=l(91569),p=l(28339),o=l(46190),_=l(76647),r=l(31655),v=l(87270),i=l(82134);const d={class:"container"},m={class:"title"},c={class:"q-mb-sm"},w={class:"text-bold"},y=(0,t._)("br",null,null,-1),b={class:"text-bold"},$=(0,t._)("br",null,null,-1),k=(0,t._)("br",null,null,-1),f={class:"text-bold"},g=(0,t._)("br",null,null,-1),z={key:4,class:"text-bold"},x=(0,t._)("br",null,null,-1),F=(0,t._)("span",{class:"text-bold"},null,-1),U={class:"text-bold"},q={class:"text-bold"},h={key:0,class:"text-negative text-bold"},Q={__name:"Offer",setup(e){const a=(0,p.yj)(),l=(0,p.tv)(),Q=(0,o.c)(),W=(0,_.QT)(),Z=(0,r.T)(),j=(0,s.iH)({asset:{name:""},user:{wallet:"",total_trades:0}}),C=(0,s.iH)(null),V=(0,s.iH)(null),B=(0,s.iH)(!1),H=(0,t.Fl)((()=>Z.user)),T=(0,t.Fl)((()=>{if(V.value){let e=V.value.payment_type.id;return H.value.payment_types.filter((a=>a.payment_type.id===e))}return!1})),R=(0,t.Fl)((()=>{if(V.value){let e=V.value.payment_type.id;return I.value?H.value.payment_types.filter((a=>a.payment_type.id===e)):j.value.user.payment_types.filter((a=>a.payment_type.id===e))}})),S=(0,t.Fl)((()=>I.value?`${W.t("sell")} ${C.value} ${j.value.asset.name} ${W.t("p2p_na")} ${P.value} RUB`:`${W.t("buy")} ${C.value} ${j.value.asset.name}  ${W.t("p2p_na")} ${P.value} RUB`)),D=(0,t.Fl)((()=>O.value?I.value?"negative":"positive":"grey-7")),I=(0,t.Fl)((()=>j.value.is_sell?j.value.user.wallet===H.value.wallet:j.value.user.wallet!==H.value.wallet)),A=(0,t.Fl)((()=>Q.addresses[Q.currentAddressIdx].address)),O=(0,t.Fl)((()=>parseFloat(C.value)>=j.value.min_amount&&parseFloat(C.value)<=j.value.amount&&V.value&&R.value.length>0)),P=(0,t.Fl)((()=>{if(C.value)return parseFloat(C.value)*j.value.course}));async function E(){B.value=!B.value;const e=await n.h.post("/api/p2p/create_trade",{offer_id:j.value.id,amount:C.value,asset_amount_without_commission:parseFloat(parseFloat(C.value)-parseFloat(.001*C.value)).toFixed(8),asset_amount_with_commission:parseFloat(parseFloat(C.value)+parseFloat(.001*C.value)).toFixed(8),payment_type:R.value[0].id,opponent:A.value});e.data.success?(0,v.d$)("positive",e.data.message):(0,v.d$)("negative",e.data.message),B.value=!B.value,await Z.get_own_trades(),l.push({name:"p2p_index"})}return(0,t.wF)((async()=>{let e=a.params.offer_id;const l=await n.h.get(`/api/p2p/offer?id=${e}`);j.value=l.data})),(e,a)=>{const l=(0,t.up)("q-badge"),s=(0,t.up)("q-separator"),n=(0,t.up)("q-btn"),p=(0,t.up)("q-input"),o=(0,t.up)("q-select"),_=(0,t.up)("router-link"),r=(0,t.up)("btn"),v=(0,t.up)("q-card-section"),Q=(0,t.up)("q-card"),W=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(W,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",d,[(0,t._)("p",m,(0,u.zw)(e.$t("p2p_offer"))+" #"+(0,u.zw)(j.value.id),1),(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t._)("p",c,[(0,t.Uk)((0,u.zw)(j.value.is_sell?e.$t("p2p_selling"):e.$t("p2p_buying"))+" ",1),(0,t._)("span",w,(0,u.zw)(j.value.amount)+" "+(0,u.zw)(j.value.asset.name)+" по "+(0,u.zw)(j.value.course)+" RUB",1),(0,t.Uk)(),y,(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_volume_min"))+" ",1),(0,t._)("span",b,(0,u.zw)(j.value.min_amount)+" "+(0,u.zw)(j.value.asset.name),1),$,(0,t.Uk)(" "+(0,u.zw)(j.value.is_sell?e.$t("p2p_trade_seller"):e.$t("p2p_trade_buyer"))+" ",1),(0,t.Wm)(i.Z,{address:j.value.user.wallet},null,8,["address"]),j.value.user.is_vip?((0,t.wg)(),(0,t.j4)(l,{key:0,class:"q-mx-xs",color:"positive"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(l,{key:1,color:"negative",class:"q-mx-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_not_verify")),1)])),_:1})),j.value.user.is_online?((0,t.wg)(),(0,t.j4)(l,{key:2,color:"positive",class:"q-mx-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_online")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(l,{key:3,color:"negative",class:"q-mx-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_offline")),1)])),_:1})),k,(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_trades"))+" ",1),(0,t._)("span",f,(0,u.zw)(j.value.user.total_trades),1),g,j.value.rules?((0,t.wg)(),(0,t.iD)("span",z,[(0,t.Uk)((0,u.zw)(e.$t("p2p_rules"))+": ",1),x])):(0,t.kq)("",!0),(0,t.Uk)((0,u.zw)(j.value.rules),1)]),(0,t.Wm)(s,{spaced:"md"}),F,(0,t._)("p",null,[(0,t.Uk)((0,u.zw)(e.$t("p2p_enter_min"))+": ",1),(0,t._)("span",U,(0,u.zw)(j.value.min_amount)+" "+(0,u.zw)(j.value.asset.name),1),(0,t.Uk)(", "+(0,u.zw)(e.$t("buy_amomunt_max"))+": ",1),(0,t._)("span",q,(0,u.zw)(j.value.amount)+" "+(0,u.zw)(j.value.asset.name),1)]),(0,t.Wm)(p,{outlined:"","label-color":"dark",modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e),type:"number",label:`Объем сделки в ${j.value.asset.name}`,class:"q-mb-md"},{append:(0,t.w5)((()=>[(0,t.Wm)(n,{onClick:a[0]||(a[0]=e=>C.value=j.value.amount),size:"10px",unelevated:"",outline:"",color:"dark","no-caps":"",label:e.$t("buy_amomunt_max")},null,8,["label"])])),_:1},8,["modelValue","label"]),(0,t._)("p",null,(0,u.zw)(e.$t("p2p_select_payment_system1")),1),(0,t.Wm)(o,{outlined:"","label-color":"dark",modelValue:V.value,"onUpdate:modelValue":a[2]||(a[2]=e=>V.value=e),options:j.value.payment_types,class:"q-mb-md",label:e.$t("p2p_payment_system"),behavior:"menu"},null,8,["modelValue","options","label"]),V.value&&!T.value.length>0?((0,t.wg)(),(0,t.iD)("p",h,[(0,t.Uk)((0,u.zw)(e.$t("p2p_no_payment_system"))+" ",1),(0,t.Wm)(_,{to:{name:"wallet_settings"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("app_pc_ver_btn")),1)])),_:1}),(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_no_payment_system_or"))+".",1)])):(0,t.kq)("",!0),(0,t.Wm)(r,{disable:!O.value,label:O.value?S.value:e.$t("p2p_all_fields"),class:"full-width q-py-md",color:D.value,"no-caps":"","text-color":"white",onClick:E,loading:B.value,unelevated:""},null,8,["disable","label","color","loading"])])),_:1})])),_:1})])])),_:1})}}};var W=l(69885),Z=l(44458),j=l(63190),C=l(20990),V=l(50926),B=l(13119),H=l(24455),T=l(10215),R=l(69984),S=l.n(R);const D=Q,I=D;S()(Q,"components",{QPage:W.Z,QCard:Z.Z,QCardSection:j.Z,QBadge:C.Z,QSeparator:V.Z,QInput:B.Z,QBtn:H.Z,QSelect:T.Z})}}]);