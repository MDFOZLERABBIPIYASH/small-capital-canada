import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="stock-details" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
<Stack
  screenOptions={{
    headerShown: false,
  }}
>
  <Stack.Screen name="index" />
  <Stack.Screen name="stock-details" />
</Stack>;