import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Screen1() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1E1E", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "600" }}>
        Screen 3
      </Text>
    </SafeAreaView>
  );
}