(function(){"use strict";var e={3465:function(e,t,r){var n=r(144),o=r(6437),i=r(5138),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(o.Z,[r(i.Z,[r("vue-form-json-schema",{attrs:{schema:e.schema,"ui-schema":e.uiSchema,options:e.options},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)},u=[],s=r(3597),c=r.n(s),l=(r(243),r(8209)),f=r.n(l),d=JSON.parse('{"Cb":{"V":{"type":"object","additionalProperties":false,"properties":{"$schema":{"type":"string"},"firstName":{"type":"string","description":"Your First Name"},"familyName":{"type":"string","description":"Your Family Name"},"address":{"type":"string","description":"Your Address"},"country":{"type":"string","description":"Your Country","enum":["JP","SE"]}}}}}'),p=r(8128);n["default"].use(f());const m=d.Cb.V;var y={components:{VueFormJsonSchema:c()},data(){return{model:{},options:{showValidationErrors:!0},schema:m,uiSchema:new p.Z(m).setDefaultFieldOptions({attrs:{outlined:!0,label:e=>e||"",hint:e=>e?m.properties[e].description:""},class:"mt-5"}).setDefaultErrorOptions({attrs:{error:!0}}).generate("div",null,{style:{backgroundColor:"#043c78",color:"white"},class:"pl-1"},new p.Z(m).generate("h1",[],{domProps:{innerHTML:"Header"}}).toArray()).generate("v-text-field",["firstName","familyName","address","country"],{on:"input",attrs:{clearable:!0}}).generate("v-select",["country"],{on:"change",attrs:{items:m.properties.country.enum}}).generate("v-radio-group",["country"],{on:"change"},new p.Z(m).setDefaultFieldOptions({attrs:{label:(e,t)=>m.properties["country"].enum[t],value:(e,t)=>m.properties["country"].enum[t]}}).generate("v-radio",[]).generate("v-radio",[]).toArray()).toArray()}}},v=y,h=r(1001),g=(0,h.Z)(v,a,u,!1,null,null,null),b=g.exports,O=r(9165);n["default"].use(O.Z);var w=new O.Z({});n["default"].config.productionTip=!1,new n["default"]({vuetify:w,render:e=>e(b)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],u=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var l=s(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3465)}));n=r.O(n)})();
//# sourceMappingURL=app.ab270471.js.map