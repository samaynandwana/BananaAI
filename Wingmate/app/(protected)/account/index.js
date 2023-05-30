import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';
import React from 'react';

function Account() {
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
    </SafeAreaView>
  );
}

export default withAuthenticator(Account, {theme: theme});