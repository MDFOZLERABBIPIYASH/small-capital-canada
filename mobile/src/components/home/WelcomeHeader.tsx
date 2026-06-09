import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StockChip from "./StockChip";

const placeholderStocks = [
  {
    symbol: "AAPL",
    change: 2.54,
  },
  {
    symbol: "TSLA",
    change: -1.32,
  },
  {
    symbol: "NVDA",
    change: 4.88,
  },
  {
    symbol: "MSFT",
    change: 1.64,
  },
];

export default function WelcomeHeader() {
  return (
    <LinearGradient
      colors={["#8B0000", "#3A0909", "#111111"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 28,
        padding: 24,
        marginBottom: 28,
      }}
    >
      
      {/* Greeting */}
      <Text
        style={{
          color: "#A1A1AA",
          fontSize: 16,
          marginBottom: 4,
        }}
      >
        Welcome to
      </Text>

      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 32,
          fontWeight: "700",
          marginBottom: 28,
        }}
      >
        Small Caps Canada
      </Text>

      {/* Portfolio */}
      <Text
        style={{
          color: "#A1A1AA",
          fontSize: 14,
          marginBottom: 6,
        }}
      >
        Portfolio Value
      </Text>

      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 38,
          fontWeight: "700",
        }}
      >
        $24,582.13
      </Text>

      <Text
        style={{
          color: "#22C55E",
          fontSize: 16,
          fontWeight: "600",
          marginTop: 6,
        }}
      >
        +$1,245.32 (+5.34%)
      </Text>

      {/* Stocks */}
      <View className="mt-8">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {placeholderStocks.map((stock) => (
            <StockChip
              key={stock.symbol}
              symbol={stock.symbol}
              change={stock.change}
            />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}