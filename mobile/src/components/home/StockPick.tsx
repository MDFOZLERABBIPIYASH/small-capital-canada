import { Image, Pressable, Text, View } from "react-native";

type Props = {
  logo: string;
  change: number;
  onPress?: () => void;
};

export default function StockPick({
  logo,
  change,
  onPress,
}: Props) {
  const isPositive = change >= 0;

  return (
    <View
      style={{
        alignItems: "center",
        marginRight: 18,
      }}
    >
      <Pressable onPress={onPress}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 999,
            backgroundColor: "#0B111B",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderWidth: 1.5,
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          {logo ? (
            <Image
              source={{ uri: logo }}
              style={{
                width: 64,
                height: 64,
              }}
              resizeMode="contain"
            />
          ) : (
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "700",
              }}
            >
              ?
            </Text>
          )}
        </View>
      </Pressable>

      <View
        style={{
          marginTop: 10,
          backgroundColor: "rgba(255,255,255,0.95)",
          paddingHorizontal: 14,
          paddingVertical: 6,
          borderRadius: 999,
          minWidth: 72,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 12,
            color: isPositive ? "#16A34A" : "#DC2626",
          }}
        >
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}