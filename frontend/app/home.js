import { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import api from "../services/api";
import ExpenseCard from "../components/ExpenseCard";

export default function Home() {
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    api.get("/expenses").then(res => setExpenses(res.data)).catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ExpenseCard expense={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No expenses yet</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push("/add")}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  empty: { textAlign: "center", marginTop: 20, color: "#666" },
  button: {
    backgroundColor: "#1e90ff",
    padding: 14,
    borderRadius: 12,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    paddingHorizontal: 24,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
