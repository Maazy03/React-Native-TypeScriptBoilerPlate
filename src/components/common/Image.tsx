import React from 'react';
import {Image as ImageC, StyleSheet, View} from 'react-native';
import R from '@components/utils/R';
import {ImagePropsType} from '@components/constants/types';

const Image = (props: ImagePropsType) => {
  const {
    uploadedImage,
    resizeMode = 'cover',
    imageStyles,
    customImage,
    recentImage,
    containerStyles,
  } = props;

  return (
    <View style={[styles.imageContainer, containerStyles]}>
      {customImage || recentImage ? (
        <ImageC
          resizeMode={resizeMode}
          style={[styles.image, imageStyles]}
          source={recentImage ? {uri: recentImage} : customImage}
        />
      ) : (
        <ImageC
          resizeMode={resizeMode}
          style={[styles.image, imageStyles]}
          source={{uri: uploadedImage}}
        />
      )}
    </View>
  );
};
export default Image;

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    shadowColor: R.color.primaryColor1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    overflow: 'hidden',
  },
});
