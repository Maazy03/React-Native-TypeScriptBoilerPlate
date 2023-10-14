import {Dimensions, PixelRatio, Platform} from 'react-native';

const containerWidth = Dimensions.get('window').width;
const containerHeight = Dimensions.get('window').height;
import {moderateScale} from 'react-native-size-matters';

// const initialScale = Math.min(containerWidth, containerHeight) / 375;
const unit = {
  scale: (value: number, factor = 0.3) => moderateScale(value, factor),
  height: (value: number) => containerHeight * value,
  width: (value: number) => containerWidth * value,
  pdBottomList: (value: number) => {
    if (Platform.OS === 'ios') {
      return value;
    } else {
      return value / 2;
    }
  },
  fontSize: (value: number) => {
    if (PixelRatio.get() === 1) {
    } else if (PixelRatio.get() === 1.5) {
      return moderateScale(value - 1.5, 0.3);
    } else if (PixelRatio.get() > 1.5 && PixelRatio.get() < 2) {
      return moderateScale(value - 1.6, 0.3);
    } else if (PixelRatio.get() >= 2 && PixelRatio.get() < 3) {
      return moderateScale(value - 1, 0.3);
    } else if (PixelRatio.get() >= 3 && PixelRatio.get() <= 3.5) {
      return moderateScale(value, 0.3);
    } else if (PixelRatio.get() > 3.5) {
      return moderateScale(value + 2, 0.3);
    }
  },

  tabSizeCalc: (value: any, tabValue: number) => {
    if (Platform.OS === 'ios') {
      if (containerWidth > 900) {
        return tabValue;
      } else {
        return value;
      }
    } else {
      if (containerWidth > 900) {
        return tabValue;
      } else {
        return value;
      }
    }
  },
  responsiveSize: (
    bigScreenVal?: number,
    smallScreenVal?: number,
    resValue: number = 380,
    customIosVal?: number,
  ) => {
    if (Platform.OS === 'ios') {
      if (containerHeight > resValue) {
        if (customIosVal) return customIosVal;
        return bigScreenVal;
      } else {
        if (customIosVal) return customIosVal;
        return smallScreenVal;
      }
    } else {
      if (containerHeight > resValue) {
        return bigScreenVal;
      } else {
        return smallScreenVal;
      }
    }
  },
  //   fontSize: (multi?) => (multi ? initialScale * 16 * multi : initialScale * 16),
  //   windowHeight: (multi?: number) =>
  //     multi ? containerHeight * multi : containerHeight,
  //   windowWidth: (multi?: number) =>
  //     multi ? containerWidth * multi : containerWidth,
  //   screenHeader: () => initialScale * 48,
};

export default unit;
