import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import NotificationBell from "./NotificationBell";
import StockPick from "./StockPick";
import useStocks from "../../hooks/useStocks";
import { router } from "expo-router";

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
});

export default function WelcomeHero() {
  const { stocks, loading } = useStocks();

  return (
    <LinearGradient
      colors={[
        "#080B12",
        "#290707",
        "#6B0F0F",
        "#C5161D",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        height: 430,
        borderRadius: 32,
        overflow: "hidden",
        marginBottom: 24,
      }}
    >
      {/* Background Chart */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/29611783/pexels-photo-29611783.jpeg",
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.08,
        }}
      />

      {/* Dark Overlay */}
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,0.15)",
        }}
      />

      {/* Content */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Image
              source={{
                uri: "https://smallcapcanada.com/images/logo-icon.png",
              }}
              style={styles.logo}
            />

            <View style={{ flexShrink: 1 }}>
              <Text
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 16,
                }}
              >
                Welcome to
              </Text>

              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 22,
                  fontWeight: "700",
                  marginTop: 2,
                }}
              >
                Small Caps Canada
              </Text>
            </View>
          </View>

          <NotificationBell />
        </View>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Picks Title */}
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 20,
          }}
        >
          Today's Picks
        </Text>

        {/* Stocks Row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 12,
            }}
          >
            {loading ? (
              <Text
                style={{
                  color: "#FFFFFF",
                  opacity: 0.7,
                }}
              >
                Loading...
              </Text>
            ) : (
              stocks.map((stock) => (
                <StockPick
                  key={stock.symbol}
                  logo={stock.logo}
                  change={stock.change}
                  onPress={() => router.push("/screen1")}
                />
              ))
            )}
          </ScrollView>

          <Text
            onPress={() => router.push("/screen1")}
            
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "700",
              marginLeft: 5,
              marginBottom: 8,
            }}
          >
            View All
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}