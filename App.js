import { SafeAreaProvider } from "react-native-safe-area-context"
import LoginScreen from "./Components/LoginPage";

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}

