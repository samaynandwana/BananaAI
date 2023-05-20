import { Text, SafeAreaView, Pressable, View } from 'react-native';
import { useDeviceContext } from 'twrnc';
import tw from 'twrnc';

//import tw from './lib/tailwind';

export default function App() {
  useDeviceContext(tw);
  return (
    <SafeAreaView style={tw`bg-slate-100 dark:bg-slate-800 h-full`}>
      <View style={tw`h-2/5 flex justify-center items-center`}>
        <View style={tw`flex flex-row`}> 
          <Text style={tw`text-5xl font-bold text-red-800 dark:text-red-500`}>Wing</Text>
          <Text style={tw`text-5xl text-red-800 dark:text-red-500`}>mate</Text>
        </View>
      </View>
      <View style={tw`h-3/5 flex justify-center items-center`}>
        <View>
          <Pressable style={tw`rounded-full bg-emerald-700 dark:bg-emerald-500 py-3 w-64 mb-8`}>
            <Text style={tw`text-center font-semibold text-lg text-slate-100`}>Login</Text>
          </Pressable>
          <Pressable style={tw`rounded-full bg-emerald-700 dark:bg-emerald-500 py-3 w-64`}>
            <Text style={tw`text-center font-semibold text-lg text-slate-100`}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
