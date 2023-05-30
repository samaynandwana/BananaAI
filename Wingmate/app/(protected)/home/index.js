import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../../src/auth-theme';

import logoImage from './splash1.png';

function Home() {
  const router = useRouter();
  const navigation = useNavigation();

  const handleSignOut = () => {
    router.push('/sign-out');
    Auth.signOut({ global: true });
  };

  const handleCreateClub = () => {
    router.push('/create');
  };

  const handleJoinClub = () => {
    router.push('/join');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FF0000', '#000000']}
        style={styles.gradientBackground}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image source={logoImage} style={styles.logo} />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleCreateClub}>
            <Text style={styles.buttonText}>Create Club</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleJoinClub}>
            <Text style={styles.buttonText}>Join Club</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default withAuthenticator(Home, { theme: theme });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "italic",
    color: "white",
    marginBottom: 50,
    //textShadowColor: "rgba(0, 0, 0, 0.75)",
    //textShadowOffset: { width: 2, height: 2 },
    //textShadowRadius: 3,
  },
  logoContainer: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 7,
  },
  logo: {
    width: 190,
    height: 98,
    marginBottom: 100,
  },
  subheading: {
    fontSize: 24,
    color: "white",
    fontStyle: "italic",
    marginBottom: 32,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  button: {
    backgroundColor: "#8b0000",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  signOutButton: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  signOutButtonText: {
    fontSize: 18,
    color: "white",
  },
});