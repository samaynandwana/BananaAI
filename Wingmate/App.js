import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <SafeAreaView style={tw`bg-gray-800 h-full`}>
      <View style={tw`h-2/5 flex justify-center items-center`}>
        <Text style={tw`text-5xl text-red-400`}>Wingmate</Text>
      </View>
      <View style={tw`h-3/5 flex justify-center items-center`}>
        <View>
          <Pressable style={tw`rounded-full bg-blue-400 py-4 w-64 mb-8`}>
            <Text style={tw`text-center`}>Login</Text>
          </Pressable>
          <Pressable style={tw`rounded-full bg-blue-400 py-4 w-64`}>
            <Text style={tw`text-center`}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
