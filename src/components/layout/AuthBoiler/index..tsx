import React, {ReactNode} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Platform} from 'react-native';
import {useColorMode} from 'native-base';
import R from '@components/utils/R';

const AuthBoiler = (props: {children: ReactNode}) => {
  const {children} = props;
  const theme = useColorMode();
  const colorMode = theme?.colorMode;
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        style={{flex: 0}}
        backgroundColor={R.color.white}
        barStyle={
          Platform.OS === 'ios'
            ? colorMode === 'light'
              ? 'dark-content'
              : 'light-content'
            : Platform.OS === 'android'
            ? 'dark-content'
            : 'light-content'
        }
      />

      {children}
    </SafeAreaView>
  );
};

export default AuthBoiler;

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: R.color.white,
    paddingHorizontal: 0,
  },
  background: {
    flex: 1,
    width: R.unit.width(1),
    backgroundColor: R.color.white,
    alignItems: 'center',
  },
});
