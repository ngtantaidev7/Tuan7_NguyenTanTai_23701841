import { atom } from 'recoil';

export const notifyState = atom({
  key: 'notifyState',
  default: {
    message: '',
    show: false,
    type: 'success', 
  },
});
