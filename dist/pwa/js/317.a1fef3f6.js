(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[317],{78317:(M,N,j)=>{"use strict";j.r(N),j.d(N,{default:()=>X});j(72879);var D=j(59835),I=j(60499),g=j(86970),T=j(4612),u=j.n(T),z=j(53761),x=j.n(z),y=j(31655),A=j(96928),i=j(28339);const e={key:1,src:u()},E=(0,D._)("img",{class:"footer-img",src:"/icons/menu/home.svg"},null,-1),t=(0,D._)("p",{class:"footer-label"},"Главная",-1),L=(0,D._)("img",{class:"footer-img",src:"/icons/menu/trade.svg"},null,-1),O=(0,D._)("p",{class:"footer-label"},"Биржа",-1),c=(0,D._)("img",{class:"footer-img",src:"/icons/menu/stacking.svg"},null,-1),a=(0,D._)("p",{class:"footer-label"},"Стейкинг",-1),l=(0,D._)("img",{class:"footer-img",src:"/icons/menu/p2p.svg"},null,-1),w=(0,D._)("p",{class:"footer-label"},"Р2Р",-1),o=(0,D._)("img",{class:"footer-img",src:"/icons/menu/assets.svg"},null,-1),n=(0,D._)("p",{class:"footer-label"},"Активы",-1),s={class:"gt-sm text-center q-my-xl relative-position"},Q=(0,D._)("img",{src:x()},null,-1),k=["src"],S=(0,D._)("img",{src:"/icons/menu/logout.svg",alt:""},null,-1),U={class:"flex column items-center justify-center fullscreen"},Y=(0,D._)("p",{class:"no-margin text-negative text-center"},"Доступ временно ограничен",-1),r={__name:"MainLayout",setup(M){const N=(0,y.T)(),j=(0,A.t)(),T=(0,I.iH)(!1),u=(0,I.iH)("index"),z=(0,i.tv)(),x=(0,i.yj)(),r=[{title:"Главная",icon:"/icons/menu/home.svg",to:"/wallet/index"},{title:"Биржа",icon:"/icons/menu/trade.svg",to:"/wallet/exchange"},{title:"Стейкинг",icon:"/icons/menu/stacking.svg",to:"/wallet/staking"},{title:"P2P",icon:"/icons/menu/p2p.svg",to:"/wallet/p2p"},{title:"Активы",icon:"/icons/menu/assets.svg",to:"/wallet/assets"},{title:"Настройки",icon:"/icons/menu/settings.svg",to:"/wallet/settings"},{title:"Контракты",icon:"/icons/menu/contracts.svg",to:"/wallet/сontracts"},{title:"Партнерская программа",icon:"/icons/menu/partner.svg",to:"/wallet/partners"},{title:"Поддержка",icon:"/icons/menu/support.svg",to:"/wallet/support"},{title:"Оповещения",icon:"/icons/menu/support.svg",to:"/wallet/notifications"},{title:"Просмотр сети",icon:"/icons/menu/support.svg",to:"/wallet/scan"}],C=((0,I.iH)(!1),(0,I.iH)(!1),(0,I.iH)(!1)),m=(0,D.Fl)((()=>N.notifications)),p=(0,D.Fl)((()=>m.value.filter((M=>M.is_new)).length>0)),d=(0,D.Fl)((()=>N.user));function f(){window.location.reload()}async function v(){await j.logout(),await z.push("/")}return(0,D.wF)((async()=>{await N.get_notifications(),await N.get_user(),await N.get_payment_methods(),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((function(M){for(let N of M)N.addEventListener("updatefound",(()=>{C.value=!0}))}))})),(M,N)=>{const j=(0,D.up)("q-btn"),z=(0,D.up)("q-banner"),y=(0,D.up)("q-space"),A=(0,D.up)("unconfirmed-tx-icon"),i=(0,D.up)("q-icon"),m=(0,D.up)("q-badge"),_=(0,D.up)("q-toolbar"),h=(0,D.up)("q-header"),b=(0,D.up)("q-route-tab"),W=(0,D.up)("q-tabs"),Z=(0,D.up)("q-footer"),q=(0,D.up)("q-avatar"),V=(0,D.up)("q-item-section"),F=(0,D.up)("q-item"),H=(0,D.up)("q-list"),R=(0,D.up)("q-drawer"),B=(0,D.up)("router-view"),P=(0,D.up)("q-page-container"),J=(0,D.up)("q-layout"),$=(0,D.up)("q-card-section"),G=(0,D.up)("q-card");return d.value.is_wallet_blocked?((0,D.wg)(),(0,D.j4)(J,{key:1,view:"lHh Lpr fFf",class:"main-bg"},{default:(0,D.w5)((()=>[(0,D._)("div",U,[(0,D.Wm)(G,null,{default:(0,D.w5)((()=>[(0,D.Wm)($,null,{default:(0,D.w5)((()=>[Y])),_:1})])),_:1})])])),_:1})):((0,D.wg)(),(0,D.j4)(J,{key:0,view:"lHh Lpr fFf",class:"main-bg"},{default:(0,D.w5)((()=>[C.value?((0,D.wg)(),(0,D.j4)(z,{key:0,class:"bg-accent text-white"},{action:(0,D.w5)((()=>[(0,D.Wm)(j,{color:"primary","text-color":"dark",onClick:f,"no-caps":"",label:"Обновить"})])),default:(0,D.w5)((()=>[(0,D.Uk)(" Обнаружено обновление! ")])),_:1})):(0,D.kq)("",!0),(0,D.Wm)(h,{"reveal-offset":"100px",class:"lt-md bg-accent"},{default:(0,D.w5)((()=>[(0,D.Wm)(_,null,{default:(0,D.w5)((()=>["/wallet/index"!==(0,I.SU)(x).path?((0,D.wg)(),(0,D.j4)(j,{key:0,onClick:N[0]||(N[0]=N=>M.$router.back()),icon:"west",label:"Назад",flat:"","no-caps":"",size:"12px"})):((0,D.wg)(),(0,D.iD)("img",e)),(0,D.Wm)(y),(0,D.Wm)(A),(0,D.Wm)(j,{flat:"",round:"",dense:"",icon:"notifications",onClick:N[1]||(N[1]=N=>M.$router.push({name:"notifications"})),class:"q-ml-md"},{default:(0,D.w5)((()=>[p.value?((0,D.wg)(),(0,D.j4)(m,{key:0,floating:"",color:"negative"},{default:(0,D.w5)((()=>[(0,D.Wm)(i,{size:"10px",name:"priority_high"})])),_:1})):(0,D.kq)("",!0)])),_:1}),(0,D.Wm)(j,{flat:"",dense:"",round:"",icon:"menu",class:"q-ml-md","aria-label":"Menu",onClick:N[2]||(N[2]=M=>T.value=!T.value)})])),_:1})])),_:1}),(0,D.Wm)(Z,{bordered:"",class:"lt-md bg-accent"},{default:(0,D.w5)((()=>[(0,D.Wm)(W,{modelValue:u.value,"onUpdate:modelValue":N[3]||(N[3]=M=>u.value=M),"indicator-color":"transparent","active-color":"positive","no-caps":"",class:(0,g.C_)([M.$q.platform.is.iphone?"q-pb-lg":"","bg-accent text-grey-5 shadow-2"])},{default:(0,D.w5)((()=>[(0,D.Wm)(b,{ripple:!1,name:"index",to:"/wallet/index"},{default:(0,D.w5)((()=>[E,t])),_:1}),(0,D.Wm)(b,{ripple:!1,name:"exchange",to:"/wallet/exchange"},{default:(0,D.w5)((()=>[L,O])),_:1}),(0,D.Wm)(b,{ripple:!1,name:"stack",to:"/wallet/staking"},{default:(0,D.w5)((()=>[c,a])),_:1}),(0,D.Wm)(b,{ripple:!1,name:"p2p",to:"/wallet/p2p"},{default:(0,D.w5)((()=>[l,w])),_:1}),(0,D.Wm)(b,{ripple:!1,name:"assts",to:"/wallet/assets"},{default:(0,D.w5)((()=>[o,n])),_:1})])),_:1},8,["modelValue","class"])])),_:1}),(0,D.Wm)(R,{modelValue:T.value,"onUpdate:modelValue":N[5]||(N[5]=M=>T.value=M),"show-if-above":"",bordered:"",elevated:"",side:M.$q.screen.lt.md?"right":"left",class:"sidebar"},{default:(0,D.w5)((()=>[(0,D._)("div",s,[Q,p.value?((0,D.wg)(),(0,D.j4)(j,{key:0,style:{position:"absolute",right:"70px",top:"-5px"},flat:"",round:"",dense:"",icon:"notifications",onClick:N[4]||(N[4]=N=>M.$router.push({name:"notifications"})),class:"q-ml-md"},{default:(0,D.w5)((()=>[(0,D.Wm)(m,{floating:"",color:"negative"},{default:(0,D.w5)((()=>[(0,D.Wm)(i,{size:"10px",name:"priority_high"})])),_:1})])),_:1})):(0,D.kq)("",!0),(0,D.Wm)(A,{class:"cursor-pointer",style:{position:"absolute",right:"30px",top:"0"}})]),(0,D.Wm)(H,null,{default:(0,D.w5)((()=>[((0,D.wg)(),(0,D.iD)(D.HY,null,(0,D.Ko)(r,((M,N)=>(0,D.Wm)(F,{key:N,clickable:"",to:M.to},{default:(0,D.w5)((()=>[(0,D.Wm)(V,{avatar:""},{default:(0,D.w5)((()=>[(0,D.Wm)(q,{size:"35px"},{default:(0,D.w5)((()=>[(0,D._)("img",{src:M.icon,alt:""},null,8,k)])),_:2},1024)])),_:2},1024),(0,D.Wm)(V,{class:"text-bold text-body1"},{default:(0,D.w5)((()=>[(0,D.Uk)((0,g.zw)(M.title),1)])),_:2},1024)])),_:2},1032,["to"]))),64)),(0,D.Wm)(F,{clickable:"",onClick:v},{default:(0,D.w5)((()=>[(0,D.Wm)(V,{avatar:""},{default:(0,D.w5)((()=>[(0,D.Wm)(q,{square:"",size:"35px"},{default:(0,D.w5)((()=>[S])),_:1})])),_:1}),(0,D.Wm)(V,{class:"text-bold text-body1"},{default:(0,D.w5)((()=>[(0,D.Uk)(" Выход ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","side"]),(0,D.Wm)(P,null,{default:(0,D.w5)((()=>[(0,D.Wm)(B)])),_:1})])),_:1}))}}};var C=j(20249),m=j(47128),p=j(68879),d=j(16602),f=j(51663),v=j(90136),_=j(20990),h=j(22857),b=j(71378),W=j(47817),Z=j(73333),q=j(10906),V=j(13246),F=j(490),H=j(76749),R=j(61357),B=j(12133),P=j(44458),J=j(63190),$=j(69984),G=j.n($);const K=r,X=K;G()(r,"components",{QLayout:C.Z,QBanner:m.Z,QBtn:p.Z,QHeader:d.Z,QToolbar:f.Z,QSpace:v.Z,QBadge:_.Z,QIcon:h.Z,QFooter:b.Z,QTabs:W.Z,QRouteTab:Z.Z,QDrawer:q.Z,QList:V.Z,QItem:F.Z,QItemSection:H.Z,QAvatar:R.Z,QPageContainer:B.Z,QCard:P.Z,QCardSection:J.Z})},4612:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAzMCA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDM1MjUgMC4xNDA2NjFDNy43OTU5OSAwLjMzMDY2IDcuNzE4NTggMC43MTA2NjMgNy44NjYzNiAwLjk0Mjg4NkM3LjkyOTY5IDEuMDM0MzcgOC4wODQ1MSAxLjE3NTExIDguMjExMTcgMS4yNTI1MUM4LjMzNzg0IDEuMzIyODkgOS4wNzY3MyAxLjc1OTE4IDkuODUwODEgMi4yMTY1OUMxMi4yMjkzIDMuNjE2OTYgMTIuMDA0MSAzLjQzNCAxMi4yNTA0IDQuMTg2OTdMMTIuNDY4NiA0LjgzNDM4TDExLjk4MyA1LjMxMjg5QzExLjE4MDggNi4xMDgwOCAxMC44MDA4IDcuMTM1NDkgMTAuODkyMyA4LjI5NjZDMTAuOTY5NyA5LjI3NDc1IDExLjQyMDEgMTAuMTk2NiAxMi4xNjYgMTAuODkzM0wxMi42MDkzIDExLjMwODVMMTIuMzIwOCAxMS42MTgxQzEyLjE1OSAxMS43OTQgMTEuOTk3MSAxMS45OTExIDExLjk1NDkgMTIuMDY4NUMxMS44OTE2IDEyLjE4ODEgMTEuNzY0OSAxMi4xNDU5IDEwLjE2NzUgMTEuNDYzM0w4LjQ1NzQ3IDEwLjczMTRMOC4yMTExNyAxMC4yMDM2QzcuOTkzMDMgOS43MjUxMiA3LjI3NTI1IDguMDI5MiA2LjY3NzEgNi41NTg0NUM2LjIyNjczIDUuNDYwNjcgNi4xNDIyOCA1LjM1NTEyIDUuNzEzMDIgNS4zNDgwOEM1LjUxNTk4IDUuMzQ4MDggNS4zOTYzNSA1LjM5NzM0IDUuMjYyNjUgNS41MzEwNEM1LjAwMjI4IDUuNzkxNDEgNS4wNjU2MSA2LjE4NTQ5IDUuNTA4OTUgNy4xODQ3NUM1Ljk1MjI4IDguMTc2OTcgNy4wNzgyMSAxMC44MjI5IDcuMjQ3MSAxMS4yODAzQzcuNDAxOTEgMTEuNzAyNSA3LjU0OTY5IDExLjgxNTEgOC4yODE1NCAxMi4xMDM2QzguNjA1MjUgMTIuMjMwMyA5LjMwODk1IDEyLjUzOTkgOS44NTA4MSAxMi43ODYyQzEwLjM5MjcgMTMuMDM5NiAxMC45NDg2IDEzLjI4NTkgMTEuMDgyMyAxMy4zNDIyTDExLjMyODYgMTMuNDQ3N0wxMS4zMDA0IDE0LjAyNDhDMTEuMjkzNCAxNC4zNDE0IDExLjI2NTMgMTQuNjE1OSAxMS4yNDQxIDE0LjYzN0MxMS4yMzAxIDE0LjY1MTEgMTAuMjU5IDE0LjY3OTIgOS4wOTA4MSAxNC42OTMzTDYuOTY1NjIgMTQuNzIxNEw0LjY5OTY5IDE2LjIyNzRDMy40NTQxMyAxNy4wNTc3IDIuMzQyMjcgMTcuODM4OCAyLjIyMjY0IDE3Ljk1ODVDMS44Mjg1NyAxOC4zNTk2IDEuOTc2MzUgMTguOTAxNCAyLjUxODIgMTkuMDI4MUMyLjc1NzQ2IDE5LjA4NDQgMi43MzYzNSAxOS4wOTg1IDQuMzYxOTEgMTguMDI4OEM1LjEwMDggMTcuNTQzMyA2LjEwMDA2IDE2Ljg4MTggNi41OTI2NSAxNi41NTgxTDcuNDg2MzYgMTUuOTc0SDkuNTkwNDRIMTEuNjk0NUwxMi4wODE2IDE2LjQ5NDhMMTIuNDY4NiAxNy4wMDg1TDEyLjE0NDkgMTcuMTIxMUMxMS4xMTA0IDE3LjQ4IDcuMzI0NTEgMTguNTkxOCA2LjgzMTkxIDE4LjY5MDNDNi41MzYzNiAxOC43Mzk2IDYuNDMwOCAxOC44NzMzIDYuMjEyNjUgMTkuNDM2M0M2LjEzNTI0IDE5LjY0MDMgNi4wMTU2MSAxOS45MzU5IDUuOTQ1MjQgMjAuMDkwN0M1Ljg4MTkxIDIwLjI0NTUgNS43MzQxMyAyMC41OTAzIDUuNjM1NjEgMjAuODY0OEM1LjUzMDA2IDIxLjEzMjIgNS4zNDAwNiAyMS42MTA3IDUuMjA2MzUgMjEuOTIwM0M0LjY4NTYxIDIzLjE4NyAzLjIwNzgzIDI2LjkzMDcgMy4xNTg1NyAyNy4xMTM3QzMuMDY3MDkgMjcuNTAwNyAzLjQxODk0IDI3LjkzNyAzLjgyNzA5IDI3LjkzN0M0LjE1MDggMjcuOTM3IDQuMzEyNjUgMjcuNjQ4NSA1LjE3ODIxIDI1LjUwOTJDNS42NDI2NSAyNC4zNDgxIDYuMTQ5MzIgMjMuMDgxNCA2LjI5NzEgMjIuNjk0NEM2LjQ0NDg3IDIyLjMwNzQgNi43NTQ1IDIxLjUxMjIgNi45ODY3MyAyMC45MzUxTDcuNDAxOTEgMTkuODc5Nkw4LjIzOTMyIDE5LjY2MTRDOC43MDM3NyAxOS41MzQ4IDkuNDM1NjIgMTkuMzQ0OCA5Ljg3MTkyIDE5LjIyNTFDMTAuMzAxMiAxOS4xMDU1IDEwLjY2MDEgMTkuMDIxMSAxMC42NjAxIDE5LjAzNTFDMTAuNjYwMSAxOS4wNDkyIDEwLjU0NzUgMTkuMjUzMyAxMC40MTM4IDE5LjQ4NTVDOS45MjgyMSAyMC4zMDg4IDkuNjA0NTEgMjEuNDkxMSA5LjYwNDUxIDIyLjQyN0M5LjYwNDUxIDIyLjk0MDcgOS43ODc0NyAyMy43NzgxIDEwLjAzMzggMjQuNDI1NUMxMC42NzQxIDI2LjA5MzMgMTIuMjUwNCAyNy4zODgxIDE0LjAxNjcgMjcuNjk3OEMxNi42MjA0IDI4LjE2MjIgMTkuMjM4MiAyNi40MTcgMTkuOTYzIDIzLjcyODlDMjAuMTc0MiAyMi45NDc3IDIwLjE3NDIgMjEuNjk1MSAxOS45NjMgMjAuOTU2M0MxOS43NzMgMjAuMjgwNyAxOS41MjY4IDE5LjczMTggMTkuMjM4MiAxOS4zMDk2TDE5LjAyMDEgMTguOTg1OUwxOS4yNTIzIDE5LjAzNTFDMTkuNDcwNSAxOS4wODQ0IDIwLjA2ODYgMTkuMjUzMyAyMS42OTQyIDE5Ljc0NTlMMjIuMjcxMiAxOS45MjE4TDIyLjQ3NTMgMjAuMzIyOUMyMi41ODc5IDIwLjU0MTEgMjIuODI3MSAyMS4xMDQgMjMuMDEwMSAyMS41Njg1QzIzLjE5MzEgMjIuMDMyOSAyMy43NjMxIDIzLjQ4OTYgMjQuMjgzOCAyNC44MDU1QzI0LjgwNDUgMjYuMTIxNSAyNS4yNjkgMjcuMjgyNiAyNS4zMTEyIDI3LjM5NTJDMjUuNDA5NyAyNy42NDg1IDI1Ljc1NDUgMjcuOTM3IDI1Ljk1ODYgMjcuOTM3QzI2LjE2MjcgMjcuOTM3IDI2LjQ4NjQgMjcuNjkwNyAyNi41NzA4IDI3LjQ2NTVDMjYuNjYyMyAyNy4yMTkyIDI2LjUwNzUgMjYuNzU0OCAyNS42NDkgMjQuNjY0OEMyNS41MzY0IDI0LjM5MDMgMjUuMTQyMyAyMy4zOTgxIDI0Ljc2OTQgMjIuNDQ4MUMyMy43MTM4IDE5Ljc3NCAyMy4zODMxIDE4Ljk3MTggMjMuMjk4NiAxOC44ODc0QzIzLjI1NjQgMTguODQ1MSAyMi41MzE2IDE4LjYxMjkgMjEuNjk0MiAxOC4zNzM3QzIwLjE4ODIgMTcuOTQ0NCAxOS4zMDg2IDE3LjY3IDE3Ljk2NDUgMTcuMjI2NkwxNy4yODE5IDE3LjAwMTRMMTcuNTcwNCAxNi42ODQ4QzE3LjcyNTMgMTYuNTA4OCAxNy44OTQyIDE2LjI3NjYgMTcuOTUwNSAxNi4xNjRMMTguMDU2IDE1Ljk3NEgyMC4xNjAxSDIyLjI3MTJMMjIuODkwNSAxNi4zNjgxQzIzLjIyODIgMTYuNTc5MiAyNC4yNzY4IDE3LjI4MjkgMjUuMjI2OCAxNy45MTYzQzI2LjgxMDEgMTguOTg1OSAyNi45NzE5IDE5LjA3NzQgMjcuMTk3MSAxOS4wNDIyQzI3LjUxMzggMTguOTkyOSAyNy43NjAxIDE4LjcxODUgMjcuNzYwMSAxOC40MDE4QzI3Ljc2MDEgMTguMjU0IDI3LjcwMzggMTguMDk5MiAyNy42MDUzIDE3Ljk4NjZDMjcuNDY0NSAxNy44Mzg4IDIzLjI0OTQgMTQuOTk1OSAyMi44NTUzIDE0Ljc4NDhDMjIuNzQ5NyAxNC43MzU1IDIyLjAzOSAxNC43MDc0IDIwLjU4OTMgMTQuNzA3NEgxOC40NzEyVjE0LjI5MjJDMTguNDcxMiAxNC4wNjcgMTguNDUwMSAxMy43Nzg1IDE4LjQyOSAxMy42NTg4QzE4LjM4NjcgMTMuNDQ3NyAxOC4zOTM4IDEzLjQzMzcgMTguOTAwNSAxMy4yMDg1QzE5LjE4OSAxMy4wNzQ4IDIwLjA1NDUgMTIuNzA4OCAyMC44Mjg2IDEyLjM4NTFDMjEuNjAyNyAxMi4wNjE0IDIyLjI3MTIgMTEuNzUxOCAyMi4zMjA1IDExLjY4ODVDMjIuMzY5NyAxMS42MjUxIDIyLjUzMTYgMTEuMjczMyAyMi42ODY0IDEwLjkwNzNDMjIuODQxMiAxMC41NDE0IDIzLjM0MDggOS4zNTIxNiAyMy44MDUzIDguMjY4NDZDMjQuMjY5NyA3LjE4NDc1IDI0LjY3MDggNi4xOTk1NiAyNC42OTE5IDYuMDcyOUMyNC43NjIzIDUuNzQ5MTkgMjQuNTg2NCA1LjQzOTU2IDI0LjI2OTcgNS4zNTUxMkMyMy44NTQ1IDUuMjQyNTIgMjMuNTM3OSA1LjQ1MzYzIDIzLjMyNjggNS45OTU0OUMyMy4yNDIzIDYuMjEzNjQgMjIuMzgzOCA4LjIzMzI3IDIxLjY1OSA5LjkyMjE2QzIxLjQ5MDEgMTAuMzMwMyAyMS4zMDcxIDEwLjY5NjIgMjEuMjY0OSAxMC43Mzg1QzIxLjIxNTYgMTAuNzgwNyAyMC44MTQ1IDEwLjk3MDcgMjAuMzcxMiAxMS4xNTM2QzE5LjkyNzkgMTEuMzM2NiAxOS4xODE5IDExLjYzOTIgMTguNzE3NSAxMS44MzYyTDE3Ljg4MDEgMTIuMTgxMUwxNy43MzIzIDExLjk4NEMxNy42NTQ5IDExLjg3ODUgMTcuNDc5IDExLjY2MDMgMTcuMzQ1MyAxMS41MTI1QzE3LjE1NTMgMTEuMzAxNCAxNy4xMjcxIDExLjIzMTEgMTcuMjA0NSAxMS4yMDI5QzE3LjI2MDggMTEuMTg4OCAxNy41MjEyIDEwLjk1NjYgMTcuNzgxNiAxMC42OTYyQzE4LjUzNDUgOS45MjkyIDE4Ljg5MzQgOS4wNjM2NCAxOC44OTM0IDcuOTc5OTNDMTguODkzNCA2LjkzMTQyIDE4LjU0MTYgNi4xMDgwOCAxNy43MzIzIDUuMjc3NzFMMTcuMjgxOSA0LjgyMDNMMTcuNTE0MiA0LjE2NTg1TDE3LjczOTMgMy41MTE0MUwxOS4wNzY0IDIuNzE2MjJDMjEuNDQ3OSAxLjMwMTc3IDIxLjY2NiAxLjE2MTAzIDIxLjgwNjggMC45MDc3QzIxLjkyNjQgMC42ODI1MTQgMjEuOTI2NCAwLjY0NzMyOSAyMS44Mjc5IDAuNDAxMDMxQzIxLjcxNTMgMC4xMzM2MjUgMjEuNDk3MSAtOC4wMTA4NmUtMDUgMjEuMTg3NSAtOC4wMTA4NmUtMDVDMjEuMTAzMSAtOC4wMTA4NmUtMDUgMjAuNzA5IDAuMTk2OTU3IDIwLjMyMTkgMC40MzYyMTZDMTkuOTM0OSAwLjY4MjUxMiAxOS4xMTg2IDEuMTgyMTUgMTguNTEzNCAxLjU0ODA3QzE3LjkwMTIgMS45MTQgMTcuMjY3OSAyLjMwMTAzIDE3LjA5OSAyLjQwNjU5QzE2LjcxOSAyLjYzODgxIDE2LjYyMDQgMi43OTM2MyAxNi4zMjQ5IDMuNTY3NzFDMTYuMDk5NyA0LjE1ODgyIDE2LjA4NTYgNC4xODY5NyAxNS44ODg2IDQuMTY1ODVDMTUuNDczNCA0LjEwOTU2IDE0LjA2NiA0LjEyMzYzIDEzLjg2MTkgNC4xNzI4OUwxMy42NTA4IDQuMjI5MTlMMTMuNDExNiAzLjUzOTU2QzEzLjI3NzkgMy4xNTk1NiAxMy4xMDkgMi43NzI1MiAxMy4wMjQ1IDIuNjg4MDdDMTIuODk3OSAyLjU0NzMzIDExLjcwMTYgMS43NTkxOCAxMS42MTcxIDEuNzU5MThDMTEuNTg5IDEuNzU5MTggMTAuMzE1MyAxLjAwNjIyIDkuMjU5NjkgMC4zNTg4MUM4LjU5ODIxIC0wLjA0MjMwMTIgOC4zMzA4IC0wLjA5MTU2MjMgOC4wMzUyNSAwLjE0MDY2MVpNMTUuODk1NiA1LjU2NjIzQzE2LjM3NDIgNS43NDIxNSAxNi43MDQ5IDUuOTk1NDkgMTcuMDA3NSA2LjM4OTU2QzE3LjQ0MzggNi45NTk1NiAxNy41ODQ1IDcuMzQ2NiAxNy41ODQ1IDcuOTg2OTdDMTcuNTg0NSA4Ljc2MTA1IDE3LjM4MDUgOS4yNjA2OCAxNi44NTk3IDkuNzg4NDZDMTYuMjI2NCAxMC40MTQ4IDE1LjY2MzQgMTAuNjMyOSAxNC43ODM4IDEwLjU5MDdDMTMuMTc5MyAxMC41MTMzIDExLjk3NiA5LjEzNDAxIDEyLjIyMjMgNy42MzUxMkMxMi4zMTM4IDcuMDM2OTcgMTIuNDk2NyA2LjY3MTA0IDEyLjkxOSA2LjIyNzcxQzEzLjY3OSA1LjQxODQ1IDE0LjgzMyA1LjE2NTEyIDE1Ljg5NTYgNS41NjYyM1pNMTUuNjQ5MyAxMi4wNjE0QzE1Ljk2NiAxMi4xMzg4IDE2LjU1MDEgMTIuNTgyMiAxNi43NzUzIDEyLjkxOTlDMTcuNTcwNSAxNC4xMjMzIDE3LjE4MzQgMTUuNjM2MiAxNS45MDI3IDE2LjMxMThDMTUuNjAwMSAxNi40NzM3IDE1LjQ2NjQgMTYuNTAxOCAxNC45MTc1IDE2LjUwMThDMTQuNDAzOCAxNi41MDE4IDE0LjIxMzggMTYuNDY2NiAxMy45MTEyIDE2LjMzMjlDMTMuMTUxMiAxNS45ODgxIDEyLjYxNjQgMTUuMTIyNSAxMi42MjM0IDE0LjIxNDhDMTIuNjIzNCAxMy4xMjQgMTMuMjYzOCAxMi4yOTM2IDE0LjI5ODIgMTIuMDMzM0MxNC41NjU2IDExLjk2OTkgMTUuMzMyNyAxMS45ODQgMTUuNjQ5MyAxMi4wNjE0Wk0xNS43MTk3IDE4LjEyMDNDMTYuMzg4MiAxOC4yODIyIDE2Ljk2NTMgMTguNjEyOSAxNy41MjgyIDE5LjE3NTlDMTcuOTI5MyAxOS41NyAxOC4wOTEyIDE5Ljc5NTEgMTguMzUxNiAyMC4zMzdDMTguNzUyNyAyMS4xODE0IDE4LjgyMyAyMS40OTExIDE4LjgyMyAyMi4zNzA3QzE4LjgyMyAyMi45MTI2IDE4Ljc4NzkgMjMuMTg3IDE4LjY3NTMgMjMuNTE3N0MxOC4yMDM4IDI0LjkxMTEgMTcuMjExNiAyNS45NTI2IDE2LjAyMjMgMjYuMzE4NUMxNS40NjY0IDI2LjQ5NDQgMTQuNTUxNiAyNi41MDE1IDEzLjkzOTMgMjYuMzQ2NkMxMi42MDIzIDI2LjAwMTggMTEuNDEzIDI0Ljc3NzQgMTEuMDQ3MSAyMy4zNjI5QzEwLjk1NTYgMjMuMDI1MiAxMC45MzQ1IDIyLjcwMTQgMTAuOTU1NiAyMi4wOTYzQzEwLjk3NjcgMjEuNDA2NiAxMS4wMTE5IDIxLjIxNjYgMTEuMTg3OCAyMC43OTQ0QzEyLjAyNTMgMTguNzM5NiAxMy44MjY3IDE3LjY3NyAxNS43MTk3IDE4LjEyMDNaIiBmaWxsPSIjMzZEQ0EwIi8+CjxwYXRoIGQ9Ik00LjU2MyAzOEw0LjExMyAzNi41MDZIMi4wMTZMMS41NjYgMzhIMC4xOEwyLjI1IDMxLjcxOEgzLjk0Mkw1Ljk4NSAzOEg0LjU2M1pNMy4wNzggMzIuOTZIMy4wMzNMMi4zNCAzNS4zNDVIMy43OEwzLjA3OCAzMi45NlpNOC43NzExMyAzNS4wM0w4LjE2ODEzIDMzLjc3SDguMTQxMTNWMzhINi44NTQxM1YzMS43MThIOC4zNDgxM0wxMC4wNjcxIDM0LjY4OEwxMC42NzAxIDM1Ljk0OEgxMC42OTcxVjMxLjcxOEgxMS45ODQxVjM4SDEwLjQ5MDFMOC43NzExMyAzNS4wM1pNMTUuOTg1OCAzMi45MzNWMzhIMTQuNjE3OFYzMi45MzNIMTIuOTE2OFYzMS43MThIMTcuNjg2OFYzMi45MzNIMTUuOTg1OFpNMTguNjIyNyAzOFYzMS43MThIMjIuODk3N1YzMi45MzNIMTkuOTkwN1YzNC4yMkgyMi40ODM3VjM1LjQyNkgxOS45OTA3VjM2Ljc4NUgyMi44OTc3VjM4SDE4LjYyMjdaTTI5LjMwOTUgMzhIMjcuNzI1NUwyNi4zNjY1IDM1LjY4N0gyNi4zMzk1TDI1LjAxNjUgMzhIMjMuNTQwNUwyNS41NTY1IDM0Ljc1MUwyMy42Mzk1IDMxLjcxOEgyNS4yMzI1TDI2LjQ1NjUgMzMuODQySDI2LjQ4MzVMMjcuNzI1NSAzMS43MThIMjkuMjAxNUwyNy4yNjY1IDM0Ljc3OEwyOS4zMDk1IDM4WiIgZmlsbD0iIzM2RENBMCIvPgo8L3N2Zz4K"},53761:(M,N,j)=>{M.exports=j.p+"img/logo.faaf1e8a.svg"}}]);