import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CreateInventoryItemScreen = ({ navigation }: any) => {
  const [inventory, setInventory] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [saving, setSaving] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setInventory('');
      setItem('');
      setQuantity('');
    }, [])
  );

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch('http://127.0.0.1:8000/inventoryitems/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        inventory: parseInt(inventory), 
        item: parseInt(item), 
        quantity: parseInt(quantity) || 1 
      }),
    });
    // navigation.navigate('InventoryItems');  
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo item do inventário</Text>
      <Text style={styles.label}>ID do Inventário</Text>
      <TextInput
        value={inventory}
        onChangeText={setInventory}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.label}>ID do Item</Text>
      <TextInput
        value={item}
        onChangeText={setItem}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        value={quantity}
        onChangeText={setQuantity}
        style={styles.input}
        keyboardType="numeric"
        placeholder="1"
      />
      {saving
        ? <ActivityIndicator size="large" color="#4B7BE5" />
        : <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      }
      <Button title="Voltar" onPress={() => {
        // navigation.navigate('InventoryItems')
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

export default CreateInventoryItemScreen;
