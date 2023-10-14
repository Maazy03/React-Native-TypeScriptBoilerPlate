/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {LogBox, StyleSheet, SafeAreaView, View} from 'react-native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AppNavigation from './src/navigation/AppNavigation';
import {I18nextProvider} from 'react-i18next';
import 'react-native-gesture-handler';
import {persistStore} from 'redux-persist';
import {Notifications} from 'react-native-notifications';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/store/index';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {toastConfig} from '@components/utils/Validators';
import i18n from './src/translations/i18n';
import LocalNotification from '@components/utils/Notification';
import Button from '@components/common/Button';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import InfoModal from '@components/view/modals/InfoModal';
import {MasterCardIcon, UserIcon} from '@components/utils/Svg';

function App() {
  const config = {
    useSystemColorMode: true, // Default system color mode
  };

  const extendedTheme = extendTheme({config});
  const persistor = persistStore(store);

  const AppWrapper = () => {
    const modalRef: any = useRef();
    return (
      <>
        <AppNavigation />
      </>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={extendedTheme}>
          <SafeAreaView style={{flex: 1}}>
            <I18nextProvider i18n={i18n}>
              <AppWrapper />
            </I18nextProvider>
          </SafeAreaView>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
