import { RecoilRoot } from 'recoil';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <RecoilRoot>
      <div className='min-h-screen bg-white flex flex-col items-center p-8'>
        <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <h2 className='text-2xl font-black text-slate-800 mb-6 uppercase'>
              Cửa hàng công nghệ
            </h2>
            <ProductList />
          </div>
          <div>
            <Cart />
          </div>
        </div>
        <footer className='mt-20 text-slate-300 font-medium'>
          Nguyen Tan Tai - 23701841
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
