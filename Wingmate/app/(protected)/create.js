import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ClubCreationPage = () => {
  const [clubName, setClubName] = useState('');
  const [clubDescription, setClubDescription] = useState('');

  const handleClubNameChange = (text) => {
    setClubName(text);
  };

  const handleClubDescriptionChange = (text) => {
    setClubDescription(text);
  };

  const handleCreateClub = () => {
    console.log('Creating club:', clubName, clubDescription);
    setClubName('');
    setClubDescription('');
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
        placeholder="Club Description"
        value={clubDescription}
        onChangeText={handleClubDescriptionChange}
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