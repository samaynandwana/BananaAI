import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <SafeAreaProvider>
      <Stack.Screen options={{headerShown: false}}/>
      <Tabs>
        <Tabs.Screen name="index" options={{tabBarLabel: "Home", headerShown: false}}/>
        <Tabs.Screen name="nav" options={{tabBarLabel: "Navigation", headerShown: false}}/>
      </Tabs>
    </SafeAreaProvider>
  )
}