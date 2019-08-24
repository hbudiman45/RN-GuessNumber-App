import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Styles from "../constants/default-styles";
import Color from "../constants/Color";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={Styles.title}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")} //from local
          source={{
            uri: "https://picsum.photos/id/1045/900"
          }} //from web
          style={styles.images}
          resizeMode="cover"
        />
      </View>

      <Text style={Styles.bodyText}>
        Number of Rounds:{" "}
        <Text style={styles.highlight}>{props.numberRounds}</Text>
      </Text>
      <Text style={Styles.bodyText}>
        Your number is: <Text style={styles.highlight}>{props.number}</Text>
      </Text>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  highlight: {
    color: Color.secondary
  },
  imageContainer: {
    width: 300,
    height: 300,
    // borderRadius: 200,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 30
  },
  images: {
    width: "100%",
    height: "100%"
  }
});

export default GameOverScreen;
