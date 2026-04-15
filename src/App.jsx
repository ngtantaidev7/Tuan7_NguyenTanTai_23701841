import { RecoilRoot } from 'recoil';
import Toast from './components/Toast';
import ActionButtons from './components/ActionButtons';

function App() {
  return (
    <RecoilRoot>
      <div className='min-h-screen bg-slate-50 flex items-center justify-center'>
        <Toast />

        <div className='text-center space-y-8'>
          <h1 className='text-3xl font-black text-slate-800'>NOTIFY SYSTEM</h1>
          <p className='text-slate-500'>
            Thử bấm các nút dưới đây để thấy Toast xuất hiện
          </p>

          <div className='flex justify-center'>
            <ActionButtons />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
