!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-the-filters",[],t):"object"==typeof exports?exports["vue-the-filters"]=t():e["vue-the-filters"]=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c});var o={};e.r(o),e.d(o,{datePretty:()=>n,datetimePretty:()=>r,upperFirst:()=>i});const n=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.toLocaleDateString("pt-BR",{year:"2-digit",month:"2-digit",day:"2-digit"}))},r=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.toLocaleDateString("pt-BR",{dateStyle:"short"})," - ").concat(t.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),"h")},i=function(e){return e?e=e.toLowerCase().split(" ").map((function(e,t){return e=e.replace(/-./,(function(e){return e.toUpperCase()})),["i","ii","iii","iv","xv"].includes(e)?e=e.toUpperCase():(0===t||e.length>2||"."===e.slice(-1)[0])&&!["sem","com","por","dos","das"].includes(e)&&(e=e[0].toUpperCase()+e.slice(1)),e})).join(" "):""};var a={install:function(e){Object.keys(o).forEach((function(t){e.filter(t)?console.warn("[filter duplication]: A filter named ".concat(t," has already been installed.")):e.filter(t,o[t])}))}};const c=a;return"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),t})()}));