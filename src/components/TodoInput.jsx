import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../store/todoAtom';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (!inputValue.trim()) return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: Date.now(), title: inputValue, completed: false },
    ]);
    setInputValue('');
  };

  return (
    <div className='flex gap-2 mb-6'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Thêm công việc mới...'
        className='flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all'
      />
      <button
        onClick={addItem}
        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold active:scale-95 transition-all'
      >
        Thêm
      </button>
    </div>
  );
};

export default TodoInput;
