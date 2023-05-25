import { Text, View, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("PrimaryButton pressed");
  }
//   ({ pressed }) =>
//           pressed
//             ? [styles.buttonInnerContainer, styles.buttonInnerContainer]
//             : [styles.buttonInnerContainer]
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.pressed ,styles.buttonInnerContainer]: styles.buttonInnerContainer}
        onPress={pressHandler}
		android_ripple={{ color: "#f1f1f1" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#70093c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 1,
	backgroundColor: "#273ae4",
  },
});
