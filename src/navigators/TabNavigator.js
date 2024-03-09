import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View  } from 'react-native';
import { COLORS, FONTSIZE } from '../config/theme/theme';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import CommunityScreen from '../screens/CommunityScreen';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons , Fontisto , FontAwesome} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {


  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          elevation: 5, // Add elevation for the box shadow effect
          shadowColor: '#000', // Set shadow color
          shadowOffset: { width: 0, height: 2 }, // Set shadow offset
          shadowOpacity: 0.25, // Set shadow opacity
          shadowRadius: 3.84, // Set shadow radius
        },
        tabBarItemStyle: {
          marginTop: 25,
          borderRadius: 10,
        }
      }}
    >

      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                ]}
              >
                <Fontisto
                  name="world-o"
                  color={COLORS.White}
                  size={FONTSIZE.size_18}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <LinearGradient
              colors={['#22BCA0', '#007FB6']}
              start={[0, 0]}
              end={[1, 0]}
              style={{
                width: 65,
                height: 65,
                borderRadius: 500,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -25,
              }}
            >
              <View >
                <FontAwesome name="location-arrow" size={26} color="#fff" style={{ fontWeight: 'bold' }} />
              </View>
            </LinearGradient>
          ),
          headerTitleStyle: styles.headerTitle,
          headerTitleContainerStyle: styles.headerTitleContainer,
            }}
      />

<Tab.Screen
        name="UserAccountScreen"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.DarkGreen } : {},
                ]}
              >
                 <AntDesign
                  name="user"
                  color={COLORS.White}
                  size={FONTSIZE.size_18}
                />
              </View>
            );
          },
        }}
      />


    </Tab.Navigator>
  );
};



const styles = {
  activeTabBackground: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 10,
  },
};

export default TabNavigator;