import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';
import React from 'react';
import tw from 'twrnc';
import { useDeviceContext } from "twrnc";

function Account() {
  useDeviceContext(tw);

  const router = useRouter();
  const navigation = useNavigation();

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
    </SafeAreaView>
  );
}

export default withAuthenticator(Account, {theme: theme});