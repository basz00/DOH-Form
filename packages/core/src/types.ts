import type { ReactElement } from "react";

export type FormSchemaField = Record<string, unknown>;

export type FormSchema = FormSchemaField[];

export type SchemaMapper = {
  type: string;
  name: string;
  label: string;
};

export type ComponentMapper = {
  type: string;
  component: (fieldName: string, label?: string) => ReactElement;
};

export type ComponentMapperList = ComponentMapper[];
