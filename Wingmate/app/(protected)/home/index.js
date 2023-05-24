import { SafeAreaView, Text } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          router.push('/sign-out');
          Auth.signOut({global: true});
        }}
      >
        In home dir, press this to sign out
      </Text>
    </SafeAreaView>
  );
}

export default withAuthenticator(Home, {theme: theme});