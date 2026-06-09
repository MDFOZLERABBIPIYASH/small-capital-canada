import { Image, Text, View } from "react-native";

import { router } from "expo-router";

type Props = {
  image: any;
  title: string;
  description: string;
  button: string;
};


export default function BannerCard({
  image,
  title,
  description,
}: Props) {
  return (
    <View
      style={{
        height: 220,
        borderRadius: 24,
        width: "90%",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.15)",
        backgroundColor: "#242424",
        flexDirection: "row",
        padding: 20,
        
        // marginHorizontal: 20,
        marginTop: 30,
      }}
    >
      {/* Image */}
      <View
        style={{
          width: "42%",
          justifyContent: "flex-end",
        }}
      >
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      {/* Content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 28,
            marginBottom: 12,
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            color: "#8A8A8A",
            fontSize: 15,
            lineHeight: 24,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}