import {ReactNode} from 'react';
import {
  ImageSourcePropType,
  LayoutChangeEvent,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type ButtonPropsTypes = {
  value: string;
  size: string;
  width?: string;
  btnWrapperStyles?: {[key: string]: number | string};
  color?: string;
  gutterTop?: number;
  gutterBottom?: number;
  rippleColor?: string;
  borderRadius?: number;
  loader?: boolean;
  borderColor?: string;
  loaderColor?: string;
  bgColor?: string;
  borderWidth?: number;
  textStyles?: {[key: string]: number | string};
  variant?: string;
  font?: string;
  disabledButtonBGColor?: string;
  disabledButtonTextColor?: string;
  onPress: any;
  disabled?: boolean;
  justifyContent?: undefined;
};

export type ButtonSizeTypes = {[key: string]: number};

export type TextPropsTypes = {
  variant?:
    | 'extraLargeTitle'
    | 'largeTitle'
    | 'h0'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
    | 'small'
    | string;
  font: string;
  color?: string;

  // ?? QUESTION MARK MEANS OPTIONAL
  fontSize?: number;
  gutterTop?: number;
  gutterBottom?: number;
  align?: 'left' | 'center' | 'right' | 'auto';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  numberOfLines?: number;
  letterSpacing?: number;
  top?: number;
  lineHeight?: number;
  style?: TextStyle;
  children?: any;
  onPress?: any;
};

export type TextSizeTypes = {[key: string]: number};

export type TextVariantTypes = {
  [key: string]: {fontSize: number; lineHeight: number};
};

export type TextFontTypes = {[key: string]: {fontFamily: string}};

export type ImagePropsType = {
  uploadedImage?: string;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  onLoadImageUrl?: string;
  source?: {[item: string]: string} | string | ImageSourcePropType | any;
  imageStyles?: {[item: string]: number | string};
  customImage?: string | undefined | any;
  recentImage?: string | undefined;
  containerStyles?: {[item: string]: number | string};
};

export type LoaderPropsType = {
  size?: number;
  color?: string;
  iosLoader?: boolean;
  bgColor?: string | undefined;
};

export type IconsType = {[item: string]: string};

export type IconPropsType = {
  name?: string;
  type?: string;
  size?: number;
  color?: string;
  iconStyles?: {[item: string]: string | number} | any;
  onPress?: any;
};

export type PopUpPropsType = {
  heading: string;
  visibilityTime?: number;
  type: 'success' | 'danger' | 'warning';
  variant?: 'top-accent' | 'solid' | 'left-accent' | 'top-accent'; // solid, subtle, left-accent, top-accent
  placement?: 'top' | 'bottom';
};
export type PopUpTypes = {
  [item: string]: {bgColor: string; textColor: string; icon: string};
};

export type CheckBoxPropsType = {
  alreadySelected: boolean;
  onPress?: any;
  id?: string;
  disabled?: boolean;
};

export type AnimationLoaderPropsType = {
  overlayColor: string;
  containerStyles: {[item: string]: number | string};
  iosLoader: boolean;
};

export type AuthSwitchPropsType = {
  screen: string;
  text: string;
  linkText: string;
  textColor?: string;
  iconColor?: string;
  containerStyles: {[item: string]: number | string};
  hoverStyles: {[item: string]: number | string};
};

export type EmptyListErrorPropsType = {
  icon?: any;
  heading?: string;
  text?: string;
  isButton?: boolean;
  buttonText?: string;
  onPress?: any;
  iconSize?: number;
};
export type OTPPropsType = {
  code: string;
  setCode: any;
  maximumLength: 4 | 6;
  setIsPinReady: any;
  inputStyles: {[item: string]: number | string};
  textVariant: string;
};

export type SearchBarPropsType = {
  onChange: any;
  value: string;
  placeholder: string;
  containerStyles: {[item: string]: number | string};
};
export type TagsPropsType = {
  data: any;
  onPress: any;
  containerStyles: {[item: string]: number | string};
  contentContainerStyles: {[item: string]: number | string};
  emptyListHeading: string;
  emptyListText: string;
  isLoading: boolean;
  key: string;
};

export type FlatListPropsType = {
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;
  onContentSizeChange: ((w: number, h: number) => void) | undefined;
  containerStyles?: {[item: string]: number | string};
  contentContainerStyles?: {[item: string]: number | string};
  emptyContainerStyles?: {[item: string]: number | string};
  emptyListHeading?: string;
  emptyListText?: string;
  emptyListFooter?: boolean;
  renderList: any;
  listData: {[item: string]: number | string | any}[];
  isLoading?: boolean;
  isFetching?: boolean;
  pageNo?: number | undefined;
  refresh?: any;
  loadMore?: any;
  deleteId?: string | number;
  onDeleteSuccess?: any;
  forwardRef?: any;
  paddingBottom?: any;
  noOfColumns?: 1 | 2;
  onEndReachedThreshold?: number;
  totalCount: number;
  nestedScrollEnabled: boolean;
};

export type TextInputPropsType = {
  onChangeText(text: any): unknown;
  value: string;
  defaultValue?: string;
  disable?: any;
  placeholder: string;
  height?: number;
  color: string;
  inputHeight?: number;
  width: string;
  inputContainerStyles?: {[item: string]: string | number};
  containerStyles?: {[item: string]: string | number};
  inputStyles?: {[item: string]: string | number};
  gutterTop?: number;
  gutterBottom?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  placeHolderColor?: string;
  multiline?: boolean;
  numberOfLines?: number;
  formErrorText?: string;
  errorMTop?: number;
  errorMBottom?: number;
  secureTextEntry?: undefined;

  rightIconName?: string;
  rightIconType?: string;
  rightIconColor?: string;
  rightIconStyles?: string | any;
  customRightIcon?: any | ReactNode | ViewProps | undefined;

  leftIcon?: string;
  leftIconType?: string;
  iconColor?: string;
  eyeColor?: string;
  leftIconStyles?: string | any;
  customLeftIcon?: any | ReactNode | ViewProps;

  title?: string;
  titleColor?: string;
  secureText?: string | any;
  forwardedRef?: any;
  onSubmitEditing?: any;
  returnKeyType?: any;
  blurOnSubmit?: any;
  keyboardType?: 'number-pad' | 'default' | 'decimal-pad' | 'numeric'; //number-pad, numeric, phone-pad,
  onFocus?: any;
  onBlur?: any;
  maxLength?: number;
  errorColor?: string;
};

export type FormScrollContainerPropsType = {
  contentContainerStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  children: ReactNode;
  keyboardShouldPersistTaps?: any;
  paddingBottom?: number;
  extraScrollHeight?: number;
  height?: any;
  nestedScrollEnabled?: boolean | undefined;
};
export type ScreenBoilerPropsType = {
  children: ReactNode;
  isSubHeader: boolean;
  mainHeading: string;
  isBack: boolean;
};

export type InfoModalPropsType = {
  title: string;
  description?: string;
  isCancel?: any;
  onSubmitPress?: any;
  onCancelPress?: any;
};
