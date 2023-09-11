import { NewItem } from "./NewItem"

export function FullList({ todos, toggleTodo, deleteTodo }: any) {
    return (
        <>
            <ul className="list">
                {todos.length === 0 && "Nothing to display"}
                {todos.map(todo => {
                    return (
                        <NewItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    )
                })}
            </ul>
        </>
    )
}