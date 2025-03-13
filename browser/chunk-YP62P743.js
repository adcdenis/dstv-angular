import{a as Fe,b as Re}from"./chunk-CCLHXEWC.js";import{a as Te,b as Me}from"./chunk-UVUZCGET.js";import{a as Ie,b as De}from"./chunk-EHLLATUE.js";import{a as Ve}from"./chunk-J5DDF6ZB.js";import{a as re}from"./chunk-HPTSQQSN.js";import{a as Ce,b as Ee}from"./chunk-V45ILFUR.js";import{a as Se,b as ye}from"./chunk-AKFYE27W.js";import"./chunk-IXVZ2UVD.js";import"./chunk-5A2SHGKR.js";import{a as be,b as we}from"./chunk-UN3KQG2F.js";import{a as ce,b as ue,c as ge,d as _e,e as fe,g as xe,j as ve,k as he}from"./chunk-ZOG5EIV5.js";import"./chunk-JGDHVA3N.js";import"./chunk-7QY6HRUQ.js";import"./chunk-2ZGARQ3A.js";import"./chunk-ALDKEQ4M.js";import"./chunk-MXLPO26K.js";import"./chunk-QW22FY7E.js";import"./chunk-B643GAX3.js";import"./chunk-K27DTNTS.js";import"./chunk-VIDR4FKN.js";import"./chunk-IXVQGYTM.js";import{h as me,i as pe}from"./chunk-MT4NNOJC.js";import"./chunk-OIA4IUUW.js";import"./chunk-4PWFNMG4.js";import{a as se,b as de}from"./chunk-FNKB3LB5.js";import{e as te,g as ie,n as ne}from"./chunk-FBB73MOT.js";import"./chunk-ODDS2LGO.js";import{b as ae,c as le,d as oe}from"./chunk-524KV34N.js";import"./chunk-S35HUXPS.js";import{g as X,k as J,p as Y,s as Z,t as ee}from"./chunk-NAARYAXJ.js";import{$a as E,Aa as g,Bb as W,Da as A,Ea as b,F as T,Ga as L,Ha as G,Ia as N,Ja as V,Ka as a,L as f,La as s,M as x,Ma as S,Oa as P,Pa as k,Qa as U,Ra as j,Sa as C,Tb as z,Ua as O,W as y,Y as l,Z as R,bb as D,cb as $,da as B,ea as M,ja as u,ma as d,pa as I,qa as _,rb as H,sa as t,ta as i,tb as K,ua as m,ya as h,yb as q,za as v,zb as Q}from"./chunk-TF5DNV4E.js";import"./chunk-YT5AF7SN.js";import"./chunk-MG3ERZGY.js";var Ge=["filter"],Ne=()=>["name","country.name","representative.name","status"],Pe=()=>({width:"12rem"}),Be=()=>({"min-width":"12rem"}),ke=(n,o)=>({"true-icon pi-check-circle text-green-500":n,"false-icon pi-times-circle text-pink-500 ":o});function Ue(n,o){if(n&1){let e=h();t(0,"div",16)(1,"button",17),v("click",function(){f(e);let p=g(),c=V(6);return x(p.clear(c))}),i(),t(2,"span",18),m(3,"i",19),t(4,"input",20,1),v("input",function(p){f(e);let c=g(),w=V(6);return x(c.onGlobalFilter(w,p))}),i()()()}}function je(n,o){n&1&&(t(0,"div",32)(1,"span",33),a(2,"Agent Picker"),i()())}function Oe(n,o){if(n&1&&(t(0,"div",36),m(1,"img",37),t(2,"span",38),a(3),i()()),n&2){let e=o.$implicit;l(),b("src","assets/dstv/images/avatar/",e.image,"",y),d("alt",e.label),l(2),s(e.name)}}function $e(n,o){if(n&1){let e=h();t(0,"p-multiSelect",34),v("onChange",function(p){let c=f(e).filterCallback;return x(c(p.value))}),u(1,Oe,4,4,"ng-template",35),i()}if(n&2){let e=o.$implicit,r=g(2);d("ngModel",e)("options",r.representatives)}}function He(n,o){if(n&1&&(t(0,"span"),a(1),i()),n&2){let e=o.$implicit;_("customer-badge status-"+e.value),l(),s(e.label)}}function Ke(n,o){if(n&1){let e=h();t(0,"p-dropdown",39),v("onChange",function(p){let c=f(e).filterCallback;return x(c(p.value))}),u(1,He,2,3,"ng-template",35),i()}if(n&2){let e=o.$implicit,r=g(2);I(C(4,Be)),d("ngModel",e)("options",r.statuses)}}function qe(n,o){if(n&1){let e=h();t(0,"p-slider",40),v("onSlideEnd",function(p){let c=f(e).filterCallback;return x(c(p.values))}),i(),t(1,"div",41)(2,"span"),a(3),i(),t(4,"span"),a(5),i()()}if(n&2){let e=g(2);I(C(6,Be)),d("ngModel",e.activityValues)("range",!0),l(3),s(e.activityValues[0]),l(2),s(e.activityValues[1])}}function Qe(n,o){n&1&&(t(0,"tr")(1,"th")(2,"div",21),a(3," Name "),m(4,"p-columnFilter",22),i()(),t(5,"th")(6,"div",21),a(7," Country "),m(8,"p-columnFilter",23),i()(),t(9,"th")(10,"div",21),a(11," Agent "),t(12,"p-columnFilter",24),u(13,je,3,0,"ng-template",7)(14,$e,2,2,"ng-template",25),i()()(),t(15,"th")(16,"div",21),a(17," Date "),m(18,"p-columnFilter",26),i()(),t(19,"th")(20,"div",21),a(21," Balance "),m(22,"p-columnFilter",27),i()(),t(23,"th")(24,"div",21),a(25," Status "),t(26,"p-columnFilter",28),u(27,Ke,2,5,"ng-template",25),i()()(),t(28,"th")(29,"div",21),a(30," Activity "),t(31,"p-columnFilter",29),u(32,qe,6,7,"ng-template",25),i()()(),t(33,"th",30)(34,"div",21),a(35," Verified "),m(36,"p-columnFilter",31),i()()()),n&2&&(l(12),d("showMatchModes",!1)("showOperator",!1)("showAddButton",!1),l(19),d("showMatchModes",!1)("showOperator",!1)("showAddButton",!1))}function We(n,o){if(n&1&&(t(0,"tr")(1,"td",42),a(2),i(),t(3,"td",42),m(4,"img",43),t(5,"span",44),a(6),i()(),t(7,"td",45),m(8,"img",37),t(9,"span",44),a(10),i()(),t(11,"td",46),a(12),E(13,"date"),i(),t(14,"td",46),a(15),E(16,"currency"),i(),t(17,"td",42)(18,"span"),a(19),i()(),t(20,"td",42),m(21,"p-progressBar",47),i(),t(22,"td",48),m(23,"i",49),i()()),n&2){let e=o.$implicit;l(2),S(" ",e.name," "),l(2),_("flag flag-"+e.country.code),l(2),s(e.country.name),l(2),b("src","assets/dstv/images/avatar/",e.representative.image,"",y),d("alt",e.representative.name),l(2),s(e.representative.name),l(2),S(" ",D(13,16,e.date,"MM/dd/yyyy")," "),l(3),S(" ",$(16,19,e.balance,"USD","symbol")," "),l(3),_("customer-badge status-"+e.status),l(),s(e.status),l(2),d("value",e.activity)("showValue",!1),l(2),d("ngClass",O(23,ke,e.verified,!e.verified))}}function Xe(n,o){n&1&&(t(0,"tr")(1,"td",50),a(2,"No customers found."),i()())}function Je(n,o){n&1&&(t(0,"tr")(1,"td",50),a(2,"Loading customers data. Please wait."),i()())}function Ye(n,o){if(n&1&&(t(0,"tr")(1,"th",51),a(2,"Name"),i(),t(3,"th",52),a(4,"Id"),i(),t(5,"th",53),a(6,"Country"),i(),t(7,"th",53),a(8,"Date"),i(),t(9,"th",53),a(10,"Company"),i(),t(11,"th",53),a(12,"Status"),i(),t(13,"th",53),a(14,"Activity"),i(),t(15,"th",53),a(16,"Representative"),i(),t(17,"th",54),a(18,"Balance"),i()()),n&2){let e=g();l(3),d("frozen",e.idFrozen)}}function Ze(n,o){if(n&1&&(t(0,"tr")(1,"td",51),a(2),i(),t(3,"td",52),a(4),i(),t(5,"td",53),m(6,"img",43),t(7,"span",44),a(8),i()(),t(9,"td",53),a(10),i(),t(11,"td",53),a(12),i(),t(13,"td",53)(14,"span"),a(15),i()(),t(16,"td",53),a(17),i(),t(18,"td",53),m(19,"img",37),t(20,"span",44),a(21),i()(),t(22,"td",54),a(23),i()()),n&2){let e=o.$implicit,r=g();l(2),s(e.name),l(),d("frozen",r.idFrozen),l(),s(e.id),l(2),_("flag flag-"+e.country.code),l(2),s(e.country.name),l(2),s(e.date),l(2),s(e.company),l(2),_("customer-badge status-"+e.status),l(),s(e.status),l(2),s(e.activity),l(2),b("src","assets/dstv/images/avatar/",e.representative.image,"",y),d("alt",e.representative.name),l(2),s(e.representative.name),l(2),s(r.formatCurrency(e.balance))}}function et(n,o){if(n&1){let e=h();t(0,"button",55),v("click",function(){f(e);let p=g();return x(p.expandAll())}),i(),m(1,"div",56)}if(n&2){let e=g();b("icon","pi pi-fw ",e.isExpanded?"pi-minus":"pi-plus",""),A("label",e.isExpanded?"Collapse All":"Expand All")}}function tt(n,o){n&1&&(t(0,"tr"),m(1,"th",57),t(2,"th",58),a(3,"Name "),m(4,"p-sortIcon",59),i(),t(5,"th"),a(6,"Image"),i(),t(7,"th",60),a(8,"Price "),m(9,"p-sortIcon",61),i(),t(10,"th",62),a(11,"Category "),m(12,"p-sortIcon",63),i(),t(13,"th",64),a(14,"Reviews "),m(15,"p-sortIcon",65),i(),t(16,"th",66),a(17,"Status "),m(18,"p-sortIcon",67),i()())}function it(n,o){if(n&1&&(t(0,"tr")(1,"td"),m(2,"button",68),i(),t(3,"td",42),a(4),i(),t(5,"td"),m(6,"img",69),i(),t(7,"td",70),a(8),E(9,"currency"),i(),t(10,"td",46),a(11),i(),t(12,"td",46),m(13,"p-rating",71),i(),t(14,"td")(15,"span"),a(16),i()()()),n&2){let e=o.$implicit,r=o.expanded;l(2),d("pRowToggler",e)("icon",r?"pi pi-chevron-down":"pi pi-chevron-right"),l(2),s(e.name),l(2),d("src","assets/dstv/images/product/"+e.image,y)("alt",e.name),l(2),s(D(9,13,e.price,"USD")),l(3),s(e.category),l(2),d("ngModel",e.rating)("readonly",!0)("cancel",!1),l(2),_("product-badge status-"+e.inventoryStatus.toLowerCase()),l(),s(e.inventoryStatus)}}function nt(n,o){n&1&&(t(0,"tr")(1,"th",74),a(2,"Id "),m(3,"p-sortIcon",61),i(),t(4,"th",75),a(5,"Customer "),m(6,"p-sortIcon",76),i(),t(7,"th",77),a(8,"Date "),m(9,"p-sortIcon",78),i(),t(10,"th",79),a(11,"Amount "),m(12,"p-sortIcon",80),i(),t(13,"th",81),a(14,"Status "),m(15,"p-sortIcon",82),i(),m(16,"th",83),i())}function at(n,o){if(n&1&&(t(0,"tr")(1,"td"),a(2),i(),t(3,"td"),a(4),i(),t(5,"td"),a(6),i(),t(7,"td"),a(8),E(9,"currency"),i(),t(10,"td")(11,"span"),a(12),i()(),t(13,"td"),m(14,"p-button",84),i()()),n&2){let e=o.$implicit;l(2),s(e.id),l(2),s(e.customer),l(2),s(e.date),l(2),s(D(9,7,e.amount,"USD")),l(3),_("order-badge order-"+e.status.toLowerCase()),l(),s(e.status)}}function lt(n,o){n&1&&(t(0,"tr")(1,"td",85),a(2,"There are no order for this product yet."),i()())}function ot(n,o){if(n&1&&(t(0,"tr")(1,"td",50)(2,"div",72)(3,"p-table",73),u(4,nt,17,0,"ng-template",7)(5,at,15,10,"ng-template",8)(6,lt,3,0,"ng-template",9),i()()()()),n&2){let e=o.$implicit;l(3),d("value",e.orders)}}function rt(n,o){n&1&&(t(0,"tr")(1,"th"),a(2,"Name"),i(),t(3,"th"),a(4,"Country"),i(),t(5,"th"),a(6,"Company"),i(),t(7,"th"),a(8,"Status"),i(),t(9,"th"),a(10,"Date"),i()())}function mt(n,o){if(n&1&&(t(0,"tr",89)(1,"td",90),m(2,"img",37),t(3,"span",91),a(4),i()()()),n&2){let e=g().$implicit;l(2),b("src","assets/dstv/images/avatar/",e.representative.image,"",y),d("alt",e.representative.name),l(2),s(e.representative.name)}}function pt(n,o){if(n&1&&(u(0,mt,5,4,"tr",86),t(1,"tr")(2,"td",87),a(3),i(),t(4,"td",87),m(5,"img",43),t(6,"span",88),a(7),i()(),t(8,"td",87),a(9),i(),t(10,"td",87)(11,"span"),a(12),i()(),t(13,"td",87),a(14),i()()),n&2){let e=o.$implicit,r=o.rowIndex,p=g();d("ngIf",p.rowGroupMetadata[e.representative.name].index===r),l(3),S(" ",e.name," "),l(2),_("flag flag-"+e.country.code),l(2),s(e.country.name),l(2),S(" ",e.company," "),l(2),_("customer-badge status-"+e.status),l(),s(e.status),l(2),S(" ",e.date," ")}}var Ae=(()=>{class n{constructor(e,r){this.customerService=e,this.productService=r,this.customers1=[],this.customers2=[],this.customers3=[],this.selectedCustomers1=[],this.selectedCustomer={},this.representatives=[],this.statuses=[],this.products=[],this.expandedRows={},this.activityValues=[0,100],this.isExpanded=!1,this.idFrozen=!1,this.loading=!0}ngOnInit(){this.customerService.getCustomersLarge().then(e=>{this.customers1=e,this.loading=!1,this.customers1.forEach(r=>r.date=new Date(r.date))}),this.customerService.getCustomersMedium().then(e=>this.customers2=e),this.customerService.getCustomersLarge().then(e=>this.customers3=e),this.productService.getProductsWithOrdersSmall().then(e=>this.products=e),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}onSort(){this.updateRowGroupMetaData()}updateRowGroupMetaData(){if(this.rowGroupMetadata={},this.customers3)for(let e=0;e<this.customers3.length;e++){let p=this.customers3[e]?.representative?.name||"";if(e===0)this.rowGroupMetadata[p]={index:0,size:1};else{let w=this.customers3[e-1]?.representative?.name;p===w?this.rowGroupMetadata[p].size++:this.rowGroupMetadata[p]={index:e,size:1}}}}expandAll(){this.isExpanded?this.expandedRows={}:this.products.forEach(e=>e&&e.name?this.expandedRows[e.name]=!0:""),this.isExpanded=!this.isExpanded}formatCurrency(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}onGlobalFilter(e,r){e.filterGlobal(r.target.value,"contains")}clear(e){e.clear(),this.filter.nativeElement.value=""}static{this.\u0275fac=function(r){return new(r||n)(R(Ve),R(re))}}static{this.\u0275cmp=B({type:n,selectors:[["ng-component"]],viewQuery:function(r,p){if(r&1&&L(Ge,5),r&2){let c;G(c=N())&&(p.filter=c.first)}},standalone:!1,features:[j([J,X])],decls:37,vars:19,consts:[["dt1",""],["filter",""],[1,"grid"],[1,"col-12"],[1,"card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","rows","loading","rowHover","paginator","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["offIcon","pi pi-lock-open","offLabel","Freeze Id",3,"ngModelChange","ngModel","onIcon","onLabel"],["scrollDirection","both","scrollHeight","400px","styleClass","mt-3","responsiveLayout","scroll",3,"value","scrollable"],["dataKey","name","responsiveLayout","scroll",3,"value","expandedRowKeys"],["pTemplate","rowexpansion"],["rowGroupMode","subheader","groupRowsBy","representative.name","sortField","representative.name","sortMode","single","responsiveLayout","scroll","scrollHeight","400px",3,"onSort","value","scrollable"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"p-input-icon-left","mb-2"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Keyword",1,"w-full",3,"input"],[1,"flex","justify-content-between","align-items-center"],["type","text","field","name","display","menu","placeholder","Search by name"],["type","text","field","country.name","display","menu","placeholder","Search by country"],["field","representative","matchMode","in","display","menu",3,"showMatchModes","showOperator","showAddButton"],["pTemplate","filter"],["type","date","field","date","display","menu","placeholder","mm/dd/yyyy"],["type","numeric","field","balance","display","menu","currency","USD"],["field","status","matchMode","equals","display","menu"],["field","activity","matchMode","between","display","menu",3,"showMatchModes","showOperator","showAddButton"],[2,"width","8rem"],["type","boolean","field","verified","display","menu"],[1,"px-3","pt-3","pb-0"],[1,"font-bold"],["placeholder","Any","optionLabel","name",3,"onChange","ngModel","options"],["pTemplate","item"],[1,"p-multiselect-representative-option"],["width","32",2,"vertical-align","middle",3,"alt","src"],[1,"ml-2"],["placeholder","Any",3,"onChange","ngModel","options"],["styleClass","m-3",3,"onSlideEnd","ngModel","range"],[1,"flex","align-items-center","justify-content-between","px-2"],[2,"min-width","12rem"],["src","assets/dstv/images/flag/flag_placeholder.png","width","30"],[1,"image-text","ml-2"],[2,"min-width","14rem"],[2,"min-width","10rem"],[3,"value","showValue"],[1,"text-center",2,"min-width","8rem"],[1,"pi",3,"ngClass"],["colspan","7"],["pFrozenColumn","",2,"width","200px"],["alignFrozen","left","pFrozenColumn","",2,"width","200px",3,"frozen"],[2,"width","200px"],["pFrozenColumn","","alignFrozen","right",2,"width","200px"],["pButton","",3,"click","icon","label"],[1,"flex","table-header"],[2,"width","3rem"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],["pSortableColumn","category"],["field","category"],["pSortableColumn","rating"],["field","rating"],["pSortableColumn","inventoryStatus"],["field","inventoryStatus"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain",3,"pRowToggler","icon"],["width","100",1,"shadow-4",3,"src","alt"],[2,"min-width","8rem"],[3,"ngModel","readonly","cancel"],[1,"p-3"],["dataKey","id","responsiveLayout","scroll",3,"value"],["pSortableColumn","id"],["pSortableColumn","customer"],["field","customer"],["pSortableColumn","date"],["field","date"],["pSortableColumn","amount"],["field","amount"],["pSortableColumn","stats"],["field","status"],[2,"width","4rem"],["type","button","icon","pi pi-search"],["colspan","6"],["pRowGroupHeader","",4,"ngIf"],[2,"min-width","200px"],[1,"image-text",2,"margin-left",".5em"],["pRowGroupHeader",""],["colspan","5",2,"min-width","200px"],[1,"font-bold","ml-2"]],template:function(r,p){if(r&1){let c=h();t(0,"div",2)(1,"div",3)(2,"div",4)(3,"h5"),a(4,"Filter Menu"),i(),t(5,"p-table",5,0),u(7,Ue,6,0,"ng-template",6)(8,Qe,37,6,"ng-template",7)(9,We,24,26,"ng-template",8)(10,Xe,3,0,"ng-template",9)(11,Je,3,0,"ng-template",10),i()()(),t(12,"div",3)(13,"div",4)(14,"h5"),a(15,"Frozen Columns"),i(),t(16,"p-toggleButton",11),U("ngModelChange",function(F){return f(c),k(p.idFrozen,F)||(p.idFrozen=F),x(F)}),i(),t(17,"p-table",12),u(18,Ye,19,1,"ng-template",7)(19,Ze,24,17,"ng-template",8),i()()(),t(20,"div",3)(21,"div",4)(22,"h5"),a(23,"Row Expand"),i(),m(24,"p-toast"),t(25,"p-table",13),u(26,et,2,3,"ng-template",6)(27,tt,19,0,"ng-template",7)(28,it,17,16,"ng-template",8)(29,ot,7,1,"ng-template",14),i()()(),t(30,"div",3)(31,"div",4)(32,"h5"),a(33,"Subheader Grouping"),i(),t(34,"p-table",15),v("onSort",function(){return f(c),x(p.onSort())}),u(35,rt,11,0,"ng-template",7)(36,pt,15,10,"ng-template",8),i()()()()}r&2&&(l(5),d("value",p.customers1)("rows",10)("loading",p.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",C(17,Ne)),l(11),I(C(18,Pe)),P("ngModel",p.idFrozen),d("onIcon","pi pi-lock")("onLabel","Unfreeze Id"),l(),d("value",p.customers3)("scrollable",!0),l(8),d("value",p.products)("expandedRowKeys",p.expandedRows),l(9),d("value",p.customers3)("scrollable",!0))},dependencies:[H,K,te,ie,ce,Y,_e,ge,ue,xe,fe,ve,be,ae,le,Fe,se,Te,Z,Ie,me,Se,Ce,Q,q],styles:["[_nghost-%COMP%]     .p-frozen-column{font-weight:700}[_nghost-%COMP%]     .p-datatable-frozen-tbody{font-weight:700}[_nghost-%COMP%]     .p-progressbar{height:.5rem}"]})}}return n})();var Le=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=M({type:n})}static{this.\u0275inj=T({imports:[z.forChild([{path:"",component:Ae}]),z]})}}return n})();var qt=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=M({type:n})}static{this.\u0275inj=T({imports:[W,Le,ne,he,we,oe,Re,de,Me,ee,De,pe,ye,Ee]})}}return n})();export{qt as TableDemoModule};
