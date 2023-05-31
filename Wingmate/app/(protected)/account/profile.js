import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { withAuthenticator } from "aws-amplify-react-native";
import theme from '../../../src/auth-theme';

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [username, setUsername] = useState('JohnDoe');
  const [clubBadges, setClubBadges] = useState([
    { name: 'Club 1', earned: true },
    { name: 'Club 2', earned: true },
    { name: 'Club 3', earned: false },
  ]);
  const [language, setLanguage] = useState('English');
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('Public');
  const [accountSettings, setAccountSettings] = useState({
    email: 'johndoe@example.com',
    password: '********',
  });
  const [securityOptions, setSecurityOptions] = useState({
    twoFactorAuth: true,
    fingerprintAuth: false,
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleClubBadgeChange = (index) => {
    const updatedBadges = [...clubBadges];
    updatedBadges[index].earned = !updatedBadges[index].earned;
    setClubBadges(updatedBadges);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const handlePrivacyChange = (newPrivacy) => {
    setPrivacy(newPrivacy);
  };

  const handleEmailChange = (newEmail) => {
    setAccountSettings({ ...accountSettings, email: newEmail });
  };

  const handlePasswordChange = (newPassword) => {
    setAccountSettings({ ...accountSettings, password: newPassword });
  };

  const toggleTwoFactorAuth = () => {
    setSecurityOptions({ ...securityOptions, twoFactorAuth: !securityOptions.twoFactorAuth });
  };

  const toggleFingerprintAuth = () => {
    setSecurityOptions({ ...securityOptions, fingerprintAuth: !securityOptions.fingerprintAuth });
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={[styles.sidebarItem, activeTab === 'profile' && styles.activeSidebarItem]}
          onPress={() => handleTabPress('profile')}
        >
          <Text style={[styles.sidebarText, activeTab === 'profile' && styles.activeSidebarText]}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarItem, activeTab === 'settings' && styles.activeSidebarItem]}
          onPress={() => handleTabPress('settings')}
        >
          <Text style={[styles.sidebarText, activeTab === 'settings' && styles.activeSidebarText]}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerText, darkMode ? styles.darkHeaderText : styles.lightHeaderText]}>
            {activeTab === 'profile' ? 'Profile' : 'Settings'}
          </Text>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#8B0000' }}
            thumbColor={darkMode ? '#FF4500' : '#f4f3f4'}
          />
        </View>
        {activeTab === 'profile' ? (
          <View style={styles.profileInfo}>
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Username:</Text>
            <TextInput
              style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
              value={username}
              onChangeText={handleUsernameChange}
            />
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Club Badges:</Text>
            {clubBadges.map((badge, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.badgeItem, badge.earned && styles.earnedBadgeItem]}
                onPress={() => handleClubBadgeChange(index)}
              >
                <Text
                  style={[
                    styles.badgeText,
                    badge.earned ? styles.earnedBadgeText : styles.unearnedBadgeText,
                  ]}
                >
                  {badge.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.settingsInfo}>
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Language:</Text>
            <TextInput
              style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
              value={language}
              onChangeText={handleLanguageChange}
            />
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Notifications:</Text>
            <Switch
              value={notifications}
              onValueChange={toggleNotifications}
              trackColor={{ false: '#767577', true: '#8B0000' }}
              thumbColor={notifications ? '#FF4500' : '#f4f3f4'}
            />
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Privacy:</Text>
            <TextInput
              style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
              value={privacy}
              onChangeText={handlePrivacyChange}
            />
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Account Settings:</Text>
            <Text style={[styles.labelText, darkMode ? styles.darkLabelText : styles.lightLabelText]}>Email:</Text>
            <TextInput
              style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
              value={accountSettings.email}
              onChangeText={handleEmailChange}
            />
            <Text style={[styles.labelText, darkMode ? styles.darkLabelText : styles.lightLabelText]}>Password:</Text>
            <TextInput
              style={[styles.input, darkMode ? styles.darkInput : styles.lightInput]}
              value={accountSettings.password}
              onChangeText={handlePasswordChange}
              secureTextEntry
            />
            <Text style={[styles.infoText, darkMode ? styles.darkInfoText : styles.lightInfoText]}>Security:</Text>
            <View style={styles.securityOptions}>
              <View style={styles.securityOption}>
                <Text style={[styles.labelText, darkMode ? styles.darkLabelText : styles.lightLabelText]}>
                  Two-factor Authentication:
                </Text>
                <Switch
                  value={securityOptions.twoFactorAuth}
                  onValueChange={toggleTwoFactorAuth}
                  trackColor={{ false: '#767577', true: '#8B0000' }}
                  thumbColor={securityOptions.twoFactorAuth ? '#FF4500' : '#f4f3f4'}
                />
              </View>
              <View style={styles.securityOption}>
                <Text style={[styles.labelText, darkMode ? styles.darkLabelText : styles.lightLabelText]}>
                  Fingerprint Authentication:
                </Text>
                <Switch
                  value={securityOptions.fingerprintAuth}
                  onValueChange={toggleFingerprintAuth}
                  trackColor={{ false: '#767577', true: '#8B0000' }}
                  thumbColor={securityOptions.fingerprintAuth ? '#FF4500' : '#f4f3f4'}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#000000',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  sidebar: {
    width: 100,
    backgroundColor: '#8b0000',
    paddingVertical: 16,
  },
  sidebarItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeSidebarItem: {
    backgroundColor: '#8B0000',
  },
  sidebarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  activeSidebarText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  darkHeaderText: {
    color: '#FFFFFF',
  },
  lightHeaderText: {
    color: '#000000',
  },
  profileInfo: {
    marginBottom: 16,
  },
  settingsInfo: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
  },
  darkInfoText: {
    color: '#FFFFFF',
  },
  lightInfoText: {
    color: '#000000',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  darkInput: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
  },
  lightInput: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  badgeItem: {
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#8B0000',
  },
  earnedBadgeItem: {
    backgroundColor: '#FF4500',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  earnedBadgeText: {
    color: '#FFFFFF',
  },
  unearnedBadgeText: {
    color: '#CCCCCC',
  },
  labelText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000000',
  },
  darkLabelText: {
    color: '#FFFFFF',
  },
  lightLabelText: {
    color: '#000000',
  },
  securityOptions: {
    marginBottom: 8,
  },
  securityOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});

export default withAuthenticator(ProfilePage, {theme: theme});