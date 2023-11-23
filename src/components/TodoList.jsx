import React from "react";
import Detective from "./Detective";

const TodoList = ({ todoList }) => {
	if (todoList.length === 0) {
		return <Detective />;
	}

	return (
		<ul className="list-group">
			{todoList.map((todo) => (
				<li className="list-group-item mb-3" key={todo.id}>
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex gap-3">
							<input type="checkbox" className="form-check-input" />
							{todo.isCompleted ? <del>{todo.title}</del> : todo.title}
						</div>

						<div className="d-flex align-items-center gap-3">
							<i className="bi bi-trash"></i>
							<i className="bi bi-pencil"></i>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
