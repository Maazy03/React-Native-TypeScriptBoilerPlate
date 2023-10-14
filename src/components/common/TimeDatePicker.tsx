import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import R from '@components/utils/R';
import moment from 'moment';
import Text from '@components/common/Text';
import Icon from '@components/common/Icon';
import {View} from 'react-native';

function TimeDatePicker(props: {
  selectDate: any | undefined;
  pickerMode: string;
  date: any;
  placeholder: string | undefined;
  minimumDate: any;
  state: any;
  disable: boolean;
  gutterTop: number;
  gutterBottom: number;
  formError: any;
  title?: string;
}) {
  const {
    selectDate,
    pickerMode,
    date,
    placeholder,
    minimumDate,
    state,
    disable = false,
    gutterTop = 12,
    gutterBottom = 12,
    formError,
    title,
  } = props;

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<any | undefined>('date');

  const showDatepicker = (mode: any) => {
    setMode(pickerMode);
    setShow(true);
  };

  const selectedDate = (event: any, selectedDate: any) => {
    setShow(false);
    const currentDate = selectedDate;
    selectDate({state, currentDate});
  };

  let disableColor = disable
    ? R.color.gray
    : date
    ? R.color.black2
    : R.color.gray;

  return (
    <View
      style={{
        marginTop: R.unit.scale(gutterTop),
        marginBottom: R.unit.scale(gutterBottom),
      }}>
      {title && (
        <Text
          variant={'body3'}
          font={'PoppinsSemiBold'}
          color={R.color.black2}
          align={'left'}
          gutterTop={10}
          gutterBottom={R.unit.scale(-10)}
          transform={'none'}>
          {title}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={disable}
        style={[
          R.styles.rowView,
          styles.dateBox,
          {
            borderColor: formError
              ? R.color.red
              : R.color.inputFieldBordercolor,
          },
        ]}
        onPress={showDatepicker}>
        <Text
          fontSize={R.unit.scale(13)}
          font={'PoppinsMedium'}
          color={disableColor}
          align={'left'}
          transform={'none'}>
          {`${
            !!date
              ? moment(date).format(
                  pickerMode === 'date'
                    ? 'ddd, MM/DD/YYYY'
                    : pickerMode === 'time'
                    ? 'HH:mm : A'
                    : 'ddd, MM/DD/YYYY HH:mm : A',
                )
              : placeholder
          }`}
        </Text>
        <Icon
          type={pickerMode === 'date' ? 'FontAwesome5' : 'Fontisto'}
          name={pickerMode === 'date' ? 'calendar-alt' : 'clock'}
          color={R.color.primaryColor1}
          size={22}
        />
      </TouchableOpacity>

      {formError?.length > 0 && (
        <Text
          variant={'body3'}
          font={'InterRegular'}
          // gutterTop={R.unit.scale(errorMTop)}
          // gutterBottom={R.unit.scale(errorMBottom)}
          color={R.color.inputFieldErrorMessageColor}
          align={'left'}
          transform={'none'}>
          {formError}
        </Text>
      )}

      {show && (
        <DateTimePicker
          value={new Date()}
          mode={mode}
          modal={true}
          theme={Platform.OS === 'ios' ? 'dark' : 'light'}
          onChange={selectedDate}
          minimumDate={minimumDate || new Date()}
          onCancel={() => {
            setShow(false);
          }}
          textColor={
            Platform.OS === 'ios' ? R.color.white : R.color.primaryColor1
          }
          title={`Set ${mode}`}
          // positive={'Set'}
          // cancelText={'Clear'}
          is24hourSource={true}
          // androidVariant={'nativeAndroid'}
          maximumDate={new Date(2300, 10, 20)}
        />
      )}
    </View>
  );
}
export default TimeDatePicker;

const styles = StyleSheet.create({
  dateBox: {
    height: R.unit.scale(48),
    width: '100%',
    borderColor: R.color.inputFieldBordercolor,
    borderWidth: R.unit.scale(1),
    borderRadius: R.unit.scale(5),
    marginTop: R.unit.scale(11),
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(14),
  },
});
