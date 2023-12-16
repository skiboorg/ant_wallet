"use strict";(globalThis["webpackChunkant_wallet"]=globalThis["webpackChunkant_wallet"]||[]).push([[165],{85165:(e,a,l)=>{l.r(a),l.d(a,{default:()=>xa});l(72879);var t=l(59835),o=l(60499),n=l(61957),s=l(86970),i=l(76028),u=l(23459),r=l(98030),c=l(91569),d=l(46190),m=l(43463),p=l(6827),v=l(29610),w=l(28339),g=l(76647),_=l(66195),f=l.n(_),b=l(82341),x=l.n(b),y=l(95563),k=l.n(y),U=l(17779);const h={key:0},W={class:"text-white q-py-sm items-center flex justify-between"},z={class:"flex items-center"},S=["src"],q={class:"no-margin title"},H=(0,t._)("p",{class:"q-mb-none q-px-sm title"},"/",-1),$=["src"],F={class:"no-margin title"},Z={class:"q-pt-none"},C={class:"row q-col-gutter-md q-mb-md"},V={class:"col-12 col-md-6"},Q={class:"col-12 col-md-6"},P={class:"row q-col-gutter-md q-mb-md"},j={class:"col-12 col-md-6"},K={class:"col-12 col-md-6"},D={class:"text-caption text-bold q-mb-sm"},A={key:0},O={key:0,class:"text-caption q-mb-sm"},T={key:1,class:"text-caption q-mb-sm"},I={class:"text-caption text-bold q-mb-sm"},M={class:"text-caption text-bold q-mb-sm"},Y={class:""},N={class:"row q-col-gutter-md"},B={class:"col-6"},L={class:"orders-grid"},E={class:"flex items-center justify-between"},R={class:"no-margin text-10 text-white text-weight-bold"},J={class:"no-margin text-10 text-white text-weight-bold"},G={class:"bg-sell orders-grid"},X={class:"no-margin price-red-color text-10 text-weight-bold"},ee={class:"no-margin vol-color text-10 text-weight-bold"},ae={class:"col-6"},le={class:"orders-grid"},te={class:"flex items-center justify-between"},oe={class:"no-margin text-10 text-white text-weight-bold"},ne={class:"no-margin text-10 text-white text-weight-bold"},se={class:"bg-bye orders-grid"},ie={class:"no-margin price-green-color text-10 text-weight-bold"},ue={class:"no-margin vol-color text-10 text-weight-bold"},re={class:"col-6"},ce={class:"flex items-center justify-between"},de={class:"no-margin text-10 text-white text-weight-bold"},me={class:"no-margin text-10 vol-color text-weight-bold"},pe={class:"col-6"},ve={class:"flex items-center justify-between"},we={class:"no-margin text-10 text-white text-weight-bold"},ge={class:"no-margin text-10 vol-color text-weight-bold"};x().setOptions({plotOptions:{area:{fillOpacity:0,fillColor:"rgba(0, 166, 206, 0.4)"}},lang:{shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],weekdays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}});const _e={name:"StockChart",components:{VueHighcharts:f()}},fe=Object.assign(_e,{props:{tradePair:Object},setup(e){const a=(0,m.s)(),l=(0,u.Q)(),n=(0,g.QT)(),v=(0,d.c)(),_=((0,w.tv)(),e);(0,t.wF)((async()=>{U.log("onMounted"),await Ye()})),(0,t.Jd)((async()=>{U.log("onBeforeUnmount"),Ke()}));(0,t.Fl)((()=>l.assets));const b=(0,t.Fl)((()=>v.balances));let y=(0,o.iH)([]),_e=(0,o.iH)([]),fe=(0,o.iH)([]),be=(0,o.iH)({}),xe=(0,o.iH)({}),ye=(0,o.iH)("buy"),ke=(0,o.iH)(null),Ue=(0,o.iH)(null),he=(0,o.iH)(null),We=(0,o.iH)(!1),ze=(0,o.iH)(!1),Se=(0,o.iH)({}),qe=(0,o.iH)(0),He=(0,o.iH)(0),$e=(0,o.iH)(0),Fe=(0,o.iH)(0),Ze=(0,o.iH)({}),Ce=(0,o.iH)([]),Ve=(0,o.iH)(!0),Qe=(0,o.iH)({chart:{backgroundColor:"transparent",events:{fullscreenOpen:function(){this.update({chart:{backgroundColor:"white"}})},fullscreenClose:function(){this.update({chart:{backgroundColor:"transparent"}})}}},plotOptions:{area:{fillOpacity:0,fillColor:"rgba(0, 166, 206, 0.4)"}},rangeSelector:{enabled:!1},navigator:{enabled:!1},scrollbar:{enabled:!1},title:{text:""},series:[{name:"",data:[]}]});const Pe={11:n.t("trade_error_balance"),66:n.t("trade_error_min_order")};function je(){U.log(ke.value),ke.value||(he.value=null,Ue.value=null),Ue.value&&(he.value=parseFloat(ke.value*Ue.value).toFixed(5))}function Ke(){Fe.value=0,$e.value=0,ye.value="buy",ke.value=null,Ue.value=null,he.value=null,Qe.value.series[0].data=[],Ce.value=[],a.tradeModalVisible=!1}function De(){qe.value>0&&"sell"===ye.value&&(2===be.value.key||1048610===be.value.key)&&(Ue.value>=He.value||(Ue.value=He.value)),ke.value&&(he.value=parseFloat(ke.value*Ue.value).toFixed(5))}function Ae(){U.log(he.value),Ue.value&&(ke.value=parseFloat(he.value/Ue.value).toFixed(5))}async function Oe(){const e=await l.getKeyPair(),a="buy"===ye.value?xe.value.key:be.value.key,t="buy"===ye.value?he.value:ke.value,o="buy"===ye.value?be.value.key:xe.value.key,n="buy"===ye.value?ke.value:he.value;U.log("have",a),U.log("want",o),U.log("haveAmount",t),U.log("wantAmount",n),await r.era.tranRawOrder(e,"name",a,t,o,n,!0).then((e=>{Se.value=e,U.log(Se.value),We.value=!0}))}async function Te(){ze.value=!ze.value;const e=await r.era.broadcast64(Se.value.raw);U.log(e),e.error?p.Z.create({color:"negative",message:Pe[e.error]}):p.Z.create({color:"info",message:n.t("transaction_created")}),We.value=!1,ze.value=!ze.value}function Ie(e){U.log(e),ke.value=e.leftWant,Ue.value=e.pairPrice,he.value=parseFloat(e.leftWant*e.pairPrice).toFixed(5),ye.value="sell"}function Me(e){ke.value=parseFloat(e.leftHave).toFixed(5),Ue.value=e.pairPrice,he.value=parseFloat(e.leftHave*e.pairPrice).toFixed(5),ye.value="buy"}async function Ye(){Ve.value=!0,fe.value=[],_e.value=[],be.value=l.assets.find((e=>e.key===_.tradePair["0"])),xe.value=l.assets.find((e=>e.key===_.tradePair["1"])),y.value=await(0,i.AU)(_.tradePair["0"],_.tradePair["1"]),qe.value=parseFloat(xe.value.min_trade_price),He.value=parseFloat(be.value.min_trade_price);for(let l of y.value.have){$e.value+=parseFloat(l.leftHave);let e=[];e=y.value.have.filter((e=>e.pairPrice===l.pairPrice));let a=0;if(fe.value.filter((e=>e.pairPrice===l.pairPrice)).length>0);else{for(let l of e)a+=parseFloat(l.leftHave);e[0].leftHave=a,fe.value.push(e[0])}}for(let l of y.value.want){Fe.value+=parseFloat(l.leftWant);let e=[];e=y.value.want.filter((e=>e.pairPrice===l.pairPrice));let a=0;if(_e.value.filter((e=>e.pairPrice===l.pairPrice)).length>0);else{for(let l of e)a+=parseFloat(l.leftWant);e[0].leftWant=a,_e.value.push(e[0])}}const e=await c.h.get(`/api/settings/volume?q_key=${xe.value.key}&b_key=${be.value.key}`);Ze.value=e.data;const a=await c.h.get(`https://web.antex.pro/apiexchange/trades/${be.value.key}/${xe.value.key}`);for(let l of a.data.reverse())Ce.value.push([l.timestamp,l.price]);Qe.value.series[0].data=Ce.value,Qe.value.series[0].name=`${be.value.name}/${xe.value.name}`,U.log(Qe.value),k()(x()),Ve.value=!1}return(0,t.YP)(ye,(e=>{ke.value=null,Ue.value=null,he.value=null})),(e,l)=>{const n=(0,t.up)("q-avatar"),i=(0,t.up)("btn"),u=(0,t.up)("q-btn"),r=(0,t.up)("q-input"),c=(0,t.up)("q-card-section"),d=(0,t.up)("q-card"),m=(0,t.up)("q-linear-progress"),p=(0,t.up)("q-separator"),v=(0,t.up)("q-item-section"),w=(0,t.up)("q-item"),g=(0,t.up)("q-list"),_=(0,t.up)("q-card-actions"),x=(0,t.up)("q-dialog"),y=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,o.SU)(a).tradeModalVisible?((0,t.wg)(),(0,t.iD)("div",h,[(0,t._)("div",W,[(0,t._)("div",z,[(0,t.Wm)(n,{rounded:"",size:"60px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,o.SU)(be).icon,alt:""},null,8,S)])),_:1}),(0,t._)("p",q,(0,s.zw)((0,o.SU)(be).name),1),H,(0,t.Wm)(n,{rounded:"",size:"60px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,o.SU)(xe).icon,alt:""},null,8,$)])),_:1}),(0,t._)("p",F,(0,s.zw)((0,o.SU)(xe).name),1)]),(0,t.Wm)(i,{label:"Закрыть",classes:"","no-caps":"",onClick:l[0]||(l[0]=e=>(0,o.SU)(a).tradeModalVisible=!1)})]),(0,t._)("div",Z,[(0,t._)("div",C,[(0,t._)("div",V,[(0,t.Wm)(i,{unelevated:"","no-caps":"",class:"full-width q-py-sm","text-color":"white",color:"buy"===(0,o.SU)(ye)?"positive":"grey-5",onClick:l[1]||(l[1]=e=>(0,o.dq)(ye)?ye.value="buy":ye="buy"),label:e.$t("buy")+" "+(0,o.SU)(be).name},null,8,["color","label"])]),(0,t._)("div",Q,[(0,t.Wm)(i,{color:"sell"===(0,o.SU)(ye)?"negative":"grey-5",unelevated:"","text-color":"white",class:"full-width q-py-sm","no-caps":"",onClick:l[2]||(l[2]=e=>(0,o.dq)(ye)?ye.value="sell":ye="sell"),label:e.$t("sell")+" "+(0,o.SU)(be).name},null,8,["color","label"])])]),(0,t._)("div",P,[(0,t._)("div",j,[(0,t.Wm)((0,o.SU)(f()),{type:"stockChart",options:(0,o.SU)(Qe)},null,8,["options"])]),(0,t._)("div",K,[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("p",D,(0,s.zw)("buy"===(0,o.SU)(ye)?e.$t("buy_amount"):e.$t("sell_amount"))+" "+(0,s.zw)((0,o.SU)(be).name),1),"sell"===(0,o.SU)(ye)?((0,t.wg)(),(0,t.iD)("div",A,[b.value[(0,o.SU)(be).key]?((0,t.wg)(),(0,t.iD)("p",O,(0,s.zw)(e.$t("your_balance"))+" "+(0,s.zw)(b.value[(0,o.SU)(be).key][0][1])+" "+(0,s.zw)((0,o.SU)(be).name),1)):((0,t.wg)(),(0,t.iD)("p",T,(0,s.zw)(e.$t("your_balance"))+" 0 "+(0,s.zw)((0,o.SU)(be).name),1))])):(0,t.kq)("",!0),(0,t.Wm)(r,{class:"q-mb-sm",standout:"",dense:"","label-color":"dark",modelValue:(0,o.SU)(ke),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,o.dq)(ke)?ke.value=e:ke=e),onKeyup:je,type:"number"},{append:(0,t.w5)((()=>["sell"===(0,o.SU)(ye)&&b.value[(0,o.SU)(be).key]?((0,t.wg)(),(0,t.j4)(u,{key:0,onClick:l[3]||(l[3]=e=>(0,o.dq)(ke)?ke.value=b.value[(0,o.SU)(be).key][0][1]:ke=b.value[(0,o.SU)(be).key][0][1]),size:"10px",flat:"",label:e.$t("sell_all")},null,8,["label"])):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),(0,t._)("p",I,(0,s.zw)(e.$t("price_per_unit"))+" "+(0,s.zw)((0,o.SU)(xe).name),1),(0,t.Wm)(r,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,o.SU)(Ue),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,o.dq)(Ue)?Ue.value=e:Ue=e),onBlur:De,type:"number"},null,8,["modelValue"]),(0,t._)("p",M,(0,s.zw)(e.$t("total"))+" "+(0,s.zw)((0,o.SU)(xe).name),1),(0,t.Wm)(r,{class:"q-mb-md",dense:"",outlined:"",modelValue:(0,o.SU)(he),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,o.dq)(he)?he.value=e:he=e),onKeyup:Ae,type:"number"},null,8,["modelValue"]),(0,t.Wm)(i,{loading:(0,o.SU)(ze),label:"buy"===(0,o.SU)(ye)?e.$t("buy_order"):e.$t("sell_order"),color:"buy"===(0,o.SU)(ye)?"positive":"negative",class:"full-width q-mb-md","text-color":"white",unelevated:"","no-caps":"",disable:!(0,o.SU)(ke)||!(0,o.SU)(Ue)||!(0,o.SU)(he),onClick:Oe},null,8,["loading","label","color","disable"])])),_:1})])),_:1})])]),(0,t._)("div",Y,[(0,t._)("div",N,[(0,t._)("div",B,[(0,t._)("div",L,[(0,t._)("div",E,[(0,t._)("p",R,(0,s.zw)(e.$t("price")),1),(0,t._)("p",J,(0,s.zw)(e.$t("volume")),1)]),(0,t._)("div",G,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,o.SU)(fe).slice(0,15),((e,a)=>((0,t.wg)(),(0,t.j4)(m,{reverse:"",onClick:a=>Me(e),class:"flex items-center justify-between relative-position sell-pr cursor-pointer",color:"red",value:e.leftHave/e.amountHave,size:"26px"},{default:(0,t.w5)((()=>[(0,t._)("p",X,(0,s.zw)(e.pairPrice),1),(0,t._)("p",ee,(0,s.zw)(e.leftHave),1)])),_:2},1032,["onClick","value"])))),256))])])]),(0,t._)("div",ae,[(0,t._)("div",le,[(0,t._)("div",te,[(0,t._)("p",oe,(0,s.zw)(e.$t("price")),1),(0,t._)("p",ne,(0,s.zw)(e.$t("volume")),1)]),(0,t._)("div",se,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,o.SU)(_e).slice(0,15),((e,a)=>((0,t.wg)(),(0,t.j4)(m,{onClick:a=>Ie(e),class:"flex items-center justify-between relative-position bg-white buy-pr cursor-pointer",color:"light-green-11",value:e.leftWant/e.amountWant,size:"26px"},{default:(0,t.w5)((()=>[(0,t._)("p",ie,(0,s.zw)(e.pairPrice),1),(0,t._)("p",ue,(0,s.zw)(e.leftWant),1)])),_:2},1032,["onClick","value"])))),256))])])]),(0,t._)("div",re,[(0,t.Wm)(p),(0,t._)("div",ce,[(0,t._)("p",de,(0,s.zw)(e.$t("total_all")),1),(0,t._)("p",me,(0,s.zw)((0,o.SU)($e)),1)])]),(0,t._)("div",pe,[(0,t.Wm)(p),(0,t._)("div",ve,[(0,t._)("p",we,(0,s.zw)(e.$t("total_all")),1),(0,t._)("p",ge,(0,s.zw)((0,o.SU)(Fe)),1)])])])])])])):(0,t.kq)("",!0),(0,t.Wm)(x,{modelValue:(0,o.SU)(We),"onUpdate:modelValue":l[7]||(l[7]=e=>(0,o.dq)(We)?We.value=e:We=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"bg-primary text-dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.$t("trade_confirm")),1)])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.$t("trade_have")),1)])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)("buy"===(0,o.SU)(ye)?(0,o.SU)(he):(0,o.SU)(ke))+" "+(0,s.zw)("buy"===(0,o.SU)(ye)?(0,o.SU)(xe).name:(0,o.SU)(be).name),1)])),_:1})])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.$t("trade_want")),1)])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)("buy"===(0,o.SU)(ye)?(0,o.SU)(ke):(0,o.SU)(he))+" "+(0,s.zw)("buy"===(0,o.SU)(ye)?(0,o.SU)(be).name:(0,o.SU)(xe).name),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(_,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(u,{"no-caps":"",unelevated:"",color:"grey-6",loading:(0,o.SU)(ze),label:"Отмена"},null,8,["loading"]),[[y]]),(0,t.Wm)(u,{"no-caps":"",unelevated:"",loading:(0,o.SU)(ze),onClick:Te,label:"buy"===(0,o.SU)(ye)?e.$t("buy"):e.$t("sell"),color:"buy"===(0,o.SU)(ye)?"positive":"negative"},null,8,["loading","label","color"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}});var be=l(61357),xe=l(50926),ye=l(44458),ke=l(63190),Ue=l(13119),he=l(24455),We=l(8289),ze=l(32074),Se=l(13246),qe=l(490),He=l(76749),$e=l(11821),Fe=l(62146),Ze=l(69984),Ce=l.n(Ze);const Ve=fe,Qe=Ve;Ce()(fe,"components",{QAvatar:be.Z,QSeparator:xe.Z,QCard:ye.Z,QCardSection:ke.Z,QInput:Ue.Z,QBtn:he.Z,QLinearProgress:We.Z,QDialog:ze.Z,QList:Se.Z,QItem:qe.Z,QItemSection:He.Z,QCardActions:$e.Z}),Ce()(fe,"directives",{ClosePopup:Fe.Z});var Pe=l(17779);const je={key:0,class:"container"},Ke={key:0},De={class:"text-weight-medium text-grey-9"},Ae=(0,t._)("br",null,null,-1),Oe={class:"text-weight-medium text-grey-9"},Te=(0,t._)("br",null,null,-1),Ie={class:"text-weight-medium text-grey-9"},Me={class:"no-margin text-caption text-weight-bold"},Ye={class:"no-margin text-caption"},Ne={class:"no-margin text-caption"},Be={class:"no-margin text-caption"},Le={class:"no-margin text-caption"},Ee={class:"no-margin text-caption"},Re={class:"no-margin text-caption text-weight-bold"},Je={class:"no-margin text-caption"},Ge={class:"no-margin text-caption"},Xe={class:"no-margin text-caption"},ea={class:"no-margin text-caption"},aa={class:"no-margin text-caption"},la={class:"no-margin text-caption text-weight-bold"},ta={class:"no-margin text-caption"},oa={class:"no-margin text-caption"},na={class:"no-margin text-caption"},sa={class:"no-margin text-caption"},ia={class:"no-margin text-caption"},ua={key:1,class:"container"},ra={components:{TradeModal:Qe}},ca=Object.assign(ra,{__name:"Index",setup(e){const a=(0,u.Q)(),p=(0,d.c)(),w=(0,m.s)(),g=((0,o.iH)(null),(0,o.iH)(!1),(0,o.iH)(!1)),_=((0,o.iH)(null),(0,o.iH)(null)),f=(0,o.iH)("market"),b=(0,o.iH)("active"),x=((0,o.iH)(null),(0,o.iH)({})),y=(0,o.iH)([]),k=(0,o.iH)([]),U=(0,o.iH)([]),h=(0,o.iH)([]),W=(0,o.iH)({});let z=(0,o.iH)({}),S=(0,o.iH)(!1),q=(0,o.iH)([]);l(24409);async function H(e){g.value=!g.value;const l=await a.getKeyPair(),t=await r.era.tranBySeq(e);Pe.log(t);const o=await r.era.tranRawCancelOrder(l,"name",t.signature,!0);z.value=o,Pe.log(z.value),S.value=!0,g.value=!g.value}async function $(){g.value=!g.value,Pe.log(z.value.raw);const e=await r.era.broadcast64(z.value.raw);Pe.log(e),e.error&&Pe.log(e.error),S.value=!1,g.value=!g.value}(0,t.YP)(_,(e=>{if(e){let a={};Pe.log(Z.value);let l=Object.keys(Z.value).filter((a=>a.toUpperCase().includes(e.toUpperCase())));Pe.log(l);for(let e of l)Pe.log(Z.value[e]),a[e]=Z.value[e];W.value=a,Pe.log(a)}else W.value={}}));const F=(0,t.Fl)((()=>a.assets)),Z=((0,t.Fl)((()=>a.marketExchange)),(0,t.Fl)((()=>a.trade_pairs))),C=(0,t.Fl)((()=>p.addresses[p.currentAddressIdx].address));(0,t.Fl)((()=>p.balances));return(0,t.wF)((async()=>{w.toggleLoadingState();const e=await c.h.get("/api/settings/volumes");Pe.log(e.data),q.value=e.data,await a.getMarketExchangeOrders(),await a.setTradePairs(),y.value=await(0,i.rK)(C.value);let l=[];Pe.log(y.value);for(let a of y.value)F.value.find((e=>e.key===a.haveAssetKey))&&F.value.find((e=>e.key===a.wantAssetKey))&&l.push(a);Pe.log(l),k.value=l.filter((e=>1===e.status||2===e.status)),U.value=l.filter((e=>3===e.status)),h.value=l.filter((e=>4===e.status)),w.toggleLoadingState()})),(e,a)=>{const l=(0,t.up)("q-tab"),i=(0,t.up)("q-tabs"),u=(0,t.up)("q-icon"),r=(0,t.up)("q-input"),c=(0,t.up)("q-item-section"),d=(0,t.up)("q-badge"),m=(0,t.up)("q-item"),p=(0,t.up)("q-list"),y=(0,t.up)("q-tab-panel"),C=(0,t.up)("q-separator"),V=(0,t.up)("btn"),Q=(0,t.up)("q-tab-panels"),P=(0,t.up)("q-card-section"),j=(0,t.up)("q-btn"),K=(0,t.up)("q-card-actions"),D=(0,t.up)("q-card"),A=(0,t.up)("q-dialog"),O=(0,t.up)("q-page"),T=(0,t.Q2)("touch-swipe"),I=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(O,{padding:""},{default:(0,t.w5)((()=>[(0,o.SU)(w).tradeModalVisible?((0,t.wg)(),(0,t.iD)("div",ua,[(0,t.Wm)((0,o.SU)(Qe),{"trade-pair":x.value},null,8,["trade-pair"])])):((0,t.wg)(),(0,t.iD)("div",je,[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),class:"q-mb-md text-white custom-tabs","active-color":"dark","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"custom-tab text-bold","no-caps":"",name:"market",label:e.$t("market")},null,8,["label"]),(0,t.Wm)(l,{"no-caps":"",class:"custom-tab text-bold",name:"own_orders",label:e.$t("owm_trade")},null,8,["label"])])),_:1},8,["modelValue"])),[[T]]),(0,t.wy)((0,t.Wm)(r,{standout:"",dark:"",outlined:"","label-color":"white",color:"white",class:"q-mb-md",modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value=e),label:e.$t("search")},{prepend:(0,t.w5)((()=>[(0,t.Wm)(u,{name:"search"})])),_:1},8,["modelValue","label"]),[[n.F8,"market"===f.value]]),(0,t.Wm)(Q,{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e),class:"bg-transparent"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"market",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(W.value).length>0?W.value:Z.value,((a,l)=>((0,t.wg)(),(0,t.j4)(m,{clickable:"",class:"asset-item",onClick:e=>(x.value=a,(0,o.SU)(w).toggleTradeModalVisible()),key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"text-weight-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(l.replace("_"," / ")),1)])),_:2},1024),(0,t.Wm)(c,{class:"text-caption"},{default:(0,t.w5)((()=>[(0,o.SU)(q).filter((e=>e.pair===l)).length>0?((0,t.wg)(),(0,t.iD)("span",Ke,[(0,t._)("span",De,(0,s.zw)(e.$t("for24h")),1),(0,t.Uk)(" : "),(0,t.Wm)(d,{color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat((0,o.SU)(q).find((e=>e.pair===l)).base_volume_24).toFixed(2))+" / "+(0,s.zw)(parseFloat((0,o.SU)(q).find((e=>e.pair===l)).quote_volume_24).toFixed(2)),1)])),_:2},1024),Ae,(0,t._)("span",Oe,(0,s.zw)(e.$t("for7d")),1),(0,t.Uk)(" : "),(0,t.Wm)(d,{color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat((0,o.SU)(q).find((e=>e.pair===l)).base_volume_1w).toFixed(2))+" / "+(0,s.zw)(parseFloat((0,o.SU)(q).find((e=>e.pair===l)).quote_volume_1w).toFixed(2)),1)])),_:2},1024),Te,(0,t._)("span",Ie,(0,s.zw)(e.$t("for1m")),1),(0,t.Uk)(" : "),(0,t.Wm)(d,{color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat((0,o.SU)(q).find((e=>e.pair===l)).base_volume_1m).toFixed(2))+" / "+(0,s.zw)(parseFloat((0,o.SU)(q).find((e=>e.pair===l)).quote_volume_1m).toFixed(2)),1)])),_:2},1024)])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),(0,t.Wm)(y,{name:"own_orders",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),class:"q-mb-md text-white custom-tabs","active-color":"dark","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{"no-caps":"",class:"custom-tab text-bold",name:"active",label:e.$t("active_offers")},null,8,["label"]),(0,t.Wm)(l,{"no-caps":"",class:"custom-tab text-bold",name:"done",label:e.$t("done_offers")},null,8,["label"]),(0,t.Wm)(l,{"no-caps":"",class:"custom-tab text-bold",name:"cancel",label:e.$t("cancel_offers")},null,8,["label"])])),_:1},8,["modelValue"])),[[T]]),(0,t.Wm)(C),(0,t.Wm)(Q,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),class:"bg-transparent"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"active",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(k.value,((a,l)=>((0,t.wg)(),(0,t.j4)(m,{class:"asset-item items-start",key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("p",Me,(0,s.zw)(F.value.find((e=>e.key===a.wantAssetKey)).name)+" / "+(0,s.zw)(F.value.find((e=>e.key===a.haveAssetKey)).name),1),(0,t._)("p",Ye,(0,s.zw)(e.$t("offer_kol_vo"))+" "+(0,s.zw)(a.amountHave),1),(0,t._)("p",Ne,(0,s.zw)(e.$t("offer_kol_price"))+" "+(0,s.zw)(a.price),1),(0,t._)("p",Be,(0,s.zw)(e.$t("offer_kol_total"))+" "+(0,s.zw)(a.amountWant),1),(0,t._)("p",Le,(0,s.zw)(e.$t("offer_kol_left"))+" "+(0,s.zw)(a.leftWant),1),(0,t._)("p",Ee,[(0,t.Uk)((0,s.zw)(e.$t("offer_kol_block"))+" ",1),(0,t.Wm)(v.Z,{text:a.seqNo,tx:a.seqNo},null,8,["text","tx"])])])),_:2},1024),(0,t.Wm)(c,{side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{color:"negative",padding:"sm","text-color":"white",loading:g.value,onClick:e=>H(a.seqNo),unelevated:"","no-caps":"",size:"12px",label:e.$t("cancel_offer")},null,8,["loading","onClick","label"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(y,{name:"done",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(U.value,((a,l)=>((0,t.wg)(),(0,t.j4)(m,{class:"asset-item",key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("p",Re,(0,s.zw)(F.value.find((e=>e.key===a.wantAssetKey)).name)+" / "+(0,s.zw)(F.value.find((e=>e.key===a.haveAssetKey)).name),1),(0,t._)("p",Je,(0,s.zw)(e.$t("offer_kol_vo"))+" "+(0,s.zw)(a.amountHave),1),(0,t._)("p",Ge,(0,s.zw)(e.$t("offer_kol_price"))+" "+(0,s.zw)(a.price),1),(0,t._)("p",Xe,(0,s.zw)(e.$t("offer_kol_total"))+" "+(0,s.zw)(a.amountWant),1),(0,t._)("p",ea,(0,s.zw)(e.$t("offer_kol_left"))+" "+(0,s.zw)(a.leftWant),1),(0,t._)("p",aa,[(0,t.Uk)((0,s.zw)(e.$t("offer_kol_block"))+" ",1),(0,t.Wm)(v.Z,{text:a.seqNo,tx:a.seqNo},null,8,["text","tx"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(y,{name:"cancel",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(h.value,((a,l)=>((0,t.wg)(),(0,t.j4)(m,{class:"asset-item",key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("p",la,(0,s.zw)(F.value.find((e=>e.key===a.wantAssetKey)).name)+" / "+(0,s.zw)(F.value.find((e=>e.key===a.haveAssetKey)).name),1),(0,t._)("p",ta,(0,s.zw)(e.$t("offer_kol_vo"))+" "+(0,s.zw)(a.amountHave),1),(0,t._)("p",oa,(0,s.zw)(e.$t("offer_kol_price"))+" "+(0,s.zw)(a.price),1),(0,t._)("p",na,(0,s.zw)(e.$t("offer_kol_total"))+" "+(0,s.zw)(a.amountWant),1),(0,t._)("p",sa,(0,s.zw)(e.$t("offer_kol_left"))+" "+(0,s.zw)(a.leftWant),1),(0,t._)("p",ia,[(0,t.Uk)((0,s.zw)(e.$t("offer_kol_block"))+" ",1),(0,t.Wm)(v.Z,{text:a.seqNo,tx:a.seqNo},null,8,["text","tx"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),(0,t.Wm)(A,{modelValue:(0,o.SU)(S),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,o.dq)(S)?S.value=e:S=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(P,{class:"bg-dark text-white"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Подтверждение транзакции отмены ордера ")])),_:1}),(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Комиссия")])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,o.SU)(z).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(K,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(j,{"no-caps":"",unelevated:"",color:"grey-6",loading:g.value,label:"Отмена"},null,8,["loading"]),[[I]]),(0,t.Wm)(j,{"no-caps":"",unelevated:"",loading:g.value,onClick:$,label:"Ок",color:"positive"},null,8,["loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}}});var da=l(69885),ma=l(47817),pa=l(70900),va=l(22857),wa=l(89800),ga=l(84106),_a=l(20990),fa=l(64871);const ba=ca,xa=ba;Ce()(ca,"components",{QPage:da.Z,QTabs:ma.Z,QTab:pa.Z,QInput:Ue.Z,QIcon:va.Z,QTabPanels:wa.Z,QTabPanel:ga.Z,QList:Se.Z,QItem:qe.Z,QItemSection:He.Z,QBadge:_a.Z,QSeparator:xe.Z,QDialog:ze.Z,QCard:ye.Z,QCardSection:ke.Z,QCardActions:$e.Z,QBtn:he.Z}),Ce()(ca,"directives",{TouchSwipe:fa.Z,ClosePopup:Fe.Z})}}]);