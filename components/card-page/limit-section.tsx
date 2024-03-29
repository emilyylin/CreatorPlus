import React from "react";
import styles from "../../assets/styles/card-style";
import { useState } from "react";
import { Text, View } from "../Themed";

import * as Progress from "react-native-progress";

const limitSection = () => {
  return (
    <View>
      <Text style={styles.title}> Limit </Text>
      <View style={styles.limitBox}>
        <Progress.Bar
          progress={0.3}
          width={300}
          color="#00A876"
          borderRadius={13}
          animationType="decay"
          height={12}
        />
        <Text style={{ paddingTop: 10 }}>$1,200 / $5,000</Text>
        <Text style={{ paddingTop: 10, fontWeight: "bold" }}>
          Left in November
        </Text>
      </View>
    </View>
  );
};
export default limitSection;
