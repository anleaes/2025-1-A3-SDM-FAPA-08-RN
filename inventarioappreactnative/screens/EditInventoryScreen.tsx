import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'EditInventory'>;

const EditInventoryScreen = ({ route, navigation }: Props) => {
  const { inventory } = route.params;
  const [owner, setOwner] = useState(inventory.owner.toString());
  const [maxCapacity, setMaxCapacity] = useState(inventory.max_capacity.toString());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setOwner(inventory.owner.toString());
    setMaxCapacity(inventory.max_capacity.toString());
  }, [inventory]);  

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://localhost:8000/inventories/${inventory.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owner, max_capacity: maxCapacity }),
      }
    );
    navigation.navigate('Inventories');        
    setSaving(false);  
  };

  return (
    <View style={styles.container}>
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
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
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

export default EditInventoryScreen;
