import React, { useContext } from 'react';
import { ConfigProvider } from '@eflag/design';

export default () => {
  const { navigate } = useContext(ConfigProvider.ExtendedConfigContext);
  return navigate;
};
