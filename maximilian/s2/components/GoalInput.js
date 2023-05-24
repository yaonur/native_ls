import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalTex] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalTex(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalTex("");
    props.onEndGoal();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.TextInput}
          placeholder="Course Goal"
          value={enteredGoalText}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add goal" color="#8349cf" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={props.onEndGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
    backgroundColor: "#1e085a",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
    width: "100%",
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
