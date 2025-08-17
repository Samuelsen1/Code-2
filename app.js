// App.js
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Welth</Text>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput style={styles.search} placeholder="Search..." />

      {/* WHO Section */}
      <TouchableOpacity style={styles.card}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/World_Health_Organization_Logo.svg/640px-World_Health_Organization_Logo.svg.png" }}
          style={styles.imageLarge}
        />
        <Text style={styles.caption}>WHO’s behind this? Know more!</Text>
      </TouchableOpacity>

      {/* Features Grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.feature}>
          <Image source={{ uri: "https://github.com/Samuelsen1/Few-Important-Pics/blob/main/manage.jpeg?raw=true" }} style={styles.image} />
          <Text style={styles.label}>Manage Condition</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feature}>
          <Image source={{ uri: "https://github.com/Samuelsen1/Few-Important-Pics/blob/main/trackmed.jpeg?raw=true" }} style={styles.image} />
          <Text style={styles.label}>Track Medication</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feature}>
          <Image source={{ uri: "https://github.com/Samuelsen1/Few-Important-Pics/blob/main/contactdoc.jpeg?raw=true" }} style={styles.image} />
          <Text style={styles.label}>Contact Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feature}>
          <Image source={{ uri: "https://github.com/Samuelsen1/Few-Important-Pics/blob/main/pharmacy.jpeg?raw=true" }} style={styles.image} />
          <Text style={styles.label}>Pharmacy Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "blue",
  },
  menuBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },
  menuText: {
    fontSize: 20,
  },
  search: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  card: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageLarge: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  caption: {
    marginTop: 8,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  feature: {
    width: "48%",
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    borderRadius: 8,
  },
  label: {
    marginTop: 5,
    fontWeight: "600",
  },
});
