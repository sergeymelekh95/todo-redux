import AddTodo from './Components/AddTodo';
import FiltersTodo from './Components/FiltersTodo';
import TodoList from './Components/TodoList';
import './index.scss';

function App() {
    return (
        <div className='App'>
            <h1>Hello from todo redux</h1>
            <AddTodo />
            <FiltersTodo />
            <TodoList />
        </div>
    );
}

export default App;