import{d as f,g as m}from"./chunk-FBB73MOT.js";import{Bb as g,F as l,Q as a,S as r,Z as s,ea as u,fa as h,hb as p,oa as d,za as c}from"./chunk-TF5DNV4E.js";var D=(()=>{class e{el;ngModel;control;cd;autoResize;onResize=new a;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(i,t,n,o){this.el=i,this.ngModel=t,this.control=n,this.cd=o}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(i){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(i){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(i||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||e)(s(r),s(m,8),s(f,8),s(p))};static \u0275dir=h({type:e,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(t,n){t&1&&c("input",function(v){return n.onInput(v)}),t&2&&d("p-filled",n.filled)("p-inputtextarea-resizable",n.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"},standalone:!1})}return e})(),H=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=u({type:e});static \u0275inj=l({imports:[g]})}return e})();export{D as a,H as b};
