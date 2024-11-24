import React from 'react';
import { ConfigProvider } from 'antd';
import './index.scss'; // 引入全局样式

const App = ({ Component, pageProps }) => {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export default App;
