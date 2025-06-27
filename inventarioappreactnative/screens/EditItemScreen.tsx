import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'EditItem'>;

const EditItemScreen = ({ navigation, route }: Props) => {
  const { item } = route.params;
  const [nome, setNome] = useState(item.nome);
  const [descricao, setDescricao] = useState(item.descricao);
  const [raridade, setRaridade] = useState(item.raridade);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setNome(item.nome);
    setDescricao(item.descricao);
    setRaridade(item.raridade);
  }, [item]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://127.0.0.1:8000/items/${item.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, descricao, raridade }),
      }
    );
    navigation.navigate('Items');
    setSaving(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <Text style={styles.label}>Raridade</Text>
      <TextInput
        value={raridade}
        onChangeText={setRaridade}
        style={styles.input}
      />
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
      <Button title="Voltar" onPress={() => navigation.navigate('Items')} />
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

export default EditItemScreen;
