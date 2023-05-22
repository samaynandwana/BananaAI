import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Nav() {
  return (
    <SafeAreaView>
      <Link href="">Home from nav</Link>
    </SafeAreaView>
  );
}