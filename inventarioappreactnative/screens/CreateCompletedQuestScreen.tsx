import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'CreateCompletedQuest'>;

const CreateCompletedQuestScreen = ({ navigation }: Props) => {
  const [playerProfile, setPlayerProfile] = useState('');
  const [quest, setQuest] = useState('');
  const [saving, setSaving] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setPlayerProfile('');
      setQuest('');
    }, [])
  );

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('http://127.0.0.1:8000/completedquests/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        player_profile: parseInt(playerProfile), 
        quest: parseInt(quest)
      }),
    });
    navigation.navigate('CompletedQuests');  
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova quest completada</Text>
      <Text style={styles.label}>ID do Player Profile</Text>
      <TextInput
        value={playerProfile}
        onChangeText={setPlayerProfile}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.label}>ID da Quest</Text>
      <TextInput
        value={quest}
        onChangeText={setQuest}
        style={styles.input}
        keyboardType="numeric"
      />
      {saving
        ? <ActivityIndicator size="large" color="#4B7BE5" />
        : <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      }
      <Button title="Voltar" onPress={() => navigation.navigate('CompletedQuests')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 12, 
    alignSelf: 'center' 
  },
  label: { 
    fontWeight: '600', 
    marginTop: 12, 
    marginBottom: 4 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
});

export default CreateCompletedQuestScreen;
