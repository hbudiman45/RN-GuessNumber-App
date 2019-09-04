import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  Platform
} from "react-native";
import Styles from "../constants/default-styles";
import Color from "../constants/Color";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  // if(Dimensions.get('window').width > 600) {
  //   return console.log('big screen')
  // }
  if (Platform.OS === "android") {
    console.log("android");
  } else if (Platform.OS === "ios") {
    console.log("ios");
  }
  return (
    <ScrollView>
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
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    // borderRadius: 200,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: Dimensions.get("window").height * 0.05
  },
  images: {
    width: "100%",
    height: "100%"
  }
});

export default GameOverScreen;
