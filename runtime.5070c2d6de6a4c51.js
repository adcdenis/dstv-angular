(()=>{"use strict";var e,v={},m={};function a(e){var d=m[e];if(void 0!==d)return d.exports;var r=m[e]={id:e,loaded:!1,exports:{}};return v[e](r,r.exports,a),r.loaded=!0,r.exports}a.m=v,e=[],a.O=(d,r,c,n)=>{if(!r){var t=1/0;for(f=0;f<e.length;f++){for(var[r,c,n]=e[f],s=!0,i=0;i<r.length;i++)(!1&n||t>=n)&&Object.keys(a.O).every(p=>a.O[p](r[i]))?r.splice(i--,1):(s=!1,n<t&&(t=n));if(s){e.splice(f--,1);var o=c();void 0!==o&&(d=o)}}return d}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,c,n]},a.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return a.d(d,{a:d}),d},a.d=(e,d)=>{for(var r in d)a.o(d,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:d[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((d,r)=>(a.f[r](e,d),d),[])),a.u=e=>(8592===e?"common":e)+"."+{185:"12356412eb297c09",193:"f54f304794ab8edd",464:"b66e720b3af9a439",682:"2a8e1274df8941e5",900:"2379cfc241c3c147",1516:"6d095236e0df2802",1575:"4e002ccdf7d806a6",1693:"ace56c0f56c3da27",1741:"5c711caf54d65aff",1874:"83117ae930e6e344",2119:"d167c406781bd7a1",2519:"a5dccf7d0a8b7d7c",2612:"14f16c579fe9f0aa",2714:"6a3a548f1519f92e",3351:"09d990b04074df2a",3629:"c9600011121b8ed4",3664:"e3289d66c60f406f",3874:"f0c8731b3edf7fb0",4036:"f1362c6d6553ed84",4132:"9947e9b373149100",4154:"0aeec3b04ac3778b",4335:"bcfcddda10c26415",4441:"fe3625f22af48704",4559:"083373193a6de3c9",4566:"55b36e29d7941dc9",4568:"1df01ee211e43ed8",5475:"ce31a8fbd3476cf7",5616:"da281fc34f7d72ab",5652:"e547bf2fec33ce27",5719:"e29c200175850f11",5722:"78cfe0da6512f448",5743:"daef41456519340a",5881:"0882f1cd7616eb67",6072:"fcfd8a7e91f917d5",6208:"97605faf3d33a864",6387:"831bad1d3ddf5113",6526:"8eae957ec3cfbbb6",6817:"cbf4c86227c29a8d",7010:"2dfaa7e53c342866",7141:"c73b131460476eb8",7806:"d3054ce31b10d06a",7895:"99eb827bc23cd694",8176:"cc575a6a565f9a77",8205:"e4684dfb85296b0f",8356:"d28cab53f3ff327d",8456:"90f33e6488c54f8e",8570:"cab5159749d535b5",8592:"fbef19eeb16cc155",8638:"bdd9e74133dca4d9",8952:"9373003451eb8d19"}[e]+".js",a.miniCssF=e=>{},a.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),a.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),(()=>{var e={},d="sakai:";a.l=(r,c,n,f)=>{if(e[r])e[r].push(c);else{var t,s;if(void 0!==n)for(var i=document.getElementsByTagName("script"),o=0;o<i.length;o++){var b=i[o];if(b.getAttribute("src")==r||b.getAttribute("data-webpack")==d+n){t=b;break}}t||(s=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",d+n),t.src=a.tu(r)),e[r]=[c];var u=(g,p)=>{t.onerror=t.onload=null,clearTimeout(l);var h=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),h&&h.forEach(y=>y(p)),g)return g(p)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),s&&document.head.appendChild(t)}}})(),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:d=>d},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(c,n)=>{var f=a.o(e,c)?e[c]:void 0;if(0!==f)if(f)n.push(f[2]);else if(3666!=c){var t=new Promise((b,u)=>f=e[c]=[b,u]);n.push(f[2]=t);var s=a.p+a.u(c),i=new Error;a.l(s,b=>{if(a.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var u=b&&("load"===b.type?"missing":b.type),l=b&&b.target&&b.target.src;i.message="Loading chunk "+c+" failed.\n("+u+": "+l+")",i.name="ChunkLoadError",i.type=u,i.request=l,f[1](i)}},"chunk-"+c,c)}else e[c]=0},a.O.j=c=>0===e[c];var d=(c,n)=>{var i,o,[f,t,s]=n,b=0;if(f.some(l=>0!==e[l])){for(i in t)a.o(t,i)&&(a.m[i]=t[i]);if(s)var u=s(a)}for(c&&c(n);b<f.length;b++)a.o(e,o=f[b])&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self.webpackChunksakai=self.webpackChunksakai||[];r.forEach(d.bind(null,0)),r.push=d.bind(null,r.push.bind(r))})()})();