import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/common/Text';
import R from '@components/utils/R';
import Icon from '@components/common/Icon';
import {InfoModalPropsType} from '@components/constants/types';
import Button from '@components/common/Button';

const InfoModal = forwardRef((props: InfoModalPropsType, ref) => {
  const {title, description, isCancel, onSubmitPress, onCancelPress} = props;

  const [modalVisible, setModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setModalVisible(true);
    },
  }));

  const onSubmit = () => {
    onSubmitPress();
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
    onCancelPress && onCancelPress();
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={modalVisible}
      // visible={true}
      onRequestClose={closeModal}
      onShow={() => {
        setModalVisible(true);
      }}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={closeModal}
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}></TouchableOpacity>
        <>
          <SafeAreaView style={styles.modalView}>
            <View style={styles.contentContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                activeOpacity={0.6}
                onPress={closeModal}>
                <Icon
                  type={'Ionicons'}
                  name={'close'}
                  color={R.color.white}
                  size={20}
                />
              </TouchableOpacity>

              <View style={styles.subContainer}>
                <Text
                  variant={'h2'}
                  font={'UbuntuMedium'}
                  gutterBottom={20}
                  color={R.color.black1}
                  align={'center'}
                  transform={'none'}>
                  {title}
                </Text>
                <Text
                  variant={'body2'}
                  font={'PoppinsRegular'}
                  gutterBottom={20}
                  color={R.color.black1}
                  align={'center'}
                  transform={'none'}>
                  {description}
                </Text>
              </View>
              <View style={R.styles.rowView}>
                {isCancel && (
                  <Button
                    value="Cancel"
                    bgColor={R.color.gray3}
                    width={'45%'}
                    size={'bsm'}
                    color={R.color.white}
                    rippleColor={R.color.gray2}
                    loaderColor={R.color.white}
                    btnWrapperStyles={{alignSelf: 'flex-start'}}
                    onPress={closeModal}
                  />
                )}

                <Button
                  value="Ok"
                  bgColor={R.color.primaryColor1}
                  width={'45%'}
                  size={'bsm'}
                  color={R.color.white}
                  rippleColor={R.color.shadedPrimaryColor1}
                  loaderColor={R.color.white}
                  btnWrapperStyles={{alignSelf: 'flex-start'}}
                  onPress={onSubmit}
                />
              </View>
            </View>
          </SafeAreaView>
        </>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(16),
  },
  modalView: {
    backgroundColor: R.color.white,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: R.unit.scale(10),
    paddingVertical: R.unit.scale(10),
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: R.unit.scale(8),
    backgroundColor: R.color.primaryColor1,
    borderRadius: R.unit.scale(39),
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: R.unit.scale(12),
  },
  subContainer: {
    width: '100%',
    paddingBottom: R.unit.scale(16),
  },
});

export default InfoModal;
