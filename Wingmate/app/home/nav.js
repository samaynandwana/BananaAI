import { SafeAreaView, Text } from "react-native";
import { useNavigation, useRouter } from "expo-router";

export default function Nav() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          navigation.popToTop();
        }}
      >
        Home from nav
      </Text>
    </SafeAreaView>
  );
}