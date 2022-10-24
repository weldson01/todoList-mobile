import { Home } from "./src/screens/home/Home";
import {
  useFonts,
  Changa_400Regular,
  Changa_700Bold,
} from "@expo-google-fonts/changa";
export default function App() {
  let [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Home />;
}
