import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { notifyState } from '../store/notifyAtom';

const Toast = () => {
  const [notify, setNotify] = useRecoilState(notifyState);

  // Tự động đóng sau 3 giây
  useEffect(() => {
    if (notify.show) {
      const timer = setTimeout(() => {
        setNotify((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notify.show, setNotify]);

  if (!notify.show) return null;

  const bgColors = {
    success: 'bg-emerald-500',
    error: 'bg-rose-500',
    info: 'bg-blue-500',
  };

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-2xl shadow-2xl text-white font-bold
      animate-bounce-in flex items-center gap-3 transition-all ${bgColors[notify.type]}`}
    >
      <span>{notify.type === 'success' ? '✅' : 'ℹ️'}</span>
      {notify.message}
      <button
        onClick={() => setNotify((prev) => ({ ...prev, show: false }))}
        className='ml-4 opacity-70 hover:opacity-100'
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
