import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ClubJoinPage = () => {
  const [clubCode, setClubCode] = useState('');

  const handleClubCodeChange = (text) => {
    setClubCode(text);
  };

  const handleJoinClub = () => {
    console.log('Joining club with code:', clubCode);
    setClubCode('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Club Code"
        value={clubCode}
        onChangeText={handleClubCodeChange}
      />
      <Button title="Join Club" onPress={handleJoinClub} />
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

export default ClubJoinPage;