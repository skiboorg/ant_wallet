"use strict";(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[145],{81145:(l,e,a)=>{a.r(e),a.d(e,{default:()=>We});a(72879);var t=a(59835),n=a(86970),s=a(82134),u=a(23459),o=a(60499),_=a(91569),p=a(87270),r=a(76647),i=a(31655);const d={class:"container"},m={key:0},w={class:"row q-col-gutter-md"},c={class:"col-12 col-md-6 p2p-order-1"},f=(0,t._)("br",null,null,-1),b=(0,t._)("br",null,null,-1),v=(0,t._)("br",null,null,-1),$=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),k=(0,t._)("br",null,null,-1),y=(0,t._)("br",null,null,-1),z=(0,t._)("br",null,null,-1),x=(0,t._)("br",null,null,-1),W=(0,t._)("br",null,null,-1),h=(0,t._)("br",null,null,-1),q=(0,t._)("br",null,null,-1),U=(0,t._)("br",null,null,-1),D=(0,t._)("br",null,null,-1),C=(0,t._)("br",null,null,-1),H=(0,t._)("br",null,null,-1),j=(0,t._)("br",null,null,-1),Q=(0,t._)("br",null,null,-1),Z=(0,t._)("br",null,null,-1),V=(0,t._)("br",null,null,-1),I={class:"col-12 col-md-6 p2p-order-0"},K=["src"],L={class:"text-positive"},S={class:"text-negative"},Y={class:"text-caption q-mb-sm"},F={class:"row q-col-gutter-md"},T={class:"col-6"},P={class:"col-6"},A={class:"text-caption q-mb-xs"},B={class:"text-positive"},E={class:"text-negative"},R={class:"text-caption q-mb-xs"},G={class:"text-positive"},J={class:"text-negative"},M={class:"text-caption q-mb-xs"},N={class:"text-positive"},O={class:"text-negative"},X={class:"text-caption q-mb-xs"},ll={class:"text-caption q-mb-xs"},el={class:"text-caption q-mb-xs"},al={class:"text-caption q-mb-xs"},tl={class:"text-positive"},nl={class:"text-caption q-mb-xs"},sl={class:"text-negative"},ul={class:"row q-col-gutter-md"},ol={class:"col-6"},_l={class:"col-6"},pl={class:"text-bold"},rl={key:0},il=(0,t._)("br",null,null,-1),dl=(0,t._)("br",null,null,-1),ml=(0,t._)("br",null,null,-1),wl=(0,t._)("br",null,null,-1),cl=(0,t._)("br",null,null,-1),fl=(0,t._)("br",null,null,-1),bl=(0,t._)("br",null,null,-1),vl=(0,t._)("br",null,null,-1),$l=(0,t._)("br",null,null,-1),gl=(0,t._)("br",null,null,-1),kl=(0,t._)("br",null,null,-1),yl={class:"q-gutter-md"},zl={key:1},xl={class:"text-bold q-mb-none"},Wl=(0,t._)("br",null,null,-1),hl=(0,t._)("br",null,null,-1),ql=(0,t._)("br",null,null,-1),Ul=(0,t._)("br",null,null,-1),Dl={key:2},Cl={class:"text-bold q-mb-none"},Hl=(0,t._)("br",null,null,-1),jl=(0,t._)("br",null,null,-1),Ql=(0,t._)("br",null,null,-1),Zl=(0,t._)("br",null,null,-1),Vl={key:3},Il={class:"text-bold q-mb-none"},Kl=(0,t._)("br",null,null,-1),Ll=(0,t._)("br",null,null,-1),Sl=(0,t._)("br",null,null,-1),Yl=(0,t._)("br",null,null,-1),Fl={key:4},Tl={class:"text-bold q-mb-none"},Pl=(0,t._)("br",null,null,-1),Al=(0,t._)("br",null,null,-1),Bl=(0,t._)("br",null,null,-1),El=(0,t._)("br",null,null,-1),Rl=(0,t._)("p",{class:"text-bold"},"Активные сделки",-1),Gl=(0,t._)("strong",null,"Дата создания сделки",-1),Jl=(0,t._)("br",null,null,-1),Ml=(0,t._)("br",null,null,-1),Nl=(0,t._)("strong",null,"Объем в рублях",-1),Ol=(0,t._)("br",null,null,-1),Xl=(0,t._)("br",null,null,-1),le={key:1,class:"relative-position full-height"},ee={__name:"Index",setup(l){let e=a(24409);const ee=(0,u.Q)(),ae=(0,r.QT)(),te=(0,i.T)(),ne=(0,o.iH)("sell"),se=(0,o.iH)("offers"),ue=((0,o.iH)(!1),(0,o.iH)(!1)),oe=(0,o.iH)(!1),_e=(0,o.iH)({name:""}),pe=(0,o.iH)(null),re=(0,o.iH)({ticked:[],expanded:[]}),ie=(0,o.iH)(!1),de=(0,o.iH)(!1),me=(0,o.iH)([{label:ae.t("p2p_filter_course_up"),value:{order_by:"course",dir:"desc"}},{label:ae.t("p2p_filter_course_down"),value:{order_by:"course",dir:"asc"}},{label:ae.t("p2p_filter_vol_up"),value:{order_by:"min_amount",dir:"desc"}},{label:ae.t("p2p_filter_vol_down"),value:{order_by:"min_amount",dir:"asc"}}]),we=(0,t.Fl)((()=>e.orderBy(ee.assets,["order_num"]))),ce=(0,t.Fl)((()=>te.offers)),fe=(0,t.Fl)((()=>te.own_offers)),be=(0,t.Fl)((()=>te.own_trades)),ve=(0,t.Fl)((()=>te.all_trades)),$e=(0,t.Fl)((()=>te.user)),ge=(0,t.Fl)((()=>te.payment_methods));async function ke(l){const e=await _.h.post("/api/p2p/delete_offer",{wallet:$e.value.wallet,id:l});e.data.success?(0,p.d$)("positive",e.data.message):(0,p.d$)("negative",e.data.message),await te.get_own_offers(),await ee.getAssets()}function ye(){pe.value=me.value[0],re.value.ticked=[],ie.value=!1,de.value=!1,oe.value=!1}async function ze(l){ue.value=!ue.value,"reset"===l&&ye(),await te.get_offers(_e.value.id,pe.value.value.order_by,pe.value.value.dir,re.value.ticked,ie.value,de.value),ue.value=!ue.value}async function xe(){ue.value=!ue.value,await te.getAllData(_e.value.id,"course","desc"),ue.value=!ue.value}return(0,t.wF)((async()=>{_e.value=we.value[0],pe.value=me.value[0]})),(0,t.bv)((async()=>{await xe(),await ee.getAssets()})),(l,e)=>{const a=(0,t.up)("q-tab"),u=(0,t.up)("q-tabs"),o=(0,t.up)("q-inner-loading"),_=(0,t.up)("q-icon"),p=(0,t.up)("q-item-label"),r=(0,t.up)("q-item-section"),i=(0,t.up)("q-badge"),ee=(0,t.up)("btn"),ae=(0,t.up)("q-card-section"),te=(0,t.up)("q-card"),oe=(0,t.up)("q-expansion-item"),de=(0,t.up)("q-list"),ye=(0,t.up)("q-tab-panel"),xe=(0,t.up)("q-tab-panels"),We=(0,t.up)("q-avatar"),he=(0,t.up)("q-item"),qe=(0,t.up)("q-select"),Ue=(0,t.up)("q-tree"),De=(0,t.up)("q-checkbox"),Ce=(0,t.up)("q-btn"),He=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(He,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",d,[$e.value.is_p2p_blocked?((0,t.wg)(),(0,t.iD)("div",le,[(0,t.Wm)(o,{class:"z-max",showing:"",label:l.$t("p2p_closed"),color:"negative","label-class":"text-negative","label-style":"font-size: 1.1em"},null,8,["label"])])):((0,t.wg)(),(0,t.iD)("div",m,[(0,t.Wm)(u,{modelValue:se.value,"onUpdate:modelValue":e[0]||(e[0]=l=>se.value=l),class:"q-mb-md text-white custom-tabs","active-color":"dark","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{"no-caps":"",class:"custom-tab text-bold",name:"offers",label:"P2P"}),(0,t.Wm)(a,{"no-caps":"",class:"custom-tab text-bold",name:"own",label:l.$t("p2p_menu_own")},null,8,["label"]),$e.value.is_p2p_admin?((0,t.wg)(),(0,t.j4)(a,{key:0,"no-caps":"",class:"custom-tab text-bold",name:"admin",label:"Раздел админа"})):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),(0,t.Wm)(xe,{modelValue:se.value,"onUpdate:modelValue":e[13]||(e[13]=l=>se.value=l),class:"bg-transparent"},{default:(0,t.w5)((()=>[(0,t.Wm)(ye,{name:"offers",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t._)("div",w,[(0,t._)("div",c,[(0,t.Wm)(u,{modelValue:ne.value,"onUpdate:modelValue":e[1]||(e[1]=l=>ne.value=l),class:"q-mb-md text-white text-bold","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{"no-caps":"",class:"tab-bold",name:"sell",label:`${l.$t("p2p_sell_orders")} (${ce.value.filter((l=>l.is_sell)).length})`},null,8,["label"]),(0,t.Wm)(a,{"no-caps":"",class:"tab-bold",name:"buy",label:`${l.$t("p2p_buy_orders")}  (${ce.value.filter((l=>!l.is_sell)).length})`},null,8,["label"])])),_:1},8,["modelValue"]),(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(xe,{modelValue:ne.value,"onUpdate:modelValue":e[2]||(e[2]=l=>ne.value=l),class:"bg-transparent"},{default:(0,t.w5)((()=>[(0,t.Wm)(ye,{name:"buy",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{class:"z-max",showing:ue.value,color:"primary"},null,8,["showing"]),(0,t.Wm)(de,{class:"q-pa-md"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(ce.value.filter((l=>!l.is_sell)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",class:"asset-item bordered",group:"buy",key:e.id},{header:(0,t.w5)((()=>[(0,t.Wm)(_,{name:e.user.is_vip?"verified_user":"person",color:e.user.is_online?"positive":"grey",size:"24px",class:"q-mr-md"},null,8,["name","color"]),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{overline:"",class:"text-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(`№${e.id} ${l.$t("volume")} ${e.amount} ${l.$t("p2p_iz")} ${e.start_amount}`),1)])),_:2},1024),(0,t.Wm)(p,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(`${l.$t("p2p_course")} ${e.course}`),1)])),_:2},1024)])),_:2},1024)])),default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_placed")),1),(0,t.Uk)(),(0,t.Wm)(s.Z,{address:e.user.wallet},null,8,["address"]),e.user.is_vip?((0,t.wg)(),(0,t.j4)(i,{key:0,color:"positive"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_verify")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(i,{key:1,color:"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_not_verify")),1)])),_:1})),e.user.is_online?((0,t.wg)(),(0,t.j4)(i,{key:2,color:"positive",class:"q-ml-sm"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_online")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(i,{key:3,color:"negative",class:"q-ml-sm"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_offline")),1)])),_:1})),f,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),b,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume")),1),(0,t.Uk)(": "+(0,n.zw)(e.amount)+" из "+(0,n.zw)(e.start_amount),1),v,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_course")),1),(0,t.Uk)(": "+(0,n.zw)(e.course),1),$,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_min")),1),(0,t.Uk)(": "+(0,n.zw)(e.min_amount),1),g,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_payment_type")),1),(0,t.Uk)(":"),k,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.payment_types,(l=>((0,t.wg)(),(0,t.iD)("span",{key:l.id},(0,n.zw)(l.label)+"  ",1)))),128)),y,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_rules")),1),(0,t.Uk)(":"),z,(0,t.Uk)(" "+(0,n.zw)(e.rules),1),x,W,(0,t.Wm)(ee,{color:"negative","text-color":"white",disable:e.user.wallet===$e.value.wallet,onClick:a=>l.$router.push({name:"p2p_offer",params:{offer_id:e.id}}),"no-caps":"",unelevated:"",class:"full-width",label:l.$t("sell")},null,8,["disable","onClick","label"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(ye,{name:"sell",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{class:"z-max",showing:ue.value,color:"primary"},null,8,["showing"]),(0,t.Wm)(de,{class:"q-pa-md"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(ce.value.filter((l=>l.is_sell)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"sell",key:e.id,class:"asset-item bordered"},{header:(0,t.w5)((()=>[(0,t.Wm)(_,{name:e.user.is_vip?"verified_user":"person",color:e.user.is_online?"positive":"grey",size:"24px",class:"q-mr-md"},null,8,["name","color"]),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{overline:"",class:"text-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(`№${e.id} ${l.$t("volume")} ${e.amount} ${l.$t("p2p_iz")} ${e.start_amount}`),1)])),_:2},1024),(0,t.Wm)(p,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(`${l.$t("p2p_course")} ${e.course}`),1)])),_:2},1024)])),_:2},1024)])),default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_placed")),1),(0,t.Wm)(s.Z,{address:e.user.wallet},null,8,["address"]),e.user.is_vip?((0,t.wg)(),(0,t.j4)(i,{key:0,color:"positive"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_verify")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(i,{key:1,color:"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_not_verify")),1)])),_:1})),e.user.is_online?((0,t.wg)(),(0,t.j4)(i,{key:2,color:"positive",class:"q-ml-sm"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_online")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(i,{key:3,color:"negative",class:"q-ml-sm"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.$t("p2p_offline")),1)])),_:1})),h,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),q,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume")),1),(0,t.Uk)(": "+(0,n.zw)(e.amount)+" из "+(0,n.zw)(e.start_amount),1),U,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_course")),1),(0,t.Uk)(": "+(0,n.zw)(e.course),1),D,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_min")),1),(0,t.Uk)(": "+(0,n.zw)(e.min_amount),1),C,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_payment_type")),1),(0,t.Uk)(":"),H,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.payment_types,(l=>((0,t.wg)(),(0,t.iD)("span",{key:l.id},(0,n.zw)(l.label)+"  ",1)))),128)),j,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_rules")),1),(0,t.Uk)(":"),Q,(0,t.Uk)(" "+(0,n.zw)(e.rules),1),Z,V,(0,t.Wm)(ee,{color:"positive",disable:e.user.wallet===$e.value.wallet,onClick:a=>l.$router.push({name:"p2p_offer",params:{offer_id:e.id}}),"text-color":"white","no-caps":"",unelevated:"",class:"full-width",label:l.$t("buy")},null,8,["disable","onClick","label"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})]),(0,t._)("div",I,[(0,t.Wm)(te,{class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t.Wm)(qe,{outlined:"",onPopupHide:e[3]||(e[3]=l=>ze("reset")),options:we.value.filter((l=>l.is_in_p2p)),modelValue:_e.value,"onUpdate:modelValue":e[4]||(e[4]=l=>_e.value=l),class:"q-mb-md",color:"dark",behavior:"menu","option-label":"name",label:l.$t("p2p_select_asset")},{option:(0,t.w5)((l=>[(0,t.Wm)(he,(0,n.vs)((0,t.F4)(l.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(r,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(We,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:l.opt.icon},null,8,K)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"text-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.opt.name),1)])),_:2},1024),(0,t.Wm)(p,{caption:""},{default:(0,t.w5)((()=>[(0,t._)("span",L,(0,n.zw)(l.opt.buy_offers),1),(0,t.Uk)(" / "),(0,t._)("span",S,(0,n.zw)(l.opt.sell_offers),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["options","modelValue","label"]),(0,t.Wm)(oe,{group:"p2p",label:l.$t("p2p_sort"),class:"q-mb-md",icon:"swap_vert","default-opened":l.$q.screen.gt.sm},{default:(0,t.w5)((()=>[(0,t.Wm)(te,{class:"no-border"},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(qe,{dense:"",label:l.$t("p2p_sort_for"),outlined:"",class:"q-mb-md",color:"dark",behavior:"menu",options:me.value,modelValue:pe.value,"onUpdate:modelValue":e[5]||(e[5]=l=>pe.value=l)},null,8,["label","options","modelValue"]),(0,t._)("p",Y,(0,n.zw)(l.$t("p2p_only_payments")),1),ge.value?((0,t.wg)(),(0,t.j4)(Ue,{key:0,nodes:ge.value,accordion:"","children-key":"types","node-key":"label",color:"dark",class:"q-mb-md","tick-strategy":"leaf",ticked:re.value.ticked,"onUpdate:ticked":e[6]||(e[6]=l=>re.value.ticked=l),expanded:re.value.expanded,"onUpdate:expanded":e[7]||(e[7]=l=>re.value.expanded=l)},null,8,["nodes","ticked","expanded"])):(0,t.kq)("",!0),(0,t.Wm)(De,{class:"q-mb-md",color:"dark",modelValue:ie.value,"onUpdate:modelValue":e[8]||(e[8]=l=>ie.value=l),label:l.$t("p2p_only_online")},null,8,["modelValue","label"]),(0,t._)("div",F,[(0,t._)("div",T,[(0,t.Wm)(ee,{label:l.$t("p2p_apply"),"text-color":"white",onClick:e[9]||(e[9]=l=>ze("filter")),unelevated:"","no-caps":"",color:"green-5",classes:"full-width q-mb-md q-py-sm"},null,8,["label"])]),(0,t._)("div",P,[(0,t.Wm)(ee,{label:l.$t("p2p_clear"),"text-color":"white",onClick:e[10]||(e[10]=l=>ze("reset")),unelevated:"","no-caps":"",color:"grey-5",classes:"full-width q-mb-md q-py-sm"},null,8,["label"])])])])),_:1})])),_:1})])),_:1},8,["label","default-opened"]),(0,t.Wm)(oe,{group:"p2p",label:l.$t("p2p_stats"),class:"q-mb-md",icon:"bar_chart"},{default:(0,t.w5)((()=>[(0,t.Wm)(te,{class:"no-border"},{default:(0,t.w5)((()=>[(0,t.Wm)(ae,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[(0,t._)("p",A,[(0,t.Uk)((0,n.zw)(l.$t("p2p_day"))+": ",1),(0,t._)("span",B,(0,n.zw)(_e.value.daily_volume_byu),1),(0,t.Uk)(" / "),(0,t._)("span",E,(0,n.zw)(_e.value.daily_volume_sell),1)]),(0,t._)("p",R,[(0,t.Uk)((0,n.zw)(l.$t("p2p_week"))+": ",1),(0,t._)("span",G,(0,n.zw)(_e.value.weekly_volume_byu),1),(0,t.Uk)(" / "),(0,t._)("span",J,(0,n.zw)(_e.value.weekly_volume_sell),1)]),(0,t._)("p",M,[(0,t.Uk)((0,n.zw)(l.$t("p2p_month"))+": ",1),(0,t._)("span",N,(0,n.zw)(_e.value.monthly_volume_byu),1),(0,t.Uk)(" / "),(0,t._)("span",O,(0,n.zw)(_e.value.monthly_volume_sell),1)]),(0,t._)("p",X,(0,n.zw)(l.$t("p2p_trades_day"))+": "+(0,n.zw)(_e.value.daily_trades),1),(0,t._)("p",ll,(0,n.zw)(l.$t("p2p_trades_week"))+": "+(0,n.zw)(_e.value.weekly_trades),1),(0,t._)("p",el,(0,n.zw)(l.$t("p2p_trades_month"))+": "+(0,n.zw)(_e.value.monthly_trades),1),(0,t._)("p",al,[(0,t.Uk)((0,n.zw)(l.$t("p2p_trades_volume_buy"))+": ",1),(0,t._)("span",tl,(0,n.zw)(_e.value.total_in_buy),1)]),(0,t._)("p",nl,[(0,t.Uk)((0,n.zw)(l.$t("p2p_trades_volume_sell"))+": ",1),(0,t._)("span",sl,(0,n.zw)(_e.value.total_in_sell),1)])])),_:1})])),_:1})])),_:1},8,["label"]),(0,t._)("div",ul,[(0,t._)("div",ol,[(0,t.Wm)(ee,{dense:"",label:"Оффер на покупку",icon:"add",onClick:e[11]||(e[11]=e=>l.$router.push({name:"p2p_new_buy_offer"})),unelevated:"","no-caps":"",color:"positive","text-color":"white",class:"full-width q-mb-md q-py-md"})]),(0,t._)("div",_l,[(0,t.Wm)(ee,{dense:"",label:"Оффер на продажу",icon:"add",onClick:e[12]||(e[12]=e=>l.$router.push({name:"p2p_new_sell_offer"})),unelevated:"","no-caps":"",color:"negative","text-color":"white",class:"full-width q-py-md"})])])])),_:1})])),_:1})])])])),_:1}),(0,t.Wm)(ye,{name:"own",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("p",pl,(0,n.zw)(l.$t("p2p_own")),1),fe.value.length>0?((0,t.wg)(),(0,t.iD)("div",rl,[(0,t.Wm)(de,{separator:"",class:"q-mb-md"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(fe.value,(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"offers",label:`#${e.id} - ${l.$t("p2p_course")}\n                                 ${e.is_sell?l.$t("p2p_selling"):l.$t("p2p_buying")} ${e.amount} ${e.asset.name}`,key:e.id,caption:`${l.$t("p2p_course")} ${e.course}`},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_in_trade")),1),(0,t.Uk)(": "),(0,t._)("span",{class:(0,n.C_)(["text-bold",e.is_in_trade?"text-negative":"text-positive"])},(0,n.zw)(e.is_in_trade?l.$t("p2p_yes"):l.$t("p2p_no")),3),il,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date_place")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),dl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_views")),1),(0,t.Uk)(": "+(0,n.zw)(e.views),1),ml,(0,t._)("strong",null,(0,n.zw)(l.$t("volume")),1),(0,t.Uk)(": "+(0,n.zw)(e.amount),1),wl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_course")),1),(0,t.Uk)(": "+(0,n.zw)(e.course)+" RUB",1),cl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_min")),1),(0,t.Uk)(": "+(0,n.zw)(e.min_amount),1),fl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_payment_type")),1),(0,t.Uk)(":"),bl,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.payment_types,(l=>((0,t.wg)(),(0,t.iD)("span",{key:l.id},(0,n.zw)(l.label)+"  ",1)))),128)),vl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_rules")),1),(0,t.Uk)(":"),$l,(0,t.Uk)(" "+(0,n.zw)(e.rules),1),gl,kl,(0,t._)("div",yl,[(0,t.Wm)(Ce,{color:"negative",onClick:l=>ke(e.id),"no-caps":"",unelevated:"",label:l.$t("p2p_delete")},null,8,["onClick","label"])])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1})])):(0,t.kq)("",!0),be.value.length>0&&be.value.filter((l=>l.status.is_default)).length>0?((0,t.wg)(),(0,t.iD)("div",zl,[(0,t._)("p",xl,(0,n.zw)(l.$t("p2p_waiting")),1),(0,t.Wm)(de,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(be.value.filter((l=>l.status.is_default)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"offers",label:`# ${e.id} - ${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?l.$t("p2p_buy_orders"):l.$t("p2p_sell_orders"):e.opponent.wallet===$e.value.wallet?l.$t("p2p_sell_orders"):l.$t("p2p_buy_orders")}\n                                ${e.asset_amount} ${e.offer.asset.name} ${l.$t("p2p_by_offer")} #${e.offer.id}`,"header-class":`${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?"text-positive":"text-negative":e.opponent.wallet===$e.value.wallet?"text-negative":"text-positive"}\n                                ${e.asset_amount} ${e.offer.asset.name}`,key:e.id,caption:`${l.$t("p2p_total_in_rub")} ${e.fiat_amount}`},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date_trade")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),Wl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in"))+" "+(0,n.zw)(e.offer.asset.name),1),(0,t.Uk)(": "+(0,n.zw)(e.asset_amount)+" ",1),hl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in_rub")),1),(0,t.Uk)(": "+(0,n.zw)(e.fiat_amount),1),ql,Ul,(0,t.Wm)(Ce,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),label:l.$t("p2p_in_trade_btn")},null,8,["onClick","label"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class","caption"])))),128))])),_:1})])):(0,t.kq)("",!0),be.value.length>0&&be.value.filter((l=>l.in_progress)).length>0?((0,t.wg)(),(0,t.iD)("div",Dl,[(0,t._)("p",Cl,(0,n.zw)(l.$t("p2p_active_trades")),1),(0,t.Wm)(de,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(be.value.filter((l=>l.in_progress)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"offers",label:`# ${e.id} - ${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?l.$t("p2p_buy_orders"):l.$t("p2p_sell_orders"):e.opponent.wallet===$e.value.wallet?l.$t("p2p_sell_orders"):l.$t("p2p_buy_orders")}\n                                ${e.asset_amount} ${e.offer.asset.name} ${l.$t("p2p_by_offer")} #${e.offer.id}`,"header-class":`${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?"text-positive":"text-negative":e.opponent.wallet===$e.value.wallet?"text-negative":"text-positive"}\n                                ${e.asset_amount} ${e.offer.asset.name}`,key:e.id,caption:`${l.$t("p2p_total_in_rub")} ${e.fiat_amount}`},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date_trade")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),Hl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in"))+" "+(0,n.zw)(e.offer.asset.name),1),(0,t.Uk)(": "+(0,n.zw)(e.asset_amount)+" ",1),jl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in_rub")),1),(0,t.Uk)(": "+(0,n.zw)(e.fiat_amount),1),Ql,Zl,(0,t.Wm)(Ce,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),label:l.$t("p2p_in_trade_btn")},null,8,["onClick","label"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class","caption"])))),128))])),_:1})])):(0,t.kq)("",!0),be.value.length>0&&be.value.filter((l=>l.status.is_finished)).length>0?((0,t.wg)(),(0,t.iD)("div",Vl,[(0,t._)("p",Il,(0,n.zw)(l.$t("p2p_finish_trades")),1),(0,t.Wm)(de,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(be.value.filter((l=>l.status.is_finished)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"offers",label:`# ${e.id} - ${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?l.$t("p2p_buy_orders"):l.$t("p2p_sell_orders"):e.opponent.wallet===$e.value.wallet?l.$t("p2p_sell_orders"):l.$t("p2p_buy_orders")}\n                                ${e.asset_amount} ${e.offer.asset.name} ${l.$t("p2p_by_offer")} #${e.offer.id}`,"header-class":`${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?"text-positive":"text-negative":e.opponent.wallet===$e.value.wallet?"text-negative":"text-positive"}\n                                ${e.asset_amount} ${e.offer.asset.name}`,key:e.id,caption:`${l.$t("p2p_total_in_rub")} ${e.fiat_amount}`},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date_trade")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),Kl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in"))+" "+(0,n.zw)(e.offer.asset.name),1),(0,t.Uk)(": "+(0,n.zw)(e.asset_amount)+" ",1),Ll,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in_rub")),1),(0,t.Uk)(": "+(0,n.zw)(e.fiat_amount),1),Sl,Yl])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class","caption"])))),128))])),_:1})])):(0,t.kq)("",!0),be.value.length>0&&be.value.filter((l=>l.status.is_declined)).length>0?((0,t.wg)(),(0,t.iD)("div",Fl,[(0,t._)("p",Tl,(0,n.zw)(l.$t("p2p_decline_trades")),1),(0,t.Wm)(de,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(be.value.filter((l=>l.status.is_declined)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"offers",label:`# ${e.id} - ${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?l.$t("p2p_buy_orders"):l.$t("p2p_sell_orders"):e.opponent.wallet===$e.value.wallet?l.$t("p2p_sell_orders"):l.$t("p2p_buy_orders")}\n                                ${e.asset_amount} ${e.offer.asset.name} ${l.$t("p2p_by_offer")} #${e.offer.id}`,"header-class":`${e.offer.is_sell?e.opponent.wallet===$e.value.wallet?"text-positive":"text-negative":e.opponent.wallet===$e.value.wallet?"text-negative":"text-positive"}\n                                ${e.asset_amount} ${e.offer.asset.name}`,key:e.id,caption:`${l.$t("p2p_total_in_rub")} ${e.fiat_amount}`},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_date_trade")),1),(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),Pl,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in"))+" "+(0,n.zw)(e.offer.asset.name),1),(0,t.Uk)(": "+(0,n.zw)(e.asset_amount)+" ",1),Al,(0,t._)("strong",null,(0,n.zw)(l.$t("p2p_volume_in_rub")),1),(0,t.Uk)(": "+(0,n.zw)(e.fiat_amount),1),Bl,El,(0,t.Wm)(Ce,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),label:l.$t("p2p_in_trade_btn")},null,8,["onClick","label"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class","caption"])))),128))])),_:1})])):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,t.Wm)(ye,{name:"admin",class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[Rl,ve.value.length>0?((0,t.wg)(),(0,t.j4)(de,{key:0,separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(ve.value.filter((l=>l.in_progress)),(e=>((0,t.wg)(),(0,t.j4)(oe,{clickable:"",group:"offers",class:"asset-item",label:`№${e.id} Cтатус: ${e.status.label}`,"header-class":`text-${e.status.color}`,key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(te,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ae,null,{default:(0,t.w5)((()=>[Gl,(0,t.Uk)(": "+(0,n.zw)(new Date(e.created_at).toLocaleDateString()),1),Jl,(0,t._)("strong",null,"Обьем в "+(0,n.zw)(e.offer.asset.name),1),(0,t.Uk)(": "+(0,n.zw)(e.asset_amount)+" ",1),Ml,Nl,(0,t.Uk)(": "+(0,n.zw)(e.fiat_amount),1),Ol,Xl,(0,t.Wm)(ee,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),label:"В сделку"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class"])))),128))])),_:1})):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])]))])])),_:1})}}};var ae=a(69885),te=a(47817),ne=a(57661),se=a(89800),ue=a(84106),oe=a(44458),_e=a(60854),pe=a(13246),re=a(50651),ie=a(22857),de=a(76749),me=a(33115),we=a(63190),ce=a(20990),fe=a(10215),be=a(490),ve=a(61357),$e=a(84749),ge=a(96937),ke=a(24455),ye=a(69984),ze=a.n(ye);const xe=ee,We=xe;ze()(ee,"components",{QPage:ae.Z,QTabs:te.Z,QTab:ne.Z,QTabPanels:se.Z,QTabPanel:ue.Z,QCard:oe.Z,QInnerLoading:_e.Z,QList:pe.Z,QExpansionItem:re.Z,QIcon:ie.Z,QItemSection:de.Z,QItemLabel:me.Z,QCardSection:we.Z,QBadge:ce.Z,QSelect:fe.Z,QItem:be.Z,QAvatar:ve.Z,QTree:$e.Z,QCheckbox:ge.Z,QBtn:ke.Z})}}]);