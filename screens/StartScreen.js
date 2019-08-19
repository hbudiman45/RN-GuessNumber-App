import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";

const StartScreen = props => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const inputHandler = inputText => {
    setValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    setConfirmed(true);
    setValue("");
    console.log(confirmed);
  };
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
            <Button title="Reset" onPress={resetInputHandler} />
            <Button title="Confirm" onPress={confirmInputHandler} />
          </View>
        </Card>
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
  }
});

export default StartScreen;
