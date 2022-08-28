import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, i) => (
					<Todo
						setTodos={setTodos}
						todos={todos}
						text={todo.text}
            todo={todo}
						key={todo + i.toString()}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
