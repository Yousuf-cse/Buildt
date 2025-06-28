import { SchemaDefinitionProperty } from "mongoose";

const requiredString: SchemaDefinitionProperty = {
  type: String,
  required: true,
};

const optionalNullString: SchemaDefinitionProperty = {
  type: String,
  default: null,
};

const requiredNumber: SchemaDefinitionProperty = {
  type: Number,
  required: true,
};

const optionalNullNumber: SchemaDefinitionProperty = {
  type: Number,
  default: null,
};

const optionalBoolean: SchemaDefinitionProperty = {
  type: Boolean,
  // required: false,
  default: false,
};

const requiredBoolean: SchemaDefinitionProperty = {
  type: Boolean,
  required: false,
};

const schemaDefintionProperty = {
  requiredString,
  optionalBoolean,
  requiredNumber,
  optionalNullNumber,
  optionalNullString,
  requiredBoolean,
};

const SCHEMA_DEFINITION_PROPERTY = schemaDefintionProperty;

export default SCHEMA_DEFINITION_PROPERTY;
