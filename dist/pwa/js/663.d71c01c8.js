"use strict";(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[663],{21357:(t,e,a)=>{a.d(e,{F:()=>o});a(72879);var l=a(81809),s=a(60499),n=a(76081),r=a(46190),c=a(91569),i=a(17779);const d=(0,r.c)(),o=(0,l.Q_)("exchange",(()=>{const t=(0,s.iH)([]),e=(0,s.iH)([]),a=async()=>{const a=await n.Z.get("https://anthil.online/index/blockexplorer.json?exchange&lang=en");i.log(a.data.popularPairs),t.value=a.data.popularPairs,e.value=a.data.lastTrades},l=async(t,e)=>{const a=await n.Z.get(`https://anthil.online/index/blockexplorer.json?asset=${t}&asset=${e}&lang=ru`);return a.data},r=async(t,e)=>{const a=await n.Z.get(`https://anthil.online/apiexchange/ordersbook/${t}/${e}?limit=500`);return a.data},o=async(t,e=0)=>{if(0===e){const e=await n.Z.get(`https://anthil.online/apiexchange/allordersbyaddress/${t}?limit=20&desc`);return e.data}{const a=await n.Z.get(`https://anthil.online/apiexchange/allordersbyaddress/${t}/${e}?limit=20&desc`);return a.data}},w=t=>20===t.length&&t[19].id,u=async()=>{const t=d.addresses[0].address;i.log(t);let e=await o(t),a=w(e);if(a)do{let l=await o(t,a);e=e.concat(l),a=w(l)}while(a);return e},m=async(t,e,a)=>{let l=[];const s=await c.h.get(`https://anthil.online/apiexchange/trades/${t}/${e}`);i.log(s.data);for(let n of s.data.reverse())l.push({time:parseInt(n.timestamp)/1e3,value:n.price});return i.log(l),l.filter(((t,e,a)=>a.findIndex((e=>e.time===t.time))===e))};return{tradePairs:t,lastTrades:e,getTradePairs:a,getTradePair:l,getOrders:r,getOwnOrders:u,getTradeHistory:m}}))},8663:(t,e,a)=>{a.r(e),a.d(e,{default:()=>T});a(72879);var l=a(59835),s=a(60499),n=a(86970),r=a(21357),c=a(82134),i=a(17779);const d={class:"row q-col-gutter-md"},o={class:"col-12 col-md-6"},w=(0,l._)("p",{class:"subtitle"},"Торговые пары",-1),u={class:"flex items-center no-wrap"},m=["src"],p={class:"no-margin text-caption"},x=(0,l._)("p",{class:"no-margin text-caption q-px-xs"}," /",-1),_=["src"],g={class:"no-margin text-caption"},f={class:"col-12 col-md-6"},h=(0,l._)("p",{class:"subtitle"},"Последние сделки",-1),W={__name:"Index",setup(t){const e=(0,r.F)(),a="https://anthil.online";return(0,l.wF)((async()=>{i.log("mount"),await e.getTradePairs()})),(t,r)=>{const i=(0,l.up)("q-item-section"),W=(0,l.up)("q-item"),k=(0,l.up)("q-avatar"),U=(0,l.up)("q-list"),v=(0,l.up)("q-card-section"),b=(0,l.up)("q-card"),y=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(y,{padding:"",class:"full-height"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",o,[w,(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"withdrawal-list"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"withdrawal-item bg-grey-4 text-bold"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Пара")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Ордеров")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Последняя цена")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Дневной объем")])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(e).tradePairs,((e,r)=>((0,l.wg)(),(0,l.j4)(W,{clickable:"",onClick:a=>t.$router.push(`/wallet/exchange/pair/${e.have.key}/${e.want.key}`),key:r,class:"withdrawal-item"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l.Wm)(k,{class:"q-mr-xs",size:"28px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,s.SU)(a)+e.have.iconURL,alt:""},null,8,m)])),_:2},1024),(0,l._)("p",p,(0,n.zw)(e.have.nameOrig),1),x,(0,l.Wm)(k,{class:"q-mr-xs",size:"28px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,s.SU)(a)+e.want.iconURL,alt:""},null,8,_)])),_:2},1024),(0,l._)("p",g,(0,n.zw)(e.want.nameOrig),1)])])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.orders),1)])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.last),1)])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.volume24),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})]),(0,l._)("div",f,[h,(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"withdrawal-list"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"withdrawal-item bg-grey-4 text-bold"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Дата")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Пара")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Инициатор")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Oбъем")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Цена")])),_:1}),(0,l.Wm)(i,{class:"text-center"},{default:(0,l.w5)((()=>[(0,l.Uk)("Держатель")])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(e).lastTrades,((t,e)=>((0,l.wg)(),(0,l.j4)(W,{key:e,class:"withdrawal-item"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(new Date(t.timestamp).toLocaleString()),1)])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.assetHaveName.replace("►Ast:",""))+"/"+(0,n.zw)(t.assetWantName.replace("►Ast:","")),1)])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption ellipsis"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.Z,{address:t.initiatorCreator_addr,label_text:"Открыть"},null,8,["address"])])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(parseFloat(t.amountHave).toFixed(6)),1)])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(parseFloat(t.realPrice).toFixed(6)),1)])),_:2},1024),(0,l.Wm)(i,{class:"text-center text-caption ellipsis"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.Z,{address:t.targetCreator_addr,label_text:"Открыть"},null,8,["address"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])])])),_:1})}}};var k=a(69885),U=a(44458),v=a(63190),b=a(13246),y=a(490),Z=a(76749),z=a(61357),$=a(69984),q=a.n($);const P=W,T=P;q()(W,"components",{QPage:k.Z,QCard:U.Z,QCardSection:v.Z,QList:b.Z,QItem:y.Z,QItemSection:Z.Z,QAvatar:z.Z})}}]);