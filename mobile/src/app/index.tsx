import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeHeader from "../components/home/WelcomeHeader";
import FeatureCards from "../components/home/FeatureCards";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <WelcomeHeader />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
      </ScrollView>
    </SafeAreaView>
  );
}