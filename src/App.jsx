import { RecoilRoot } from 'recoil';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <RecoilRoot>
      <div className='min-h-screen bg-slate-100 flex items-center justify-center p-6'>
        <div className='bg-white w-full max-w-sm p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 space-y-10 border border-slate-50'>
          <header>
            <h1 className='text-center text-slate-800 font-bold text-xl tracking-tight'>
              RECOIL GLOBAL STATE
            </h1>
          </header>

          <section className='py-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200'>
            <ComponentA />
          </section>

          <footer>
            <ComponentB />
          </footer>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
