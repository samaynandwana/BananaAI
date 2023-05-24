import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs, useNavigation } from "expo-router";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

function HomeLayout() {
  return (
    <SafeAreaProvider>
      <Stack.Screen options={{headerShown: false, gestureEnabled: false}}/>
      <Tabs>
        <Tabs.Screen name="index" options={{tabBarLabel: "Home", headerShown: false}}/>
        <Tabs.Screen name="nav" options={{tabBarLabel: "Navigation", headerShown: false}}/>
      </Tabs>
    </SafeAreaProvider>
  )
}

export default withAuthenticator(HomeLayout, {theme: theme});