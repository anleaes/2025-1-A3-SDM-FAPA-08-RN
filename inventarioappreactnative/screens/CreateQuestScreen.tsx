import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'CreateQuest'>;

const CreateQuestScreen = ({ navigation }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [xpReward, setXpReward] = useState('');
  const [saving, setSaving] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setTitle('');
      setDescription('');
      setXpReward('');
    }, [])
  );

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('http://127.0.0.1:8000/quests/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title, 
        description, 
        xp_reward: parseInt(xpReward) || 0 
      }),
    });
    navigation.navigate('Quests');  
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova quest</Text>
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
        placeholder="0"
      />
      {saving
        ? <ActivityIndicator size="large" color="#4B7BE5" />
        : <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      }
      <Button title="Voltar" onPress={() => navigation.navigate('Quests')} />
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

export default CreateQuestScreen;
