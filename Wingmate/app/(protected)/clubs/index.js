import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

const Clubs = () => {
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
};

export default withAuthenticator(Clubs, {theme: theme});





