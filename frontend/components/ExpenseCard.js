import { View, Text, StyleSheet } from "react-native";

export default function ExpenseCard({ expense }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{expense.title}</Text>
      <Text style={styles.amount}>${expense.amount}</Text>
      <Text style={styles.date}>{expense.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  title: { fontWeight: "bold", fontSize: 16 },
  amount: { color: "#1e90ff", fontWeight: "bold" },
  date: { color: "#666" },
});
