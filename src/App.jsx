import { RecoilRoot } from 'recoil';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className='min-h-screen bg-slate-100 flex items-center justify-center p-4'>
        <div className='bg-white w-full max-w-md p-8 rounded-[2rem] shadow-2xl border border-white'>
          <h1 className='text-2xl font-black text-slate-800 mb-6 text-center tracking-tight'>
            TODO LIST GLOBAL
          </h1>

          <TodoInput />
          <TodoList />

          <div className='mt-6 pt-6 border-t border-slate-100 text-center'>
            <p className='text-xs text-slate-400 uppercase font-bold tracking-widest'>
              Nguyen Tan Tai - 23701841
            </p>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
