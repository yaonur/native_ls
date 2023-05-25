import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [useNumber, setUseNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUseNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (useNumber) {
    screen = <GameScreen userChoice={useNumber} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgrounImage}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 16,
  },
  backgrounImage: {
    opacity: 0.25,
  },
});
