import { Text, Pressable, View } from 'react-native';
import { useDeviceContext } from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, Redirect } from 'expo-router';
import tw from 'twrnc';
import Amplify from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
import awsconfig from "../src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import theme from '../src/auth-theme';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
Auth.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
})

function App() {
  useDeviceContext(tw);

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <Redirect href='/home'/>
  );
}

export default withAuthenticator(App, {theme: theme});
//export default App;
