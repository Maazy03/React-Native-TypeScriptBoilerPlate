import {Platform} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import PopUp from '@components/common/PopUp';

export const uploadMultipleMedia = async (options: {
  [item: string]: string | number;
}) => {
  try {
    let pickerResult: any;
    pickerResult = await ImageCropPicker.openPicker(options);
    if (pickerResult) {
      let correctFormat = pickerResult.every((item: any) => {
        return (
          item?.path.includes('.jpeg') ||
          item?.path.includes('.jpg') ||
          item?.path.includes('.png') ||
          item?.path.includes('.JPG') ||
          item?.path.includes('.PNG') ||
          item?.path.includes('.JPEG') ||
          item?.path.includes('.HEIC') ||
          item.path.includes('.mp4')
        );
      });
      if (correctFormat) {
        return pickerResult;
      } else {
        PopUp({
          heading: 'Picture Error,Image path is wrong',
          type: 'danger',
        });
      }
    }
  } catch (error) {}
};

export const uploadMedia = async (options: {
  [item: string]: string | number;
}) => {
  try {
    let pickerResult;
    pickerResult = await ImageCropPicker.openPicker(options);
    if (pickerResult) {
      if (
        pickerResult.path.includes('.jpeg') ||
        pickerResult.path.includes('.jpg') ||
        pickerResult.path.includes('.png') ||
        pickerResult.path.includes('.JPG') ||
        pickerResult.path.includes('.PNG') ||
        pickerResult.path.includes('.JPEG') ||
        pickerResult.path.includes('.HEIC') ||
        pickerResult.path.includes('.mp4')
      ) {
        return pickerResult;
      } else {
        PopUp({
          heading: 'Picture Error,Image path is wrong',
          type: 'danger',
        });
        return undefined;
      }
    }
  } catch (error) {}
};

export const stringTitleCase = (item: string) => {
  let charArray: string[] = item?.split(/(?=[A-Z])/);
  let text = '';

  let firstWord: string = charArray.shift() as string;
  let restOfFirstWord: string = firstWord?.slice(1).toLowerCase();
  let firstLetter: string = firstWord?.charAt(0).toUpperCase();
  text = firstLetter + restOfFirstWord;
  if (charArray.length >= 1) {
    text = firstLetter + restOfFirstWord + ' ' + charArray.join(' ');
  }

  return text;
};

export const downloadMedia = (filePath: string) => {
  let mimeType = filePath?.includes('.pdf')
    ? 'application/pdf'
    : filePath?.includes('.mp4')
    ? 'video/mp4'
    : 'image/jpeg';
  const {dirs} = RNFetchBlob.fs;

  const dirToSave = Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir;

  const configfb = {
    fileCache: true,
    useDownloadManager: true,
    notification: true,
    mediaScannable: true,
    title: filePath,
    mime: mimeType,
    path: `${dirToSave}/${filePath}`,
  };

  const configOptions: any = Platform.select({
    ios: {
      fileCache: true,
      title: filePath,
      path: `${dirToSave}/${filePath}`,
      appendExt: 'pdf',
    },
    android: {
      fileCache: true,
      addAndroidDownloads: {
        path: `${dirToSave}/${filePath}`,
        description: 'downloading file...',
        notification: true,
        useDownloadManager: true,
        title: filePath,
        mime: mimeType,
      },
      // useDownloadManager: true,
      // notification: true,
      // mediaScannable: true,
      // title: filePath,
      // mime: mimeType,
      // path: `${dirToSave}/${filePath}`,
    },
  });

  RNFetchBlob.config(configOptions)
    .fetch('GET', `${filePath}`, {'Cache-Control': 'no-store'})
    .then(res => {
      if (Platform.OS === 'android') {
        RNFetchBlob.android.actionViewIntent(res.path(), mimeType);
      } else {
        RNFetchBlob.ios.previewDocument(configfb.path);
      }
    })
    .catch(e => {
      PopUp({
        heading: 'Oops! Something went wrong',
        type: 'danger',
      });
    });
  // }
};
