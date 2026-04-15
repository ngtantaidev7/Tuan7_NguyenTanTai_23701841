import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, totalAmountSelector } from '../store/cartAtom';

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const totalAmount = useRecoilValue(totalAmountSelector);

  const updateQuantity = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className='bg-slate-50 p-6 rounded-2xl border border-slate-200'>
      <h2 className='text-xl font-black text-slate-800 mb-4'>
        GIỎ HÀNG CỦA TÀI 🛒
      </h2>

      {cart.length === 0 ? (
        <p className='text-slate-400 italic'>Chưa có món nào hết Tài ơi!</p>
      ) : (
        <div className='space-y-4'>
          {cart.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-between bg-white p-3 rounded-lg shadow-sm'
            >
              <div className='flex-1'>
                <p className='font-bold text-slate-700'>{item.name}</p>
                <p className='text-xs text-slate-400'>
                  ${item.price} x {item.quantity}
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className='w-8 h-8 bg-slate-200 rounded-md hover:bg-slate-300'
                >
                  -
                </button>
                <span className='font-bold'>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className='w-8 h-8 bg-slate-200 rounded-md hover:bg-slate-300'
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className='ml-2 text-rose-500 text-sm'
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}

          <div className='mt-6 pt-4 border-t-2 border-slate-200 flex justify-between items-center'>
            <span className='text-lg font-bold text-slate-600'>TỔNG CỘNG:</span>
            <span className='text-2xl font-black text-indigo-600'>
              ${totalAmount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
