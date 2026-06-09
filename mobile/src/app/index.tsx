import { ScrollView } from "react-native";
import { View } from "react-native";

import WelcomeHeader from "../components/home/WelcomeHeader";
import FeatureCards from "../components/home/FeatureCards";
import WelcomeHero from "../components/home/WelcomeHero";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1E1E1E",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <WelcomeHero />
        <FeatureCards />
      </ScrollView>
    </View>
  );
}