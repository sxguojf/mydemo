import{c as B}from"./axios.07c1c759.js";import{m as f}from"./md4.ebb458dc.js";import{_ as F}from"./index.fe4cc012.js";import{i as C,j as r,o as E,c as h,a as u,t as p,p as D,d as S,n as g}from"./vendor.ee5d4042.js";const y=n=>(D("data-v-59e6e067"),n=n(),S(),n),j={class:"demo"},x={class:"left"},N=y(()=>u("div",{class:"caption"},"Contour Demo - \u8D77\u6B65",-1)),J={class:"tools"},O={class:"json"},b=C({setup(n){const e=r("Contour V3.0 typescript\u7248"),c=r("\u5355\u51FB\u6D4B\u8BD5\u6309\u94AE\uFF0C\u5C06\u8BFB\u53D6\u683C\u70B9\u6570\u636E\uFF0C\u5206\u6790\u7B49\u503C\u7EBF\uFF0C\u751F\u6210geojson\u6570\u636E\u3002"),a=(s,o="")=>{e.value+=`
---------------------------------------
`,e.value+=s,e.value+=`
---------------------------------------
`,e.value+=o,g(()=>{var t;return(t=i.value)==null?void 0:t.scrollTo({top:1e4,behavior:"smooth"})})};a("\u4E00\u884C\u8BED\u53E5\u5B9E\u73B0\u683C\u70B9\u6570\u636E\u7B49\u503C\u7EBF\u5206\u6790\u5E76\u8F6C\u4E3AGeoJSON\u3002");const i=r(),_=async s=>{const o=await f(s),t=o.data,m=o.levels;a(`\u6253\u5F00\u6587\u4EF6:${s}`,JSON.stringify(o.head,null,2));const d=B(t,m).smooth().toJSON(!0,!0,!0,{name:o.head.caption});a("\u7B49\u503C\u7EBF\u5C5E\u6027\u4FE1\u606F",JSON.stringify(d.properties)),c.value=JSON.stringify(d,(v,l)=>["levels","realLevels","coordinates"].includes(v)?`[${l.toString().substring(0,150)} ...]`:l,2),a("\u8F93\u51FAGeoJSON\u6587\u672C",`\u5B8C\u6210!



`)};return(s,o)=>(E(),h("div",j,[u("div",x,[N,u("pre",{ref_key:"infoDom",ref:i,class:"info"},p(e.value),513),u("div",J,[u("button",{onClick:o[0]||(o[0]=t=>_("./data/18020808.000"))},"\u6D4B\u8BD5")])]),u("pre",O,p(c.value),1)]))}});var w=F(b,[["__scopeId","data-v-59e6e067"]]);export{w as default};
