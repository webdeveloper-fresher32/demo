import { createContext, useState } from 'react';
import { ConfigProvider } from 'antd';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = {
    token: {
      colorPrimary: isDark ? '#1890ff' : '#52c41a',
      colorBgBase: isDark ? '#001529' : '#ffffff',
      colorTextBase: isDark ? '#ffffff' : '#000000',
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ConfigProvider theme={theme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
