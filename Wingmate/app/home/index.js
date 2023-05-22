import { SafeAreaView, Text } from "react-native";
import { useNavigation, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          navigation.popToTop();
        }}
      >
        Home from index
      </Text>
    </SafeAreaView>
  );
}