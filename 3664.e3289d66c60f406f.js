"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[3664],{3664:(B,m,i)=>{i.r(m),i.d(m,{DashboardModule:()=>F});var p=i(9808),v=i(2382),Z=i(464),b=i(1874),s=i(8952),f=i(845),x=i(3986),T=i(6208),h=i(1247),t=i(5e3),A=i(372),y=i(8568),U=i(9783);function q(n,o){1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Image"),t.qZA(),t.TgZ(3,"th",67),t._uU(4,"Name "),t._UZ(5,"p-sortIcon",68),t.qZA(),t.TgZ(6,"th",69),t._uU(7,"Price "),t._UZ(8,"p-sortIcon",70),t.qZA(),t.TgZ(9,"th"),t._uU(10,"View"),t.qZA()())}function _(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td",71),t._UZ(2,"img",72),t.qZA(),t.TgZ(3,"td",73),t._uU(4),t.qZA(),t.TgZ(5,"td",74),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td",75),t._UZ(9,"button",76),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.MGl("src","assets/dstv/images/product/",e.image,"",t.LSH),t.s9C("alt",e.name),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(t.xi3(7,4,e.price,"USD"))}}const d=function(){return{width:"2.5rem",height:"2.5rem"}},l=function(){return{height:"8px"}},S=function(){return{width:"50%"}},w=function(){return{width:"16%"}},D=function(){return{width:"67%"}},C=function(){return{width:"35%"}},M=function(){return{width:"75%"}},J=function(){return{width:"40%"}},Q=function(){return{borderRadius:"1rem",background:"linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)"}};let j=(()=>{class n{constructor(e,r){this.productService=e,this.layoutService=r,this.subscription=this.layoutService.configUpdate$.subscribe(()=>{this.initChart()})}ngOnInit(){this.initChart(),this.productService.getProductsSmall().then(e=>this.products=e),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}]}initChart(){const e=getComputedStyle(document.documentElement),r=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--bluegray-700"),borderColor:e.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--green-600"),borderColor:e.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:r}}},scales:{x:{ticks:{color:a},grid:{color:u,drawBorder:!1}},y:{ticks:{color:a},grid:{color:u,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.M),t.Y36(y.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:200,vars:43,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-3"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-shopping-cart","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-map-marker","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-comment","text-purple-500","text-xl"],[1,"col-12","xl:col-6"],[1,"card"],["responsiveLayout","scroll",3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-between","align-items-center","mb-5"],["pButton","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-text","p-button-plain",3,"click"],[3,"popup","model"],["menu",""],[1,"list-none","p-0","m-0"],[1,"flex","flex-column","md:flex-row","md:align-items-center","md:justify-content-between","mb-4"],[1,"text-900","font-medium","mr-2","mb-1","md:mb-0"],[1,"mt-1","text-600"],[1,"mt-2","md:mt-0","flex","align-items-center"],[1,"surface-300","border-round","overflow-hidden","w-10rem","lg:w-6rem",3,"ngStyle"],[1,"bg-orange-500","h-full",3,"ngStyle"],[1,"text-orange-500","ml-3","font-medium"],[1,"mt-2","md:mt-0","ml-0","md:ml-8","flex","align-items-center"],[1,"bg-cyan-500","h-full",3,"ngStyle"],[1,"text-cyan-500","ml-3","font-medium"],[1,"bg-pink-500","h-full",3,"ngStyle"],[1,"text-pink-500","ml-3","font-medium"],[1,"bg-green-500","h-full",3,"ngStyle"],[1,"text-green-500","ml-3","font-medium"],[1,"bg-purple-500","h-full",3,"ngStyle"],[1,"text-purple-500","ml-3","font-medium"],[1,"bg-teal-500","h-full",3,"ngStyle"],[1,"text-teal-500","ml-3","font-medium"],["type","line",3,"data","options"],[1,"flex","align-items-center","justify-content-between","mb-4"],[1,"block","text-600","font-medium","mb-3"],[1,"p-0","mx-0","mt-0","mb-4","list-none"],[1,"flex","align-items-center","py-2","border-bottom-1","surface-border"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-blue-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-dollar","text-xl","text-blue-500"],[1,"text-900","line-height-3"],[1,"text-700"],[1,"text-blue-500"],[1,"flex","align-items-center","py-2"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-orange-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-download","text-xl","text-orange-500"],[1,"text-700","line-height-3"],[1,"text-blue-500","font-medium"],[1,"p-0","m-0","list-none"],[1,"w-3rem","h-3rem","flex","align-items-center","justify-content-center","bg-pink-100","border-circle","mr-3","flex-shrink-0"],[1,"pi","pi-question","text-xl","text-pink-500"],[1,"px-4","py-5","shadow-2","flex","flex-column","md:flex-row","md:align-items-center","justify-content-between","mb-3",3,"ngStyle"],[1,"text-blue-100","font-medium","text-xl","mt-2","mb-3"],[1,"text-white","font-medium","text-5xl"],[1,"mt-4","mr-auto","md:mt-0","md:mr-0"],["target","_blank","href","https://www.primefaces.org/primeblocks-ng",1,"p-button","font-bold","px-5","py-3","p-button-warning","p-button-rounded","p-button-raised"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],[2,"width","15%","min-width","5rem"],["width","50",1,"shadow-4",3,"src","alt"],[2,"width","35%","min-width","7rem"],[2,"width","35%","min-width","8rem"],[2,"width","15%"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button","p-component","p-button-text","p-button-icon-only"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),t._uU(6,"Orders"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"152"),t.qZA()(),t.TgZ(9,"div",6),t._UZ(10,"i",7),t.qZA()(),t.TgZ(11,"span",8),t._uU(12,"24 new "),t.qZA(),t.TgZ(13,"span",9),t._uU(14,"since last visit"),t.qZA()()(),t.TgZ(15,"div",1)(16,"div",2)(17,"div",3)(18,"div")(19,"span",4),t._uU(20,"Revenue"),t.qZA(),t.TgZ(21,"div",5),t._uU(22,"$2.100"),t.qZA()(),t.TgZ(23,"div",10),t._UZ(24,"i",11),t.qZA()(),t.TgZ(25,"span",8),t._uU(26,"%52+ "),t.qZA(),t.TgZ(27,"span",9),t._uU(28,"since last week"),t.qZA()()(),t.TgZ(29,"div",1)(30,"div",2)(31,"div",3)(32,"div")(33,"span",4),t._uU(34,"Customers"),t.qZA(),t.TgZ(35,"div",5),t._uU(36,"28441"),t.qZA()(),t.TgZ(37,"div",12),t._UZ(38,"i",13),t.qZA()(),t.TgZ(39,"span",8),t._uU(40,"520 "),t.qZA(),t.TgZ(41,"span",9),t._uU(42,"newly registered"),t.qZA()()(),t.TgZ(43,"div",1)(44,"div",2)(45,"div",3)(46,"div")(47,"span",4),t._uU(48,"Comments"),t.qZA(),t.TgZ(49,"div",5),t._uU(50,"152 Unread"),t.qZA()(),t.TgZ(51,"div",14),t._UZ(52,"i",15),t.qZA()(),t.TgZ(53,"span",8),t._uU(54,"85 "),t.qZA(),t.TgZ(55,"span",9),t._uU(56,"responded"),t.qZA()()(),t.TgZ(57,"div",16)(58,"div",17)(59,"h5"),t._uU(60,"Recent Sales"),t.qZA(),t.TgZ(61,"p-table",18),t.YNc(62,q,11,0,"ng-template",19),t.YNc(63,_,10,7,"ng-template",20),t.qZA()(),t.TgZ(64,"div",17)(65,"div",21)(66,"h5"),t._uU(67,"Best Selling Products"),t.qZA(),t.TgZ(68,"div")(69,"button",22),t.NdJ("click",function(c){t.CHM(a);const g=t.MAs(71);return t.KtG(g.toggle(c))}),t.qZA(),t._UZ(70,"p-menu",23,24),t.qZA()(),t.TgZ(72,"ul",25)(73,"li",26)(74,"div")(75,"span",27),t._uU(76,"Space T-Shirt"),t.qZA(),t.TgZ(77,"div",28),t._uU(78,"Clothing"),t.qZA()(),t.TgZ(79,"div",29)(80,"div",30),t._UZ(81,"div",31),t.qZA(),t.TgZ(82,"span",32),t._uU(83,"%50"),t.qZA()()(),t.TgZ(84,"li",26)(85,"div")(86,"span",27),t._uU(87,"Portal Sticker"),t.qZA(),t.TgZ(88,"div",28),t._uU(89,"Accessories"),t.qZA()(),t.TgZ(90,"div",33)(91,"div",30),t._UZ(92,"div",34),t.qZA(),t.TgZ(93,"span",35),t._uU(94,"%16"),t.qZA()()(),t.TgZ(95,"li",26)(96,"div")(97,"span",27),t._uU(98,"Supernova Sticker"),t.qZA(),t.TgZ(99,"div",28),t._uU(100,"Accessories"),t.qZA()(),t.TgZ(101,"div",33)(102,"div",30),t._UZ(103,"div",36),t.qZA(),t.TgZ(104,"span",37),t._uU(105,"%67"),t.qZA()()(),t.TgZ(106,"li",26)(107,"div")(108,"span",27),t._uU(109,"Wonders Notebook"),t.qZA(),t.TgZ(110,"div",28),t._uU(111,"Office"),t.qZA()(),t.TgZ(112,"div",33)(113,"div",30),t._UZ(114,"div",38),t.qZA(),t.TgZ(115,"span",39),t._uU(116,"%35"),t.qZA()()(),t.TgZ(117,"li",26)(118,"div")(119,"span",27),t._uU(120,"Mat Black Case"),t.qZA(),t.TgZ(121,"div",28),t._uU(122,"Accessories"),t.qZA()(),t.TgZ(123,"div",33)(124,"div",30),t._UZ(125,"div",40),t.qZA(),t.TgZ(126,"span",41),t._uU(127,"%75"),t.qZA()()(),t.TgZ(128,"li",26)(129,"div")(130,"span",27),t._uU(131,"Robots T-Shirt"),t.qZA(),t.TgZ(132,"div",28),t._uU(133,"Clothing"),t.qZA()(),t.TgZ(134,"div",33)(135,"div",30),t._UZ(136,"div",42),t.qZA(),t.TgZ(137,"span",43),t._uU(138,"%40"),t.qZA()()()()()(),t.TgZ(139,"div",16)(140,"div",17)(141,"h5"),t._uU(142,"Sales Overview"),t.qZA(),t._UZ(143,"p-chart",44),t.qZA(),t.TgZ(144,"div",17)(145,"div",45)(146,"h5"),t._uU(147,"Notifications"),t.qZA(),t.TgZ(148,"div")(149,"button",22),t.NdJ("click",function(c){t.CHM(a);const g=t.MAs(71);return t.KtG(g.toggle(c))}),t.qZA(),t._UZ(150,"p-menu",23,24),t.qZA()(),t.TgZ(152,"span",46),t._uU(153,"TODAY"),t.qZA(),t.TgZ(154,"ul",47)(155,"li",48)(156,"div",49),t._UZ(157,"i",50),t.qZA(),t.TgZ(158,"span",51),t._uU(159,"Richard Jones "),t.TgZ(160,"span",52),t._uU(161," has purchased a blue t-shirt for "),t.TgZ(162,"span",53),t._uU(163,"79$"),t.qZA()()()(),t.TgZ(164,"li",54)(165,"div",55),t._UZ(166,"i",56),t.qZA(),t.TgZ(167,"span",57),t._uU(168,"Your request for withdrawal of "),t.TgZ(169,"span",58),t._uU(170,"2500$"),t.qZA(),t._uU(171," has been initiated."),t.qZA()()(),t.TgZ(172,"span",46),t._uU(173,"YESTERDAY"),t.qZA(),t.TgZ(174,"ul",59)(175,"li",48)(176,"div",49),t._UZ(177,"i",50),t.qZA(),t.TgZ(178,"span",51),t._uU(179,"Keyser Wick "),t.TgZ(180,"span",52),t._uU(181," has purchased a black jacket for "),t.TgZ(182,"span",53),t._uU(183,"59$"),t.qZA()()()(),t.TgZ(184,"li",48)(185,"div",60),t._UZ(186,"i",61),t.qZA(),t.TgZ(187,"span",51),t._uU(188,"Jane Davis"),t.TgZ(189,"span",52),t._uU(190," has posted a new questions about your product."),t.qZA()()()()(),t.TgZ(191,"div",62)(192,"div")(193,"div",63),t._uU(194,"TAKE THE NEXT STEP"),t.qZA(),t.TgZ(195,"div",64),t._uU(196,"Try PrimeBlocks"),t.qZA()(),t.TgZ(197,"div",65)(198,"a",66),t._uU(199," Get Started "),t.qZA()()()()()}2&e&&(t.xp6(9),t.Q6J("ngStyle",t.DdM(26,d)),t.xp6(14),t.Q6J("ngStyle",t.DdM(27,d)),t.xp6(14),t.Q6J("ngStyle",t.DdM(28,d)),t.xp6(14),t.Q6J("ngStyle",t.DdM(29,d)),t.xp6(10),t.Q6J("value",r.products)("paginator",!0)("rows",5),t.xp6(9),t.Q6J("popup",!0)("model",r.items),t.xp6(10),t.Q6J("ngStyle",t.DdM(30,l)),t.xp6(1),t.Q6J("ngStyle",t.DdM(31,S)),t.xp6(10),t.Q6J("ngStyle",t.DdM(32,l)),t.xp6(1),t.Q6J("ngStyle",t.DdM(33,w)),t.xp6(10),t.Q6J("ngStyle",t.DdM(34,l)),t.xp6(1),t.Q6J("ngStyle",t.DdM(35,D)),t.xp6(10),t.Q6J("ngStyle",t.DdM(36,l)),t.xp6(1),t.Q6J("ngStyle",t.DdM(37,C)),t.xp6(10),t.Q6J("ngStyle",t.DdM(38,l)),t.xp6(1),t.Q6J("ngStyle",t.DdM(39,M)),t.xp6(10),t.Q6J("ngStyle",t.DdM(40,l)),t.xp6(1),t.Q6J("ngStyle",t.DdM(41,J)),t.xp6(7),t.Q6J("data",r.chartData)("options",r.chartOptions),t.xp6(7),t.Q6J("popup",!0)("model",r.items),t.xp6(41),t.Q6J("ngStyle",t.DdM(42,Q)))},dependencies:[p.PC,Z.C,b.v2,s.iA,U.jx,s.lQ,s.fz,f.Hq,p.H9],encapsulation:2}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild([{path:"",component:j}]),h.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,v.u5,Z.S,b.$9,s.U$,x.l,T.ml,f.hJ,P]}),n})()}}]);