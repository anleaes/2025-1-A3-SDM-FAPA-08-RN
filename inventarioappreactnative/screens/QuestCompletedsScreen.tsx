import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type CompletedQuest = {
  id: number;
  player_profile: number;
  quest: number;
  completion_date: string;
};

const CompletedQuestsScreen = ({ navigation }: any) => {
  const [completedQuests, setCompletedQuests] = useState<CompletedQuest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCompletedQuests = async () => {
    setLoading(true);
    const response = await fetch('http://127.0.0.1:8000/completedquests/');
    const data = await response.json();
    setCompletedQuests(data);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchCompletedQuests();
    }, [])
  );

  const handleDelete = async (id: number) => {
    await fetch(`http://127.0.0.1:8000/completedquests/${id}/`, {
      method: 'DELETE',
    });
    setCompletedQuests(completedQuests.filter(cq => cq.id !== id));
  };

  const handleEdit = (completedQuest: CompletedQuest) => {
    // navigation.navigate('EditCompletedQuest', { completedQuest });
  };

  const renderItem = ({ item }: { item: CompletedQuest }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>Player Profile ID: {item.player_profile}</Text>
        <Text style={styles.itemSubtitle}>Quest ID: {item.quest}</Text>
        <Text style={styles.itemDetail}>Completed: {new Date(item.completion_date).toLocaleDateString()}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.editButton}>
          <Ionicons name="pencil" size={20} color="#4B7BE5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
          <Ionicons name="trash" size={20} color="#E74C3C" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4B7BE5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={completedQuests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          // navigation.navigate('CreateCompletedQuest')
        }}
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  itemDetail: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    padding: 8,
    marginRight: 8,
  },
  deleteButton: {
    padding: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#4B7BE5',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CompletedQuestsScreen;
