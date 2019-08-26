import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Color from "../constants/Color";
import TitleText from "./TitleText";

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: Dimensions.get("window").height * 0.09,
    paddingTop: Dimensions.get("window").height * 0.03,
    backgroundColor: Color.grey2,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
