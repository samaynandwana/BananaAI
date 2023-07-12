import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ClubCreationPage = () => {
  const [clubName, setClubName] = useState('');
  const [clubLocation, setClubLocation] = useState('');

  const handleClubNameChange = (text) => {
    setClubName(text);
  };

  const handleClubLocationChange = (text) => {
    setClubLocation(text);
  };

  const handleCreateClub = () => {
    console.log('Creating club:', clubName, clubLocation);
    setClubName('');
    setClubLocation('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Club Name"
        value={clubName}
        onChangeText={handleClubNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={clubLocation}
        onChangeText={handleClubLocationChange}
        multiline
      />
      <Button title="Create Club" onPress={handleCreateClub} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ClubCreationPage;