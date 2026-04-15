import { useRecoilState } from 'recoil';
import { cartState } from '../store/cartAtom';

const products = [
  { id: 1, name: 'iPhone 15 Pro', price: 1000 },
  { id: 2, name: 'MacBook M3', price: 2000 },
  { id: 3, name: 'AirPods Pro', price: 250 },
];

const ProductList = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='grid grid-cols-1 gap-4 mb-8'>
      {products.map((p) => (
        <div
          key={p.id}
          className='flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border'
        >
          <div>
            <h3 className='font-bold text-slate-700'>{p.name}</h3>
            <p className='text-blue-600 font-medium'>${p.price}</p>
          </div>
          <button
            onClick={() => addToCart(p)}
            className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all active:scale-95'
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
