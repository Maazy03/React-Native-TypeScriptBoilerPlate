import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {navigationRef} from '@navRef';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';

//MEMBER STACK
import CoachesScreen from '@containers/appContainer/CoachesScreen';

//CHATS STACK
import ChatsListScreen from '@containers/appContainer/ChatModule/ChatsListScreen';
import ChatScreen from '@containers/appContainer/ChatModule/ChatScreen';

const AppStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const animationConfig: any = {
    gestureDirection: 'horizontal',
    animation: 'slide_from_right',
    animationDuration: 200,
  };
  //COMPANY TAB
  const AppTabNvigation = () => {
    return (
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
          initialRouteName={'HomeTab'}
          screenOptions={{
            headerShown: false,
            tabBarVisible: true,
          }}
          tabBarOptions={{
            showLabel: false,
            style: styles.tabContainer,
          }}>
          <Tab.Screen
            name="CommunityTab"
            component={CommunityStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={[styles.tab, focused && styles.focusedTab]}>
                  <Icon
                    name={'groups'}
                    type={'MaterialIcons'}
                    color={focused ? R.color.primaryColor1 : R.color.gray}
                    size={35}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="ChatTab"
            component={ChatStackNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={[styles.tab, focused && styles.focusedTab]}>
                  <Icon
                    name={'chat'}
                    type={'MaterialIcons'}
                    color={focused ? R.color.primaryColor1 : R.color.gray}
                    size={25}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

  const CommunityStackNavigator = (props: any) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Coaches'}>
        <Stack.Screen name="Coaches" component={CoachesScreen} />
      </Stack.Navigator>
    );
  };

  const ChatStackNavigator = (props: any) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ChatsList" component={ChatsListScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    );
  };

  return <AppTabNvigation />;
};
export default AppStack;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: R.color.primaryColor1,

    paddingBottom: 0,
    marginBottom: 0,
    height: R.unit.scale(70),
  },
  tab: {
    alignItems: 'center',
    width: R.unit.width(0.16),
    height: 50,
    justifyContent: 'center',
  },
  focusedTab: {
    backgroundColor: R.color.white,
    width: R.unit.width(0.16),
    borderRadius: R.unit.scale(10),
    // height: 50,
  },
});
