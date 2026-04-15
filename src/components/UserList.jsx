import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userGlobalState } from '../store/userAtom';

const UserList = () => {
  const [userState, setUserState] = useRecoilState(userGlobalState);

  const fetchUsers = async () => {
    // Bắt đầu Loading
    setUserState({ data: [], loading: true, error: null });

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      if (!response.ok) throw new Error('Không thể lấy dữ liệu từ server!');

      const data = await response.json();

      // Thành công: Lưu data và tắt Loading
      setUserState({ data: data, loading: false, error: null });
    } catch (err) {
      // Thất bại: Lưu lỗi và tắt Loading
      setUserState({ data: [], loading: false, error: err.message });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 1. Giao diện khi đang Loading
  if (userState.loading) {
    return (
      <div className='flex flex-col items-center justify-center p-10 space-y-4'>
        <div className='w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin'></div>
        <p className='text-slate-500 font-medium animate-pulse'>
          Đang tải dữ liệu Tài ơi...
        </p>
      </div>
    );
  }

  // 2. Giao diện khi bị Lỗi
  if (userState.error) {
    return (
      <div className='p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center'>
        <p className='text-rose-600 font-bold'>❌ Lỗi: {userState.error}</p>
        <button
          onClick={fetchUsers}
          className='mt-4 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all'
        >
          Thử lại lần nữa
        </button>
      </div>
    );
  }

  // 3. Giao diện khi có Dữ liệu
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {userState.data.map((user) => (
        <div
          key={user.id}
          className='p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-all group'
        >
          <h3 className='font-bold text-slate-800 group-hover:text-indigo-600 transition-colors'>
            {user.name}
          </h3>
          <p className='text-sm text-slate-500'>📧 {user.email}</p>
          <p className='text-xs text-slate-400 mt-2 italic'>
            🏢 {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
