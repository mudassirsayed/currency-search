(this["webpackJsonpreact-api-project"]=this["webpackJsonpreact-api-project"]||[]).push([[0],{14:function(e,a,t){e.exports=t(39)},19:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(12),o=t.n(r),i=(t(19),t(2)),l=t(13),s=t.n(l),m=(t(37),t(38),function(e){var a=e.name,t=e.price,c=e.symbol,r=e.marketcap,o=e.volume,i=e.image,l=e.priceChange;return n.a.createElement("div",{className:"coin-container"},n.a.createElement("div",{className:"coin-row"},n.a.createElement("div",{className:"coin"},n.a.createElement("img",{src:i,alt:"crypto"}),n.a.createElement("h1",null,a),n.a.createElement("p",{className:"coin-symbol"},c)),n.a.createElement("div",{className:"coin-data"},n.a.createElement("p",{className:"coin-price"},"$",t),n.a.createElement("p",{className:"coin-volume"},"$",o.toLocaleString()),l<0?n.a.createElement("p",{className:"coin-percent red"},l.toFixed(2),"%"):n.a.createElement("p",{className:"coin-percent green"},l.toFixed(2),"%"),n.a.createElement("p",{className:"coin-marketcap"},"Mkt Cap: $",r.toLocaleString()))))});var p=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),p=l[0],u=l[1];Object(c.useEffect)((function(){s.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(e){r(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return n.a.createElement("div",{className:"coin-app"},n.a.createElement("div",{className:"coin-search"},n.a.createElement("h1",{className:"coin-text"},"Search a currency"),n.a.createElement("form",null,n.a.createElement("input",{className:"coin-input",type:"text",onChange:function(e){u(e.target.value)},placeholder:"Search"}))),d.map((function(e){return n.a.createElement(m,{key:e.id,name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.46551192.chunk.js.map