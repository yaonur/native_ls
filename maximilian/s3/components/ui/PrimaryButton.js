import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton({ children,onPress }) {
//   ({ pressed }) =>
//           pressed
//             ? [styles.buttonInnerContainer, styles.buttonInnerContainer]
//             : [styles.buttonInnerContainer]
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.pressed ,styles.buttonInnerContainer]: styles.buttonInnerContainer}
        onPress={onPress}
		android_ripple={{ color: Colors.primary500 }}
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
    backgroundColor: Colors.primary600,
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
