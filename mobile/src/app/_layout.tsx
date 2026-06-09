import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "600",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="screen1"
          options={{
            title: "All Stocks",
          }}
        />

        <Stack.Screen
          name="screen2"
          options={{
            title: "Potential Breakouts",
          }}
        />

        <Stack.Screen
          name="screen3"
          options={{
            title: "Recent News",
          }}
        />

        <Stack.Screen
          name="stock/index"
          options={{
            title: "Stock Details",
          }}
        />
      </Stack>
    </>
  );
}