"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[900],{900:(B,a,i)=>{i.r(a),i.d(a,{ButtonDemoModule:()=>h});var p=i(9808),l=i(4175),t=i(4893),b=i(845),s=i(5787),d=i(5351);let c=(()=>{class n{constructor(){this.items=[],this.loading=[!1,!1,!1,!1]}ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Setup",icon:"pi pi-cog"}]}load(o){this.loading[o]=!0,setTimeout(()=>this.loading[o]=!1,1e3)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:128,vars:9,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card"],["pButton","","pRipple","","label","Submit",1,"mr-2","mb-2"],["pButton","","pRipple","","label","Disabled","disabled","true",1,"mr-2","mb-2"],["label","Link","styleClass","p-button-link mr-2 mb-2"],["pButton","","pRipple","","type","button","label","Primary",1,"mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-secondary","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-success","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-info","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-warning","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-help","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-danger","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-secondary","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-success","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-info","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-warning","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-help","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-danger","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Plain",1,"p-button-text","p-button-plain","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-outlined","p-button-secondary","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-outlined","p-button-success","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-outlined","p-button-info","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-outlined","p-button-warning","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-outlined","p-button-help","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-outlined","p-button-danger","mr-2","mb-2"],[1,"p-buttonset"],["pButton","","pRipple","","label","Save","icon","pi pi-check"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times"],["label","Save","icon","pi pi-plus","styleClass","p-button-info mr-2 mb-2",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-success mr-2 mb-2",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-warning mr-2 mb-2",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-help mr-2 mb-2",3,"model"],["label","Save","icon","pi pi-plus","styleClass","p-button-danger mr-2 mb-2",3,"model"],["styleClass","mr-2 mb-2 px-3"],["alt","logo","src","https://primefaces.org/primeng/assets/showcase/images/primeng-icon.svg",2,"width","1.5rem"],["styleClass","p-button-outlined mr-2 mb-2"],[1,"ml-2","font-bold"],["pButton","","pRipple","","icon","pi pi-star-fill",1,"mr-2","mb-2"],["pButton","","pRipple","","label","Submit","icon","pi pi-bookmark",1,"mr-2","mb-2"],["pButton","","pRipple","","label","Submit","icon","pi pi-bookmark","iconPos","right",1,"mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-raised","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-raised","p-button-secondary","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-raised","p-button-success","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-raised","p-button-info","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-raised","p-button-warning","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-raised","p-button-help","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-raised","p-button-danger","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Primary",1,"p-button-rounded","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Secondary",1,"p-button-rounded","p-button-secondary","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Success",1,"p-button-rounded","p-button-success","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Info",1,"p-button-rounded","p-button-info","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Warning",1,"p-button-rounded","p-button-warning","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Help",1,"p-button-rounded","p-button-help","mr-2","mb-2"],["pButton","","pRipple","","type","button","label","Danger",1,"p-button-rounded","p-button-danger","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-bookmark",1,"p-button-rounded","p-button-secondary","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-success","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-info","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"p-button-rounded","p-button-warning","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-heart",1,"p-button-rounded","p-button-help","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-bookmark",1,"p-button-rounded","p-button-secondary","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-success","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-info","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"p-button-rounded","p-button-warning","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-heart",1,"p-button-rounded","p-button-help","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","p-button-text","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-filter",1,"p-button-rounded","p-button-text","p-button-plain","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-check",1,"p-button-rounded","p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-bookmark",1,"p-button-rounded","p-button-secondary","p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-search",1,"p-button-rounded","p-button-success","p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-user",1,"p-button-rounded","p-button-info","p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-bell",1,"p-button-rounded","p-button-warning","p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-heart",1,"p-button-rounded","p-button-help","p-button-outlined","mr-2","mb-2"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-danger","p-button-outlined","mr-2","mb-2"],["label","Search","icon","pi pi-search","styleClass","mr-2 mb-2",3,"loading","onClick"],["label","Search","icon","pi pi-search","iconPos","right","styleClass","mr-2 mb-2",3,"loading","onClick"],["icon","pi pi-search","styleClass","mr-2 mb-2",3,"loading","onClick"],["label","Search","styleClass","mr-2 mb-2",3,"loading","onClick"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4,"Default"),t.qZA(),t._UZ(5,"button",3)(6,"button",4)(7,"p-button",5),t.qZA(),t.TgZ(8,"div",2)(9,"h5"),t._uU(10,"Severities"),t.qZA(),t._UZ(11,"button",6)(12,"button",7)(13,"button",8)(14,"button",9)(15,"button",10)(16,"button",11)(17,"button",12),t.qZA(),t.TgZ(18,"div",2)(19,"h5"),t._uU(20,"Text"),t.qZA(),t._UZ(21,"button",13)(22,"button",14)(23,"button",15)(24,"button",16)(25,"button",17)(26,"button",18)(27,"button",19)(28,"button",20),t.qZA(),t.TgZ(29,"div",2)(30,"h5"),t._uU(31,"Outlined"),t.qZA(),t._UZ(32,"button",21)(33,"button",22)(34,"button",23)(35,"button",24)(36,"button",25)(37,"button",26)(38,"button",27),t.qZA(),t.TgZ(39,"div",2)(40,"h5"),t._uU(41,"Button Set"),t.qZA(),t.TgZ(42,"span",28),t._UZ(43,"button",29)(44,"button",30)(45,"button",31),t.qZA()(),t.TgZ(46,"div",2)(47,"h5"),t._uU(48,"SplitButton"),t.qZA(),t._UZ(49,"p-splitButton",32)(50,"p-splitButton",33)(51,"p-splitButton",34)(52,"p-splitButton",35)(53,"p-splitButton",36),t.qZA(),t.TgZ(54,"div",2)(55,"h5"),t._uU(56,"Templating"),t.qZA(),t.TgZ(57,"p-button",37),t._UZ(58,"img",38),t.qZA(),t.TgZ(59,"p-button",39),t._UZ(60,"img",38),t.TgZ(61,"span",40),t._uU(62,"PrimeNG"),t.qZA()()()(),t.TgZ(63,"div",1)(64,"div",2)(65,"h5"),t._uU(66,"Icons"),t.qZA(),t._UZ(67,"button",41)(68,"button",42)(69,"button",43),t.qZA(),t.TgZ(70,"div",2)(71,"h5"),t._uU(72,"Raised"),t.qZA(),t._UZ(73,"button",44)(74,"button",45)(75,"button",46)(76,"button",47)(77,"button",48)(78,"button",49)(79,"button",50),t.qZA(),t.TgZ(80,"div",2)(81,"h5"),t._uU(82,"Rounded"),t.qZA(),t._UZ(83,"button",51)(84,"button",52)(85,"button",53)(86,"button",54)(87,"button",55)(88,"button",56)(89,"button",57),t.qZA(),t.TgZ(90,"div",2)(91,"h5"),t._uU(92,"Rounded Icons"),t.qZA(),t._UZ(93,"button",58)(94,"button",59)(95,"button",60)(96,"button",61)(97,"button",62)(98,"button",63)(99,"button",64),t.qZA(),t.TgZ(100,"div",2)(101,"h5"),t._uU(102,"Rounded Text"),t.qZA(),t._UZ(103,"button",65)(104,"button",66)(105,"button",67)(106,"button",68)(107,"button",69)(108,"button",70)(109,"button",71)(110,"button",72),t.qZA(),t.TgZ(111,"div",2)(112,"h5"),t._uU(113,"Rounded Outlined"),t.qZA(),t._UZ(114,"button",73)(115,"button",74)(116,"button",75)(117,"button",76)(118,"button",77)(119,"button",78)(120,"button",79),t.qZA(),t.TgZ(121,"div",2)(122,"h5"),t._uU(123,"Loading"),t.qZA(),t.TgZ(124,"p-button",80),t.NdJ("onClick",function(){return e.load(0)}),t.qZA(),t.TgZ(125,"p-button",81),t.NdJ("onClick",function(){return e.load(1)}),t.qZA(),t.TgZ(126,"p-button",82),t.NdJ("onClick",function(){return e.load(2)}),t.qZA(),t.TgZ(127,"p-button",83),t.NdJ("onClick",function(){return e.load(3)}),t.qZA()()()()),2&o&&(t.xp6(49),t.Q6J("model",e.items),t.xp6(1),t.Q6J("model",e.items),t.xp6(1),t.Q6J("model",e.items),t.xp6(1),t.Q6J("model",e.items),t.xp6(1),t.Q6J("model",e.items),t.xp6(71),t.Q6J("loading",e.loading[0]),t.xp6(1),t.Q6J("loading",e.loading[1]),t.xp6(1),t.Q6J("loading",e.loading[2]),t.xp6(1),t.Q6J("loading",e.loading[3]))},dependencies:[b.Hq,b.zx,s.H,d.a],encapsulation:2}),n})(),g=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild([{path:"",component:c}]),l.Bz]}),n})();var m=i(2841);let h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,g,b.hJ,s.T,d.l,m.KZ]}),n})()},2841:(B,a,i)=>{i.d(a,{CO:()=>m,KZ:()=>h});var p=i(4893),l=i(9808),t=i(5787),b=i(2382);const s=function(n,u){return{"p-button-icon":!0,"p-button-icon-left":n,"p-button-icon-right":u}};function d(n,u){if(1&n&&p._UZ(0,"span",3),2&n){const o=p.oxw();p.Tol(o.checked?o.onIcon:o.offIcon),p.Q6J("ngClass",p.WLB(3,s,"left"===o.iconPos,"right"===o.iconPos))}}const c=function(n,u,o){return{"p-button p-togglebutton p-component":!0,"p-button-icon-only":n,"p-highlight":u,"p-disabled":o}},g={provide:b.JU,useExisting:(0,p.Gpc)(()=>m),multi:!0};let m=(()=>{class n{constructor(o){this.cd=o,this.iconPos="left",this.onChange=new p.vpe,this.checked=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}toggle(o){this.disabled||(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:o,checked:this.checked}),this.cd.markForCheck())}onBlur(){this.onModelTouched()}writeValue(o){this.checked=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}}return n.\u0275fac=function(o){return new(o||n)(p.Y36(p.sBO))},n.\u0275cmp=p.Xpm({type:n,selectors:[["p-toggleButton"]],hostAttrs:[1,"p-element"],inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:"tabindex",iconPos:"iconPos"},outputs:{onChange:"onChange"},features:[p._Bn([g])],decls:4,vars:12,consts:[["role","checkbox","pRipple","",3,"ngClass","ngStyle","click","keydown.enter"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"]],template:function(o,e){1&o&&(p.TgZ(0,"div",0),p.NdJ("click",function(y){return e.toggle(y)})("keydown.enter",function(y){return e.toggle(y)}),p.YNc(1,d,1,6,"span",1),p.TgZ(2,"span",2),p._uU(3),p.qZA()()),2&o&&(p.Tol(e.styleClass),p.Q6J("ngClass",p.kEZ(8,c,e.onIcon&&e.offIcon&&!e.hasOnLabel&&!e.hasOffLabel,e.checked,e.disabled))("ngStyle",e.style),p.uIk("tabindex",e.disabled?null:"0")("aria-checked",e.checked),p.xp6(1),p.Q6J("ngIf",e.onIcon||e.offIcon),p.xp6(2),p.Oqu(e.checked?e.hasOnLabel?e.onLabel:"":e.hasOffLabel?e.offLabel:""))},dependencies:[l.mk,l.O5,l.PC,t.H],styles:[".p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}"],changeDetection:0}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=p.oAB({type:n}),n.\u0275inj=p.cJS({imports:[l.ez,t.T]}),n})()}}]);