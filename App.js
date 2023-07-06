import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Example from "./components/Example";

export default function App() {
  return (
    <View className="h-full items-center justify-center">
      <HomeScreen />
      <Example/>
      <Example/>
      <Example/>
      <Example/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
