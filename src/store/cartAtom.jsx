import { atom, selector } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const totalAmountSelector = selector({
  key: 'totalAmountSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});
