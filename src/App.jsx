import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Search from "./components/Search";
import TodoFilter from "./components/TodoFilter";
import Theme from "./components/Theme";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";
import AddTodo from "./components/AddTodo";

function App() {
	const [isDark, setIsDark] = useState(false);
	// Data:  todolist = { id: 1, title: "Learn React", isCompleted: false }
	const [todolist, setTodoList] = useState([

	]);

	const handleOnChangeTheme = () => {
		console.log("handleOnChangeTheme");
		setIsDark(!isDark);
	};

	// Check if body background color is --black-primary

	return (
		<>
			<div className="container main">
				<AddTodoModal />

				<h1 className="black-primary">TODO LIST</h1>
				<div className="d-flex flex-row gap-3">
					<Search />
					<TodoFilter />
					<Theme isDark={isDark} onThemeChange={handleOnChangeTheme} />
				</div>
				<div className="p-5">
					<TodoList todoList={todolist} />
				</div>
				<AddTodo />
			</div>
		</>
	);
}

export default App;
