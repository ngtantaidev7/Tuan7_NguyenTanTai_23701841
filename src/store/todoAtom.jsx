import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: 1, title: 'Học Recoil buổi 6', completed: false },
    { id: 2, title: 'Làm bài tập IUH', completed: true },
  ],
});
