import { ScrollView, Text, View } from "react-native";
import FeatureCard from "./FeatureCard";
import { featureCards } from "../../data/homeData";
import { router } from "expo-router";

export default function FeatureCards() {
  return (
    <View className="mt-8">
      <Text
        style={{
          color: "#F5F5F5",
          fontSize: 32,
          fontWeight: "700",
          marginBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        Explore
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        {featureCards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon as any}
            onPress={() => router.push(card.route)}
          />
        ))}
      </ScrollView>
    </View>
  );
}