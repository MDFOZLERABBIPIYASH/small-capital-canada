import { Image, Text, View } from "react-native";

type StockChipProps = {
  symbol: string;
  change: number;
  logo?: string;
};

export default function StockChip({
  symbol,
  change,
  logo,
}: StockChipProps) {
  const isPositive = change >= 0;

  return (
    <View
      className="mr-3 rounded-2xl border px-4 py-3"
      style={{
        backgroundColor: "rgba(255,255,255,0.08)",
        borderColor: "rgba(255,255,255,0.12)",
        minWidth: 100,
      }}
    >
      <View className="flex-row items-center">
        {logo ? (
          <Image
            source={{ uri: logo }}
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              marginRight: 8,
            }}
          />
        ) : (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "#444",
              marginRight: 8,
            }}
          />
        )}

        <Text
          style={{
            color: "#fff",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          {symbol}
        </Text>
      </View>

      <Text
        style={{
          marginTop: 8,
          color: isPositive ? "#22C55E" : "#EF4444",
          fontWeight: "600",
          fontSize: 14,
        }}
      >
        {isPositive ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
      </Text>
    </View>
  );
}