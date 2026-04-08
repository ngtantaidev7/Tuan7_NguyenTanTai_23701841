import { useSetRecoilState } from 'recoil';
import { countState } from '../store/counterAtom';

const ComponentB = () => {
  const setCount = useSetRecoilState(countState);

  return (
    <div className='flex items-center justify-center gap-6'>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className='w-14 h-14 flex items-center justify-center bg-rose-500 hover:bg-rose-600 active:scale-90 text-white text-3xl rounded-2xl shadow-lg shadow-rose-200 transition-all'
      >
        -
      </button>

      <button
        onClick={() => setCount(0)}
        className='text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors'
      >
        Reset
      </button>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className='w-14 h-14 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 active:scale-90 text-white text-3xl rounded-2xl shadow-lg shadow-emerald-200 transition-all'
      >
        +
      </button>
    </div>
  );
};

export default ComponentB;
