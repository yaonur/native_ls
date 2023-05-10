import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-100">
      <Text className="text-blue-500">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar />
    </View>
  );
}
