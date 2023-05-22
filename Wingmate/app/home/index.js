import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView>
      <Link href="/home/nav">Home from index</Link>
    </SafeAreaView>
  );
}