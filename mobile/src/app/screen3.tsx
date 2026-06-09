import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Screen3() {
  return (
    <SafeAreaView className="flex-1 bg-[#1E1E1E] items-center justify-center">
      <Text className="text-white text-3xl font-bold">
        Screen 3
      </Text>
    </SafeAreaView>
  );
}