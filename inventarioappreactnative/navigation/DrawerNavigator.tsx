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
    </Drawer.Navigator>  
  );
};

export default DrawerNavigator;