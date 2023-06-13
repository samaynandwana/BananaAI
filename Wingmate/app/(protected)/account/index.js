import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';
import React from 'react';
import tw from 'twrnc';
import { useDeviceContext } from "twrnc";
import axios from 'axios';

function Account() {
  useDeviceContext(tw);

  const router = useRouter();
  const navigation = useNavigation();
  const ip_address = "<YOUR_IP_ADDRESS_HERE>";

  const printToken = async () => {
    const { accessToken: { jwtToken } } = await Auth.currentSession();
    const { data } = await axios.get(`http://${ip_address}:3000/api/clubs/test_club`, {
      headers: {
        authorization: jwtToken
      }
    });
    console.log(data);
  }

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          router.push("/sign-out");
          Auth.signOut({global: true});
        }}
      >
        Sign out from home in account
      </Text>
      <Link href="/account/nav">Go to nav</Link>
      <Link href="/account/profile">Go to profile</Link>
      <Text style={tw`text-red-500 dark:text-purple-800`}>
        This text changes based on whether you are in light or dark mode
      </Text>
      <TouchableOpacity onPress={printToken}>
        <Text>Press to print jwt token in the console</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default withAuthenticator(Account, {theme: theme});