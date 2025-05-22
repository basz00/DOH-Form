import { useDOHForm } from "@doh-form/core";
import { v4 as uuidv4 } from "uuid";
import { default as jsonExample } from "../src/assets/example.json";

const mockInput = (type: string, fieldName: string, label?: string) => (
  <div key={uuidv4()} className="flex flex-col gap-0.5">
    {label ? <label>{label}</label> : null}
    <input
      type={type}
      name={fieldName}
      className="border rounded-md px-2 py-1"
    />
  </div>
);

const schemaMapper = {
  type: "the_type",
  name: "the_name",
  label: "the_label",
};

const schemaToComponentMapper = [
  {
    type: "name",
    component: (fieldName: string, label?: string) =>
      mockInput("name", fieldName, label),
  },
  {
    type: "month",
    component: (fieldName: string, label?: string) =>
      mockInput("month", fieldName, label),
  },
  {
    type: "number",
    component: (fieldName: string, label?: string) =>
      mockInput("number", fieldName, label),
  },
];

function App() {
  const { result } = useDOHForm(
    jsonExample,
    schemaMapper,
    schemaToComponentMapper
  );

  return (
    <div className="h-full w-screen flex items-center justify-center py-4">
      <div className="flex flex-col gap-4">{result}</div>
    </div>
  );
}

export default App;
