import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Color";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.grey2,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "black",
    fontSize: 18
  }
});

export default Header;
