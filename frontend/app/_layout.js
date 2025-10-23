import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1e90ff" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#f8f8f8" },
        }}
      />
    </SafeAreaProvider>
  );
}
