(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[884],{50884:(a,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>R});l(72879);var s=l(59835),e=l(86970),o=l(60499),c=l(59142),n=l.n(c),i=l(46190),r=l(91569),_=l(17779);const m={class:"container"},d=(0,s._)("p",{class:"title"},"Общие активы",-1),u={class:"title text-dark no-margin"},p=(0,s._)("p",{class:"text-body1 text-dark no-margin"},"~ 234 324234 ATL",-1),w={class:"row q-col-gutter-md"},g={class:"col-12 col-md-3"},b={class:"col-12 col-md-3"},v=(0,s._)("p",{class:"title"},"Популярные пары",-1),x={class:"row q-col-gutter-sm q-col-gutter-md-md q-mb-xl"},q={class:"text-center"},f=["src"],k={class:"row q-col-gutter-xs q-col-gutter-md-md q-mb-md"},h={class:"col-6"},z=(0,s._)("p",{class:"q-mb-sm text-bold"},"Цена",-1),$={class:"no-margin text-caption"},W={class:"col-6"},F=(0,s._)("p",{class:"q-mb-sm text-bold"},"Изменение",-1),C={class:"no-margin text-caption"},y={class:"no-margin text-caption"},A={class:"no-margin text-caption"},Q={class:"row q-col-gutter-md"},T={class:"col-12 col-md-5"},Z={class:"q-mb-md"},L={class:"col-12 col-md-7"},P={class:"col-6"},D=(0,s._)("p",{class:"title text-dark q-mb-none"},"Стейкинг",-1),H={class:"subtitle text-dark q-mb-none"},I=(0,s._)("p",{class:"no-margin"},"людей сейчас стейкают монету ATL",-1),S={class:"subtitle text-dark q-mb-none"},j=(0,s._)("p",{class:"no-margin"},"всего ATL в стейкинге",-1),B={class:"col-6"},K={__name:"Index",setup(a){(0,i.c)();const t="https://web.antex.pro",l=(0,o.iH)([]);return(0,s.wF)((async()=>{const a=await r.h.get("/api/settings/fav_volumes");l.value=a.data,_.log(a.data)})),(a,c)=>{const i=(0,s.up)("q-card-section"),r=(0,s.up)("q-card"),_=(0,s.up)("btn"),K=(0,s.up)("q-avatar"),U=(0,s.up)("q-img"),Y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(Y,{padding:""},{default:(0,s.w5)((()=>[(0,s._)("div",m,[d,(0,s.Wm)(r,{class:"q-mb-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s._)("p",u,"~ "+(0,e.zw)(a.$filters.convertAmount(a.$account_store.totalBalance))+" ₽",1),p])),_:1})])),_:1}),(0,s._)("div",w,[(0,s._)("div",g,[(0,s.Wm)(_,{label:"Пополнить",onClick:c[0]||(c[0]=t=>a.$router.push({name:"wallet_for_buy_assets"}))})]),(0,s._)("div",b,[(0,s.Wm)(_,{label:"Мои активы",onClick:c[1]||(c[1]=t=>a.$router.push({name:"wallet_assets"}))})])]),v,(0,s._)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.value,(l=>((0,s.wg)(),(0,s.iD)("div",{class:"col-6 col-md-3",key:l.id},[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s._)("div",q,[(0,s.Wm)(K,{size:"60px",class:"q-mb-md"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:`${(0,o.SU)(t)}/apiasset/icon/${l.b_key}`,alt:""},null,8,f)])),_:2},1024),(0,s._)("p",null,(0,e.zw)(l.pair.replace("_"," / ")),1)]),(0,s._)("div",k,[(0,s._)("div",h,[z,(0,s._)("p",$,(0,e.zw)(parseFloat(l.last_price).toFixed(2)),1)]),(0,s._)("div",W,[F,(0,s._)("p",C,(0,e.zw)(a.$t("for24h"))+": "+(0,e.zw)(parseFloat(l.base_volume_24).toFixed(2)),1),(0,s._)("p",y,(0,e.zw)(a.$t("for7d"))+": "+(0,e.zw)(parseFloat(l.base_volume_1w).toFixed(2)),1),(0,s._)("p",A,(0,e.zw)(a.$t("for1m"))+": "+(0,e.zw)(parseFloat(l.base_volume_1m).toFixed(2)),1)])])])),_:2},1024)])),_:2},1024)])))),128))]),(0,s._)("div",Q,[(0,s._)("div",T,[(0,s._)("div",Z,[(0,s.Wm)(_,{label:"Пополнить","icon-right":"arrow_forward",onClick:c[2]||(c[2]=t=>a.$router.push({name:"wallet_for_buy_assets"}))})]),(0,s.Wm)(_,{label:"P2P торговля","icon-right":"arrow_forward",onClick:c[3]||(c[3]=t=>a.$router.push({name:"p2p_index"}))})]),(0,s._)("div",L,[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,{horizontal:"",class:"q-pa-md items-center"},{default:(0,s.w5)((()=>[(0,s._)("div",P,[D,(0,s._)("p",H,(0,e.zw)(a.$global.common_data?.total_users_in_stacking),1),I,(0,s._)("p",S,(0,e.zw)(a.$global.common_data?.total_amount_in_stacking),1),j]),(0,s._)("div",B,[(0,s.Wm)(U,{style:{width:"230px"},ratio:1,fit:"contain",src:n()})])])),_:1})])),_:1})])])])])),_:1})}}};var U=l(69885),Y=l(44458),E=l(63190),G=l(61357),J=l(70335),M=l(69984),N=l.n(M);const O=K,R=O;N()(K,"components",{QPage:U.Z,QCard:Y.Z,QCardSection:E.Z,QAvatar:G.Z,QImg:J.Z})},59142:(a,t,l)=>{a.exports=l.p+"img/staking.40400f93.png"}}]);