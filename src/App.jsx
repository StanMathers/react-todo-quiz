import { useState, useEffect } from "react";
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
	const [todolist, setTodoList] = useState([]);

	// Load data from localStorage onece app is loaded
	useEffect(() => {
		const localData = localStorage.getItem("todolist");
		setTodoList(localData ? JSON.parse(localData) : []);
	}, []);

	// Handle theme change state
	const handleOnChangeTheme = () => {
		console.log("handleOnChangeTheme");
		setIsDark(!isDark);
	};

	// Handle new todo save
	const handleOnSave = (value) => {
		const id = Math.floor(Math.random() * 10000) + 1;

		const newTodo = { id, title: value, isCompleted: false };
		setTodoList([...todolist, newTodo]);

		// Save it to localStorage
		localStorage.setItem("todolist", JSON.stringify([...todolist, newTodo]));
	};

	// Handle todo complete
	const handleOnComplete = (id) => {
		let todo = todolist.find((todo) => todo.id === id);
		todo.isCompleted = !todo.isCompleted;
		setTodoList([...todolist]);

		// Save it to localStorage
		localStorage.setItem("todolist", JSON.stringify([...todolist]));
	};

	const handleOnDelete = (id) => {
		const newTodoList = todolist.filter((todo) => todo.id !== id);
		setTodoList(newTodoList);
		localStorage.setItem("todolist", JSON.stringify(newTodoList));
	};

	const handleOnUpdate = (id, newTitle) => {
		const newTodoList = todolist.map((todo) => {
			if (todo.id === id) {
				todo.title = newTitle;
			}
			return todo;
		});
		setTodoList(newTodoList);
		localStorage.setItem("todolist", JSON.stringify(newTodoList));
	};

	// Check if body background color is --black-primary

	return (
		<>
			<div className="container main">
				<AddTodoModal onSave={handleOnSave} />

				<h1 className="black-primary">TODO LIST</h1>
				<div className="d-flex flex-row gap-3">
					<Search />
					<TodoFilter />
					<Theme isDark={isDark} onThemeChange={handleOnChangeTheme} />
				</div>
				<div className="p-5">
					<TodoList
						todoList={todolist}
						onComplete={handleOnComplete}
						onDelete={handleOnDelete}
						onUpdate={handleOnUpdate}
					/>
				</div>
				<AddTodo />
			</div>
		</>
	);
}

export default App;
