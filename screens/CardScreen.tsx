import * as React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { View } from "../components/Themed";

import TransactionSection from "../components/card-page/transaction-section";
import LimitSection from "../components/card-page/limit-section";

export default function CardScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../assets/images/card-images/CreatorCard.png")}
        />
      </TouchableOpacity>
      <Image
        style={{ marginTop: 20 }}
        source={require("../assets/images/card-images/perks.png")}
      />
      <LimitSection />
      <TransactionSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
