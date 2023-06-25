import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodods }) {
    return (
        <ul className='list'>
            {todos.length == 0 && 'No ToDos'}
            {todos.map(todo => {
                return (
                    <TodoItem 
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodods={deleteTodods} 
                    />
                    
                )
            })}
        </ul>
    )
}