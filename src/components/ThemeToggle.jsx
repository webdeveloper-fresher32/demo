import { useContext } from 'react';
import { Button } from 'antd';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <Button onClick={() => setIsDark(!isDark)}>
      Switch to {isDark ? 'Light' : 'Dark'} Theme
    </Button>
  );
};

export default ThemeToggle;
