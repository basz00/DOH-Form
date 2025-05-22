import React from "react";
import type { ComponentMapperList, FormSchema, SchemaMapper } from "./types";

export const useDOHForm = (
  schema: FormSchema,
  schemaMapper: SchemaMapper,
  componentMapperList: ComponentMapperList
) => {
  function generateComponents() {
    return schema.map((field) => {
      const typeKey = schemaMapper.type;
      const typeValue = field[typeKey];

      const nameKey = schemaMapper.name;
      const nameValue = field[nameKey] as string;

      const labelKey = schemaMapper.label;
      const labelValue = field[labelKey] as string | undefined;

      const match = componentMapperList.find((item) => item.type === typeValue);
      if (!match) return null;

      return match.component(nameValue, labelValue);
    });
  }

  return { result: generateComponents() };
};
