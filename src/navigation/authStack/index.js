import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '@containers/authContainer/loginScreen';
import {useSelector} from 'react-redux';
import {navigationRef} from '@navRef';
import OnBoardingScreen from '@containers/authContainer/OnBoardingScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const common = useSelector(state => state.common);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName={common?.isOnBoard ? 'Login' : 'OnBoard'}
        initialRouteName={'OnBoard'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoard" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
