# ui-schema-generator

[![Build Status](https://travis-ci.com/yokra9/ui-schema-generator.svg?branch=master)](https://travis-ci.com/yokra9/ui-schema-generator) [![npm version](https://badge.fury.io/js/ui-schema-generator.svg)](https://badge.fury.io/js/ui-schema-generator)

[Vue Form JSON Schema](https://github.com/jarvelov/vue-form-json-schema) を利用する際、uiSchema 定義を手助けするライブラリです。モデル名を配列で指定することで、uiSchema をまとめて生成することができます。

## インターフェース

GitHub Pages を参照
<https://yokra9.github.io/ui-schema-generator/UiSchemaGenerator.html>

## 利用例

```vue
<template>
  <v-app>
    <v-container>
      <vue-form-json-schema v-model="model" :schema="schema" :ui-schema="uiSchema" />
    </v-container>
  </v-app>
</template>

<script>
import VueFormJsonSchema from "vue-form-json-schema";
import generator from "ui-schema-generator";

import jsonSchema from "./schema.json";
const Schema = jsonSchema.definitions.Schema;

import "vuetify/dist/vuetify.min.css";
import Vue from "vue"
import vuetify from "vuetify"
Vue.use(vuetify)

export default {
  components: {
    VueFormJsonSchema
  },
  data() {
    return {
      model: {},
      schema: Schema,
      uiSchema: new generator(Schema)
        // データオブジェクトのデフォルト値をセット
        .setDefaultFieldOptions({
          attrs: {
            outlined: true,
            // 値として function(model) を取ることもできる。
            label: model => model,
            hint: model => Schema.properties[model].description
          },
          class: "mt-5"
        })
        // エラーオプションのデフォルト値をセット
        .setDefaultErrorOptions({
          attrs: {
            error: true
          }
        })
        // uiSchema を生成
        .generate(
          "div", // HTML タグ名
          undefined, // 要素と紐付けるモデル。未定義の場合は紐付けない
          // データオブジェクト
          {
            style: { backgroundColor: "#043c78", color: "white" },
            class: "pl-1"
          },
          // 子要素。UiSchemaGenerator のネストも可能
          new generator(Schema)
            .generate("h1", [], { domProps: { innerHTML: "見出し" } })
            .toArray()
        )
        // 同じような uiSchema はまとめて生成することも可能
        .generate("v-text-field", ["firstName","familyName","address","country"], {
          on: "input",
          attrs: {
            clearable: true
          }
        })
        .toArray()
    };
  }
};
</script>
```
