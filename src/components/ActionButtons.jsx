import { useSetRecoilState } from 'recoil';
import { notifyState } from '../store/notifyAtom';

const ActionButtons = () => {
  const setNotify = useSetRecoilState(notifyState);

  const triggerNotify = (msg, type) => {
    setNotify({
      message: msg,
      type: type,
      show: true,
    });
  };

  return (
    <div className='flex flex-col gap-4 w-full max-w-xs'>
      <button
        onClick={() => triggerNotify('Lưu thành công rồi !', 'success')}
        className='bg-emerald-100 text-emerald-700 py-3 rounded-xl font-bold hover:bg-emerald-200 transition-all'
      >
        Bấm để báo Thành công
      </button>

      <button
        onClick={() => triggerNotify('Có lỗi xảy ra rồi!', 'error')}
        className='bg-rose-100 text-rose-700 py-3 rounded-xl font-bold hover:bg-rose-200 transition-all'
      >
        Bấm để báo Lỗi
      </button>

      <button
        onClick={() => triggerNotify('Bạn có 1 tin nhắn mới', 'info')}
        className='bg-blue-100 text-blue-700 py-3 rounded-xl font-bold hover:bg-blue-200 transition-all'
      >
        Bấm để báo Thông tin
      </button>
    </div>
  );
};

export default ActionButtons;
