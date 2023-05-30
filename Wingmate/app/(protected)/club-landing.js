import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Wingmate Clubs</Text>
          <Text style={styles.subtitle}>Discover and Join Car Enthusiasts MONKEYS</Text>
          <Text style={styles.description}>
            Connect with fellow car lovers, join exciting events, and share your passion for cars!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default LandingPage;