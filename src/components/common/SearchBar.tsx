import React from 'react';
import R from '@components/utils/R';
import TextInput from '@components/common/TextInput';
import {SearchBarPropsType} from '@components/constants/types';

function SearchBar(props: SearchBarPropsType) {
  const {onChange, value, placeholder, containerStyles} = props;

  const onChangeText = (data: any) => {
    onChange(data);
  };

  return (
    <TextInput
      secureText={false}
      placeholder={placeholder}
      onChangeText={onChangeText}
      color={R.color.black2}
      value={value}
      backgroundColor={R.color.white}
      placeHolderColor={R.color.black}
      borderWidth={1}
      width={'100%'}
      returnKeyType={'done'}
      iconName={'search'}
      containerStyles={containerStyles}
      iconType={'Feather'}
      rightIconName={'tune'}
      rightIconType={'MaterialIcons'}
      alignItems={'center'}
      inputStyles={{
        paddingVertical: R.unit.scale(12),
      }}
      leftIconStyles={{
        color: R.color.gray4,
        fontSize: R.unit.scale(16),
        width: R.unit.scale(25),
      }}
    />
  );
}
export default SearchBar;
