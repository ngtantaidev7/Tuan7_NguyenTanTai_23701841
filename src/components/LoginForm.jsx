import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../store/authAtom';

const LoginForm = () => {
  const [user, setUser] = useRecoilState(userState);
  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    if (!inputValue.trim()) return alert('Tài ơi, nhập tên đã!');

    // Giả lập đăng nhập: Lưu object user vào Global State
    setUser({
      username: inputValue,
      loginAt: new Date().toLocaleTimeString(),
    });
    setInputValue('');
  };

  const handleLogout = () => {
    setUser(null); // Xóa user khỏi Global State
  };

  return (
    <div className='p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-sm'>
      {!user ? (
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-slate-800'>Đăng nhập</h2>
          <input
            type='text'
            placeholder='Nhập username của bạn...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all'
          />
          <button
            onClick={handleLogin}
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-all'
          >
            Vào hệ thống
          </button>
        </div>
      ) : (
        <div className='text-center space-y-6'>
          <div className='w-20 h-20 bg-indigo-500 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold uppercase'>
            {user.username.charAt(0)}
          </div>
          <div>
            <h2 className='text-xl font-bold text-slate-800'>
              Chào mừng {user.username}!
            </h2>
            <p className='text-sm text-slate-500 mt-1'>
              Bạn đã vào lúc: {user.loginAt}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className='w-full bg-slate-100 hover:bg-rose-100 hover:text-rose-600 text-slate-600 font-bold py-3 rounded-xl transition-all'
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
