import {LoaderPropsType} from '@components/constants/types';
import R from '@components/utils/R';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DotIndicator, UIActivityIndicator} from 'react-native-indicators';

const Loader = (props: LoaderPropsType) => {
  const {size = 8, color = R.color.gray, iosLoader = false} = props;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: props?.bgColor,
      }}>
      {iosLoader ? (
        <UIActivityIndicator color={color} size={size} />
      ) : (
        <DotIndicator color={color} size={size} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

export default Loader;
