import { View, Text, Image, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
    container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
  },
  textContainer: {
    flexDirection: "column",
  },

  greeting: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    },

    subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 4,
    },
  
});

export default function WelcomeHeader() {
  return (
    <View style={styles.container}>
        <View style={styles.leftSection}>
        <Image
        source={{
          uri: "https://smallcapcanada.com/images/logo-icon.png",
        }}
        style={styles.avatar}
      />  
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Hello</Text>
        <Text style={styles.subtitle}>Welcome to Small Caps Canada</Text>
      </View>
    </View>
    <Pressable>
    <Ionicons
        name="notifications-outline"
        size={28}
        color="black"
    />
    </Pressable>
    </View>
    
  );
}