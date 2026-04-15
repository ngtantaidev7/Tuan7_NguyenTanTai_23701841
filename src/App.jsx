import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <RecoilRoot>
      <div className='min-h-screen bg-slate-50 flex flex-col items-center'>
        <Navbar />
        <main className='flex-1 flex items-center justify-center w-full'>
          <LoginForm />
        </main>
        <footer className='py-6 text-slate-400 text-sm'>
          Bải tập Auth Global State - Recoil
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
