"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[971],{8971:(M,x,r)=>{r.r(x),r.d(x,{ServidorModule:()=>Q});var t=r(9808),m=r(2382),C=r(845),T=r(5315),y=r(4036),g=r(8205),f=r(7010),c=r(1424),h=r(3407),a=r(9603),d=r(8018),o=r(5787),l=r(8952),_=r(7773),S=r(4534),b=r(9783),e=r(5e3),R=r(3768);function I(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"div",25)(1,"button",26),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return e.KtG(p.novo())}),e.qZA(),e.TgZ(2,"button",27),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return e.KtG(p.excluirSelecionados())}),e.qZA()()}if(2&n){const i=e.oxw();e.xp6(2),e.Q6J("disabled",!i.listaServidoresSelecionados||!i.listaServidoresSelecionados.length)}}function O(n,u){1&n&&e._UZ(0,"p-fileUpload",30),2&n&&e.Q6J("maxFileSize",1e6)}function k(n,u){if(1&n){const i=e.EpF();e.YNc(0,O,1,1,"p-fileUpload",28),e.TgZ(1,"button",29),e.NdJ("click",function(){e.CHM(i),e.oxw();const p=e.MAs(8);return e.KtG(p.exportCSV())}),e.qZA()}2&n&&e.Q6J("ngIf",!1)}function w(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"div",31)(1,"h5",32),e._uU(2,"Gerenciar Servidores"),e.qZA(),e.TgZ(3,"span",33),e._UZ(4,"i",34),e.TgZ(5,"input",35),e.NdJ("input",function(p){e.CHM(i);const v=e.oxw(),Z=e.MAs(8);return e.KtG(v.onGlobalFilter(Z,p))}),e.qZA()()()}}function J(n,u){1&n&&(e.TgZ(0,"th",40),e._uU(1,"Id "),e._UZ(2,"p-sortIcon",41),e.qZA())}function N(n,u){1&n&&(e.TgZ(0,"tr")(1,"th",36),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.YNc(3,J,3,0,"th",37),e.TgZ(4,"th",38),e._uU(5,"Nome "),e._UZ(6,"p-sortIcon",39),e.qZA(),e._UZ(7,"th"),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngIf",!1))}function F(n,u){if(1&n&&(e.TgZ(0,"td",49)(1,"span",45),e._uU(2,"Id"),e.qZA(),e._uU(3),e.qZA()),2&n){const i=e.oxw().$implicit;e.xp6(3),e.hij(" ",i.id," ")}}function B(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",42),e.qZA(),e.YNc(3,F,4,1,"td",43),e.TgZ(4,"td",44)(5,"span",45),e._uU(6,"Nome"),e.qZA(),e._uU(7),e.qZA(),e.TgZ(8,"td")(9,"div",46)(10,"button",47),e.NdJ("click",function(){const v=e.CHM(i).$implicit,Z=e.oxw();return e.KtG(Z.abrirDialogAlterar(v))}),e.qZA(),e.TgZ(11,"button",48),e.NdJ("click",function(){const v=e.CHM(i).$implicit,Z=e.oxw();return e.KtG(Z.abrirDialogExcluir(v))}),e.qZA()()()()}if(2&n){const i=u.$implicit;e.xp6(2),e.Q6J("value",i),e.xp6(1),e.Q6J("ngIf",!1),e.xp6(4),e.hij(" ",i.nome," ")}}function D(n,u){if(1&n&&(e.TgZ(0,"span"),e._uU(1,"Tem certeza que voc\xea deseja excluir "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4,"?"),e.qZA()),2&n){const i=e.oxw();e.xp6(3),e.Oqu(i.servidorSelecionado.nome)}}function U(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"button",50),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return e.KtG(p.dialogoExcluir=!1)}),e.qZA(),e.TgZ(1,"button",51),e.NdJ("click",function(){e.CHM(i);const p=e.oxw();return e.KtG(p.excluir())}),e.qZA()}}function z(n,u){1&n&&(e.TgZ(0,"small",52),e._uU(1,"Nome \xe9 obrigat\xf3rio."),e.qZA())}const H=function(){return["nome","id"]},P=function(){return[10,20,30]},A=function(){return{width:"450px"}},Y=function(n){return{"ng-invalid ng-dirty":n}};let G=(()=>{class n{constructor(i,s){this.servidorService=i,this.messageService=s,this.listaServidores=[],this.listaServidoresSelecionados=[],this.dialogoExcluir=!1,this.dialogoServidor=!1,this.servidorSelecionado={},this.cols=[],this.submitted=!1}ngOnInit(){console.log("aqui"),this.cols=[{field:"id",header:"Id"},{field:"nome",header:"Nome"}],this.servidorService.getAll().subscribe({next:i=>this.listaServidores=i,error:i=>console.error(i),complete:()=>console.info("complete")})}salvarOuAlterar(){this.submitted=!0,this.servidorSelecionado.nome&&0!=this.servidorSelecionado.nome.trim().length?this.servidorSelecionado.id?this.alterar():this.salvar():this.messageService.add({severity:"error",summary:"Erro!",detail:"Insira um nome!",life:3e3})}salvar(){this.servidorService.create(this.servidorSelecionado).then(()=>{this.dialogoServidor=!1,this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Servidor Criado!",life:3e3}),this.servidorService.getAll().subscribe({next:i=>this.listaServidores=i,error:i=>console.error(i),complete:()=>console.info("complete")})})}abrirDialogAlterar(i){this.servidorSelecionado=Object.assign({},i),this.submitted=!1,this.dialogoServidor=!0}alterar(){this.servidorService.update(this.servidorSelecionado).then(()=>{this.dialogoServidor=!1,this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Servidor Alterado!",life:3e3}),this.servidorService.getAll().subscribe({next:i=>this.listaServidores=i,error:i=>console.error(i),complete:()=>console.info("complete")})})}abrirDialogExcluir(i){this.submitted=!1,this.servidorSelecionado=i,this.dialogoExcluir=!0}excluir(){this.servidorService.delete(this.servidorSelecionado.id||"").then(()=>{console.info("complete"),this.dialogoExcluir=!1,this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Servidor Exclu\xeddo",life:3e3}),this.servidorSelecionado={},this.servidorService.getAll().subscribe({next:i=>this.listaServidores=i,error:i=>console.error(i),complete:()=>console.info("complete")})})}onGlobalFilter(i,s){i.filterGlobal(s.target.value,"contains")}novo(){this.dialogoServidor=!0,this.servidorSelecionado={}}excluirSelecionados(){this.listaServidoresSelecionados&&this.listaServidoresSelecionados.forEach(i=>{this.servidorService.delete(i.id||"")}),console.log(this.listaServidoresSelecionados)}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(R.V),e.Y36(b.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-servidor"]],features:[e._Bn([b.ez])],decls:28,vars:28,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} at\xe9 {last} de {totalRecords} registros","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Confirmar",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],["pTemplate","footer"],["header","Detalhes do Servidor",1,"p-fluid",3,"visible","modal","visibleChange"],[1,"p-fluid","grid"],[1,"field","col-12"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],[1,"field","col-6"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-danger",3,"click"],["pButton","","pRipple","","label","Salvar","icon","pi pi-check",1,"p-button-success",3,"click"],[1,"my-2"],["pButton","","pRipple","","label","Novo","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Excluir","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Importar","class","mr-2 inline-block",3,"maxFileSize",4,"ngIf"],["pButton","","pRipple","","label","Exportar","icon","pi pi-upload",1,"p-button-help",3,"click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Importar",1,"mr-2","inline-block",3,"maxFileSize"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Procurar...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],["pSortableColumn","id",4,"ngIf"],["pSortableColumn","nome"],["field","nome"],["pSortableColumn","id"],["field","id"],[3,"value"],["style","width:50%; min-width:10rem;",4,"ngIf"],[2,"width","90%","min-width","10rem"],[1,"p-column-title"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[2,"width","50%","min-width","10rem"],["pButton","","pRipple","","icon","pi pi-times","label","N\xe3o",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Sim",1,"p-button-text",3,"click"],[1,"ng-dirty","ng-invalid"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p-toast"),e.TgZ(4,"p-toolbar",3),e.YNc(5,I,3,1,"ng-template",4),e.YNc(6,k,2,1,"ng-template",5),e.qZA(),e.TgZ(7,"p-table",6,7),e.NdJ("selectionChange",function(v){return s.listaServidoresSelecionados=v}),e.YNc(9,w,6,0,"ng-template",8),e.YNc(10,N,8,1,"ng-template",9),e.YNc(11,B,12,3,"ng-template",10),e.qZA()(),e.TgZ(12,"p-dialog",11),e.NdJ("visibleChange",function(v){return s.dialogoExcluir=v}),e.TgZ(13,"div",12),e._UZ(14,"i",13),e.YNc(15,D,5,1,"span",14),e.qZA(),e.YNc(16,U,2,0,"ng-template",15),e.qZA(),e.TgZ(17,"p-dialog",16),e.NdJ("visibleChange",function(v){return s.dialogoServidor=v}),e.TgZ(18,"div",17)(19,"div",18)(20,"label",19),e._uU(21,"Nome"),e.qZA(),e.TgZ(22,"input",20),e.NdJ("ngModelChange",function(v){return s.servidorSelecionado.nome=v}),e.qZA(),e.YNc(23,z,2,0,"small",21),e.qZA(),e.TgZ(24,"div",22)(25,"button",23),e.NdJ("click",function(){return s.dialogoServidor=!1}),e.qZA()(),e.TgZ(26,"div",22)(27,"button",24),e.NdJ("click",function(){return s.salvarOuAlterar()}),e.qZA()()()()()()),2&i&&(e.xp6(7),e.Q6J("value",s.listaServidores)("columns",s.cols)("rows",10)("globalFilterFields",e.DdM(22,H))("rows",10)("paginator",!0)("rowsPerPageOptions",e.DdM(23,P))("showCurrentPageReport",!0)("selection",s.listaServidoresSelecionados)("rowHover",!0),e.xp6(5),e.Akn(e.DdM(24,A)),e.Q6J("visible",s.dialogoExcluir)("modal",!0),e.xp6(3),e.Q6J("ngIf",s.servidorSelecionado),e.xp6(2),e.Akn(e.DdM(25,A)),e.Q6J("visible",s.dialogoServidor)("modal",!0),e.xp6(5),e.Q6J("ngModel",s.servidorSelecionado.nome)("ngClass",e.VKq(26,Y,s.submitted&&!s.servidorSelecionado.nome)),e.xp6(1),e.Q6J("ngIf",s.submitted&&!s.servidorSelecionado.nome))},dependencies:[t.mk,t.O5,l.iA,b.jx,l.lQ,l.fz,l.UA,l.Mo,g.p,C.Hq,m.Fj,m.JJ,m.Q7,m.On,o.H,_.FN,S.o,c.o,T.V]}),n})();var E=r(1247);let K=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[E.Bz.forChild([{path:"",component:G}]),E.Bz]}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.ez,K,l.U$,g.O,m.u5,C.hJ,o.T,_.EV,S.V,d.Xt,c.j,h.A,y.kW,a.cc,f.L$,T.S]}),n})()},3407:(M,x,r)=>{r.d(x,{A:()=>y,g:()=>T});var t=r(5e3),m=r(9808),C=r(2382);let T=(()=>{class g{constructor(c,h,a,d){this.el=c,this.ngModel=h,this.control=a,this.cd=d,this.onResize=new t.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(c){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(c){this.autoResize&&this.resize(c)}onBlur(c){this.autoResize&&this.resize(c)}resize(c){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(c||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return g.\u0275fac=function(c){return new(c||g)(t.Y36(t.SBq),t.Y36(C.On,8),t.Y36(C.a5,8),t.Y36(t.sBO))},g.\u0275dir=t.lG2({type:g,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(c,h){1&c&&t.NdJ("input",function(d){return h.onInput(d)})("focus",function(d){return h.onFocus(d)})("blur",function(d){return h.onBlur(d)}),2&c&&t.ekj("p-filled",h.filled)("p-inputtextarea-resizable",h.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),g})(),y=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[m.ez]}),g})()},8018:(M,x,r)=>{r.d(x,{Xt:()=>h,iG:()=>c});var t=r(5e3),m=r(9808),C=r(2382);function T(a,d){if(1&a){const o=t.EpF();t.TgZ(0,"span",3),t.NdJ("click",function(_){t.CHM(o);const S=t.oxw();return t.KtG(S.clear(_))})("keydown.enter",function(_){t.CHM(o);const S=t.oxw();return t.KtG(S.clear(_))}),t.qZA()}if(2&a){const o=t.oxw();t.Q6J("ngClass",o.iconCancelClass)("ngStyle",o.iconCancelStyle),t.uIk("tabindex",o.disabled||o.readonly?null:"0")}}function y(a,d){if(1&a){const o=t.EpF();t.TgZ(0,"span",4),t.NdJ("click",function(_){const b=t.CHM(o).index,e=t.oxw();return t.KtG(e.rate(_,b))})("keydown.enter",function(_){const b=t.CHM(o).index,e=t.oxw();return t.KtG(e.rate(_,b))}),t.qZA()}if(2&a){const o=d.index,l=t.oxw();t.Q6J("ngClass",!l.value||o>=l.value?l.iconOffClass:l.iconOnClass)("ngStyle",!l.value||o>=l.value?l.iconOffStyle:l.iconOnStyle),t.uIk("tabindex",l.disabled||l.readonly?null:"0")}}const g=function(a,d){return{"p-readonly":a,"p-disabled":d}},f={provide:C.JU,useExisting:(0,t.Gpc)(()=>c),multi:!0};let c=(()=>{class a{constructor(o){this.cd=o,this.stars=5,this.cancel=!0,this.iconOnClass="pi pi-star-fill",this.iconOffClass="pi pi-star",this.iconCancelClass="pi pi-ban",this.onRate=new t.vpe,this.onCancel=new t.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngOnInit(){this.starsArray=[];for(let o=0;o<this.stars;o++)this.starsArray[o]=o}rate(o,l){!this.readonly&&!this.disabled&&(this.value=l+1,this.onModelChange(this.value),this.onModelTouched(),this.onRate.emit({originalEvent:o,value:l+1})),o.preventDefault()}clear(o){!this.readonly&&!this.disabled&&(this.value=null,this.onModelChange(this.value),this.onModelTouched(),this.onCancel.emit(o)),o.preventDefault()}writeValue(o){this.value=o,this.cd.detectChanges()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["p-rating"]],hostAttrs:[1,"p-element"],inputs:{disabled:"disabled",readonly:"readonly",stars:"stars",cancel:"cancel",iconOnClass:"iconOnClass",iconOnStyle:"iconOnStyle",iconOffClass:"iconOffClass",iconOffStyle:"iconOffStyle",iconCancelClass:"iconCancelClass",iconCancelStyle:"iconCancelStyle"},outputs:{onRate:"onRate",onCancel:"onCancel"},features:[t._Bn([f])],decls:3,vars:6,consts:[[1,"p-rating",3,"ngClass"],["class","p-rating-icon p-rating-cancel",3,"ngClass","ngStyle","click","keydown.enter",4,"ngIf"],["class","p-rating-icon",3,"ngClass","ngStyle","click","keydown.enter",4,"ngFor","ngForOf"],[1,"p-rating-icon","p-rating-cancel",3,"ngClass","ngStyle","click","keydown.enter"],[1,"p-rating-icon",3,"ngClass","ngStyle","click","keydown.enter"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0),t.YNc(1,T,1,3,"span",1),t.YNc(2,y,1,3,"span",2),t.qZA()),2&o&&(t.Q6J("ngClass",t.WLB(3,g,l.readonly,l.disabled)),t.xp6(1),t.Q6J("ngIf",l.cancel),t.xp6(1),t.Q6J("ngForOf",l.starsArray))},dependencies:[m.mk,m.sg,m.O5,m.PC],styles:[".p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}\n"],encapsulation:2,changeDetection:0}),a})(),h=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez]}),a})()}}]);