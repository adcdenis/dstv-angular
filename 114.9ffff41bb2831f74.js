"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[114],{2537:(b,C,o)=>{o.d(C,{vy:()=>f,zz:()=>p});var n=o(5e3),m=o(9808),g=o(5730),_=o(1424),k=o(2382),h=o(9618);const v=["input"];function a(u,c){if(1&u){const t=n.EpF();n.TgZ(0,"i",3),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.clear())}),n.qZA()}}const d={provide:k.JU,useExisting:(0,n.Gpc)(()=>f),multi:!0};let f=(()=>{class u{constructor(t,e){this.el=t,this.cd=e,this.type="text",this.slotChar="_",this.autoClear=!0,this.showClear=!1,this.characterPattern="[A-Za-z]",this.onComplete=new n.vpe,this.onFocus=new n.vpe,this.onBlur=new n.vpe,this.onInput=new n.vpe,this.onKeydown=new n.vpe,this.onClear=new n.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}ngOnInit(){let t=g.p.getUserAgent();this.androidChrome=/chrome/i.test(t)&&/android/i.test(t),this.initMask()}get mask(){return this._mask}set mask(t){this._mask=t,this.initMask(),this.writeValue(""),this.onModelChange(this.value)}initMask(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:this.characterPattern,"*":`${this.characterPattern}|[0-9]`};let t=this.mask.split("");for(let e=0;e<t.length;e++){let i=t[e];"?"==i?(this.len--,this.partialPosition=e):this.defs[i]?(this.tests.push(new RegExp(this.defs[i])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1),e<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null)}this.buffer=[];for(let e=0;e<t.length;e++){let i=t[e];"?"!=i&&this.buffer.push(this.defs[i]?this.getPlaceholder(e):i)}this.defaultBuffer=this.buffer.join("")}writeValue(t){this.value=t,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.value=null==this.value||null==this.value?"":this.value,this.checkVal(),this.focusText=this.inputViewChild.nativeElement.value,this.updateFilledState())}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}caret(t,e){let i,s,l;if(this.inputViewChild.nativeElement.offsetParent&&this.inputViewChild.nativeElement===this.inputViewChild.nativeElement.ownerDocument.activeElement){if("number"!=typeof t)return this.inputViewChild.nativeElement.setSelectionRange?(s=this.inputViewChild.nativeElement.selectionStart,l=this.inputViewChild.nativeElement.selectionEnd):document.selection&&document.selection.createRange&&(i=document.selection.createRange(),s=0-i.duplicate().moveStart("character",-1e5),l=s+i.text.length),{begin:s,end:l};s=t,l="number"==typeof e?e:s,this.inputViewChild.nativeElement.setSelectionRange?this.inputViewChild.nativeElement.setSelectionRange(s,l):this.inputViewChild.nativeElement.createTextRange&&(i=this.inputViewChild.nativeElement.createTextRange(),i.collapse(!0),i.moveEnd("character",l),i.moveStart("character",s),i.select())}}isCompleted(){for(let e=this.firstNonMaskPos;e<=this.lastRequiredNonMaskPos;e++)if(this.tests[e]&&this.buffer[e]===this.getPlaceholder(e))return!1;return!0}getPlaceholder(t){return this.slotChar.charAt(t<this.slotChar.length?t:0)}seekNext(t){for(;++t<this.len&&!this.tests[t];);return t}seekPrev(t){for(;--t>=0&&!this.tests[t];);return t}shiftL(t,e){let i,s;if(!(t<0)){for(i=t,s=this.seekNext(e);i<this.len;i++)if(this.tests[i]){if(!(s<this.len&&this.tests[i].test(this.buffer[s])))break;this.buffer[i]=this.buffer[s],this.buffer[s]=this.getPlaceholder(s),s=this.seekNext(s)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,t))}}shiftR(t){let e,i,s,l;for(e=t,i=this.getPlaceholder(t);e<this.len;e++)if(this.tests[e]){if(s=this.seekNext(e),l=this.buffer[e],this.buffer[e]=i,!(s<this.len&&this.tests[s].test(l)))break;i=l}}handleAndroidInput(t){var e=this.inputViewChild.nativeElement.value,i=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>e.length){for(this.checkVal(!0);i.begin>0&&!this.tests[i.begin-1];)i.begin--;if(0===i.begin)for(;i.begin<this.firstNonMaskPos&&!this.tests[i.begin];)i.begin++;setTimeout(()=>{this.caret(i.begin,i.begin),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}else{for(this.checkVal(!0);i.begin<this.len&&!this.tests[i.begin];)i.begin++;setTimeout(()=>{this.caret(i.begin,i.begin),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}}onInputBlur(t){if(this.focused=!1,this.onModelTouched(),this.checkVal(),this.updateFilledState(),this.onBlur.emit(t),this.inputViewChild.nativeElement.value!=this.focusText||this.inputViewChild.nativeElement.value!=this.value){this.updateModel(t);let e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!1),this.inputViewChild.nativeElement.dispatchEvent(e)}}onInputKeydown(t){if(this.readonly)return;let i,s,l,e=t.which||t.keyCode,r=/iphone/i.test(g.p.getUserAgent());this.oldVal=this.inputViewChild.nativeElement.value,this.onKeydown.emit(t),8===e||46===e||r&&127===e?(i=this.caret(),s=i.begin,l=i.end,l-s==0&&(s=46!==e?this.seekPrev(s):l=this.seekNext(s-1),l=46===e?this.seekNext(l):l),this.clearBuffer(s,l),this.shiftL(s,l-1),this.updateModel(t),this.onInput.emit(t),t.preventDefault()):13===e?(this.onInputBlur(t),this.updateModel(t)):27===e&&(this.inputViewChild.nativeElement.value=this.focusText,this.caret(0,this.checkVal()),this.updateModel(t),t.preventDefault())}onKeyPress(t){if(!this.readonly){var s,l,r,M,e=t.which||t.keyCode,i=this.caret();t.ctrlKey||t.altKey||t.metaKey||e<32||e>34&&e<41||(e&&13!==e&&(i.end-i.begin!=0&&(this.clearBuffer(i.begin,i.end),this.shiftL(i.begin,i.end-1)),(s=this.seekNext(i.begin-1))<this.len&&(l=String.fromCharCode(e),this.tests[s].test(l)&&(this.shiftR(s),this.buffer[s]=l,this.writeBuffer(),r=this.seekNext(s),/android/i.test(g.p.getUserAgent())?setTimeout(()=>{this.caret(r)},0):this.caret(r),i.begin<=this.lastRequiredNonMaskPos&&(M=this.isCompleted()),this.onInput.emit(t))),t.preventDefault()),this.updateModel(t),this.updateFilledState(),M&&this.onComplete.emit())}}clearBuffer(t,e){let i;for(i=t;i<e&&i<this.len;i++)this.tests[i]&&(this.buffer[i]=this.getPlaceholder(i))}writeBuffer(){this.inputViewChild.nativeElement.value=this.buffer.join("")}checkVal(t){let s,l,r,e=this.inputViewChild.nativeElement.value,i=-1;for(s=0,r=0;s<this.len;s++)if(this.tests[s]){for(this.buffer[s]=this.getPlaceholder(s);r++<e.length;)if(l=e.charAt(r-1),this.tests[s].test(l)){this.buffer[s]=l,i=s;break}if(r>e.length){this.clearBuffer(s+1,this.len);break}}else this.buffer[s]===e.charAt(r)&&r++,s<this.partialPosition&&(i=s);return t?this.writeBuffer():i+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.inputViewChild.nativeElement.value&&(this.inputViewChild.nativeElement.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.inputViewChild.nativeElement.value=this.inputViewChild.nativeElement.value.substring(0,i+1)),this.partialPosition?s:this.firstNonMaskPos}onInputFocus(t){if(this.readonly)return;let e;this.focused=!0,clearTimeout(this.caretTimeoutId),this.focusText=this.inputViewChild.nativeElement.value,e=this.checkVal(),this.caretTimeoutId=setTimeout(()=>{this.inputViewChild.nativeElement===this.inputViewChild.nativeElement.ownerDocument.activeElement&&(this.writeBuffer(),e==this.mask.replace("?","").length?this.caret(0,e):this.caret(e))},10),this.onFocus.emit(t)}onInputChange(t){this.androidChrome?this.handleAndroidInput(t):this.handleInputChange(t),this.onInput.emit(t)}handleInputChange(t){this.readonly||setTimeout(()=>{var e=this.checkVal(!0);this.caret(e),this.updateModel(t),this.isCompleted()&&this.onComplete.emit()},0)}getUnmaskedValue(){let t=[];for(let e=0;e<this.buffer.length;e++){let i=this.buffer[e];this.tests[e]&&i!=this.getPlaceholder(e)&&t.push(i)}return t.join("")}updateModel(t){const e=this.unmask?this.getUnmaskedValue():t.target.value;(null!==e||void 0!==e)&&(this.value=e,this.onModelChange(this.value))}updateFilledState(){this.filled=this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}focus(){this.inputViewChild.nativeElement.focus()}clear(){this.inputViewChild.nativeElement.value="",this.value=null,this.onModelChange(this.value),this.onClear.emit()}}return u.\u0275fac=function(t){return new(t||u)(n.Y36(n.SBq),n.Y36(n.sBO))},u.\u0275cmp=n.Xpm({type:u,selectors:[["p-inputMask"]],viewQuery:function(t,e){if(1&t&&n.Gf(v,7),2&t){let i;n.iGM(i=n.CRH())&&(e.inputViewChild=i.first)}},hostAttrs:[1,"p-element"],hostVars:6,hostBindings:function(t,e){2&t&&n.ekj("p-inputwrapper-filled",e.filled)("p-inputwrapper-focus",e.focused)("p-inputmask-clearable",e.showClear&&!e.disabled)},inputs:{type:"type",slotChar:"slotChar",autoClear:"autoClear",showClear:"showClear",style:"style",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",size:"size",maxlength:"maxlength",tabindex:"tabindex",title:"title",ariaLabel:"ariaLabel",ariaRequired:"ariaRequired",disabled:"disabled",readonly:"readonly",unmask:"unmask",name:"name",required:"required",characterPattern:"characterPattern",autoFocus:"autoFocus",autocomplete:"autocomplete",mask:"mask"},outputs:{onComplete:"onComplete",onFocus:"onFocus",onBlur:"onBlur",onInput:"onInput",onKeydown:"onKeydown",onClear:"onClear"},features:[n._Bn([d])],decls:3,vars:18,consts:[["pInputText","",1,"p-inputmask",3,"ngStyle","ngClass","disabled","readonly","pAutoFocus","focus","blur","keydown","keypress","input","paste"],["input",""],["class","p-inputmask-clear-icon pi pi-times",3,"click",4,"ngIf"],[1,"p-inputmask-clear-icon","pi","pi-times",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"input",0,1),n.NdJ("focus",function(s){return e.onInputFocus(s)})("blur",function(s){return e.onInputBlur(s)})("keydown",function(s){return e.onInputKeydown(s)})("keypress",function(s){return e.onKeyPress(s)})("input",function(s){return e.onInputChange(s)})("paste",function(s){return e.handleInputChange(s)}),n.qZA(),n.YNc(2,a,1,0,"i",2)),2&t&&(n.Q6J("ngStyle",e.style)("ngClass",e.styleClass)("disabled",e.disabled)("readonly",e.readonly)("pAutoFocus",e.autoFocus),n.uIk("id",e.inputId)("type",e.type)("name",e.name)("placeholder",e.placeholder)("title",e.title)("size",e.size)("autocomplete",e.autocomplete)("maxlength",e.maxlength)("tabindex",e.tabindex)("aria-label",e.ariaLabel)("aria-required",e.ariaRequired)("required",e.required),n.xp6(2),n.Q6J("ngIf",null!=e.value&&e.filled&&e.showClear&&!e.disabled))},dependencies:[m.mk,m.O5,m.PC,_.o,h.P],styles:[".p-inputmask-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputmask-clearable{position:relative}\n"],encapsulation:2,changeDetection:0}),u})(),p=(()=>{class u{}return u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[m.ez,_.j,h.E]}),u})()},3407:(b,C,o)=>{o.d(C,{A:()=>k,g:()=>_});var n=o(5e3),m=o(9808),g=o(2382);let _=(()=>{class h{constructor(a,d,f,p){this.el=a,this.ngModel=d,this.control=f,this.cd=p,this.onResize=new n.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(a){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(a){this.autoResize&&this.resize(a)}onBlur(a){this.autoResize&&this.resize(a)}resize(a){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(a||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return h.\u0275fac=function(a){return new(a||h)(n.Y36(n.SBq),n.Y36(g.On,8),n.Y36(g.a5,8),n.Y36(n.sBO))},h.\u0275dir=n.lG2({type:h,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(a,d){1&a&&n.NdJ("input",function(p){return d.onInput(p)})("focus",function(p){return d.onFocus(p)})("blur",function(p){return d.onBlur(p)}),2&a&&n.ekj("p-filled",d.filled)("p-inputtextarea-resizable",d.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),h})(),k=(()=>{class h{}return h.\u0275fac=function(a){return new(a||h)},h.\u0275mod=n.oAB({type:h}),h.\u0275inj=n.cJS({imports:[m.ez]}),h})()}}]);