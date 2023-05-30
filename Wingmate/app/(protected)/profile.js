import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountSettingsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarItem}>Profile</Text>
        <Text style={styles.sidebarItem}>Privacy</Text>
        <Text style={styles.sidebarItem}>Security</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Account Settings</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#36393F',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sidebarItem: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
  },
  content: {
    flex: 3,
    backgroundColor: '#F2F3F5',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default AccountSettingsPage;