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
        style={styleTwo.createBackText}
        onPress={() => {
          router.push('/sign-out');
          Auth.signOut({global: true});
        }}
      >
        Signout
      </Text>
      <Text
        style={styleOne.createCreateText}
        onPress={() => {
          router.push('/create')}
        }
      >
        Create Club
      </Text>
      <Text
        style={styleThree.createJoinText}
        onPress={() => {
          router.push('/join')}
        }
      >
        Join Club
      </Text>
    </SafeAreaView>
  );
}
export default withAuthenticator(Home, {theme: theme});

const styleOne = {
  createCreateText: {
    fontSize: 25,
    color: '#8b0000',
    marginTop: 30,
  },
};

const styleTwo = {
    createBackText: {
      fontSize: 20,
      color: 'black',
      marginTop: 10
    }
}

const styleThree = {
  createJoinText: {
    fontSize: 25,
    color: '#8b0000',
    marginTop: 0
  }
}







