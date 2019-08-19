import React from "react";
import { Text, StyleSheet } from "react-native";
import Color from "../constants/Color";

const NumberContainer = props => {
  return <Text style={styles.number}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  number: {
    color: Color.primary,
    fontSize: 25,
    borderColor: Color.primary,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10
  }
});

export default NumberContainer;
