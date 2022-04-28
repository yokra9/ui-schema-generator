# ui-schema-generator

[![Jest](https://github.com/yokra9/ui-schema-generator/actions/workflows/Jest.yml/badge.svg)](https://github.com/yokra9/ui-schema-generator/actions/workflows/Jest.yml)
[![npm version](https://badge.fury.io/js/ui-schema-generator.svg)](https://badge.fury.io/js/ui-schema-generator)
[![npm](https://img.shields.io/npm/dt/ui-schema-generator)](https://badge.fury.io/js/ui-schema-generator)

This is a helper library to use [Vue Form JSON Schema](https://github.com/jarvelov/vue-form-json-schema) . By specifying the model name as array, uiSchema can be generated collectively.

## demo

<https://yokra9.github.io/ui-schema-generator/dist/>

## interface

<https://yokra9.github.io/ui-schema-generator/UiSchemaGenerator.html>

## example

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
        // set Default Data Object
        .setDefaultFieldOptions({
          attrs: {
            outlined: true,
            // can set functionional value
            label: (model) => model || "",
            hint: (model) =>
              model ? Schema.properties[model].description : "",
          },
          class: "mt-5",
        })
        // set Default Error Options
        .setDefaultErrorOptions({
          attrs: {
            error: true,
          },
        })
        // generate uiSchema
        .generate(
          "div", // HTML tag or Vue Component
          null, // model assosiated with componets 
          // Data Object
          {
            style: { backgroundColor: "#043c78", color: "white" },
            class: "pl-1",
          },
          // can nest generator
          new generator(Schema)
            .generate("h1", [], { domProps: { innerHTML: "Header" } })
            .toArray()
        )
        // can also be generated collectively
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
        // set Enum for items
        .generate("v-select", ["country"], {
          on: "change",
          attrs: {
            items: Schema.properties.country.enum,
          },
        })
        // group component
        .generate(
          "v-radio-group",
          ["country"],
          {
            on: "change",
          },
          // child elements of group component
          new generator(Schema)
            .setDefaultFieldOptions({
              attrs: {
                // index stores the number of elements from the top of the uiSchema
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

see also: `/demo/`
