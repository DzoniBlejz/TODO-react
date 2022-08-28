import React, { useState } from "react";

function TodoForm({ setInput, todos, setTodos, inputText, setStatus }) {
	const inputTextHandler = (e) => {
		setInput(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInput("");
	};

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				class="todo-input"
			/>
			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default TodoForm;
