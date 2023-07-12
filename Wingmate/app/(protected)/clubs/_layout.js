import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Tabs, useNavigation } from "expo-router";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

function HomeLayout() {
  return (
    <Stack />
  )
}

export default withAuthenticator(HomeLayout, {theme: theme});