import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../../src/auth-theme';

function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  const handleSignOut = () => {
    router.push('/sign-out');
    Auth.signOut({ global: true });
  };

  return (
    <SafeAreaView>
    
    </SafeAreaView>
  );
}

export default withAuthenticator(Home, { theme: theme });
