/**
 * iframe: 600
 */
import { message } from '@eflag/design';
import { Login } from '@eflag/ui';
import { useState } from 'react';
// @ts-ignore
import background_img from '../../assets/background_img.svg';

export default () => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Login
      logo="https://mdn.alipayobjects.com/huamei_n8rchn/afts/img/A*WElAQJswckAAAAAAAAAAAAAADvSFAQ/original"
      bgImage={background_img}
      title="Welcome OCP Express"
      description="Let's start your usage"
      board={<h2>顶部公告</h2>}
      onShowRegisterChange={setShowRegister}
      showRegister={showRegister}
      registerProps={{
        onFinish: values => {
          message.success(`注册：用户名: ${values.username} 密码: ${values.password}`);
          setShowRegister(false);
        },
        isUserExists: async account => {
          if (account == 'eflag') {
            return true;
          }
        },
      }}
      loginProps={{
        onFinish: values => {
          message.success(`登录：用户名: ${values.username} 密码: ${values.password}`);
        },
      }}
      enableRegister={true}
      showLocale={true}
    />
  );
};
