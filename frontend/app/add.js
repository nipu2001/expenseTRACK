import { useState } from "react";
import { Text, TextInput, Button, KeyboardAvoidingView, Platform, StyleSheet, ScrollView } from "react-native";
import api from "../services/api";
import { useRouter } from "expo-router";

export default function AddExpense() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    try {
      await api.post("/expenses", { title, amount, category, date });
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Add Expense</Text>
        <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
        <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
        <TextInput placeholder="Category" value={category} onChangeText={setCategory} style={styles.input} />
        <TextInput placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={styles.input} />
        <Button title="Save Expense" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
