import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateNumber(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState(generateNumber(1, 100));
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>55</NumberContainer>
      <Card style={styles.card}>
        <View style={styles.buttonGroup}>
          <Button title="Lower" />
          <Button title="Greater" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  card: {
    marginVertical: 20
  }
});

export default GameScreen;
