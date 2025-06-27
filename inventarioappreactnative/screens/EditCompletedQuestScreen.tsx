import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'EditCompletedQuest'>;

const EditCompletedQuestScreen = ({ route, navigation }: Props) => {
  const { completedQuest } = route?.params || { completedQuest: { id: 0, player_profile: 0, quest: 0, completion_date: '' } };
  const [playerProfile, setPlayerProfile] = useState(completedQuest.player_profile.toString());
  const [quest, setQuest] = useState(completedQuest.quest.toString());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setPlayerProfile(completedQuest.player_profile.toString());
    setQuest(completedQuest.quest.toString());
  }, [completedQuest]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://127.0.0.1:8000/completedquests/${completedQuest.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          player_profile: parseInt(playerProfile), 
          quest: parseInt(quest)
        }),
      }
    );
    navigation.navigate('CompletedQuests');
    setSaving(false);
  };

  return (
    <View style={styles.container}>
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
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
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
  label: { 
    fontWeight: 'bold', 
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

export default EditCompletedQuestScreen;
