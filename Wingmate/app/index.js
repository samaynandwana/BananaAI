import { Text, Pressable, View } from 'react-native';
import { useDeviceContext } from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import tw from 'twrnc';
<<<<<<< HEAD
import Amplify from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
=======
/*import Amplify, { Auth } from '@aws-amplify/core';
>>>>>>> c1d9bdf5b43e70e8f79718786b51bc7ee05d5ee6
import config from "../src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
<<<<<<< HEAD
});
Auth.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})
=======
}); */
>>>>>>> c1d9bdf5b43e70e8f79718786b51bc7ee05d5ee6

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
    <View style={tw.style('h-full')}>
      <LinearGradient
        colors={["#050505", "#5C1219"]}
        styles={{backgroundColor: "#050505"}}
      >
        <View style={tw`h-2/5 flex justify-center items-center`}>
          <View style={tw`flex flex-row`}> 
            <Text style={tw`text-5xl font-bold text-red-800 dark:text-red-500`}>Wing</Text>
            <Text style={tw`text-5xl text-red-800 dark:text-red-500`}>mate</Text>
          </View>
        </View>
        <View style={tw`h-3/5 flex justify-center items-center`}>
          <View>
            <Link href="test" asChild>
              <Pressable style={tw`rounded-full bg-emerald-700 dark:bg-emerald-500 py-3 w-64 mb-8`}>
                <Text style={tw`text-center font-semibold text-lg text-slate-100`}>Login</Text>
              </Pressable>
            </Link>
            <Pressable style={tw`rounded-full bg-emerald-700 dark:bg-emerald-500 py-3 w-64`} onPress={() => signOut()}>
              <Text style={tw`text-center font-semibold text-lg text-slate-100`}>Register</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

//export default withAuthenticator(App);
export default App;
