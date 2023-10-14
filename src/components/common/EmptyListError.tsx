import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import R from '@components/utils/R';
import Text from '@components/common/Text';
import Button from '@components/common/Button';
import Icon from './Icon';
import {EmptyListErrorPropsType} from '@components/constants/types';

function EmptyListError(props: EmptyListErrorPropsType) {
  const {
    icon,
    heading,
    text,
    isButton,
    buttonText = 'dummy',
    onPress,
    iconSize = 60,
  } = props;

  return (
    <View style={styles.errorContainer}>
      <View style={styles.header}>
        {icon && <View style={styles.svgView}>{icon}</View>}
        <Icon
          name={'search'}
          type={'Ionicons'}
          size={iconSize}
          color={R.color.primaryColor1}
        />

        <Text
          variant={'body2'}
          font={'UbuntuMedium'}
          color={R.color.primaryColor1}
          align={'center'}
          gutterTop={10}
          gutterBottom={4}
          transform={'none'}>
          {heading}
        </Text>
        {text && (
          <Text
            variant={'body3'}
            font={'PoppinsRegular'}
            color={R.color.black2}
            align={'center'}
            numberOfLines={5}
            style={{maxWidth: '100%'}}
            transform={'none'}>
            {text}
          </Text>
        )}

        {isButton && (
          <Button
            value={buttonText}
            bgColor={R.color.primaryColor1}
            width={'50%'}
            size={'lg'}
            gutterTop={16}
            color={R.color.white}
            borderColor={R.color.primaryColor1}
            disabled={false}
            loaderColor={R.color.white}
            borderWidth={1}
            onPress={() => onPress()}
          />
        )}
      </View>
    </View>
  );
}
export default EmptyListError;

const styles = ScaledSheet.create({
  errorContainer: {
    // flex: 1,
    // height: '100%',
    justifyContent: 'space-between',
    marginTop: R.unit.scale(20),
  },
  svgView: {
    aspectRatio: 1,
    height: R.unit.scale(49),
    marginBottom: R.unit.scale(24),
  },
  header: {
    // height: '60%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    height: '30%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: R.unit.scale(20),
  },
});
