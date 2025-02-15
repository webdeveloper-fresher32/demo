import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  const layoutStyle = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: isDark ? '#001529' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={layoutStyle} onClick={() => setIsDark(!isDark)}>
      {children}
    </div>
  );
};

export default Layout;
