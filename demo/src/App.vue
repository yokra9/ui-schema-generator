<template>
  <v-app>
    <v-container>
      <vue-form-json-schema
        v-model="model"
        :schema="schema"
        :ui-schema="uiSchema"
        :options="options"
      />
    </v-container>
  </v-app>
</template>

<script>
import VueFormJsonSchema from "vue-form-json-schema";

import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import vuetify from "vuetify";
Vue.use(vuetify);

import jsonSchema from "./schema.json";
const Schema = jsonSchema.definitions.Schema;

import generator from "ui-schema-generator";

export default {
  components: {
    VueFormJsonSchema
  },
  data() {
    return {
      model: {},
      options: {
        showValidationErrors: true
      },
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
              clearable: true
            }
          }
        )
        .toArray()
    };
  }
};
</script>