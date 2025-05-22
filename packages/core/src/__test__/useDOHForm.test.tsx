import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useDOHForm } from "../useDOHForm";

const mockResultComponent = (
  type: string,
  fieldName: string,
  label?: string
) => (
  <div>
    {label ? <label>{label}</label> : null}
    <input type={type} name={fieldName} />
  </div>
);

const mockSchema = [
  {
    xType: "number",
    xName: "age",
    xLabel: "Input age",
  },
  {
    xType: "text",
    xName: "name",
    xLabel: "Input name",
  },
  {
    xType: "number",
    xName: "phone",
    xLabel: "Input phone",
  },
  {
    xType: "number",
    xName: "idNumber",
  },
  {
    xType: "text",
    xName: "address",
  },
];

const schemaMapper = {
  type: "xType",
  name: "xName",
  label: "xLabel",
};

const schemaToComponentMapper = [
  {
    type: "number",
    component: (name: string, label?: string) =>
      mockResultComponent("number", name, label),
  },
  {
    type: "text",
    component: (name: string, label?: string) =>
      mockResultComponent("text", name, label),
  },
];

describe("useDOHForm", () => {
  test("should return correct components", () => {
    const { result } = renderHook(() =>
      useDOHForm(mockSchema, schemaMapper, schemaToComponentMapper)
    );

    const expectedComponents = [
      mockResultComponent("number", "age", "Input age"),
      mockResultComponent("text", "name", "Input name"),
      mockResultComponent("number", "phone", "Input phone"),
      mockResultComponent("number", "idNumber"),
      mockResultComponent("text", "address"),
    ];

    const resultComponents = result.current.result;

    expect(resultComponents).toEqual(expectedComponents);
  });
});
