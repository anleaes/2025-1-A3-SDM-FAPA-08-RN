import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawerContent from '../components/CustomDrawerContent';

import HomeScreen from '../screens/HomeScreen';

import UsersScreen from '../screens/UsersScreen';
import { User } from '../screens/UsersScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import EditUserScreen from '../screens/EditUserScreen';

import PlayerProfilesScreen from '../screens/PlayerProfilesScreen';
import { PlayerProfile } from '../screens/PlayerProfilesScreen';
import CreatePlayerProfileScreen from '../screens/CreatePlayerProfileScreen';
import EditPlayerProfileScreen from '../screens/EditPlayerProfileScreen';

import ItemsScreen from '../screens/ItemsScreen';
import { Item } from '../screens/ItemsScreen';
import CreateItemScreen from '../screens/CreateItemScreen';
import EditItemScreen from '../screens/EditItemScreen';

import InventoriesScreen from '../screens/InventoriesScreen';
import { Inventory } from '../screens/InventoriesScreen';
import CreateInventoryScreen from '../screens/CreateInventoryScreen';
import EditInventoryScreen from '../screens/EditInventoryScreen';

import InventoryItemsScreen from '../screens/InventoryItemsScreen';
import { InventoryItem } from '../screens/InventoryItemsScreen';
import CreateInventoryItemScreen from '../screens/CreateInventoryItemScreen';
import EditInventoryItemScreen from '../screens/EditInventoryItemScreen';

import QuestsScreen from '../screens/QuestsScreen';
import { Quest } from '../screens/QuestsScreen';
import CreateQuestScreen from '../screens/CreateQuestScreen';
import EditQuestScreen from '../screens/EditQuestScreen';

import CompletedQuestsScreen from '../screens/CompletedQuestsScreen';
import { CompletedQuest } from '../screens/CompletedQuestsScreen';
import CreateCompletedQuestScreen from '../screens/CreateCompletedQuestScreen';
import EditCompletedQuestScreen from '../screens/EditCompletedQuestScreen';

import AchievementsScreen from '../screens/AchievementsScreen';
import { Achievement } from '../screens/AchievementsScreen';
import CreateAchievementScreen from '../screens/CreateAchievementScreen';
import EditAchievementScreen from '../screens/EditAchievementScreen';

export type DrawerParamList = {
  Home: undefined;
  Users: undefined;
  CreateUser: undefined;
  EditUser: { user: User };
  PlayerProfiles: undefined;
  CreatePlayerProfile: undefined;
  EditPlayerProfile: { profile: PlayerProfile };
  Items: undefined;
  CreateItem: undefined;
  EditItem: { item: Item };
  Inventories: undefined;
  CreateInventory: undefined;
  EditInventory: { inventory: Inventory };
  InventoryItems: undefined;
  CreateInventoryItem: undefined;
  EditInventoryItem: { inventoryItem: InventoryItem };
  Quests: undefined;
  CreateQuest: undefined;
  EditQuest: { quest: Quest };
  CompletedQuests: undefined;
  CreateCompletedQuest: undefined;
  EditCompletedQuest: { completedQuest: CompletedQuest };
  Achievements: undefined;
  CreateAchievement: undefined;
  EditAchievement: { achievement: Achievement };
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#4B7BE5',
        drawerLabelStyle: { marginLeft: 0, fontSize: 16 },
        drawerStyle: { backgroundColor: '#fff', width: 250 },
        headerStyle: { backgroundColor: '#4B7BE5' },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color}  />,
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Users"
        component={UsersScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />,
          title: 'Usuários',
        }}
      />
      <Drawer.Screen
        name="CreateUser"
        component={CreateUserScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Novo Usuário' }}
      />
      <Drawer.Screen
        name="EditUser"
        component={EditUserScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Usuário' }}
      />
      <Drawer.Screen
        name="PlayerProfiles"
        component={PlayerProfilesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={size} color={color} />,
          title: 'Perfis de Jogador',
        }}
      />
      <Drawer.Screen
        name="CreatePlayerProfile"
        component={CreatePlayerProfileScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Novo Perfil' }}
      />
      <Drawer.Screen
        name="EditPlayerProfile"
        component={EditPlayerProfileScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Perfil' }}
      />
      <Drawer.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="cube-outline" size={size} color={color} />,
          title: 'Itens',
        }}
      />
      <Drawer.Screen
        name="CreateItem"
        component={CreateItemScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Novo Item' }}
      />
      <Drawer.Screen
        name="EditItem"
        component={EditItemScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Item' }}
      />
      <Drawer.Screen
        name="Inventories"
        component={InventoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="bag-outline" size={size} color={color} />,
          title: 'Inventários',
        }}
      />
      <Drawer.Screen
        name="CreateInventory"
        component={CreateInventoryScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Novo Inventário' }}
      />
      <Drawer.Screen
        name="EditInventory"
        component={EditInventoryScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Inventário' }}
      />  
      <Drawer.Screen
        name="InventoryItems"
        component={InventoryItemsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="layers-outline" size={size} color={color} />,
          title: 'Itens do Inventário',
        }}
      />
      <Drawer.Screen
        name="CreateInventoryItem"
        component={CreateInventoryItemScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Novo Item do Inventário' }}
      />
      <Drawer.Screen
        name="EditInventoryItem"
        component={EditInventoryItemScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Item do Inventário' }}
      />
      <Drawer.Screen
        name="Quests"
        component={QuestsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="shield-outline" size={size} color={color} />,
          title: 'Quests',
        }}
      />
      <Drawer.Screen
        name="CreateQuest"
        component={CreateQuestScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Nova Quest' }}
      />
      <Drawer.Screen
        name="EditQuest"
        component={EditQuestScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Quest' }}
      />
      <Drawer.Screen
        name="CompletedQuests"
        component={CompletedQuestsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="checkmark-circle-outline" size={size} color={color} />,
          title: 'Quests Completadas',
        }}
      />
      <Drawer.Screen
        name="CreateCompletedQuest"
        component={CreateCompletedQuestScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Nova Quest Completada' }}
      />
      <Drawer.Screen
        name="EditCompletedQuest"
        component={EditCompletedQuestScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Quest Completada' }}
      />
      <Drawer.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="trophy-outline" size={size} color={color} />,
          title: 'Conquistas',
        }}
      />
      <Drawer.Screen
        name="CreateAchievement"
        component={CreateAchievementScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Nova Conquista' }}
      />
      <Drawer.Screen
        name="EditAchievement"
        component={EditAchievementScreen}
        options={{ drawerItemStyle: { display: 'none' }, title: 'Editar Conquista' }}
      />    
    </Drawer.Navigator>  
  );
};

export default DrawerNavigator;