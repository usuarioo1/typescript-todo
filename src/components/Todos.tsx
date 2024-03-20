import { Todo } from "../App";

interface Props {
    todos: Todo[];
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo: (selectedTodo: Todo) => void;

}


const Todos = ({todos, toggleTodo, removeTodo} : Props) => {
    return (
        <div>
            {todos.map((todo) => (
                <article key={todo.text} className="">
                    <label htmlFor="todo">
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => toggleTodo(todo)}


                        />
                        {todo.text}
                    </label>
                    <button
                        onClick={() => removeTodo(todo)}
                        type="button"
                        className="contrast"> Quitar

                    </button>
                </article>
            ))}
        </div>
    )
}

export default Todos
