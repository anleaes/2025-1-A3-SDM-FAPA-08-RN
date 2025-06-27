import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'CreatePlayerProfile'>;

const CreatePlayerProfileScreen = ({ navigation }: Props) => {

  const [playername, setPlayername] = useState('');
  const [user, setUser] = useState('');
  const [level, setLevel] = useState('');
  const [experience, setExperience] = useState('');
  const [saving, setSaving] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setPlayername('');
      setUser('');
      setLevel('');
      setExperience('');
    }, [])
  );

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('http://127.0.0.1:8000/playerprofiles/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        playername, 
        user: parseInt(user), 
        level: parseInt(level), 
        experience: parseInt(experience) 
      }),
    });
    navigation.navigate('PlayerProfiles');  
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo perfil de jogador</Text>
      <Text style={styles.label}>Nome do jogador</Text>
      <TextInput
        value={playername}
        onChangeText={setPlayername}
        style={styles.input}
      />
      <Text style={styles.label}>ID do Usuário</Text>
      <TextInput
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <Text style={styles.label}>Level</Text>
      <TextInput
        value={level}
        onChangeText={setLevel}
        style={styles.input}
      />
      <Text style={styles.label}>Experiência</Text>
      <TextInput
        value={experience}
        onChangeText={setExperience}
        style={styles.input}
      />
      {saving
        ? <ActivityIndicator size="large" color="#4B7BE5" />
        : <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      }
      <Button title="Voltar" onPress={() => navigation.navigate('PlayerProfiles')} />
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
    alignSelf: 'center' },
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

export default CreatePlayerProfileScreen;