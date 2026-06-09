import { Pressable, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function FeatureCard({
  title,
  description,
  icon,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 290,
        height: 170,
        marginRight: 16,
        
      }}
    >
      <BlurView
        intensity={0.8}
        tint="light"
        style={{
          flex: 1,
          overflow: "hidden",
          borderRadius: 20,
          backgroundColor: "rgba(38,38,38,0.9)",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.15)",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 18,
            paddingBottom: 18,
          }}
        >
          {/* Icon */}
          <Ionicons
            name={icon}
            size={28}
            color="#F5F5F5"
            style={{ marginBottom: 18 }}
          />

          {/* Title */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#F5F5F5",
              marginBottom: 10,
              letterSpacing: -0.3,
            }}
          >
            {title}
          </Text>

          {/* Description */}
          <Text
            numberOfLines={3}
            style={{
              fontSize: 15,
              lineHeight: 22,
              color: "#8A8A8A",
            }}
          >
            {description}
          </Text>
        </View>

      </BlurView>
    </Pressable>
  );
}