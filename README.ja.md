# ui-schema-generator

[![Jest](https://github.com/yokra9/ui-schema-generator/actions/workflows/Jest.yml/badge.svg)](https://github.com/yokra9/ui-schema-generator/actions/workflows/Jest.yml)
[![npm version](https://badge.fury.io/js/ui-schema-generator.svg)](https://badge.fury.io/js/ui-schema-generator)
[![npm](https://img.shields.io/npm/dt/ui-schema-generator)](https://badge.fury.io/js/ui-schema-generator)

[Vue Form JSON Schema](https://github.com/jarvelov/vue-form-json-schema) を利用する際、uiSchema 定義を手助けするライブラリです。モデル名を配列で指定することで、uiSchema をまとめて生成することができます。

## デモ

<https://yokra9.github.io/ui-schema-generator/dist/>

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
    VueFormJsonSchema,
  },
  data() {
    return {
      model: {},
      options: {
        showValidationErrors: true,
      },
      schema: Schema,
      uiSchema: new generator(Schema)
        // データオブジェクトのデフォルト値をセット
        .setDefaultFieldOptions({
          attrs: {
            outlined: true,
            // 値として function(model) を取ることもできる。
            label: (model) => model || "",
            hint: (model) =>
              model ? Schema.properties[model].description : "",
          },
          class: "mt-5",
        })
        // エラーオプションのデフォルト値をセット
        .setDefaultErrorOptions({
          attrs: {
            error: true,
          },
        })
        // uiSchema を生成
        .generate(
          "div", // HTML タグ名
          null, // 要素と紐付けるモデル。未定義の場合は紐付けない
          // データオブジェクト
          {
            style: { backgroundColor: "#043c78", color: "white" },
            class: "pl-1",
          },
          // 子要素。UiSchemaGenerator のネストも可能
          new generator(Schema)
            .generate("h1", [], { domProps: { innerHTML: "Header" } })
            .toArray()
        )
        // 同じような uiSchema はまとめて生成することも可能
        .generate(
          "v-text-field",
          ["firstName", "familyName", "address", "country"],
          {
            on: "input",
            attrs: {
              clearable: true,
            },
          }
        )
        // 選択肢には Enum を指定すると便利
        .generate("v-select", ["country"], {
          on: "change",
          attrs: {
            items: Schema.properties.country.enum,
          },
        })
        // グループ化されているコンポーネントの場合
        .generate(
          "v-radio-group",
          ["country"],
          {
            on: "change",
          },
          // 子要素でも準備が必要
          new generator(Schema)
            .setDefaultFieldOptions({
              attrs: {
                // indexにはuiSchemaの先頭から何要素であるかが格納される
                label: (_model, index) =>
                  Schema.properties["country"].enum[index],
                value: (_model, index) =>
                  Schema.properties["country"].enum[index],
              },
            })
            .generate("v-radio", [])
            .generate("v-radio", [])
            .toArray()
        )
        .toArray(),
    };
  },
};
```

`/demo/` 内のコードも参考にしてください。
