(function(){var e={6244:function(e,t,n){"use strict";var o=n(9963),a=e=>{const t=e/100;return t.toLocaleString("en-US",{style:"currency",currency:"USD"})},i=n(6252),l=n(2262),c=n(3577),s=n(9391);const r=(0,l.iH)({money:0,totalMoney:0,incomePerClick:1,autoIncome:0,eventBus:(0,s.Z)(),isGameCompleted:!1,crops:[{id:0,name:"Wheat",iconName:"wheat",price:100,income:1,amount:0},{id:1,name:"Potato",iconName:"potato",price:900,income:3,amount:0},{id:2,name:"Carrot",iconName:"carrot",price:12500,income:5,amount:0},{id:3,name:"Corn",iconName:"corn",price:62e3,income:7,amount:0},{id:4,name:"Strawberry",iconName:"strawberry",price:5e5,income:10,amount:0}],animals:[{id:0,name:"Chicken",iconName:"chicken",price:1e3,income:100,amount:0},{id:1,name:"Rabbit",iconName:"rabbit",price:9e3,income:300,amount:0},{id:2,name:"Pig",iconName:"pig",price:125e3,income:500,amount:0},{id:3,name:"Goat",iconName:"goat",price:62e4,income:700,amount:0},{id:4,name:"Cow",iconName:"cow",price:5e6,income:1e3,amount:0}]});var u=r;function d(){function e(e){const t=["eventBus"];Object.keys(e).forEach((n=>{-1===t.indexOf(n)&&(u.value[n]=e[n])}))}function t(e){u.value.money+=e,u.value.totalMoney+=e}function n(e){u.value.money-=e}function o(e){u.value.autoIncome+=e}function a(e){u.value.incomePerClick+=e}function l(e){const t=u.value.animals.find((t=>t.id===e.id));t.amount+=e.amount}function c(e){const t=u.value.crops.find((t=>t.id===e.id));t.amount+=e.amount}function s(e){const t=u.value.animals.find((t=>t.id===e));t.price=Math.round(1.5*t.price)}function r(e){const t=u.value.crops.find((t=>t.id===e));t.price=Math.round(1.4*t.price)}function d(e){u.value.isGameCompleted=e}return{store:(0,i.Fl)((()=>u.value)),money:(0,i.Fl)((()=>u.value.money)),totalMoney:(0,i.Fl)((()=>u.value.totalMoney)),incomePerClick:(0,i.Fl)((()=>u.value.incomePerClick)),autoIncome:(0,i.Fl)((()=>u.value.autoIncome)),eventBus:(0,i.Fl)((()=>u.value.eventBus)),animals:(0,i.Fl)((()=>u.value.animals)),crops:(0,i.Fl)((()=>u.value.crops)),isGameCompleted:(0,i.Fl)((()=>u.value.isGameCompleted)),initialLoadData:e,addMoney:t,subtractMoney:n,addAutoIncome:o,addIncomePerClick:a,addAnimals:l,addCrops:c,increaseAnimalPrice:s,increaseCropPrice:r,setGameCompletionFlag:d}}var m=d;const p={class:"f-link"};var v={__name:"FLink",props:{text:{type:String,default:""}},setup(e){return(t,n)=>((0,i.wg)(),(0,i.iD)("span",p,(0,c.zw)(e.text),1))}},f=n(3744);const _=(0,f.Z)(v,[["__scopeId","data-v-72f3a12e"]]);var h=_,w=n(452),y=n.n(w),g=n(5743),b=n.n(g);const k=()=>"super_secret_key";var C=k;const{store:S,eventBus:x,initialLoadData:M}=m(),I="FARM_SAVE",D=C(),F=1e4;let H;const O=()=>{const e=JSON.stringify(S.value),t=y().encrypt(e,D).toString();localStorage.setItem(I,t),x.value.emit("game-saved")},U=()=>{const e=localStorage.getItem(I);if(e)try{const t=y().decrypt(e,D).toString(b()),n=JSON.parse(t);M(n)}catch(t){console.warn("Save broken, lets start from beginnig!"),localStorage.removeItem(I)}},A=()=>{H=setInterval((()=>{O()}),F)},$=()=>{clearInterval(H)},N=()=>{localStorage.removeItem(I),window.location.reload()};function E(){const e=(0,l.iH)(!1);function t(){e.value=!0}function n(){e.value=!1}return{isShowed:e,show:t,hide:n}}var P=E;const{isShowed:j,show:T,hide:W}=P(),{isShowed:z,show:Z,hide:B}=P(),{isShowed:R,show:Y,hide:G}=P();function L(){return{isAboutModalShown:j,openAboutModal:T,closeAboutModal:W,isHelpModalShown:z,openHelpModal:Z,closeHelpModal:B,isCongratulationsModalShown:R,openCongratulationsModal:Y,closeCongratulationsModal:G}}var K=L;const q=e=>((0,i.dD)("data-v-2da828ed"),e=e(),(0,i.Cn)(),e),X={class:"header"},V={class:"header__content"},J=q((()=>(0,i._)("h1",null,"Farm Clicker",-1))),Q={class:"actions"};var ee={__name:"FHeader",setup(e){const{openAboutModal:t,openHelpModal:n}=K();return(e,o)=>((0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("div",V,[J,(0,i._)("div",Q,[(0,i.Wm)(h,{class:"actions__item",text:"Save",onClick:(0,l.SU)(O)},null,8,["onClick"]),(0,i.Wm)(h,{class:"actions__item",text:"Help",onClick:(0,l.SU)(n)},null,8,["onClick"]),(0,i.Wm)(h,{class:"actions__item",text:"About",onClick:(0,l.SU)(t)},null,8,["onClick"])])])]))}};const te=(0,f.Z)(ee,[["__scopeId","data-v-2da828ed"]]);var ne=te;const oe={class:"icon-button",type:"button"};function ae(e,t){return(0,i.wg)(),(0,i.iD)("button",oe)}const ie={},le=(0,f.Z)(ie,[["render",ae],["__scopeId","data-v-5d1d2c02"]]);var ce=le;const se=["onClick"],re={class:"f-modal__body"},ue={class:"f-modal__header"},de={class:"f-modal__title"},me={class:"f-modal__content"};var pe={__name:"FModal",props:{isOpen:{type:Boolean,default:!1},title:{type:String,default:""},unclosable:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){function n(){t("close")}return(t,a)=>e.isOpen?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,c.C_)(["f-modal",{"f-modal_unclosable":e.unclosable}])},[(0,i._)("div",{class:"f-modal__overlay",onClick:(0,o.iM)(n,["self"])},[(0,i._)("div",re,[(0,i._)("div",ue,[(0,i._)("h2",de,(0,c.zw)(e.title),1),e.unclosable?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(ce,{key:0,onClick:n}))]),(0,i._)("div",me,[(0,i.WI)(t.$slots,"default")])])],8,se)],2)):(0,i.kq)("",!0)}};const ve=(0,f.Z)(pe,[["__scopeId","data-v-170a604f"]]);var fe=ve;const _e=e=>((0,i.dD)("data-v-6b0aa2e8"),e=e(),(0,i.Cn)(),e),he=_e((()=>(0,i._)("p",null,"Version 1.0.0",-1))),we=_e((()=>(0,i._)("a",{href:"https://github.com/markin-dev/farm",target:"_blank",rel:"noopener noreferrer"}," GitHub ",-1))),ye={class:"about-modal__attribution"},ge=_e((()=>(0,i._)("p",null,"Attribution:",-1))),be=["title","href"];var ke={__name:"AboutModal",props:{isOpen:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const n=[{text:"Harvest icons created by Eucalyp - Flaticon",title:"harvest icons",href:"https://www.flaticon.com/free-icons/harvest"},{text:"Chicken icons created by Freepik - Flaticon",title:"chicken icons",href:"https://www.flaticon.com/free-icons/chicken"},{text:"Rabbit icons created by Freepik - Flaticon",title:"rabbit icons",href:"https://www.flaticon.com/free-icons/rabbit"},{text:"Pig icons created by dDara - Flaticon",title:"pig icons",href:"https://www.flaticon.com/free-icons/pig"},{text:"Goat icons created by Freepik - Flaticon",title:"goat icons",href:"https://www.flaticon.com/free-icons/goat"},{text:"Cow icons created by surang - Flaticon",title:"cow icons",href:"https://www.flaticon.com/free-icons/cow"},{text:"Wheat icons created by DinosoftLabs - Flaticon",title:"wheat icons",href:"https://www.flaticon.com/free-icons/wheat"},{text:"Potato icons created by Freepik - Flaticon",title:"potato icons",href:"https://www.flaticon.com/free-icons/potato"},{text:"Vegetable icons created by Freepik - Flaticon",title:"vegetable icons",href:"https://www.flaticon.com/free-icons/vegetable"},{text:"Corn icons created by mangsaabguru - Flaticon",title:"corn icons",href:"https://www.flaticon.com/free-icons/corn"},{text:"Fruit icons created by Freepik - Flaticon",title:"fruit icons",href:"https://www.flaticon.com/free-icons/fruit"}];return(o,a)=>((0,i.wg)(),(0,i.j4)(fe,{class:"about-modal","is-open":e.isOpen,title:"Farm",onClose:a[0]||(a[0]=e=>t("close"))},{default:(0,i.w5)((()=>[he,we,(0,i._)("div",ye,[ge,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(n,(e=>(0,i._)("a",{key:e.text,target:"_blank",rel:"noopener noreferrer",title:e.title,href:e.href},(0,c.zw)(e.text),9,be))),64))])])),_:1},8,["is-open"]))}};const Ce=(0,f.Z)(ke,[["__scopeId","data-v-6b0aa2e8"]]);var Se=Ce;const xe=e=>((0,i.dD)("data-v-08fd9966"),e=e(),(0,i.Cn)(),e),Me=xe((()=>(0,i._)("div",{class:"help-modal__content"},[(0,i._)("p",null,"This is a simple farm themed clicker game."),(0,i._)("p",null," Your goal is to reach a total farm cost of $10,000,000. You can buy crops to increase income per click or animals to increase auto income. "),(0,i._)("p",null," Each click can have a different rarity, which will increase the click income by a certain multiplier: "),(0,i._)("ul",null,[(0,i._)("li",{class:"global__text-color_common"}," Common (x1) "),(0,i._)("li",{class:"global__text-color_uncommon"}," Uncommon (x2, 20% chance) "),(0,i._)("li",{class:"global__text-color_rare"}," Rare (x5, 10% chance) "),(0,i._)("li",{class:"global__text-color_epic"}," Epic (x20, 5% chance) "),(0,i._)("li",{class:"global__text-color_legendary"}," Legendary (x100, 2% chance) ")]),(0,i._)("p",null,"Good luck!")],-1)));var Ie={__name:"HelpModal",props:{isOpen:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){return(n,o)=>((0,i.wg)(),(0,i.j4)(fe,{class:"help-modal","is-open":e.isOpen,title:"Help",onClose:o[0]||(o[0]=e=>t("close"))},{default:(0,i.w5)((()=>[Me])),_:1},8,["is-open"]))}};const De=(0,f.Z)(Ie,[["__scopeId","data-v-08fd9966"]]);var Fe=De;const He={class:"firework-wrapper"},Oe={class:"firework-wrapper__slot"};function Ue(e,t){return(0,i.wg)(),(0,i.iD)("div",He,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(e=>(0,i._)("div",{key:`${e}-${Math.random()}`,class:"firework-wrapper__firework"}))),64)),(0,i._)("div",Oe,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])}const Ae={},$e=(0,f.Z)(Ae,[["render",Ue],["__scopeId","data-v-782cf81b"]]);var Ne=$e;const Ee={type:"button",class:"button"};function Pe(e,t){return(0,i.wg)(),(0,i.iD)("button",Ee," Restart ")}const je={},Te=(0,f.Z)(je,[["render",Pe],["__scopeId","data-v-acec601c"]]);var We=Te;const ze={class:"congratulations-modal__content"},Ze={class:"congratulations-modal__title","aria-label":"Wash your hands"};var Be={__name:"CongratulationsModal",props:{isOpen:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const{totalMoney:n}=m(),o=(0,i.Fl)((()=>`Congratulations! You earned ${a(n.value)} and became the best farmer in the world!`));return(n,a)=>e.isOpen?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"congratulations-modal",onClose:a[0]||(a[0]=e=>t("close"))},[(0,i.Wm)(Ne,{class:"congratulations-modal__firework-wrapper"},{default:(0,i.w5)((()=>[(0,i._)("div",ze,[(0,i._)("h1",Ze,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(o).split(""),(e=>((0,i.wg)(),(0,i.iD)("span",{key:`${e}-${Math.random()}`},(0,c.zw)(e),1)))),128))]),(0,i.Wm)(We,{onClick:(0,l.SU)(N)},null,8,["onClick"])])])),_:1})],32)):(0,i.kq)("",!0)}};const Re=(0,f.Z)(Be,[["__scopeId","data-v-4ab51b24"]]);var Ye=Re;const Ge={class:"modals-container"};var Le={__name:"ModalsContainer",setup(e){const{isAboutModalShown:t,closeAboutModal:n,isHelpModalShown:o,closeHelpModal:a,isCongratulationsModalShown:c}=K();return(e,s)=>((0,i.wg)(),(0,i.iD)("div",Ge,[(0,i.Wm)(Se,{"is-open":(0,l.SU)(t),onClose:(0,l.SU)(n)},null,8,["is-open","onClose"]),(0,i.Wm)(Fe,{"is-open":(0,l.SU)(o),onClose:(0,l.SU)(a)},null,8,["is-open","onClose"]),(0,i.Wm)(Ye,{"is-open":(0,l.SU)(c),unclosable:""},null,8,["is-open"])]))}};const Ke=Le;var qe=Ke,Xe={__name:"FloatText",props:{id:{type:Number,default:0},text:{type:String,default:""},type:{type:String,default:"common"},animationDurationMs:{type:Number,default:600}},emits:["animation-end"],setup(e,{emit:t}){const n=e,a=(0,i.Fl)((()=>`transition: all ${n.animationDurationMs/1e3}s`));return(0,i.bv)((()=>{setTimeout((()=>{t("animation-end",n.id)}),n.animationDurationMs)})),(t,n)=>((0,i.wg)(),(0,i.j4)(o.uT,{appear:"",name:"float-text"},{default:(0,i.w5)((()=>[(0,i._)("span",{class:(0,c.C_)(["float-text",`float-text_${e.type}`,`global__text-color_${e.type}`]),style:(0,c.j5)((0,l.SU)(a))},(0,c.zw)(e.text),7)])),_:1}))}};const Ve=(0,f.Z)(Xe,[["__scopeId","data-v-e55565d2"]]);var Je=Ve;n(7658);const Qe=(0,l.iH)([]);function et(){function e(e){Qe.value.push({id:Math.random(),value:e.value||"default text",coords:e.coords,type:e.type,animationDurationMs:e.animationDurationMs})}function t(e){const t=Qe.value.findIndex((t=>t.id===e));Qe.value.splice(t,1)}return{floatTextItems:(0,i.Fl)((()=>Qe.value)),addFloatTextItem:e,removeFloatTextItem:t}}const tt={COMMON:"common",UNCOMMON:"uncommon",RARE:"rare",EPIC:"epic",LEGENDARY:"legendary",AUTO_INCOME:"auto-income",SHOP_PURCHASE:"shop-purchase"};var nt=et;const ot={class:"float-text-overlay"},at={class:"float-text-overlay__container"};var it={__name:"FloatTextOverlay",setup(e){const{floatTextItems:t,removeFloatTextItem:n}=nt();function o(e){return{top:`${e.coords.y}px`,left:`${e.coords.x}px`}}return(e,a)=>((0,i.wg)(),(0,i.iD)("div",ot,[(0,i._)("div",at,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(t),(e=>((0,i.wg)(),(0,i.j4)(Je,{id:e.id,key:e.id,class:"float-text-overlay__float-text",style:(0,c.j5)(o(e)),text:e.value,type:e.type,"animation-duration-ms":e.animationDurationMs,onAnimationEnd:(0,l.SU)(n)},null,8,["id","style","text","type","animation-duration-ms","onAnimationEnd"])))),128))])]))}};const lt=(0,f.Z)(it,[["__scopeId","data-v-06b993c6"]]);var ct=lt;const{animals:st,crops:rt,autoIncome:ut,eventBus:dt,addMoney:mt,subtractMoney:pt,addAnimals:vt,addAutoIncome:ft,increaseAnimalPrice:_t,addCrops:ht,addIncomePerClick:wt,increaseCropPrice:yt}=m();function gt(e){mt(e)}function bt(e){mt(ut.value*e),dt.value.emit("added-auto-income",ut.value*e)}function kt(e){const t=st.value.find((t=>t.id===e.id));pt(t.price),vt(e),ft(t.income*e.amount),_t(e.id)}function Ct(e){const t=rt.value.find((t=>t.id===e.id));pt(t.price),ht(e),wt(t.income*e.amount),yt(e.id)}var St={__name:"ScytheSubstrate",props:{styleObject:{type:Object,default:()=>({})}},emits:["animation-end"],setup(e,{emit:t}){return(0,i.bv)((()=>{setTimeout((()=>{t("animation-end")}),1e3)})),(t,n)=>((0,i.wg)(),(0,i.j4)(o.uT,{appear:"",name:"custom-substrate"},{default:(0,i.w5)((()=>[(0,i._)("div",{style:(0,c.j5)(e.styleObject),class:"custom-substrate"},null,4)])),_:1}))}};const xt=(0,f.Z)(St,[["__scopeId","data-v-a86b94e8"]]);var Mt=xt;const It=(0,l.iH)([]);function Dt(){function e(){It.value.push({id:Math.random()})}function t(){It.value.shift()}return{substrates:(0,i.Fl)((()=>It.value)),addSubstrate:e,shiftSubstrate:t}}var Ft=Dt;const{incomePerClick:Ht}=m(),{addFloatTextItem:Ot}=nt(),{addSubstrate:Ut}=Ft(),At=[{multiplier:1,type:tt.COMMON,animationDurationMs:600},{multiplier:2,type:tt.UNCOMMON,animationDurationMs:1200},{multiplier:5,type:tt.RARE,animationDurationMs:1800},{multiplier:20,type:tt.EPIC,animationDurationMs:2400},{multiplier:100,type:tt.LEGENDARY,animationDurationMs:3e3}];function $t(){const e=Math.random();return e>.98?At[4]:e>.95?At[3]:e>.9?At[2]:e>.8?At[1]:At[0]}const Nt={[tt.COMMON]:{xCoefficient:4.6,y:20},[tt.UNCOMMON]:{xCoefficient:5.1,y:22},[tt.RARE]:{xCoefficient:5.6,y:24},[tt.EPIC]:{xCoefficient:6.2,y:26},[tt.LEGENDARY]:{xCoefficient:6.7,y:28}};function Et(e,t){const{multiplier:n,type:o,animationDurationMs:i}=t,l=`+${a(Ht.value*n)}`;Ot({value:l,coords:{x:e.pageX-Nt[o].xCoefficient*l.length,y:e.pageY-Nt[o].y},type:o,animationDurationMs:i})}var Pt=e=>{const t=$t();gt(Ht.value*t.multiplier),Ut(),Et(e,t)};const jt={class:"scythe"};var Tt={__name:"FScythe",setup(e){const{substrates:t,shiftSubstrate:n}=Ft();return(e,o)=>((0,i.wg)(),(0,i.iD)("div",jt,[(0,i._)("div",{class:"scythe__button",onMousedown:o[0]||(o[0]=(...e)=>(0,l.SU)(Pt)&&(0,l.SU)(Pt)(...e))},null,32),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(t),(e=>((0,i.wg)(),(0,i.j4)(Mt,{key:e.id,class:"scythe__substrate",onAnimationEnd:(0,l.SU)(n)},null,8,["onAnimationEnd"])))),128))]))}};const Wt=(0,f.Z)(Tt,[["__scopeId","data-v-83a23874"]]);var zt=Wt;const Zt={class:"shop-items-list"};function Bt(e,t,n,o,a,l){const c=(0,i.up)("ShopItem");return(0,i.wg)(),(0,i.iD)("div",Zt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,(o=>((0,i.wg)(),(0,i.j4)(c,{id:o.id,key:o.id,name:o.name,"icon-name":o.iconName,price:o.price,"income-text":`+${e.$formatMoney(o.income)} ${n.incomeText}`,amount:o.amount,class:"shop-items-list__item",onShopItemClick:t[0]||(t[0]=t=>e.$emit("shop-item-click",t))},null,8,["id","name","icon-name","price","income-text","amount"])))),128))])}var Rt=(e,t)=>({x:e+window.scrollX,y:t+window.scrollY});const Yt={class:"shop-item__wrapper"},Gt={class:"shop-item__desc"},Lt={class:"shop-item__name"},Kt={class:"shop-item__price"},qt={class:"shop-item__per-click"};var Xt={__name:"ShopItem",props:{id:{type:Number,default:NaN,required:!0},name:{type:String,default:""},iconName:{type:String,default:""},price:{type:Number,default:0},incomeText:{type:String,default:""},amount:{type:Number,default:0}},emits:["shop-item-click"],setup(e,{emit:t}){const n=e,{money:o}=m(),a=(0,i.Fl)((()=>n.price>o.value)),{addFloatTextItem:s}=nt(),r=(0,l.iH)(null),u=1;function d(){const e=r.value.getBoundingClientRect(),t=6;s({value:`+${u}`,coords:Rt(e.right+t,e.top),type:tt.SHOP_PURCHASE})}function p(){a.value||(t("shop-item-click",{id:n.id,amount:u}),d())}return(t,n)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,c.C_)(["shop-item",{"shop-item_disabled":(0,l.SU)(a)}]),onClick:p},[(0,i._)("div",Yt,[(0,i._)("div",{class:(0,c.C_)(["shop-item__icon",[`shop-item__icon-${e.iconName}`]])},null,2),(0,i._)("div",Gt,[(0,i._)("div",Lt,(0,c.zw)(e.name),1),(0,i._)("div",Kt," Price: "+(0,c.zw)(t.$formatMoney(e.price)),1),(0,i._)("div",qt,(0,c.zw)(e.incomeText),1)]),(0,i._)("div",{ref_key:"itemsCountRef",ref:r,class:"shop-item__count"},(0,c.zw)(e.amount),513)])],2))}};const Vt=(0,f.Z)(Xt,[["__scopeId","data-v-651523b0"]]);var Jt=Vt,Qt={components:{ShopItem:Jt},props:{items:{type:Array,default:()=>[]},incomeText:{type:String,default:""}}};const en=(0,f.Z)(Qt,[["render",Bt],["__scopeId","data-v-29c0c5b7"]]);var tn=en;const nn={class:"f-shop"};var on={__name:"FShop",props:{title:{type:String,default:"no name"},items:{type:Object,default:()=>{}},incomeText:{type:String,default:"default shop name"}},emits:["shop-item-click"],setup(e,{emit:t}){return(n,o)=>((0,i.wg)(),(0,i.iD)("div",nn,[(0,i._)("h3",null,(0,c.zw)(e.title),1),(0,i.Wm)(tn,{items:e.items,"income-text":e.incomeText,onShopItemClick:o[0]||(o[0]=e=>t("shop-item-click",e))},null,8,["items","income-text"])]))}};const an=(0,f.Z)(on,[["__scopeId","data-v-13600af5"]]);var ln=an;const cn={class:"game-field"},sn={class:"game-field__left-menu"},rn={class:"game-field__main-field"},un={class:"game-field__right-menu"};var dn={__name:"GameField",setup(e){const{money:t,totalMoney:n,incomePerClick:o,autoIncome:s,eventBus:r,animals:u,crops:d}=m(),{addFloatTextItem:p}=nt(),v=(0,l.iH)(null);function f(e){const t=v.value.getBoundingClientRect(),n=6;p({value:`+${a(e)}`,coords:Rt(t.right+n,t.top),type:tt.AUTO_INCOME})}function _(e){e&&f(e)}return(0,i.bv)((()=>{r.value.on("added-auto-income",_)})),(0,i.Ah)((()=>{r.value.off("added-auto-income",_)})),(e,a)=>((0,i.wg)(),(0,i.iD)("div",cn,[(0,i._)("div",sn,[(0,i.Wm)(ln,{title:"Animals Shop",items:(0,l.SU)(u),"income-text":"auto income",onShopItemClick:(0,l.SU)(kt)},null,8,["items","onShopItemClick"])]),(0,i._)("div",rn,[(0,i._)("h3",null,"Total farm cost: "+(0,c.zw)(e.$formatMoney((0,l.SU)(n))),1),(0,i.Wm)(zt,{class:"scythe"}),(0,i._)("p",null,"Money: "+(0,c.zw)(e.$formatMoney((0,l.SU)(t))),1),(0,i._)("p",null,"Income per click: "+(0,c.zw)(e.$formatMoney((0,l.SU)(o))),1),(0,i._)("p",{ref_key:"autoIncomeRef",ref:v}," Auto income: "+(0,c.zw)(e.$formatMoney((0,l.SU)(s))),513)]),(0,i._)("div",un,[(0,i.Wm)(ln,{title:"Crops Shop",items:(0,l.SU)(d),"income-text":"per click",onShopItemClick:(0,l.SU)(Ct)},null,8,["items","onShopItemClick"])])]))}};const mn=(0,f.Z)(dn,[["__scopeId","data-v-3498db92"]]);var pn=mn;const vn={class:"dev-panel-header__right-actions"};var fn={__name:"DevPanelHeader",props:{height:{type:Number,default:32},isMinimized:{type:Boolean,default:!1}},setup(e){return(t,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"dev-panel-header",style:(0,c.j5)({flex:`0 0 ${e.height}px`})},[(0,i._)("div",{class:"dev-panel-header__button dev-panel-header__button-close",onClick:n[0]||(n[0]=e=>t.$emit("close-button-click"))}),(0,i._)("div",vn,[(0,i._)("div",{class:"dev-panel-header__button dev-panel-header__button-default-position",onClick:n[1]||(n[1]=e=>t.$emit("default-position-button-click"))}),(0,i._)("div",{class:(0,c.C_)(["dev-panel-header__button dev-panel-header__button-minimize",{"dev-panel-header__button-minimize_minimized":e.isMinimized}]),onClick:n[2]||(n[2]=e=>t.$emit("minimize-button-click"))},null,2)])],4))}};const _n=(0,f.Z)(fn,[["__scopeId","data-v-ab1cf574"]]);var hn=_n;const wn={key:0,class:"dev-panel__content"};var yn={__name:"DevPanel",setup(e){const t=32,n=(0,l.iH)(0),a=(0,l.iH)(0),s=(0,l.iH)(0),r=(0,l.iH)(0),u=(0,l.iH)(300),d=(0,l.iH)(400),m=(0,l.iH)(0),p=(0,l.iH)(8),v=(0,l.iH)(!1),f=(0,i.Fl)((()=>({top:`${n.value}px`,left:`${a.value}px`,width:`${u.value}px`,height:`${d.value}px`,minHeight:`${t+32}px`}))),_=(0,i.Fl)((()=>a.value+u.value+p.value>window.innerWidth)),h=(0,i.Fl)((()=>n.value+d.value+p.value>window.innerHeight));function w(){a.value<p.value&&(a.value=p.value),n.value<p.value&&(n.value=p.value),_.value&&(a.value=window.innerWidth-u.value-p.value),h.value&&(n.value=window.innerHeight-d.value-p.value)}function y(){_.value&&(u.value=window.innerWidth-a.value-p.value),h.value&&(d.value=window.innerHeight-n.value-p.value)}function g(){n.value=window.innerHeight-d.value,a.value=0,w()}function b(e){e.preventDefault(),a.value=e.clientX-s.value,n.value=e.clientY-r.value,w()}function k(){document.onmouseup=null,document.onmousemove=null}function C(e){document.onmousemove=b,document.onmouseup=k,s.value=e.clientX-a.value,r.value=e.clientY-n.value}function S(e){e.preventDefault(),u.value=e.clientX-s.value,d.value=e.clientY-r.value,y()}function x(e){document.onmousemove=S,document.onmouseup=k,s.value=e.clientX-u.value,r.value=e.clientY-d.value}function M(){v.value?(n.value-=m.value-t,d.value=m.value):(n.value+=d.value-t,m.value=d.value,d.value=t),v.value=!v.value,w()}return(0,i.bv)((()=>{g()})),(e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"dev-panel",style:(0,c.j5)((0,l.SU)(f))},[(0,i.Wm)(hn,{"is-minimized":v.value,height:t,onMousedown:(0,o.iM)(C,["self"]),onCloseButtonClick:n[0]||(n[0]=t=>e.$emit("close")),onMinimizeButtonClick:M,onDefaultPositionButtonClick:g},null,8,["is-minimized","onMousedown"]),v.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",wn,[(0,i.WI)(e.$slots,"default"),(0,i._)("div",{class:"dev-panel__scale",onMousedown:x},null,32)]))],4))}};const gn=(0,f.Z)(yn,[["__scopeId","data-v-5d59dc74"]]);var bn=gn,kn={__name:"SavingStatusIcon",props:{animationDurationSec:{type:Number,default:1}},emits:["animation-end"],setup(e,{emit:t}){const n=e,a=(0,l.iH)(0);return(0,i.bv)((()=>{a.value=setTimeout((()=>{t("animation-end")}),1e3*n.animationDurationSec)})),(0,i.Ah)((()=>{clearTimeout(a)})),(t,n)=>((0,i.wg)(),(0,i.j4)(o.uT,{appear:"",name:"saving-status-icon"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"saving-status-icon",style:(0,c.j5)({transition:`all ${e.animationDurationSec}s`})},null,4)])),_:1}))}};const Cn=(0,f.Z)(kn,[["__scopeId","data-v-0c5364f6"]]);var Sn=Cn,xn={__name:"SavingStatusController",setup(e){const{eventBus:t}=m(),{isShowed:n,show:o,hide:a}=P();async function c(){a(),await(0,i.Y3)(),o()}return(0,i.bv)((()=>{t.value.on("game-saved",c)})),(0,i.Ah)((()=>{t.value.off("game-saved",c)})),(e,t)=>(0,l.SU)(n)?((0,i.wg)(),(0,i.j4)(Sn,{key:0,onAnimationEnd:(0,l.SU)(a)},null,8,["onAnimationEnd"])):(0,i.kq)("",!0)}};const Mn=(0,f.Z)(xn,[["__scopeId","data-v-752051c2"]]);var In=Mn;const Dn="#F9FAFB",Fn="#D1D5DB";var Hn={__name:"HoldButton",props:{text:{type:String,default:"default text"}},emits:["invoked"],setup(e,{emit:t}){let n;const o=(0,l.iH)(0),a=(0,i.Fl)((()=>({background:`linear-gradient(90deg, ${Fn} ${o.value}%, ${Dn} 0%) no-repeat`})));function s(){n=setInterval((()=>{o.value+=1,100===o.value&&(clearInterval(n),t("invoked"))}),10)}function r(){o.value=0,clearInterval(n)}return(t,n)=>((0,i.wg)(),(0,i.iD)("button",{class:"hold-button",type:"button",style:(0,c.j5)((0,l.SU)(a)),onMousedown:s,onMouseup:r,onMouseleave:r},(0,c.zw)(e.text),37))}};const On=Hn;var Un=On;const{autoIncome:An,isGameCompleted:$n}=m(),Nn=1e3,En=5e3;let Pn;const jn=(e=1)=>{An.value&&bt(e)},Tn=e=>{jn(e)},Wn=()=>{clearInterval(Pn),Pn=setInterval((()=>{Tn(1)}),Nn)},zn=()=>{let e=Date.now();clearInterval(Pn),Pn=setInterval((()=>{const t=Date.now(),n=(t-e)/Nn;Tn(Math.floor(n)),O(),e=t}),En)};function Zn(){document.hidden?zn():(O(),Wn())}const Bn=()=>{U(),$n.value||(A(),Wn(),document.addEventListener("visibilitychange",Zn))},Rn=()=>{$(),document.removeEventListener("visibilitychange",Zn),clearInterval(Pn)},Yn={class:"container"};var Gn={__name:"App",setup(e){const t=(0,l.iH)(!1),{store:n,totalMoney:o,setGameCompletionFlag:a}=m(),{openHelpModal:s,openCongratulationsModal:r}=K(),u=1e9;function d(e){"KeyD"===e.code&&e.shiftKey&&(t.value=!t.value)}return(0,i.YP)(o,(e=>{e>=u&&(a(!0),r(),O(),Rn())})),(0,i.bv)((()=>{const e="FARM_IS_OLD_USER",t=localStorage.getItem(e);t||(s(),localStorage.setItem(e,!0)),document.addEventListener("keydown",d),Bn()})),(e,o)=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(ne),(0,i.Wm)(qe),(0,i._)("div",Yn,[(0,i.Wm)(ct),(0,i.Wm)(pn),t.value?((0,i.wg)(),(0,i.j4)(bn,{key:0,onClose:o[0]||(o[0]=e=>t.value=!1)},{default:(0,i.w5)((()=>[(0,i.Wm)(Un,{class:"clear-save-button",text:"Clear save",onInvoked:(0,l.SU)(N)},null,8,["onInvoked"]),(0,i._)("pre",null,(0,c.zw)((0,l.SU)(n)),1)])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(In)])]))}};const Ln=(0,f.Z)(Gn,[["__scopeId","data-v-9a7368e0"]]);var Kn=Ln;const qn=(0,o.ri)(Kn);qn.config.globalProperties.$formatMoney=a,qn.mount("#app")},2480:function(){}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<l&&(l=i));if(c){e.splice(u--,1);var r=a();void 0!==r&&(t=r)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,l=o[0],c=o[1],s=o[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var u=s(n)}for(t&&t(o);r<l.length;r++)i=l[r],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkfarm_clicker"]=self["webpackChunkfarm_clicker"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6244)}));o=n.O(o)})();
//# sourceMappingURL=app.a31ca582.js.map