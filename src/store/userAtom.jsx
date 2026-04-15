import { atom } from 'recoil';

export const userGlobalState = atom({
  key: 'userGlobalState',
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
