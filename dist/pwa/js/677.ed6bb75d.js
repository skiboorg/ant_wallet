"use strict";(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[677],{76677:(a,e,l)=>{l.r(e),l.d(e,{default:()=>h});l(72879);var t=l(59835),n=l(86970),s=l(60499),u=l(61957),r=l(23459),c=l(76028),d=l(28339);const o={class:"container"},i={class:"title ellipsis"},p=["innerHTML"],v=["innerHTML"],m={__name:"Transaction",setup(a){const e=(0,r.Q)();let l=/address=([^&]+)/g;const m=(0,s.iH)([]),w=(0,d.yj)(),b=(0,s.iH)(null);(0,t.Fl)((()=>e.assets));return(0,t.wF)((async()=>{const a=await(0,c.Of)(w.params.tx);m.value=a.data,m.value.tx.body=m.value.tx.body.replaceAll("href","");try{b.value=m.value.tx?.body.match(l)[0].split("=")[1],m.value.tx.body=m.value.tx.body.replaceAll("href","")}catch(e){}})),(a,e)=>{const l=(0,t.up)("btn"),r=(0,t.up)("q-card-section"),c=(0,t.up)("q-card"),d=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(d,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("p",i,"Транзакция "+(0,n.zw)((0,s.SU)(w).params.tx),1),(0,t.wy)((0,t._)("p",{class:"subtitle"},"Создана "+(0,n.zw)(new Date(m.value.tx?.timestamp).toLocaleString()),513),[[u.F8,m.value.tx]]),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t._)("div",{class:"content",innerHTML:m.value.tx?.body},null,8,p),(0,t._)("div",{class:"content q-mb-md",innerHTML:m.value.tx?.message},null,8,v),b.value?((0,t.wg)(),(0,t.j4)(l,{key:0,unelevated:"","no-caps":"",color:"primary",label:"Информация о получателе",onClick:e[0]||(e[0]=e=>a.$router.push({name:"scan_address",params:{address:b.value}}))})):(0,t.kq)("",!0)])),_:1})])),_:1})])])),_:1})}}};var w=l(69885),b=l(44458),_=l(63190),y=l(69984),x=l.n(y);const g=m,h=g;x()(m,"components",{QPage:w.Z,QCard:b.Z,QCardSection:_.Z})}}]);