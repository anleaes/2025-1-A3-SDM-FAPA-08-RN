import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawerContent from '../components/CustomDrawerContent';

import HomeScreen from '../screens/HomeScreen';

import UsersScreen from '../screens/UsersScreen';
import { User } from '../screens/UsersScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import EditUserScreen from '../screens/EditUserScreen';

export type DrawerParamList = {
  Home: undefined;
  Users: undefined;
  CreateUser: undefined;
  EditUser: { user: User };
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
    </Drawer.Navigator>  
  );
};

export default DrawerNavigator;