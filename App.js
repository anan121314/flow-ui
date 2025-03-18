import { SafeAreaProvider } from "react-native-safe-area-context"
import LoginScreen from "./Components/LoginPage";
import { StyleSheet, StatusBar } from "react-native";


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
  },
});

