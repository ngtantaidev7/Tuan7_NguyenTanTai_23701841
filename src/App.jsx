import { RecoilRoot, useRecoilValue } from 'recoil';
import ThemeToggle from './components/ThemeToggle';
import { themeState } from './store/themeAtom';

// Tạo một Component con để dùng được Hook useRecoilValue
const AppContent = () => {
  const theme = useRecoilValue(themeState);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500
      ${theme === 'light' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'}`}
    >
      <div className='text-center space-y-6'>
        <h1 className='text-4xl font-black'>
          {theme === 'light'
            ? 'Chào buổi sáng Tài! ☀️'
            : 'Chúc Tài ngủ ngon! 🌙'}
        </h1>

        <p className='text-lg opacity-80'>
          Hiện tại đang là chế độ:{' '}
          <span className='uppercase font-bold'>{theme}</span>
        </p>

        <ThemeToggle />
      </div>
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

export default App;
