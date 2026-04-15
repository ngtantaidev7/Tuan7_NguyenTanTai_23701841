import { atom } from 'recoil';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('app-theme');
  return savedTheme ? savedTheme : 'light';
};

export const themeState = atom({
  key: 'themeState',
  default: getInitialTheme(),
});
