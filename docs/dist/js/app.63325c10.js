(function(){"use strict";var e={4276:function(e,t,r){var n=r(144),o=r(6437),i=r(5138),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(o.Z,[r(i.Z,[r("vue-form-json-schema",{attrs:{schema:e.schema,"ui-schema":e.uiSchema,options:e.options},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)},a=[],u=r(3597),l=r.n(u),c=(r(243),r(8209)),p=r.n(c),f=JSON.parse('{"Cb":{"V":{"type":"object","additionalProperties":false,"properties":{"$schema":{"type":"string"},"firstName":{"type":"string","description":"Your First Name"},"familyName":{"type":"string","description":"Your Family Name"},"address":{"type":"string","description":"Your Address"},"country":{"type":"string","description":"Your Country","enum":["JP","SE"]}}}}}'),d=(r(1703),r(8784)),h=r.n(d);
/**
 * 特定のコンポーネントもしくは HTML タグを利用した uiSchema をまとめて生成するクラス
 * @copyright yokra9
 * @license MIT
 */
class m{constructor(e){if(this.uiSchema=new Array,this.fieldOptions={},this.errorOptions={},!e)throw new TypeError("スキーマ定義がありません");this.schema=e}setDefaultFieldOptions(e){return this.fieldOptions=h().merge(this.fieldOptions,e),this}setDefaultErrorOptions(e){return this.errorOptions=h().merge(this.errorOptions,e),this}toArray(){return this.uiSchema}generate(e,t,r,n,o,i,s){if(!e)throw new TypeError("引数 component は必須です");return null==t||0==t.length?this.uiSchema.push({component:e,fieldOptions:h().mergeWith({},this.fieldOptions,r,((e,r)=>{if("function"==typeof r)return r(t,this.uiSchema.length)})),children:n,displayOptions:o,errorHandler:s,errorOptions:h().merge({},this.errorOptions,i)}):t.forEach((t=>{this.uiSchema.push({component:e,model:t,fieldOptions:h().mergeWith({},this.fieldOptions,r,((e,r)=>{if("function"==typeof r)return r(t,this.uiSchema.length)})),children:n,displayOptions:o,errorHandler:s,errorOptions:h().merge({},this.errorOptions,i)})})),this}}var y=m;n["default"].use(p());const g=f.Cb.V;var v={components:{VueFormJsonSchema:l()},data(){return{model:{},options:{showValidationErrors:!0},schema:g,uiSchema:new y(g).setDefaultFieldOptions({attrs:{outlined:!0,label:e=>e||"",hint:e=>e?g.properties[e].description:""},class:"mt-5"}).setDefaultErrorOptions({attrs:{error:!0}}).generate("div",null,{style:{backgroundColor:"#043c78",color:"white"},class:"pl-1"},new y(g).generate("h1",[],{domProps:{innerHTML:"Header"}}).toArray()).generate("v-text-field",["firstName","familyName","address","country"],{on:"input",attrs:{clearable:!0}}).generate("v-select",["country"],{on:"change",attrs:{items:g.properties.country.enum}}).generate("v-radio-group",["country"],{on:"change"},new y(g).setDefaultFieldOptions({attrs:{label:(e,t)=>g.properties["country"].enum[t],value:(e,t)=>g.properties["country"].enum[t]}}).generate("v-radio",[]).generate("v-radio",[]).toArray()).toArray()}}},O=v,b=r(1001),w=(0,b.Z)(O,s,a,!1,null,null,null),S=w.exports,j=r(9165);n["default"].use(j.Z);var E=new j.Z({});n["default"].config.productionTip=!1,new n["default"]({vuetify:E,render:e=>e(S)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,u=0;u<n.length;u++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,s=n[0],a=n[1],u=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var c=u(r)}for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4276)}));n=r.O(n)})();