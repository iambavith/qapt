import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import DEWelcomeScreen from './screens/DEWelcomeScreen';
import RegisterWithEmailDEScreen from './screens/RegisterWithEmailDEScreen';
import LoginWithEmailENScreen from './screens/LoginWithEmailENScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ENAudioW1D2Screen from './screens/ENAudioW1D2Screen';
import ENWelcomeScreen from './screens/ENWelcomeScreen';
import DEAudioW3D7Screen from './screens/DEAudioW3D7Screen';
import DEDays1Screen from './screens/DEDays1Screen';
import DEAudioW3D1Screen from './screens/DEAudioW3D1Screen';
import DEAudioW2D4Screen from './screens/DEAudioW2D4Screen';
import DEAudioW2D3Screen from './screens/DEAudioW2D3Screen';
import DEAudioW1D7Screen from './screens/DEAudioW1D7Screen';
import DEAudioW1D4Screen from './screens/DEAudioW1D4Screen';
import DEAudioW1D3Screen from './screens/DEAudioW1D3Screen';
import DEAudioW1D2Screen from './screens/DEAudioW1D2Screen';
import ENAudioW3D7Screen from './screens/ENAudioW3D7Screen';
import ENAudioW3D6Screen from './screens/ENAudioW3D6Screen';
import ENAudioW3D4Screen from './screens/ENAudioW3D4Screen';
import ENAudioW3D3Screen from './screens/ENAudioW3D3Screen';
import ENAudioW3D2Screen from './screens/ENAudioW3D2Screen';
import ENAudioW3D1Screen from './screens/ENAudioW3D1Screen';
import ENAudioW2D4Screen from './screens/ENAudioW2D4Screen';
import ENAudioW2D3Screen from './screens/ENAudioW2D3Screen';
import ENAudioW2D2Screen from './screens/ENAudioW2D2Screen';
import DEAudioW3D6Screen from './screens/DEAudioW3D6Screen';
import DEAudioW3D5Screen from './screens/DEAudioW3D5Screen';
import DEAudioW3D2Screen from './screens/DEAudioW3D2Screen';
import DEAudioW2D6Screen from './screens/DEAudioW2D6Screen';
import DEAudioW2D2Screen from './screens/DEAudioW2D2Screen';
import DEAudioW2D1Screen from './screens/DEAudioW2D1Screen';
import DEAudioW1D1Screen from './screens/DEAudioW1D1Screen';
import ENAudioW2D5Screen from './screens/ENAudioW2D5Screen';
import ENAudioW2D1Screen from './screens/ENAudioW2D1Screen';
import ENAudioW1D7Screen from './screens/ENAudioW1D7Screen';
import ENAudioW1D6Screen from './screens/ENAudioW1D6Screen';
import ENAudioW1D5Screen from './screens/ENAudioW1D5Screen';
import ENAudioW1D3Screen from './screens/ENAudioW1D3Screen';
import ENAudioW1D1Screen from './screens/ENAudioW1D1Screen';
import DEAudioW1D5Screen from './screens/DEAudioW1D5Screen';
import DEAudioW3D3Screen from './screens/DEAudioW3D3Screen';
import DEAudioW2D5Screen from './screens/DEAudioW2D5Screen';
import ENAudioW1D4Screen from './screens/ENAudioW1D4Screen';
import ENAudioW3D5Screen from './screens/ENAudioW3D5Screen';
import DEAudioW3D4Screen from './screens/DEAudioW3D4Screen';
import DEAudioW2D7Screen from './screens/DEAudioW2D7Screen';
import DEAudioW1D6Screen from './screens/DEAudioW1D6Screen';
import DEDays3Screen from './screens/DEDays3Screen';
import DEDays2Screen from './screens/DEDays2Screen';
import ENDays3Screen from './screens/ENDays3Screen';
import ENDays2Screen from './screens/ENDays2Screen';
import ENDays1Screen from './screens/ENDays1Screen';
import DEWocheScreen from './screens/DEWocheScreen';
import ENWeeksScreen from './screens/ENWeeksScreen';
import ENAudioW2D7Screen from './screens/ENAudioW2D7Screen';
import ENAudioW2D6Screen from './screens/ENAudioW2D6Screen';
import BuyKeyScreen from './screens/BuyKeyScreen.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function RootAppNavigator() {
  return (
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerTransparent: false,
        }}
      >
      
      <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome Screen' }}
        />
        <Stack.Screen
          name="ENWelcomeScreen"
          component={ENWelcomeScreen}
          options={{ title: 'EN_Welcome' }}
        />
        <Stack.Screen
          name="ENWeeksScreen"
          component={ENWeeksScreen}
          options={{ title: 'EN_Weeks' }}
        />
        <Stack.Screen
          name="DEWelcomeScreen"
          component={DEWelcomeScreen}
          options={{ title: 'DE_Welcome' }}
        />
        <Stack.Screen
          name="ENAudioW1D1Screen"
          component={ENAudioW1D1Screen}
          options={{ headerTransparent: false, title: 'EN_Audio_W1D1' }}
        />
        <Stack.Screen
          name="DEWocheScreen"
          component={DEWocheScreen}
          options={{ title: 'DE_Woche' }}
        />
        <Stack.Screen
          name="ENDays1Screen"
          component={ENDays1Screen}
          options={{ title: 'EN_Days_1' }}
        />
        <Stack.Screen
          name="ENDays2Screen"
          component={ENDays2Screen}
          options={{ title: 'EN_Days_2' }}
        />
        <Stack.Screen
          name="ENDays3Screen"
          component={ENDays3Screen}
          options={{ title: 'EN_Days_3' }}
        />
        <Stack.Screen
          name="DEDays1Screen"
          component={DEDays1Screen}
          options={{ title: 'DE_Days_1' }}
        />
        <Stack.Screen
          name="DEDays2Screen"
          component={DEDays2Screen}
          options={{ title: 'DE_Days_2 ' }}
        />
        <Stack.Screen
          name="DEDays3Screen"
          component={DEDays3Screen}
          options={{ title: 'DE_Days_3' }}
        />
        <Stack.Screen
          name="ENAudioW1D2Screen"
          component={ENAudioW1D2Screen}
          options={{ title: 'EN_Audio_W1D2' }}
        />
        <Stack.Screen
          name="ENAudioW1D3Screen"
          component={ENAudioW1D3Screen}
          options={{ title: 'EN_Audio_W1D3' }}
        />
        <Stack.Screen
          name="ENAudioW1D4Screen"
          component={ENAudioW1D4Screen}
          options={{ title: 'EN_Audio_W1D4' }}
        />
        <Stack.Screen
          name="ENAudioW1D5Screen"
          component={ENAudioW1D5Screen}
          options={{ title: 'EN_Audio_W1D5' }}
        />
        <Stack.Screen
          name="ENAudioW1D6Screen"
          component={ENAudioW1D6Screen}
          options={{ title: 'EN_Audio_W1D6' }}
        />
        <Stack.Screen
          name="ENAudioW1D7Screen"
          component={ENAudioW1D7Screen}
          options={{ title: 'EN_Audio_W1D7' }}
        />
        <Stack.Screen
          name="ENAudioW2D1Screen"
          component={ENAudioW2D1Screen}
          options={{ title: 'EN_Audio_W2D1' }}
        />
        <Stack.Screen
          name="ENAudioW2D2Screen"
          component={ENAudioW2D2Screen}
          options={{ title: 'EN_Audio_W2D2' }}
        />
        <Stack.Screen
          name="ENAudioW2D3Screen"
          component={ENAudioW2D3Screen}
          options={{ title: 'EN_Audio_W2D3' }}
        />
        <Stack.Screen
          name="ENAudioW2D4Screen"
          component={ENAudioW2D4Screen}
          options={{ title: 'EN_Audio_W2D4' }}
        />
        <Stack.Screen
          name="ENAudioW2D5Screen"
          component={ENAudioW2D5Screen}
          options={{ title: 'EN_Audio_W2D5' }}
        />
        <Stack.Screen
          name="ENAudioW2D6Screen"
          component={ENAudioW2D6Screen}
          options={{ title: 'EN_Audio_W2D6' }}
        />
        <Stack.Screen
          name="ENAudioW2D7Screen"
          component={ENAudioW2D7Screen}
          options={{ title: 'EN_Audio_W2D7' }}
        />
        <Stack.Screen
          name="ENAudioW3D1Screen"
          component={ENAudioW3D1Screen}
          options={{ title: 'EN_Audio_W3D1' }}
        />
        <Stack.Screen
          name="ENAudioW3D2Screen"
          component={ENAudioW3D2Screen}
          options={{ title: 'EN_Audio_W3D2' }}
        />
        <Stack.Screen
          name="ENAudioW3D3Screen"
          component={ENAudioW3D3Screen}
          options={{ title: 'EN_Audio_W3D3' }}
        />
        <Stack.Screen
          name="ENAudioW3D4Screen"
          component={ENAudioW3D4Screen}
          options={{ title: 'EN_Audio_W3D4' }}
        />
        <Stack.Screen
          name="ENAudioW3D5Screen"
          component={ENAudioW3D5Screen}
          options={{ title: 'EN_Audio_W3D5' }}
        />
        <Stack.Screen
          name="ENAudioW3D6Screen"
          component={ENAudioW3D6Screen}
          options={{ title: 'EN_Audio_W3D6' }}
        />
        <Stack.Screen
          name="ENAudioW3D7Screen"
          component={ENAudioW3D7Screen}
          options={{ title: 'EN_Audio_W3D7' }}
        />
        <Stack.Screen
          name="DEAudioW1D1Screen"
          component={DEAudioW1D1Screen}
          options={{ title: 'DE_Audio_W1D1 ' }}
        />
        <Stack.Screen
          name="DEAudioW1D2Screen"
          component={DEAudioW1D2Screen}
          options={{ title: 'DE_Audio_W1D2' }}
        />
        <Stack.Screen
          name="DEAudioW1D3Screen"
          component={DEAudioW1D3Screen}
          options={{ title: 'DE_Audio_W1D3' }}
        />
        <Stack.Screen
          name="DEAudioW1D4Screen"
          component={DEAudioW1D4Screen}
          options={{ title: 'DE_Audio_W1D4' }}
        />
        <Stack.Screen
          name="DEAudioW1D5Screen"
          component={DEAudioW1D5Screen}
          options={{ title: 'DE_Audio_W1D5' }}
        />
        <Stack.Screen
          name="DEAudioW1D6Screen"
          component={DEAudioW1D6Screen}
          options={{ title: 'DE_Audio_W1D6' }}
        />
        <Stack.Screen
          name="DEAudioW1D7Screen"
          component={DEAudioW1D7Screen}
          options={{ title: 'DE_Audio_W1D7' }}
        />
        <Stack.Screen
          name="DEAudioW2D1Screen"
          component={DEAudioW2D1Screen}
          options={{ title: 'DE_Audio_W2D1' }}
        />
        <Stack.Screen
          name="DEAudioW2D2Screen"
          component={DEAudioW2D2Screen}
          options={{ title: 'DE_Audio_W2D2' }}
        />
        <Stack.Screen
          name="DEAudioW2D3Screen"
          component={DEAudioW2D3Screen}
          options={{ title: 'DE_Audio_W2D3' }}
        />
        <Stack.Screen
          name="DEAudioW2D4Screen"
          component={DEAudioW2D4Screen}
          options={{ title: 'DE_Audio_W2D4' }}
        />
        <Stack.Screen
          name="DEAudioW2D5Screen"
          component={DEAudioW2D5Screen}
          options={{ title: 'DE_Audio_W2D5' }}
        />
        <Stack.Screen
          name="DEAudioW2D6Screen"
          component={DEAudioW2D6Screen}
          options={{ title: 'DE_Audio_W2D6' }}
        />
        <Stack.Screen
          name="DEAudioW2D7Screen"
          component={DEAudioW2D7Screen}
          options={{ title: 'DE_Audio_W2D7' }}
        />
        <Stack.Screen
          name="DEAudioW3D1Screen"
          component={DEAudioW3D1Screen}
          options={{ title: 'DE_Audio_W3D1' }}
        />
        <Stack.Screen
          name="DEAudioW3D2Screen"
          component={DEAudioW3D2Screen}
          options={{ title: 'DE_Audio_W3D2' }}
        />
        <Stack.Screen
          name="DEAudioW3D3Screen"
          component={DEAudioW3D3Screen}
          options={{ title: 'DE_Audio_W3D3' }}
        />
        <Stack.Screen
          name="DEAudioW3D4Screen"
          component={DEAudioW3D4Screen}
          options={{ title: 'DE_Audio_W3D4' }}
        />
        <Stack.Screen
          name="DEAudioW3D5Screen"
          component={DEAudioW3D5Screen}
          options={{ title: 'DE_Audio_W3D5' }}
        />
        <Stack.Screen
          name="DEAudioW3D6Screen"
          component={DEAudioW3D6Screen}
          options={{ title: 'DE_Audio_W3D6' }}
        />
        <Stack.Screen
          name="DEAudioW3D7Screen"
          component={DEAudioW3D7Screen}
          options={{ title: 'DE_Audio_W3D7' }}
        />
        <Stack.Screen
          name="LoginWithEmailENScreen"
          component={LoginWithEmailENScreen}
          options={{ title: 'Login With Email_EN' }}
        />
        <Stack.Screen
          name="RegisterWithEmailDEScreen"
          component={RegisterWithEmailDEScreen}
          options={{ title: 'Register With Email_DE' }}
        />
        
      <Stack.Screen
          name="BuyKeyScreen"
          component={BuyKeyScreen}
          options={{ title: 'Buy Key' }}
        />
      </Stack.Navigator>
  );
}
