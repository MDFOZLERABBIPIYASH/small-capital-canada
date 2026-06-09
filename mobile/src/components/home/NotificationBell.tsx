import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NotificationBell() {
  return (
    <View
      style={{
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name="notifications-outline"
        size={28}
        color="white"
      />

      <View
        style={{
          position: "absolute",
          top: 8,
          right: 6,
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: "#FF2D2D",
        }}
      />
    </View>
  );
}