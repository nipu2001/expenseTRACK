import { useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import api from "../services/api";
import ExpenseCard from "../components/ExpenseCard";

export default function FilterScreen() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleFilter = async () => {
    try {
      const res = await api.get(`/expenses/filter?from=${from}&to=${to}`);
      setFiltered(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput placeholder="From (YYYY-MM-DD)" value={from} onChangeText={setFrom} style={styles.input} />
      <TextInput placeholder="To (YYYY-MM-DD)" value={to} onChangeText={setTo} style={styles.input} />
      <Button title="Filter" onPress={handleFilter} />
      <FlatList data={filtered} keyExtractor={e => e.id.toString()} renderItem={({ item }) => <ExpenseCard expense={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
