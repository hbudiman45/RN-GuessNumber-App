import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Styles from "../constants/default-styles";

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

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(1, 10, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(10);

  const { userChoice, onGameOver } = props;

  //   useEffect runs after rendering
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    console.log(direction);
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(currRound => currRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={Styles.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <View style={styles.buttonGroup}>
          <Button title="Lower" onPress={() => nextGuessHandler("lower")} />
          <Button title="Greater" onPress={() => nextGuessHandler("greater")} />
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
