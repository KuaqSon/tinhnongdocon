(this.webpackJsonptinhnongdocon=this.webpackJsonptinhnongdocon||[]).push([[0],{100:function(e,a,n){},101:function(e,a,n){},123:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(11),m=n.n(r),o=(n(100),n(18)),i=(n(101),n(89)),u=n(22),c=n(28),g=n(134),h=n(135),p=n(49),d=n(142),v=n(126),s=[{type:"wine",name:"R\u01b0\u1ee3u"},{type:"beer",name:"Bia"}],E=[{name:"333",value:"330-5.3"},{name:"Heineken 250ml",value:"250-5"},{name:"Heineken 330ml",value:"330-5"},{name:"Heineken 500ml",value:"500-7"},{name:"Tiger 330ml",value:"330-5"},{name:"Tiger 500ml",value:"500-5"},{name:"Carlberg 330ml",value:"330-5"},{name:"Carlberg 500ml",value:"500-5"},{name:"H\xe0 N\u1ed9i 330ml (4.6%)",value:"330-4.6"},{name:"H\xe0 N\u1ed9i 330ml (5.1%)",value:"330-5.1"},{name:"H\xe0 N\u1ed9i 450ml",value:"450-4.2"},{name:"Huda 330ml",value:"330-4.7"},{name:"Huda 350ml",value:"350-4.7"},{name:"Huda 500ml",value:"500-5"},{name:"Larue 330ml",value:"330-4"},{name:"Larue 355ml",value:"355-4"},{name:"S\xe0i g\xf2n Export",value:"355-4.9"},{name:"S\xe0i g\xf2n Lager",value:"450-4.3"},{name:"S\xe0n g\xf2n Special",value:"330-4.9"},{name:"Sam Miguel 330ml",value:"330-5"},{name:"Sam Miguel 500ml",value:"500-5"},{name:"Sapporo 330ml",value:"330-5"},{name:"Sapporo 650ml",value:"650-5.2"}],f=[{name:"G\u1ea1o",value:"40"},{name:"N\u1ebfp",value:"40"},{name:"Camus",value:"40"},{name:"Hines",value:"40"},{name:"Vodka",value:"40"},{name:"Bordeaux",value:"12"},{name:"Bourgogne",value:"12"},{name:"Champagne",value:"12"},{name:"C\xf4te du Rh\xf4ne",value:"12"},{name:"Chardonnay",value:"15"},{name:"Cabernet Sauvignon",value:"15"},{name:"Merlot",value:"15"},{name:"Hennessy",value:"40"},{name:"Remy Martin",value:"40"},{name:"Martel, Otard",value:"40"},{name:"Courvoisier",value:"40"}],b=[{name:"50ml",value:"50"},{name:"100ml",value:"100"},{name:"200ml",value:"200"},{name:"300ml",value:"300"},{name:"400ml",value:"400"},{name:"500ml",value:"500"}];function x(e){var a=e.formValues,n=Object(t.useState)({type:"beer",name:"Bia"}),r=Object(o.a)(n,2),m=r[0],x=r[1],w=Object(t.useState)({}),y=Object(o.a)(w,2),k=y[0],C=y[1],j=Object(t.useState)({}),S=Object(o.a)(j,2),M=S[0],O=S[1],A=Object(t.useState)({}),H=Object(o.a)(A,2),B=H[0],q=H[1],N=Object(t.useState)(!1),K=Object(o.a)(N,2),T=K[0],z=K[1];return l.a.createElement(c.a,{align:"center",justify:"center",background:"#ffffff",elevation:"small",round:"small"},l.a.createElement(g.a,{onSubmit:function(e){var n=e.value;e.touched;return a(Object(i.a)({},n,{sex:T}))}},l.a.createElement(c.a,{direction:"row-responsive"},l.a.createElement(c.a,{width:"medium",pad:"medium"},l.a.createElement(h.a,{label:"Tu\u1ed5i",name:"age",required:!0,component:u.a,step:1,defaultValue:1}),l.a.createElement(h.a,{label:"C\xe2n N\u1eb7ng (kg)",name:"weight",required:!0,component:u.a,step:1,defaultValue:1}),l.a.createElement(h.a,{label:"Chi\u1ec1u cao (cm)",name:"height",required:!0,component:u.a,step:1,defaultValue:1}),l.a.createElement(h.a,{label:"Gi\u1edbi t\xednh",help:l.a.createElement("small",null,"Men go the left, because women are always right")},l.a.createElement(c.a,{direction:"row",align:"center",justify:"center",gap:"medium",margin:{top:"10px",bottom:"12px"}},l.a.createElement("div",null,"Nam"),l.a.createElement(p.a,{toggle:!0,value:T,onChange:function(e){return z(e.target.checked)}}),l.a.createElement("div",null,"N\u1eef")))),l.a.createElement(c.a,{width:"medium",pad:"medium"},l.a.createElement(h.a,{label:"\u0110\u1ed3 u\u1ed1ng",name:"drink",required:!0,component:d.a,options:s,labelKey:"name",valueKey:"type",value:m,onChange:function(e){var a=e.option;return x(a)}}),"beer"===m.type&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{label:"H\xe3ng bia",name:"beer",required:"beer"===m.type,component:d.a,options:E,value:k,onChange:function(e){var a=e.option;return C(a)},labelKey:"name",valueKey:"name"})),"wine"===m.type&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{label:"Lo\u1ea1i r\u01b0\u1ee3u",name:"wine",required:"beer"===m.type,component:d.a,options:f,value:M,onChange:function(e){var a=e.option;return O(a)},labelKey:"name",valueKey:"name"}),l.a.createElement(h.a,{label:"Lo\u1ea1i ly",name:"cup",required:"beer"===m.type,component:d.a,options:b,value:B,onChange:function(e){var a=e.option;return q(a)},labelKey:"name",valueKey:"name"})),l.a.createElement(h.a,{label:"S\u1ed1 l\u01b0\u1ee3ng (lon/ly)",name:"amount",required:!0,component:u.a,step:1,defaultValue:1}),l.a.createElement(h.a,{label:"Th\u1eddi gian (ph\xfat)",name:"time",required:!0,component:u.a,step:1,defaultValue:1}))),l.a.createElement(c.a,{direction:"row",justify:"between",pad:"medium"},l.a.createElement(v.a,{type:"submit",label:"T\xednh N\u1ed3ng \u0110\u1ed9 C\u1ed3n",primary:!0}),l.a.createElement(v.a,{type:"reset",label:"Reset"}))))}var w=n(145),y=n(50),k=n(144),C=n(143),j=n(140),S=n(141);var M=function(e){var a=e.age,n=e.height,t=e.sex,l=e.time,r=e.weight,m=function(e){var a=e.drink,n=e.beer,t=e.amount,l=e.wine,r=e.cup,m=0,o=0;if("beer"===a.type){var i=n.value.split("-");m=i[0],o=i[1]}else m=l.value,o=r.value;return t*m*o*.01}(e),o=Math.round(100*m)/100,i=0,u=0,c=0;if(0===m)i=0,u=0,c=0;else{(i=m-10*(+l/60))<0&&(i=0);var g=function(e,a,n,t){return 1e3*((t?.1069:.1074)*e-(t?0:.09516)*n+(t?.2466:.3362)*a+(t?2.097:2.447))}(n,r,a,t),h=function(e,a){return.79*e/(a/.8157)*100}(i,g);i=Math.round(100*i)/100,c=function(e,a){if(e<=0)return 0;var n=function(e,a){return a/.8157*e/100/.79}(e,a);return Math.ceil(60*n/10)}(u=Math.round(1e3*h)/1e3,g)}return{outputIngestedMl:o,outputRemainingMl:i,outputBAC:u,minutesToOhFive:c,time:l}};var O=function(){var e=Object(t.useState)({}),a=Object(o.a)(e,2),n=a[0],r=a[1],m=function(e){var a=e.value,n=e.label;return l.a.createElement(w.a,{columns:{count:2,size:"auto"},gap:"small",margin:{bottom:"6px"}},l.a.createElement(c.a,{height:{min:"36px"},direction:"column",justify:"end"},l.a.createElement(y.a,{textAlign:"end"},n)),l.a.createElement(c.a,{height:{min:"36px"},direction:"column",justify:"end"},l.a.createElement(y.a,{textAlign:"start",size:"xlarge"},a)))};return l.a.createElement(k.a,null,l.a.createElement(c.a,{fill:!0,align:"center"},l.a.createElement(c.a,{width:{max:"large"},align:"center",margin:"medium"},l.a.createElement(c.a,{pad:{bottom:"20px"},fill:!0,direction:"row",justify:"center"},l.a.createElement(C.a,{type:"digital"})),l.a.createElement((function(){return l.a.createElement(c.a,{elevation:"small",round:"small",pad:"medium",background:"#ffffff",width:{max:"large"},margin:{bottom:"20px"},align:"center"},l.a.createElement(c.a,{direction:"row",justify:"center"},l.a.createElement(c.a,{width:{min:"32px",max:"32px"}},l.a.createElement(j.a,{color:"status-warning"})),l.a.createElement(c.a,{width:{min:"32px",max:"32px"}},l.a.createElement(j.a,{color:"status-warning"})),l.a.createElement(c.a,{width:{min:"32px",max:"32px"}},l.a.createElement(j.a,{color:"status-warning"})),l.a.createElement(c.a,{width:{min:"32px",max:"32px"}},l.a.createElement(j.a,{color:"status-warning"})),l.a.createElement(c.a,{width:{min:"32px",max:"32px"}},l.a.createElement(j.a,{color:"status-warning"}))),l.a.createElement(c.a,{margin:{top:"20px"}},l.a.createElement(y.a,{weight:"bold",size:"large",textAlign:"center"},"\u1ee8ng d\u1ee5ng \u01b0\u1edbc t\xednh n\u1ed3ng \u0111\u1ed9 c\u1ed3n gi\xfap anh em bi\u1ebft m\xecnh \u0111ang bay \u1edf t\u1ea7ng m\xe2y n\xe0o ^^")))}),null),l.a.createElement((function(){return l.a.createElement(c.a,{direction:"row",elevation:"small",round:"small",pad:"medium",background:"#ffffff",width:{max:"large"},margin:{bottom:"20px"}},l.a.createElement(c.a,{width:{min:"64px",max:"64px"}},l.a.createElement(S.a,{color:"status-warning",size:"large"})),l.a.createElement(c.a,null,l.a.createElement(y.a,{color:"status-warning",weight:"bold"},"L\u01afU \xdd C\u1ef0C M\u1ea0NH!!!"),l.a.createElement(y.a,null,"K\u1ebft qu\u1ea3 \u01b0\u1edbc t\xednh n\u1ed3ng \u0111\u1ed9 c\u1ed3n trong h\u01a1i th\u1edf ch\u1ec9 mang t\xednh ch\u1ea5t tham kh\u1ea3o v\xe0 kh\xf4ng ho\xe0n to\xe0n ch\xednh x\xe1c v\xec nh\u1eefng y\u1ebfu t\u1ed1 kh\xe1ch quan nh\u01b0 th\u1ec3 tr\u1ea1ng s\u1ee9c kh\u1ecfe m\u1ed7i ng\u01b0\u1eddi, c\xe1c y\u1ebfu t\u1ed1 di truy\u1ec1n,... Anh em c\xf3 th\u1ec3 d\u1ef1a v\xe0o k\u1ebft qu\u1ea3 \u01b0\u1edbc t\xednh \u0111\u1ec3 ngh\u1ec9 ng\u01a1i cho t\u1ec9nh t\xe1o tr\u01b0\u1edbc khi tham gia giao th\xf4ng ho\u1eb7c KH\xd4NG n\xean u\u1ed1ng r\u01b0\u1ee3u bia khi tham gia giao th\xf4ng.")))}),null),l.a.createElement(x,{formValues:function(e){return function(e){var a=M(e);r(a)}(e)}}),n.outputIngestedMl&&l.a.createElement((function(e){var a=e.alcohol;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{fill:!0,elevation:"small",round:"small",pad:"medium",background:"#ffffff",width:{max:"large"},margin:{top:"20px"}},l.a.createElement(m,{value:"".concat(a.outputIngestedMl," ml"),label:"\u0110\xe3 u\u1ed1ng v\xe0o"}),l.a.createElement(m,{value:"".concat(a.outputRemainingMl," ml"),label:"Sau ".concat(a.time," ph\xfat, c\xf2n l\u1ea1i trong c\u01a1 th\u1ec3")}),l.a.createElement(m,{value:"".concat(a.outputBAC," %"),label:"N\u1ed3ng \u0111\u1ed9 c\u1ed3n trong m\xe1u"})),l.a.createElement(c.a,{fill:!0,elevation:"small",round:"small",pad:"medium",background:"#ffffff",width:{max:"large"},margin:{top:"20px"},border:{color:"brand",size:"small"}},a.outputBAC>0&&l.a.createElement(c.a,{margin:{top:"12px"}},a.outputBAC>.12&&l.a.createElement(y.a,{textAlign:"center",size:"large",margin:{bottom:"8px"}},"Toang r\u1ed3i toang r\u1ed3i ~~"),l.a.createElement(y.a,{textAlign:"center"},"Ngh\u1ec9 ng\u01a1i \xedt nh\u1ea5t"," ",l.a.createElement(y.a,{weight:"bold",size:"large"},a.minutesToOhFive," ph\xfat")," ","r\u1ed3i l\xean \u0111\u01b0\u1eddng th\xf4ng ch\u1ed1t nh\xe9 ng\u01b0\u1eddi anh em thi\u1ec7n l\xe0nh!!!")),a.outputBAC<=0&&l.a.createElement(c.a,{margin:{top:"12px"}},l.a.createElement(y.a,{textAlign:"center",size:"large"},"Theo t\xednh to\xe1n th\xec b\u1ea1n c\xf3 th\u1ec3 l\xean \u0111\u01b0\u1eddng ngay, nh\u01b0ng m\xe0 nh\u1edb l\xe0 ph\u1ea3i \u0111i \u0111\u1ee9ng c\u1ea9n th\u1eadn nh\xe9."))))}),{alcohol:n})),l.a.createElement(c.a,{pad:{top:"20px",bottom:"20px"}},l.a.createElement(y.a,null,"Made by Quang Son with \u2764")),l.a.createElement(c.a,{pad:{bottom:"20px"}},l.a.createElement(y.a,{textAlign:"center"},"Tham kh\u1ea3o:"),l.a.createElement("a",{href:"https://www.wikihow.com/Calculate-Blood-Alcohol-Content-(Widmark-Formula)",target:"blank"},"How to Calculate Blood Alcohol Content (Widmark Formula)"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,a,n){e.exports=n(123)}},[[95,1,2]]]);
//# sourceMappingURL=main.049f1e39.chunk.js.map