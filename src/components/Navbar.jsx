import { useRecoilValue } from 'recoil';
import { userState } from '../store/authAtom';

const Navbar = () => {
  const user = useRecoilValue(userState);

  return (
    <nav className='w-full py-4 px-8 bg-white shadow-md flex justify-between items-center'>
      <h1 className='text-xl font-bold text-indigo-600'>IUH App</h1>
      <div className='flex items-center gap-2'>
        {user ? (
          <div className='flex items-center gap-3'>
            <span className='text-sm text-slate-500'>Xin chào,</span>
            <span className='font-bold text-slate-800 bg-indigo-100 px-3 py-1 rounded-full'>
              {user.username}
            </span>
          </div>
        ) : (
          <span className='text-sm text-rose-500 font-medium italic'>
            Chưa đăng nhập
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
