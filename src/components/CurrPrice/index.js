import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function CurrPrice(props) {
  return (
    <View style={styles.headerPrice} >
      <Text style={styles.currPrice} >$ {props.infoCurrCotation}</Text>
      <Text style={styles.textPrice} >Última cotação</Text>
    </View>
  );
}
