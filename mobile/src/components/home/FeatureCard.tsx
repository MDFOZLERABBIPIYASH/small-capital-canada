import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
    padding: 20,
    gap: 5,
    width: 250,
    minHeight: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    },

  description: {
    fontSize: 16,
    color: "#64748B",
    },
});


export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <Pressable>
        <View style={styles.card}>
        <Ionicons
        name={icon as any}
        size={28}
        color="#4F46E5"
        />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    </Pressable>
    
  );
}