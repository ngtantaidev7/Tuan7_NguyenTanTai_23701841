import { RecoilRoot } from 'recoil';
import UserList from './components/UserList';

function App() {
  return (
    <RecoilRoot>
      <div className='min-h-screen bg-slate-50 p-8'>
        <div className='max-w-4xl mx-auto'>
          <header className='mb-10 text-center'>
            <h1 className='text-3xl font-black text-slate-800 tracking-tight'>
              FETCH USERS GLOBAL 🌐
            </h1>
            <p className='text-slate-400 mt-2'>
              Bài tập Recoil Async - Nguyen Tan Tai - 23701841
            </p>
          </header>

          <UserList />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
