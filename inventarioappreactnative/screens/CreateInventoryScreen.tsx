import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'CreateInventory'>;

const CreateInventoryScreen = ({ navigation }: Props) => {
  const [owner, setOwner] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [saving, setSaving] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setOwner('');
      setMaxCapacity('');
    }, [])
  );

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('http://localhost:8000/inventories/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ owner, max_capacity: maxCapacity }),
    });
    navigation.navigate('Inventories');  
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo inventário</Text>
      <Text style={styles.label}>Proprietário</Text>
      <TextInput
        value={owner}
        onChangeText={setOwner}
        style={styles.input}
      />
      <Text style={styles.label}>Capacidade máxima</Text>
      <TextInput
        value={maxCapacity}
        onChangeText={setMaxCapacity}
        style={styles.input}
      />
      {saving
        ? <ActivityIndicator size="large" color="#4B7BE5" />
        : <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      }
      <Button title="Voltar" onPress={() => navigation.navigate('Inventories')} />
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

export default CreateInventoryScreen;
