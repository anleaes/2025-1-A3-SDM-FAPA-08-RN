import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const EditQuestScreen = ({ route, navigation }: any) => {
  const { quest } = route?.params || { quest: { id: 0, title: '', description: '', xp_reward: 0 } };
  const [title, setTitle] = useState(quest.title);
  const [description, setDescription] = useState(quest.description);
  const [xpReward, setXpReward] = useState(quest.xp_reward.toString());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTitle(quest.title);
    setDescription(quest.description);
    setXpReward(quest.xp_reward.toString());
  }, [quest]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://127.0.0.1:8000/quests/${quest.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title, 
          description, 
          xp_reward: parseInt(xpReward) 
        }),
      }
    );
    // navigation.navigate('Quests');
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <Text style={styles.label}>Recompensa XP</Text>
      <TextInput
        value={xpReward}
        onChangeText={setXpReward}
        style={styles.input}
        keyboardType="numeric"
      />
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
      <Button title="Voltar" onPress={() => {
        // navigation.navigate('Quests')
      }} />
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

export default EditQuestScreen;
