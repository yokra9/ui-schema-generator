# ui-schema-generator

[![Build Status](https://travis-ci.com/yokra9/ui-schema-generator.svg?branch=master)](https://travis-ci.com/yokra9/ui-schema-generator) [![npm version](https://badge.fury.io/js/ui-schema-generator.svg)](https://badge.fury.io/js/ui-schema-generator)

This is a helper library to use [Vue Form JSON Schema](https://github.com/jarvelov/vue-form-json-schema) . By specifying the model name as array, uiSchema can be generated collectively.

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
    VueFormJsonSchema
  },
  data() {
    return {
      model: {},
      schema: Schema,
      uiSchema: new generator(Schema)
        // set Default Data Object
        .setDefaultFieldOptions({
          attrs: {
            outlined: true,
            // can set functionional value
            label: model => model,
            hint: model => Schema.properties[model].description
          },
          class: "mt-5"
        })
        // set Default Error Options
        .setDefaultErrorOptions({
          attrs: {
            error: true
          }
        })
        // generate uiSchema
        .generate(
          "div", // HTML tag or Vue Component
          undefined, // model assosiated with componets 
          // Data Object
          {
            style: { backgroundColor: "#043c78", color: "white" },
            class: "pl-1"
          },
          // can nest generator
          new generator(Schema)
            .generate("h1", [], { domProps: { innerHTML: "HEADER" } })
            .toArray()
        )
        // can also be generated collectively
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
