import { useRecoilValue } from 'recoil';
import { todoListState } from '../store/todoAtom';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className='max-h-[400px] overflow-y-auto pr-2'>
      {todoList.length > 0 ? (
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      ) : (
        <p className='text-center text-slate-400 italic py-4'>
          Danh sách trống Tài ơi!
        </p>
      )}
    </div>
  );
};

export default TodoList;
