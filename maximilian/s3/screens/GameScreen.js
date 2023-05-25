import { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({userChoice}) {
	const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,userChoice))
  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
	  <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or Lower?</Text>
      </View>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
