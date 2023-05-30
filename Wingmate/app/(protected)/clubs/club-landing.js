import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

const Clubs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#7289DA', '#36393F']} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={'./fisherscc.jpg'} style={styles.logo} />
          </View>
          <Text style={styles.title}>Club Events</Text>
          <Text style={styles.description}>Promotions</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default withAuthenticator(Clubs, {theme: theme});





