import { Text, View } from "react-native";
import { hello } from "@doh-form/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{hello()}</Text>
    </View>
  );
}
