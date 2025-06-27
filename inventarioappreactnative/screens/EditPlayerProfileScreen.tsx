import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'EditPlayerProfile'>;

const EditPlayerProfileScreen = ({ route, navigation }: Props) => {
  const { profile } = route.params;
  const [playername, setPlayername] = useState(profile.playername);
  const [user, setUser] = useState(profile.user.toString());
  const [level, setLevel] = useState(profile.level.toString());
  const [experience, setExperience] = useState(profile.experience.toString());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setPlayername(profile.playername);
    setUser(profile.user.toString());
    setLevel(profile.level.toString());
    setExperience(profile.experience.toString());
  }, [profile]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://127.0.0.1:8000/playerprofiles/${profile.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          playername, 
          user: parseInt(user), 
          level: parseInt(level), 
          experience: parseInt(experience) 
        }),
      }
    );
    navigation.navigate('PlayerProfiles');
    setSaving(false);
  };

  return (
    <View style={styles.container}>
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
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
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

export default EditPlayerProfileScreen;
