(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[418],{75008:(e,t,a)=>{"use strict";a.d(t,{C:()=>o,d:()=>n});var l=a(13433),s=a(17779);const n=({seed:e,password:t})=>{const a={status:!0,seed:e},s=l.createCipher("aes192",t);return s.update(JSON.stringify(a),"utf8","hex")+s.final("hex")},o=({hash:e,password:t})=>{try{const a=l.createDecipher("aes192",t),s=a.update(e,"hex","utf8")+a.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(a){return s.log(a),!1}}},98418:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ce});var l=a(59835),s=a(53761),n=a.n(s);const o=(0,l._)("img",{class:"gt-sm logo absolute-top-left",src:n()},null,-1),i={class:"row q-col-gutter-md items-center full-width"},c=(0,l._)("div",{class:"gt-sm col-12 offset-0 offset-md-1 col-md-4 offset-lg-2"},[(0,l._)("p",{class:"text-white text-h2 text-bold"},[(0,l.Uk)("Открой мир "),(0,l._)("span",{class:"text-primary block"},"криптовалюты"),(0,l.Uk)(" вместе с нами")])],-1),u={class:"col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-0"},d={key:1},r=(0,l._)("div",{class:"card-title with-separator text-body1 q-mb-md"},[(0,l._)("span",{class:""},"Нет кошелька?")],-1);function g(e,t,a,s,n,g){const p=(0,l.up)("Login"),v=(0,l.up)("btn"),m=(0,l.up)("Register"),w=(0,l.up)("q-card-section"),h=(0,l.up)("q-card"),_=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(_,{class:"auth-bg flex flex-center relative-position",padding:""},{default:(0,l.w5)((()=>[o,(0,l._)("div",i,[c,(0,l._)("div",u,[(0,l.Wm)(h,{class:"ellipse-shadow"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[s.loginActive?((0,l.wg)(),(0,l.j4)(p,{key:0,onSeedGood:s.setSeed},null,8,["onSeedGood"])):(0,l.kq)("",!0),s.is_seed_good||!s.loginActive||s.hash?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",d,[r,(0,l.Wm)(v,{label:"Создать новый кошелек",unelevated:"","no-caps":"",class:"bg-gold full-width q-py-md",onClick:t[0]||(t[0]=e=>s.loginActive=!1)})])),s.loginActive?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(m,{key:2,onOpenLogin:s.openLogin},null,8,["onOpenLogin"]))])),_:1})])),_:1})])])])),_:1})}a(72879);var p=a(60499),v=a(87270),m=a(75008),w=a(28339),h=a(81809),_=a(23459),f=a(46190);const b=(0,h.Q_)("auth",(()=>{const e=(0,_.Q)(),t=(0,f.c)(),a=(0,w.tv)();let l=(0,p.iH)(null),s=(0,p.iH)(!1);async function n(a,n){e.setSeed(a),s.value=!0,l.value=n;const o=localStorage.getItem("hash");return o||localStorage.setItem("hash",n),await e.getAssets(),await t.firstAddress(),await t.getBalances(),await t.getDocs(),e.startCheckUnconfirmTx(),Promise.resolve("Success")}async function o(){return localStorage.removeItem("hash"),localStorage.removeItem("seed"),t.clearInfo(),e.stopCheckUnconfirmTx(),await a.push("/"),await a.go(),Promise.resolve("Success")}return{hash:l,seedStatus:s,login:n,logout:o}}));var y=a(43463),k=a(44974);const x=(0,l._)("div",{class:"card-title with-separator text-h4 q-mb-md"},[(0,l._)("span",{class:""},"Вход")],-1),q={key:0},S={key:0,class:"flex column justify-between"},C={class:""},H={key:1,class:"pincode-tab"},D={__name:"Login",emits:["seedGood"],setup(e,{emit:t}){const a=(0,w.tv)(),s=b(),n=(0,y.s)(),o=(0,k.T)(),i=(0,p.iH)(""),c=(0,p.iH)(""),u=t,d=localStorage.getItem("hash");async function r(e){const t=(0,m.C)({hash:d,password:e});t?(i.value=t,await g()):(0,v.d$)("negative","Введен не корректный сид")}async function g(){n.toggleLoadingState();const e=(0,m.d)({seed:i.value,password:c.value});await s.login(i.value,e);const t=localStorage.getItem("addresses");await o.connectWS(JSON.parse(t)[0].address),n.toggleLoadingState(),await a.push({name:"wallet_index"})}async function h(e){c.value=e,await g()}async function _(){await s.logout()}function f(e){const t=/^[A-Za-z0-9]+$/;return!!t.test(e)&&(u("seedGood",{val:[43,44,86,87,88].includes(e.length)}),[43,44,86,87,88].includes(e.length))}return(e,t)=>{const a=(0,l.up)("q-input"),s=(0,l.up)("pin-code"),n=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)(l.HY,null,[x,(0,p.SU)(d)?((0,l.wg)(),(0,l.iD)("div",H,[(0,l.Wm)(s,{showDigits:!1,onPincode_ready:r}),(0,l.Wm)(n,{padding:"sm","no-caps":"",outline:"",flat:"",class:"full-width q-mt-md text-bold",onClick:_,size:"14px",dense:"",color:"negative",label:"Я забыл пароль"})])):((0,l.wg)(),(0,l.iD)("div",q,[(0,l.Wm)(a,{standout:"",dark:"","label-color":"dark",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),label:"Введите Ваш сид",rules:[e=>e&&e.length>0||"Это обязательное поле",e=>f(e)||"Введен не корректный сид"]},null,8,["modelValue","rules"]),f(i.value)?((0,l.wg)(),(0,l.iD)("div",S,[(0,l._)("div",C,[(0,l.Wm)(s,{showDigits:!0,onPincode_ready:h})])])):(0,l.kq)("",!0)]))],64)}}};var L=a(13119),W=a(24455),I=a(69984),Q=a.n(I);const $=D,A=$;Q()(D,"components",{QInput:L.Z,QBtn:W.Z});var T=a(86970),U=a(99407),V=a(76647);const Z={class:"card-title with-separator text-h4 q-mb-md"},z={class:""},O={key:0,class:""},P={class:"text-weight-bold text-center text-negative"},j=["innerHTML"],N={class:"text-center"},G={class:"text-golder text-bold",target:"_blank",href:"https://wallet.rupay.pro/rupay_user_agreement.pdf"},J={key:1,class:""},B={class:"text-center q-mt-md"},E={key:2,class:""},M={class:"text-gold"},R={style:{"word-break":"break-all"},class:"text-caption bg-grey-3 q-pa-md"},Y={class:"bg-grey-4 q-pa-md text-weight-medium"},F={__name:"Register",emits:["openLogin"],setup(e,{emit:t}){const a=(0,V.QT)(),s=b(),n=(0,w.tv)(),o=(0,k.T)(),i=(0,p.iH)(1),c=(0,p.iH)(""),u=(0,p.iH)(null),d=(0,p.iH)(!1),r=(0,p.iH)(!1);let g=(0,p.iH)(null);const h=(0,p.iH)([{agree:!1,text:a.t("reg_agree1")},{agree:!1,text:a.t("reg_agree2")},{agree:!1,text:a.t("reg_agree3")}]),_=(0,l.Fl)((()=>h.value[0].agree&&h.value[1].agree&&h.value[2].agree)),f=t;function y(){f("openLogin")}async function x(e){c.value=e,await q()}async function q(){d.value=!d.value,g.value=await U.EraChain.Crypt.generateSeed(),d.value=!d.value,i.value=3}async function S(){d.value=!d.value,u.value&&localStorage.setItem("ref_code",u.value);const e=(0,m.d)({seed:g.value,password:c.value});await s.login(g.value,e);const t=localStorage.getItem("addresses");await o.connectWS(JSON.parse(t)[0].address),await n.push({name:"wallet_index"}),d.value=!d.value}async function C(){await(0,v.QO)(g.value,"positive",a.t("seed_copy_done")),r.value=!0}return(e,t)=>{const a=(0,l.up)("q-checkbox"),s=(0,l.up)("btn"),n=(0,l.up)("pin-code"),o=(0,l.up)("q-btn"),c=(0,l.up)("q-input");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",Z,[(0,l._)("span",z,(0,T.zw)(e.$t("reg_title")),1)]),1===i.value?((0,l.wg)(),(0,l.iD)("div",O,[(0,l._)("p",P,(0,T.zw)(e.$t("reg_agree")),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.value,((e,t)=>((0,l.wg)(),(0,l.j4)(a,{modelValue:h.value[t].agree,"onUpdate:modelValue":e=>h.value[t].agree=e,class:"text-caption q-mb-md",style:{"line-height":"110%"}},{default:(0,l.w5)((()=>[(0,l._)("p",{class:"no-margin text-gold",innerHTML:e.text},null,8,j)])),_:2},1032,["modelValue","onUpdate:modelValue"])))),256)),(0,l._)("p",N,[(0,l._)("a",G,(0,T.zw)(e.$t("user_agreement")),1)]),_.value?((0,l.wg)(),(0,l.j4)(s,{key:0,unelevated:"","no-caps":"",label:e.$t("seed_copy_next"),class:"bg-gold q-py-md full-width",onClick:t[0]||(t[0]=e=>i.value=2),type:"submit",outline:!1},null,8,["label"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0),2===i.value?((0,l.wg)(),(0,l.iD)("div",J,[(0,l.Wm)(n,{showDigits:!0,onPincode_ready:x}),(0,l._)("div",B,[(0,l.Wm)(o,{"no-caps":"",flat:"","text-color":"dark",class:"text-caption no-margin",label:e.$t("have_seed"),onClick:y},null,8,["label"])])])):(0,l.kq)("",!0),3===i.value?((0,l.wg)(),(0,l.iD)("div",E,[(0,l._)("p",M,(0,T.zw)(e.$t("your_seed")),1),(0,l._)("p",R,(0,T.zw)((0,p.SU)(g)),1),(0,l.Wm)(s,{onClick:C,"no-caps":"",label:e.$t("seed_copy_btn"),unelevated:"",class:"bg-gold q-py-md full-width q-mb-md"},null,8,["label"]),(0,l._)("p",Y,(0,T.zw)(e.$t("seed_copy")),1),(0,l.Wm)(c,{standout:"",dark:"",class:"q-mb-md","label-color":"dark",modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),label:"Реферальный код пригласителя"},null,8,["modelValue"]),(0,l.Wm)(s,{unelevated:"","no-caps":"",label:r.value?e.$t("seed_copy_next"):e.$t("seed_copy_need_copy"),disabled:!r.value,is_loading:d.value,onClick:S,class:"bg-gold q-py-md full-width",type:"submit",outline:!1},null,8,["label","disabled","is_loading"])])):(0,l.kq)("",!0)],64)}}};var K=a(91006);const X=F,ee=X;Q()(F,"components",{QCheckbox:K.Z,QBtn:W.Z,QInput:L.Z});var te=a(3168);const ae={name:"IndexPage",components:{Register:ee,Login:A},preFetch({redirect:e,router:t}){localStorage.getItem("seed")},setup(){const e=(0,p.iH)(!0),t=(0,p.iH)(!1),a=localStorage.getItem("hash"),l=te.env.WALLET_NAME;function s(e){t.value=e.val}function n(a){t.value=!1,e.value=!0}return{loginActive:e,is_seed_good:t,hash:a,wallet_name:l,setSeed:s,openLogin:n}}};var le=a(11639),se=a(69885),ne=a(44458),oe=a(63190);const ie=(0,le.Z)(ae,[["render",g]]),ce=ie;Q()(ae,"components",{QPage:se.Z,QCard:ne.Z,QCardSection:oe.Z})},53761:(e,t,a)=>{e.exports=a.p+"img/logo.faaf1e8a.svg"}}]);