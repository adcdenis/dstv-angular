"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[817],{6817:(P,x,a)=>{a.r(x),a.d(x,{PlanoModule:()=>G});var t=a(9808),h=a(1247),C=a(9783),e=a(5e3),T=a(6563),c=a(8952),v=a(8205),p=a(845),m=a(2382),s=a(5787),u=a(7773),i=a(4534),r=a(1424),f=a(7010),b=a(5315);function S(o,g){if(1&o){const n=e.EpF();e.TgZ(0,"div",27)(1,"button",28),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.novo())}),e.qZA(),e.TgZ(2,"button",29),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.excluirSelecionados())}),e.qZA()()}if(2&o){const n=e.oxw();e.xp6(2),e.Q6J("disabled",!n.listaPlanosSelecionados||!n.listaPlanosSelecionados.length)}}function y(o,g){1&o&&e._UZ(0,"p-fileUpload",32),2&o&&e.Q6J("maxFileSize",1e6)}function E(o,g){if(1&o){const n=e.EpF();e.YNc(0,y,1,1,"p-fileUpload",30),e.TgZ(1,"button",31),e.NdJ("click",function(){e.CHM(n),e.oxw();const d=e.MAs(8);return e.KtG(d.exportCSV())}),e.qZA()}2&o&&e.Q6J("ngIf",!1)}function R(o,g){if(1&o){const n=e.EpF();e.TgZ(0,"div",33)(1,"h5",34),e._uU(2,"Gerenciar Planos"),e.qZA(),e.TgZ(3,"span",35),e._UZ(4,"i",36),e.TgZ(5,"input",37),e.NdJ("input",function(d){e.CHM(n);const _=e.oxw(),Z=e.MAs(8);return e.KtG(_.onGlobalFilter(Z,d))}),e.qZA()()()}}function I(o,g){1&o&&(e.TgZ(0,"th",43),e._uU(1,"Id "),e._UZ(2,"p-sortIcon",44),e.qZA())}function O(o,g){1&o&&(e.TgZ(0,"tr")(1,"th",38),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.YNc(3,I,3,0,"th",39),e.TgZ(4,"th",40),e._uU(5,"Nome "),e._UZ(6,"p-sortIcon",41),e.qZA(),e.TgZ(7,"th",42),e._uU(8,"Valor "),e._UZ(9,"p-sortIcon",41),e.qZA(),e._UZ(10,"th"),e.qZA()),2&o&&(e.xp6(3),e.Q6J("ngIf",!1))}function w(o,g){if(1&o&&(e.TgZ(0,"td",53)(1,"span",48),e._uU(2,"Id"),e.qZA(),e._uU(3),e.qZA()),2&o){const n=e.oxw().$implicit;e.xp6(3),e.hij(" ",n.id," ")}}function k(o,g){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",45),e.qZA(),e.YNc(3,w,4,1,"td",46),e.TgZ(4,"td",47)(5,"span",48),e._uU(6,"Nome"),e.qZA(),e._uU(7),e.qZA(),e.TgZ(8,"td",49)(9,"span",48),e._uU(10,"Valor"),e.qZA(),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"div",50)(14,"button",51),e.NdJ("click",function(){const _=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.abrirDialogAlterar(_))}),e.qZA(),e.TgZ(15,"button",52),e.NdJ("click",function(){const _=e.CHM(n).$implicit,Z=e.oxw();return e.KtG(Z.abrirDialogExcluir(_))}),e.qZA()()()()}if(2&o){const n=g.$implicit;e.xp6(2),e.Q6J("value",n),e.xp6(1),e.Q6J("ngIf",!1),e.xp6(4),e.hij(" ",n.nome," "),e.xp6(4),e.hij(" ",n.valor," ")}}function J(o,g){if(1&o&&(e.TgZ(0,"span"),e._uU(1,"Tem certeza que voc\xea deseja excluir "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4,"?"),e.qZA()),2&o){const n=e.oxw();e.xp6(3),e.Oqu(n.planoSelecionado.nome)}}function N(o,g){if(1&o){const n=e.EpF();e.TgZ(0,"button",54),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.dialogoExcluir=!1)}),e.qZA(),e.TgZ(1,"button",55),e.NdJ("click",function(){e.CHM(n);const d=e.oxw();return e.KtG(d.excluir())}),e.qZA()}}function U(o,g){1&o&&(e.TgZ(0,"small",56),e._uU(1,"Nome \xe9 obrigat\xf3rio."),e.qZA())}function F(o,g){1&o&&(e.TgZ(0,"small",56),e._uU(1,"Valor \xe9 obrigat\xf3rio."),e.qZA())}const B=function(){return["valor","nome","id"]},D=function(){return[10,20,30]},M=function(){return{width:"450px"}},A=function(o){return{"ng-invalid ng-dirty":o}};let z=(()=>{class o{constructor(n,l){this.planoService=n,this.messageService=l,this.listaPlanos=[],this.listaPlanosSelecionados=[],this.dialogoExcluir=!1,this.dialogoPlano=!1,this.planoSelecionado={},this.cols=[],this.submitted=!1}ngOnInit(){console.log("aqui"),this.cols=[{field:"id",header:"Id"},{field:"nome",header:"Nome"},{field:"valor",header:"Valor"}],this.planoService.getAll().subscribe({next:n=>this.listaPlanos=n,error:n=>console.error(n),complete:()=>console.info("complete")})}salvarOuAlterar(){this.submitted=!0,this.planoSelecionado.nome&&0!=this.planoSelecionado.nome.trim().length?this.planoSelecionado.id?this.alterar():this.salvar():this.messageService.add({severity:"error",summary:"Erro!",detail:"Insira um nome!",life:3e3})}salvar(){this.planoService.create(this.planoSelecionado).then(()=>{this.dialogoPlano=!1,this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Plano Criado!",life:3e3}),this.planoService.getAll().subscribe({next:n=>this.listaPlanos=n,error:n=>console.error(n),complete:()=>console.info("complete")})})}abrirDialogAlterar(n){this.planoSelecionado=Object.assign({},n),this.submitted=!1,this.dialogoPlano=!0}alterar(){this.planoService.update(this.planoSelecionado).then(()=>{this.dialogoPlano=!1,this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Alterado!",life:3e3}),this.planoService.getAll().subscribe({next:n=>this.listaPlanos=n,error:n=>console.error(n),complete:()=>console.info("complete")})})}abrirDialogExcluir(n){this.submitted=!1,this.planoSelecionado=n,this.dialogoExcluir=!0}excluir(){this.planoService.delete(this.planoSelecionado.id||"").then(()=>{console.info("complete"),this.dialogoExcluir=!1,this.messageService.add({severity:"success",summary:"Sucesso!",detail:"Exclu\xeddo",life:3e3}),this.planoSelecionado={},this.planoService.getAll().subscribe({next:n=>this.listaPlanos=n,error:n=>console.error(n),complete:()=>console.info("complete")})})}onGlobalFilter(n,l){n.filterGlobal(l.target.value,"contains")}novo(){this.dialogoPlano=!0,this.planoSelecionado={}}excluirSelecionados(){this.listaPlanosSelecionados&&this.listaPlanosSelecionados.forEach(n=>{this.planoService.delete(n.id||"")}),console.log(this.listaPlanosSelecionados)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(T.w),e.Y36(C.ez))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-plano"]],features:[e._Bn([C.ez])],decls:33,vars:34,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} at\xe9 {last} de {totalRecords} registros","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Confirmar",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],["pTemplate","footer"],["header","Detalhes do Plano",1,"p-fluid",3,"visible","modal","visibleChange"],[1,"p-fluid","grid"],[1,"field","col-12"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],["for","valor"],["inputId","stacked","mode","currency","currency","BRL","autofocus","",3,"ngModel","showButtons","ngClass","ngModelChange"],[1,"field","col-6"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-danger",3,"click"],["pButton","","pRipple","","label","Salvar","icon","pi pi-check",1,"p-button-success",3,"click"],[1,"my-2"],["pButton","","pRipple","","label","Novo","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Excluir","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Importar","class","mr-2 inline-block",3,"maxFileSize",4,"ngIf"],["pButton","","pRipple","","label","Exportar","icon","pi pi-upload",1,"p-button-help",3,"click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Importar",1,"mr-2","inline-block",3,"maxFileSize"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Procurar...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],["pSortableColumn","id",4,"ngIf"],["pSortableColumn","nome"],["field","nome"],["pSortableColumn","valor"],["pSortableColumn","id"],["field","id"],[3,"value"],["style","width:50%; min-width:10rem;",4,"ngIf"],[2,"width","70%","min-width","10rem"],[1,"p-column-title"],[2,"width","20%","min-width","10rem"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[2,"width","50%","min-width","10rem"],["pButton","","pRipple","","icon","pi pi-times","label","N\xe3o",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Sim",1,"p-button-text",3,"click"],[1,"ng-dirty","ng-invalid"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p-toast"),e.TgZ(4,"p-toolbar",3),e.YNc(5,S,3,1,"ng-template",4),e.YNc(6,E,2,1,"ng-template",5),e.qZA(),e.TgZ(7,"p-table",6,7),e.NdJ("selectionChange",function(_){return l.listaPlanosSelecionados=_}),e.YNc(9,R,6,0,"ng-template",8),e.YNc(10,O,11,1,"ng-template",9),e.YNc(11,k,16,4,"ng-template",10),e.qZA()(),e.TgZ(12,"p-dialog",11),e.NdJ("visibleChange",function(_){return l.dialogoExcluir=_}),e.TgZ(13,"div",12),e._UZ(14,"i",13),e.YNc(15,J,5,1,"span",14),e.qZA(),e.YNc(16,N,2,0,"ng-template",15),e.qZA(),e.TgZ(17,"p-dialog",16),e.NdJ("visibleChange",function(_){return l.dialogoPlano=_}),e.TgZ(18,"div",17)(19,"div",18)(20,"label",19),e._uU(21,"Nome:"),e.qZA(),e.TgZ(22,"input",20),e.NdJ("ngModelChange",function(_){return l.planoSelecionado.nome=_}),e.qZA(),e.YNc(23,U,2,0,"small",21),e.qZA(),e.TgZ(24,"div",18)(25,"label",22),e._uU(26,"Valor:"),e.qZA(),e.TgZ(27,"p-inputNumber",23),e.NdJ("ngModelChange",function(_){return l.planoSelecionado.valor=_}),e.qZA(),e.YNc(28,F,2,0,"small",21),e.qZA(),e.TgZ(29,"div",24)(30,"button",25),e.NdJ("click",function(){return l.dialogoPlano=!1}),e.qZA()(),e.TgZ(31,"div",24)(32,"button",26),e.NdJ("click",function(){return l.salvarOuAlterar()}),e.qZA()()()()()()),2&n&&(e.xp6(7),e.Q6J("value",l.listaPlanos)("columns",l.cols)("rows",10)("globalFilterFields",e.DdM(26,B))("rows",10)("paginator",!0)("rowsPerPageOptions",e.DdM(27,D))("showCurrentPageReport",!0)("selection",l.listaPlanosSelecionados)("rowHover",!0),e.xp6(5),e.Akn(e.DdM(28,M)),e.Q6J("visible",l.dialogoExcluir)("modal",!0),e.xp6(3),e.Q6J("ngIf",l.planoSelecionado),e.xp6(2),e.Akn(e.DdM(29,M)),e.Q6J("visible",l.dialogoPlano)("modal",!0),e.xp6(5),e.Q6J("ngModel",l.planoSelecionado.nome)("ngClass",e.VKq(30,A,l.submitted&&!l.planoSelecionado.nome)),e.xp6(1),e.Q6J("ngIf",l.submitted&&!l.planoSelecionado.nome),e.xp6(4),e.Q6J("ngModel",l.planoSelecionado.valor)("showButtons",!1)("ngClass",e.VKq(32,A,l.submitted&&!l.planoSelecionado.valor)),e.xp6(1),e.Q6J("ngIf",l.submitted&&!l.planoSelecionado.valor))},dependencies:[t.mk,t.O5,c.iA,C.jx,c.lQ,c.fz,c.UA,c.Mo,v.p,p.Hq,m.Fj,m.JJ,m.Q7,m.On,s.H,u.FN,i.o,r.o,f.Rn,b.V]}),o})(),H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild([{path:"",component:z}]),h.Bz]}),o})();var q=a(4036),Y=a(3407),K=a(9603),Q=a(8018);let G=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.ez,H,c.U$,v.O,m.u5,p.hJ,s.T,u.EV,i.V,Q.Xt,r.j,Y.A,q.kW,K.cc,f.L$,b.S]}),o})()},3407:(P,x,a)=>{a.d(x,{A:()=>T,g:()=>e});var t=a(5e3),h=a(9808),C=a(2382);let e=(()=>{class c{constructor(p,m,s,u){this.el=p,this.ngModel=m,this.control=s,this.cd=u,this.onResize=new t.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(p){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(p){this.autoResize&&this.resize(p)}onBlur(p){this.autoResize&&this.resize(p)}resize(p){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(p||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return c.\u0275fac=function(p){return new(p||c)(t.Y36(t.SBq),t.Y36(C.On,8),t.Y36(C.a5,8),t.Y36(t.sBO))},c.\u0275dir=t.lG2({type:c,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(p,m){1&p&&t.NdJ("input",function(u){return m.onInput(u)})("focus",function(u){return m.onFocus(u)})("blur",function(u){return m.onBlur(u)}),2&p&&t.ekj("p-filled",m.filled)("p-inputtextarea-resizable",m.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),c})(),T=(()=>{class c{}return c.\u0275fac=function(p){return new(p||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[h.ez]}),c})()},8018:(P,x,a)=>{a.d(x,{Xt:()=>m,iG:()=>p});var t=a(5e3),h=a(9808),C=a(2382);function e(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"span",3),t.NdJ("click",function(f){t.CHM(i);const b=t.oxw();return t.KtG(b.clear(f))})("keydown.enter",function(f){t.CHM(i);const b=t.oxw();return t.KtG(b.clear(f))}),t.qZA()}if(2&s){const i=t.oxw();t.Q6J("ngClass",i.iconCancelClass)("ngStyle",i.iconCancelStyle),t.uIk("tabindex",i.disabled||i.readonly?null:"0")}}function T(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"span",4),t.NdJ("click",function(f){const S=t.CHM(i).index,y=t.oxw();return t.KtG(y.rate(f,S))})("keydown.enter",function(f){const S=t.CHM(i).index,y=t.oxw();return t.KtG(y.rate(f,S))}),t.qZA()}if(2&s){const i=u.index,r=t.oxw();t.Q6J("ngClass",!r.value||i>=r.value?r.iconOffClass:r.iconOnClass)("ngStyle",!r.value||i>=r.value?r.iconOffStyle:r.iconOnStyle),t.uIk("tabindex",r.disabled||r.readonly?null:"0")}}const c=function(s,u){return{"p-readonly":s,"p-disabled":u}},v={provide:C.JU,useExisting:(0,t.Gpc)(()=>p),multi:!0};let p=(()=>{class s{constructor(i){this.cd=i,this.stars=5,this.cancel=!0,this.iconOnClass="pi pi-star-fill",this.iconOffClass="pi pi-star",this.iconCancelClass="pi pi-ban",this.onRate=new t.vpe,this.onCancel=new t.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngOnInit(){this.starsArray=[];for(let i=0;i<this.stars;i++)this.starsArray[i]=i}rate(i,r){!this.readonly&&!this.disabled&&(this.value=r+1,this.onModelChange(this.value),this.onModelTouched(),this.onRate.emit({originalEvent:i,value:r+1})),i.preventDefault()}clear(i){!this.readonly&&!this.disabled&&(this.value=null,this.onModelChange(this.value),this.onModelTouched(),this.onCancel.emit(i)),i.preventDefault()}writeValue(i){this.value=i,this.cd.detectChanges()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-rating"]],hostAttrs:[1,"p-element"],inputs:{disabled:"disabled",readonly:"readonly",stars:"stars",cancel:"cancel",iconOnClass:"iconOnClass",iconOnStyle:"iconOnStyle",iconOffClass:"iconOffClass",iconOffStyle:"iconOffStyle",iconCancelClass:"iconCancelClass",iconCancelStyle:"iconCancelStyle"},outputs:{onRate:"onRate",onCancel:"onCancel"},features:[t._Bn([v])],decls:3,vars:6,consts:[[1,"p-rating",3,"ngClass"],["class","p-rating-icon p-rating-cancel",3,"ngClass","ngStyle","click","keydown.enter",4,"ngIf"],["class","p-rating-icon",3,"ngClass","ngStyle","click","keydown.enter",4,"ngFor","ngForOf"],[1,"p-rating-icon","p-rating-cancel",3,"ngClass","ngStyle","click","keydown.enter"],[1,"p-rating-icon",3,"ngClass","ngStyle","click","keydown.enter"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.YNc(1,e,1,3,"span",1),t.YNc(2,T,1,3,"span",2),t.qZA()),2&i&&(t.Q6J("ngClass",t.WLB(3,c,r.readonly,r.disabled)),t.xp6(1),t.Q6J("ngIf",r.cancel),t.xp6(1),t.Q6J("ngForOf",r.starsArray))},dependencies:[h.mk,h.sg,h.O5,h.PC],styles:[".p-rating-icon{cursor:pointer}.p-rating.p-rating-readonly .p-rating-icon{cursor:default}\n"],encapsulation:2,changeDetection:0}),s})(),m=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.ez]}),s})()}}]);