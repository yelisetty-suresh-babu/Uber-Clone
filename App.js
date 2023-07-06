import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}
