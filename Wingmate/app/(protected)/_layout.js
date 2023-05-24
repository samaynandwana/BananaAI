import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs, useNavigation } from "expo-router";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../src/auth-theme';

function AppLayout() {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen name="home" options={{tabBarLabel: "Home", headerShown: false}}/>
        <Tabs.Screen name="account" options={{tabBarLabel: "Account", headerShown: false}}/>
      </Tabs>
    </SafeAreaProvider>
  )
}

export default withAuthenticator(AppLayout, {theme: theme});