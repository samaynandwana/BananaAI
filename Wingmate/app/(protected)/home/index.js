import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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

      <Text style={styles.heading}>Welcome to Wingmate</Text>
      <Text style={styles.subheading}>Krishna is a fat monkey!</Text>
    </SafeAreaView>
  );
}
export default withAuthenticator(Home, {theme: theme});

const styleOne = {
  createCreateText: {
    fontSize: 25,
    color: '#8b0000',
    marginTop: 30,
  }
};

const styleTwo = {
    createBackText: {
      fontSize: 20,
      color: 'black',
      marginTop: 0
    }
}

const styleThree = {
  createJoinText: {
    fontSize: 25,
    color: '#8b0000',
    marginTop: 0
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    marginTop: 20
  },
  subheading: {
    fontSize: 100,
    color: '#FFC0CB',
  },
});









