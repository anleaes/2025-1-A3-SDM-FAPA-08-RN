import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type Props = DrawerScreenProps<DrawerParamList, 'EditAchievement'>;

const EditAchievementScreen = ({ route, navigation }: Props) => {
  const { achievement } = route?.params || { achievement: { id: 0, title: '', description: '', points: 0 } };
  const [title, setTitle] = useState(achievement.title);
  const [description, setDescription] = useState(achievement.description);
  const [points, setPoints] = useState(achievement.points.toString());
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTitle(achievement.title);
    setDescription(achievement.description);
    setPoints(achievement.points.toString());
  }, [achievement]);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(
      `http://127.0.0.1:8000/achievements/${achievement.id}/`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title, 
          description, 
          points: parseInt(points) 
        }),
      }
    );
    navigation.navigate('Achievements');
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
      <Text style={styles.label}>Pontos</Text>
      <TextInput
        value={points}
        onChangeText={setPoints}
        style={styles.input}
        keyboardType="numeric"
      />
      {saving ? (
        <ActivityIndicator size="large" color="#4B7BE5" />
      ) : (
        <Button title="Salvar" onPress={handleSave} color="#4B7BE5" />
      )}
      <Button title="Voltar" onPress={() => navigation.navigate('Achievements')} />
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

export default EditAchievementScreen;
