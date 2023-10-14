import React from 'react';

export const navigationRef: any = React.createRef();

const navigate = (routeName: string, params: any): any => {
  navigationRef?.current?.navigate(routeName, params);
};

function goBack() {
  navigationRef?.current?.goBack();
}

export default {
  navigate,
  goBack,
  navigationRef,
};
