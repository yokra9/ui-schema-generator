(function(){"use strict";var e={3465:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(144),o=t(6437),i=t(9837),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t(o.Z,[t(i.Z,[t("vue-form-json-schema",{attrs:{schema:e.schema,"ui-schema":e.uiSchema,options:e.options},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}})],1)],1)},a=[],c=(t(1539),t(2526),t(1817),t(3597)),s=t.n(c),l=(t(243),t(8209)),f=t.n(l),d=JSON.parse('{"Cb":{"V":{"type":"object","additionalProperties":false,"properties":{"$schema":{"type":"string"},"firstName":{"type":"string","description":"Your First Name"},"familyName":{"type":"string","description":"Your Family Name"},"address":{"type":"string","description":"Your Address"},"country":{"type":"string","description":"Your Country","enum":["JP","SE"]}}}}}'),p=t(8128);r["default"].use(f());var m=d.Cb.V,y={components:{VueFormJsonSchema:s()},data:function(){return{model:{},options:{showValidationErrors:!0},schema:m,uiSchema:new p.Z(m).setDefaultFieldOptions({attrs:{outlined:!0,label:function(e){return e||""},hint:function(e){return e?m.properties[e].description:""}},class:"mt-5"}).setDefaultErrorOptions({attrs:{error:!0}}).generate("div",null,{style:{backgroundColor:"#043c78",color:"white"},class:"pl-1"},new p.Z(m).generate("h1",[],{domProps:{innerHTML:"Header"}}).toArray()).generate("v-text-field",["firstName","familyName","address","country"],{on:"input",attrs:{clearable:!0}}).generate("v-select",["country"],{on:"change",attrs:{items:m.properties.country.enum}}).generate("v-radio-group",["country"],{on:"change"},new p.Z(m).setDefaultFieldOptions({attrs:{label:function(e,n){return m.properties["country"].enum[n]},value:function(e,n){return m.properties["country"].enum[n]}}}).generate("v-radio",[]).generate("v-radio",[]).toArray()).toArray()}}},v=y,h=t(1001),g=(0,h.Z)(v,u,a,!1,null,null,null),b=g.exports,O=t(1961);r["default"].use(O.Z);var w=new O.Z({});r["default"].config.productionTip=!1,new r["default"]({vuetify:w,render:function(e){return e(b)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3465)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.c83fa199.js.map