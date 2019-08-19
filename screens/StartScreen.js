import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Color from "../constants/Color";

const StartScreen = props => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = inputText => {
    setValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setValue("");
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.numberContainer}>
        <Text>Your Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game" color={Color.secondary} />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.input}>
          <Text>Select a number</Text>
          <Input
            style={styles.textInput}
            autoFocus
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            value={value}
          />
          <View style={styles.buttonGroup}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={Color.grey}
            />
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={Color.secondary}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  input: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  textInput: {
    width: "20%",
    textAlign: "center"
  },
  buttonGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  numberContainer: {
    marginVertical: 20,
    alignItems: "center"
  }
});

export default StartScreen;
