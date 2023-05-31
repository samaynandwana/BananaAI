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
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FF0000', '#000000']}
        style={styles.gradientBackground}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('../../../assets/splash1.png')} style={styles.logo} />
          </View>

          <Link href="/clubs/create" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create Club</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/clubs/join" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Join Club</Text>
            </TouchableOpacity>
          </Link>

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
    shadowOpacity: 0.7,
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