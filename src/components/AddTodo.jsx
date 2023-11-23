import React from "react";

const AddTodo = () => {
	// Create position absolute and set it to the bottom right corner
	return (
		<div
			className="add-todo position-fixed"
			type="button"
			data-bs-toggle="modal"
			data-bs-target="#exampleModal"
		>
			<button className="btn btn-purple add-todo__btn">
				<i className="bi bi-plus-lg"></i>
			</button>
		</div>
	);
};

export default AddTodo;
