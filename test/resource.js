import _ from "lodash"

exports.jsonSchema = {
    "$schema": "http://json-schema.org/draft-06/schema",
    "$ref": "#/definitions/Schema",
    "definitions": {
        "Schema": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "$schema": {
                    "type": "string"
                },
                "someProperty": {
                    "type": "string",
                }
            }
        }
    }
}

exports.fieldOptions = { class: "fieldOptions" }

const style = { color: 'red' } 
exports.style = style

exports.children = [
    {
        component: "div",
        fieldOptions: {},
        children: undefined,
        displayOptions: undefined,
        errorHandler: undefined,
        errorOptions: undefined
    }
]

exports.displayOptions = {
    "Schema": {
        "type": "object",
        "properties": {
            "someProperty": {
                "type": "string",
            }
        },
        "required": "someProperty"
    }
}

exports.errorHandler = true

const errorOptions = { class: "errorOptions" }
exports.errorOptions = errorOptions

exports.mergedErrorOptions = _.merge(errorOptions, {style: style})
