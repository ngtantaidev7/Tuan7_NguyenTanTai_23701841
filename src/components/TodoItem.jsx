import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoAtom';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // Xử lý Check/Uncheck
  const toggleItemCompletion = () => {
    const newList = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodoList(newList);
  };

  // Xử lý Xóa
  const deleteItem = () => {
    const newList = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(newList);
  };

  return (
    <div className='flex items-center justify-between p-4 bg-slate-50 rounded-xl mb-3 border border-slate-100 hover:shadow-sm transition-all'>
      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          checked={item.completed}
          onChange={toggleItemCompletion}
          className='w-5 h-5 cursor-pointer accent-blue-600'
        />
        <span
          className={`${item.completed ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}`}
        >
          {item.title}
        </span>
      </div>
      <button
        onClick={deleteItem}
        className='text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-colors'
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;
