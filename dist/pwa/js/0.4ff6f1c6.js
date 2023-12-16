"use strict";(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[0],{8e3:(e,l,a)=>{a.r(l),a.d(l,{default:()=>A});a(72879);var t=a(59835),u=a(86970),s=a(60499),n=a(91569),p=a(28339),o=a(46190),_=a(76647),v=a(31655),i=a(87270),r=a(82134),d=a(17779);const m={class:"container"},w={class:"title"},c={class:"q-mb-sm"},y={class:"text-bold"},b=(0,t._)("br",null,null,-1),$={class:"text-bold"},f=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),k={class:"text-bold"},z=(0,t._)("br",null,null,-1),x={key:4,class:"text-bold"},U=(0,t._)("br",null,null,-1),q=(0,t._)("span",{class:"text-bold"},null,-1),F={class:"text-bold"},h={class:"text-bold"},Q={key:0,class:"text-negative text-bold"},W={__name:"Offer",setup(e){const l=(0,p.yj)(),a=(0,p.tv)(),W=(0,o.c)(),Z=(0,_.QT)(),j=(0,v.T)(),C=(0,s.iH)({asset:{name:""},user:{wallet:"",total_trades:0}}),V=(0,s.iH)(null),B=(0,s.iH)(null),H=(0,s.iH)(!1),T=(0,t.Fl)((()=>j.user)),R=(0,t.Fl)((()=>{if(B.value){let e=B.value.payment_type.id;return d.log(e),T.value.payment_types.filter((l=>l.payment_type.id===e))}return!1})),S=(0,t.Fl)((()=>{if(B.value){let e=B.value.payment_type.id;return A.value?T.value.payment_types.filter((l=>l.payment_type.id===e)):C.value.user.payment_types.filter((l=>l.payment_type.id===e))}})),D=(0,t.Fl)((()=>A.value?`${Z.t("sell")} ${V.value} ${C.value.asset.name} ${Z.t("p2p_na")} ${E.value} RUB`:`${Z.t("buy")} ${V.value} ${C.value.asset.name}  ${Z.t("p2p_na")} ${E.value} RUB`)),I=(0,t.Fl)((()=>P.value?A.value?"negative":"positive":"grey-7")),A=(0,t.Fl)((()=>C.value.is_sell?C.value.user.wallet===T.value.wallet:C.value.user.wallet!==T.value.wallet)),O=(0,t.Fl)((()=>W.addresses[W.currentAddressIdx].address)),P=(0,t.Fl)((()=>parseFloat(V.value)>=C.value.min_amount&&parseFloat(V.value)<=C.value.amount&&B.value&&S.value.length>0)),E=(0,t.Fl)((()=>{if(V.value)return parseFloat(V.value)*C.value.course}));async function G(){H.value=!H.value;const e=await n.h.post("/api/p2p/create_trade",{offer_id:C.value.id,amount:V.value,asset_amount_without_commission:parseFloat(V.value-.001*V.value).toFixed(8),asset_amount_with_commission:parseFloat(V.value+.001*V.value).toFixed(8),payment_type:S.value[0].id,opponent:O.value});e.data.success?(0,i.d$)("positive",e.data.message):(0,i.d$)("negative",e.data.message),H.value=!H.value,await j.get_own_trades(),a.push({name:"p2p_index"})}return(0,t.wF)((async()=>{let e=l.params.offer_id;const a=await n.h.get(`/api/p2p/offer?id=${e}`);C.value=a.data})),(e,l)=>{const a=(0,t.up)("q-badge"),s=(0,t.up)("q-separator"),n=(0,t.up)("q-btn"),p=(0,t.up)("q-input"),o=(0,t.up)("q-select"),_=(0,t.up)("router-link"),v=(0,t.up)("q-card-section"),i=(0,t.up)("q-card"),d=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(d,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",m,[(0,t._)("p",w,(0,u.zw)(e.$t("p2p_offer"))+" #"+(0,u.zw)(C.value.id),1),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t._)("p",c,[(0,t.Uk)((0,u.zw)(C.value.is_sell?e.$t("p2p_selling"):e.$t("p2p_buying"))+" ",1),(0,t._)("span",y,(0,u.zw)(C.value.amount)+" "+(0,u.zw)(C.value.asset.name)+" по "+(0,u.zw)(C.value.course)+" RUB",1),(0,t.Uk)(),b,(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_volume_min"))+" ",1),(0,t._)("span",$,(0,u.zw)(C.value.min_amount)+" "+(0,u.zw)(C.value.asset.name),1),f,(0,t.Uk)(" "+(0,u.zw)(C.value.is_sell?e.$t("p2p_trade_seller"):e.$t("p2p_trade_buyer"))+" ",1),(0,t.Wm)(r.Z,{address:C.value.user.wallet},null,8,["address"]),C.value.user.is_vip?((0,t.wg)(),(0,t.j4)(a,{key:0,class:"q-mx-xs",color:"positive"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(a,{key:1,color:"negative",class:"q-mx-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_not_verify")),1)])),_:1})),C.value.user.is_online?((0,t.wg)(),(0,t.j4)(a,{key:2,color:"positive",class:"q-mx-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_online")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(a,{key:3,color:"negative",class:"q-mx-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_offline")),1)])),_:1})),g,(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_trades"))+" ",1),(0,t._)("span",k,(0,u.zw)(C.value.user.total_trades),1),z,C.value.rules?((0,t.wg)(),(0,t.iD)("span",x,[(0,t.Uk)((0,u.zw)(e.$t("p2p_rules"))+": ",1),U])):(0,t.kq)("",!0),(0,t.Uk)((0,u.zw)(C.value.rules),1)]),(0,t.Wm)(s,{spaced:"md"}),q,(0,t._)("p",null,[(0,t.Uk)((0,u.zw)(e.$t("p2p_enter_min"))+": ",1),(0,t._)("span",F,(0,u.zw)(C.value.min_amount)+" "+(0,u.zw)(C.value.asset.name),1),(0,t.Uk)(", "+(0,u.zw)(e.$t("buy_amomunt_max"))+": ",1),(0,t._)("span",h,(0,u.zw)(C.value.amount)+" "+(0,u.zw)(C.value.asset.name),1)]),(0,t.Wm)(p,{outlined:"",modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),type:"number",label:`Объем сделки в ${C.value.asset.name}`,class:"q-mb-md"},{append:(0,t.w5)((()=>[(0,t.Wm)(n,{onClick:l[0]||(l[0]=e=>V.value=C.value.amount),size:"10px",unelevated:"",outline:"",color:"dark","no-caps":"",label:e.$t("buy_amomunt_max")},null,8,["label"])])),_:1},8,["modelValue","label"]),(0,t._)("p",null,(0,u.zw)(e.$t("p2p_select_payment_system1")),1),(0,t.Wm)(o,{outlined:"",modelValue:B.value,"onUpdate:modelValue":l[2]||(l[2]=e=>B.value=e),options:C.value.payment_types,class:"q-mb-md",label:e.$t("p2p_payment_system"),behavior:"menu"},null,8,["modelValue","options","label"]),B.value&&!R.value.length>0?((0,t.wg)(),(0,t.iD)("p",Q,[(0,t.Uk)((0,u.zw)(e.$t("p2p_no_payment_system"))+" ",1),(0,t.Wm)(_,{to:{name:"wallet_settings"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("app_pc_ver_btn")),1)])),_:1}),(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_no_payment_system_or"))+".",1)])):(0,t.kq)("",!0),(0,t.Wm)(n,{disable:!P.value,label:P.value?D.value:e.$t("p2p_all_fields"),class:"full-width q-py-md",color:I.value,"no-caps":"",onClick:G,loading:H.value,unelevated:""},null,8,["disable","label","color","loading"])])),_:1})])),_:1})])])),_:1})}}};var Z=a(69885),j=a(44458),C=a(63190),V=a(20990),B=a(50926),H=a(13119),T=a(24455),R=a(10215),S=a(69984),D=a.n(S);const I=W,A=I;D()(W,"components",{QPage:Z.Z,QCard:j.Z,QCardSection:C.Z,QBadge:V.Z,QSeparator:B.Z,QInput:H.Z,QBtn:T.Z,QSelect:R.Z})}}]);