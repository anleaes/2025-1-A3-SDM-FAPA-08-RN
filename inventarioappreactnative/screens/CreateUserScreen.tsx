import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'CreateUser'>;

const CreateUserScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [saving, setSaving] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setUsername('');
      setEmail('');
      setBirthDate('');
    }, [])
  );

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('http://127.0.0.1:8000/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, birth_date: birthDate }),
    });
    navigation.navigate('Users');  
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo usuário</Text>
      <Text style={styles.label}>Nome de usuário</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        value={birthDate}
        onChangeText={setBirthDate}
        style={styles.input}
      />
      {saving
        ? <ActivityIndicator size="large" color="#4B7BE5" />
        : <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      }
      <Button title="Voltar" onPress={() => navigation.navigate('Users')} />
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

export default CreateUserScreen;
