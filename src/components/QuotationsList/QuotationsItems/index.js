import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function QuotationsItems(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.logoDayCotation}>
          <FontAwesome name="bitcoin" size={32} color="#daa520" />
          <Text style={styles.dayCotation}>{props.data}</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.priceCotation}>$ {props.valor}</Text>
      </View>
    </View>
  );
}
