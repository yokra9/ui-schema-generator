import generator from "../lib/";
import {
  jsonSchema,
  fieldOptions,
  style,
  children,
  displayOptions,
  errorHandler,
  errorOptions,
  mergedErrorOptions,
} from "./resource";

const schema = jsonSchema.definitions.Schema;

describe("UiSchemaGenerator", () => {
  describe("constructors", () => {
    // 正常系
    it("should be an instance of generator", () => {
      // インスタンスの生成を確認
      expect(new generator(schema)).toBeInstanceOf(generator);
    });

    // 変なオプションを与えたとき
    it("shold not work with invalid schema", () => {
      // エラー吐いてほしい
      expect(() => {
        new generator();
      }).toThrowError(TypeError);
    });
  });

  describe("setDefaultFieldOptions", () => {
    // 正常系
    it("should be set property", () => {
      expect(new generator(schema)
        .setDefaultFieldOptions(fieldOptions)).toHaveProperty("fieldOptions", fieldOptions);
    });

    // チェーンメソッドであることを確認する
    it("should return instance", () => {
      expect(new generator(schema)
        .setDefaultFieldOptions(fieldOptions)).toBeInstanceOf(generator);
    });
  });

  describe("setDefaultErrorOptions", () => {
    // 正常系
    it("should be set property", () => {
      expect(new generator(schema)
        .setDefaultErrorOptions(errorOptions)).toHaveProperty("errorOptions", errorOptions);
    });

    // チェーンメソッドであることを確認する
    it("should return instance", () => {
      expect(new generator(schema)
        .setDefaultErrorOptions(errorOptions)).toBeInstanceOf(generator);
    });
  });

  describe("generate", () => {
    // 引数 component は必須
    it("should not work without component", () => {
      expect(() => {
        new generator(schema).generate();
      }).toThrowError(TypeError);
    });

    // 正常系 : models が未定義でも動く
    new Array(null, undefined, []).forEach((model) => {
      it("should generate uiSchema with " + JSON.stringify(model), () => {
        expect(new generator(schema)
          .generate(
            "div",
            model,
            fieldOptions,
            children,
            displayOptions,
            errorOptions,
            errorHandler
          )).toHaveProperty("uiSchema", [
            {
              component: "div",
              fieldOptions,
              children,
              displayOptions,
              errorHandler,
              errorOptions,
            },
          ]);
      });
    });

    // 正常系 : デフォルト値が反映されていることを確認する
    it("should generate uiSchema with merged options", () => {
      expect(new generator(schema)
        .setDefaultFieldOptions({ style })
        .setDefaultErrorOptions({ style })
        .generate(
          "div",
          undefined,
          { attrs: { label: "LABEL" } },
          children,
          displayOptions,
          errorOptions,
          errorHandler
        )).toHaveProperty("uiSchema", [
          {
            component: "div",
            fieldOptions: {
              attrs: { label: "LABEL" },
              style,
            },
            children,
            displayOptions,
            errorHandler,
            errorOptions: mergedErrorOptions,
          },
        ]);
    });

    // 正常系 : models があっても動く
    it("should generate uiSchema with models", () => {
      expect(new generator(schema)
        .generate(
          "div",
          ["model1", "model2"],
          fieldOptions,
          children,
          displayOptions,
          errorOptions,
          errorHandler
        )).toHaveProperty("uiSchema", [
          {
            component: "div",
            model: "model1",
            fieldOptions,
            children,
            displayOptions,
            errorHandler,
            errorOptions,
          },
          {
            component: "div",
            model: "model2",
            fieldOptions,
            children,
            displayOptions,
            errorHandler,
            errorOptions,
          },
        ]);
    });

    // 正常系 : オプションで関数が指定されていても動作する
    it("should work with functional options", () => {
      expect(new generator(schema)
        .setDefaultFieldOptions({ style })
        .setDefaultErrorOptions({ style })
        .generate(
          "div",
          null,
          { attrs: { label: (model, index) => index + ":" + model } },
          children,
          displayOptions,
          errorOptions,
          errorHandler
        )
        .generate(
          "div",
          ["model1", "model2"],
          { attrs: { label: (model, index) => index + ":" + model } },
          children,
          displayOptions,
          errorOptions,
          errorHandler
        )
        .generate(
          "div",
          ["model3"],
          { attrs: { label: (model, index) => index + ":" + model } },
          children,
          displayOptions,
          errorOptions,
          errorHandler
        )).toHaveProperty("uiSchema", [
          {
            component: "div",
            fieldOptions: {
              attrs: { label: "0:null" },
              style,
            },
            children,
            displayOptions,
            errorHandler,
            errorOptions: mergedErrorOptions,
          },
          {
            component: "div",
            model: "model1",
            fieldOptions: {
              attrs: { label: "1:model1" },
              style,
            },
            children,
            displayOptions,
            errorHandler,
            errorOptions: mergedErrorOptions,
          },
          {
            component: "div",
            model: "model2",
            fieldOptions: {
              attrs: { label: "2:model2" },
              style,
            },
            children,
            displayOptions,
            errorHandler,
            errorOptions: mergedErrorOptions,
          },
          {
            component: "div",
            model: "model3",
            fieldOptions: {
              attrs: { label: "3:model3" },
              style,
            },
            children,
            displayOptions,
            errorHandler,
            errorOptions: mergedErrorOptions,
          },
        ]);
    });

    // チェーンメソッドであることを確認する
    it("should return instance", () => {
      expect(new generator(schema)
        .setDefaultErrorOptions({ class: "testing" })).toBeInstanceOf(generator);
    });
  });

  describe("toArray", () => {
    // 正常系
    it("should be an array", () => {
      expect(new generator(schema).toArray()).toEqual([]);
    });

    it("should be an uiSchema", () => {
      expect(new generator(schema)
        .generate(
          "div",
          undefined,
          fieldOptions,
          children,
          displayOptions,
          errorOptions,
          errorHandler
        )
        .toArray()).toEqual([
          {
            component: "div",
            fieldOptions,
            children,
            displayOptions,
            errorHandler,
            errorOptions,
          },
        ]);
    });
  });
});
