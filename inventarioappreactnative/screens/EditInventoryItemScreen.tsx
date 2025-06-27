import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const EditInventoryItemScreen = ({ route, navigation }: any) => {
  const { inventoryItem } = route?.params || { inventoryItem: { id: 0, inventory: 0, item: 0, quantity: 1 } };
  const [inventory, setInventory] = useState(inventoryItem.inventory.toString());
  const [item, setItem] = useState(inventoryItem.item.toString());
  const [quantity, setQuantity] = useState(inventoryItem.quantity.toString());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setInventory(inventoryItem.inventory.toString());
    setItem(inventoryItem.item.toString());
    setQuantity(inventoryItem.quantity.toString());
  }, [inventoryItem]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://127.0.0.1:8000/inventoryitems/${inventoryItem.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          inventory: parseInt(inventory), 
          item: parseInt(item), 
          quantity: parseInt(quantity) 
        }),
      }
    );
    // navigation.navigate('InventoryItems');
    setSaving(false);
  };

  return (
    <View style={styles.container}>
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
      />
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
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

export default EditInventoryItemScreen;
