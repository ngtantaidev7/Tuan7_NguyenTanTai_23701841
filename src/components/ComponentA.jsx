import { useRecoilValue } from 'recoil';
import { countState } from '../store/counterAtom';

const ComponentA = () => {
  const count = useRecoilValue(countState);

  return (
    <div className='flex flex-col items-center'>
      <span className='text-slate-400 text-sm font-medium uppercase tracking-widest mb-2'>
        Current Count
      </span>
      <h2 className='text-7xl font-black text-indigo-600 drop-shadow-sm'>
        {count}
      </h2>
    </div>
  );
};

export default ComponentA;
