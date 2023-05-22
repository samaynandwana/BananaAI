import { SafeAreaView, Text } from "react-native";
import { Link } from "expo-router";
import tw from 'twrnc';

export default function Test() {
  return (
    <SafeAreaView>
      <Link href="/home" asChild>
        <Text style={tw`text-center text-2xl mt-16`}>
          Test Screen
        </Text>
      </Link>
    </SafeAreaView>
  )
}