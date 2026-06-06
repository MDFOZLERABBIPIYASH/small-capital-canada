import { Text, View, StyleSheet } from "react-native";
import FeatureCard from "./FeatureCard";
import { featureCards } from "../../data/homeData";
import { ScrollView } from "react-native";  

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,

  }, 
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 20,
    paddingVertical: 20,

  },
  h2: {
    fontSize: 24,
    fontWeight: "700",
  }

});


export default function FeatureCards() {
    
  return (

    <View style={styles.container}>
        <Text style={styles.h2}>
            Explore
        </Text>
        
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
>
        <View style={styles.cardsContainer}>
            {featureCards.map((card) => (
                <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                />
            ))}
        </View>
    
</ScrollView>
    </View>

    
  
    );
}