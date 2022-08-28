import TodoForm from "./components/TodoForm";
import "./components/App.css";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((el) => el.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((el) => el.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div>
			<h1>TODO list</h1>
			<TodoForm
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInput={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	);
}

export default App;
