import { useRecoilState } from 'recoil';
import { themeState } from '../store/themeAtom';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`px-6 py-3 rounded-full font-bold transition-all duration-500 shadow-lg active:scale-90
        ${
          theme === 'light'
            ? 'bg-slate-800 text-white'
            : 'bg-yellow-400 text-slate-900'
        }`}
    >
      {theme === 'light' ? '🌙 Sang Chế độ Tối' : '☀️ Sang Chế độ Sáng'}
    </button>
  );
};

export default ThemeToggle;
