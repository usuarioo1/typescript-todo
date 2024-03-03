import { ChangeEvent, useState } from "react"

interface Props{

    addTodo :(text:string) => void
}

const AddTodo = ({addTodo}:Props) => {

    const [text, setText] = useState('')

    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedText = text.trim();
        if(!trimmedText) return
        addTodo(trimmedText);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
                To do
                <input type="text" 
                id="todo" 
                placeholder="ingresar tarea" 
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
                <button type="submit"> Add Todo</button>
            </label>
        </form>
    )
}

export default AddTodo
