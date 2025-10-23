import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.replace("/home"), 1500);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <View style={styles.container}>
      {/* You can replace the Text with an Image if you have a logo in assets */}
      <Text style={styles.logo}>ExpenseTrack</Text>
      <Text style={styles.subtitle}>Manage your expenses simply</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f7f9fc" },
  logo: { fontSize: 34, fontWeight: "800", color: "#1e90ff" },
  subtitle: { marginTop: 8, color: "#666" },
});
