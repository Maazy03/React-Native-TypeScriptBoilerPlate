import React, {useState} from 'react';
import {Switch as SwitchC} from 'native-base';
import R from '@components/utils/R';

const Switch = (props: {toggleValue: any}) => {
  const {toggleValue} = props;
  const [isOn, setIsOn] = useState<boolean>(false);

  const onToggle = () => {
    let value = !isOn;
    toggleValue(value);
    setIsOn(value);
  };

  return (
    <SwitchC
      size="sm"
      onTrackColor={R.color.primaryColor1}
      onThumbColor={R.color.primaryColor2}
      onChange={onToggle}
    />
  );
};

export default Switch;
