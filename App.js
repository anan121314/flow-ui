import { SafeAreaProvider } from "react-native-safe-area-context"
import { StyleSheet } from "react-native";
import LoginScreen from "./Components/LoginPage";

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}

