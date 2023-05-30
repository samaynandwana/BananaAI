import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

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
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.logo}>Wingmate</Text>
        <Text style={styles.subheading}>Krishna is a FAT FUCK!</Text>

        <TouchableOpacity style={styles.button} onPress={handleCreateClub}>
          <Text style={styles.buttonText}>Create Club</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleJoinClub}>
          <Text style={styles.buttonText}>Join Club</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 16,
  },
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#8b0000",
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    color: "#FFC0CB",
    fontStyle: "italic",
    marginBottom: 32,
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
    color: "#8b0000",
  },
});
