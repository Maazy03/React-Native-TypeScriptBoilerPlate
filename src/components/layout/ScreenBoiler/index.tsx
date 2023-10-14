import R from '@components/utils/R';
import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Platform} from 'react-native';
import {useColorMode} from 'native-base';
import SubHeaderComponent from './subHeader';
import {ScreenBoilerPropsType} from '@components/constants/types';

const ScreenBoiler = (props: ScreenBoilerPropsType) => {
  const {children, isSubHeader = true, mainHeading, isBack} = props;

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

      {isSubHeader && (
        <SubHeaderComponent mainHeading={mainHeading} isBack={isBack} />
      )}
      {children}
    </SafeAreaView>
  );
};

export default ScreenBoiler;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: R.unit.width(1),
    backgroundColor: R.color.white,
    alignItems: 'center',
  },
});
