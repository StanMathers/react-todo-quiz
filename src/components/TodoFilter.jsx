import React from "react";

const TodoFilter = ({ onFilter }) => {
	return (
		<div className="dropdown-center">
			<button
				className="btn btn-purple dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				ALL
			</button>
			<ul className="dropdown-menu mouse-pointer">
				<li>
					<a
						className="dropdown-item purple-primary"
						onClick={() => {
							onFilter("all");
						}}
					>
						All
					</a>
				</li>
				<li>
					<a
						className="dropdown-item purple-primary"
						onClick={() => {
							onFilter("completed");
						}}
					>
						Completed
					</a>
				</li>
				<li>
					<a
						className="dropdown-item purple-primary"
						onClick={() => {
							onFilter("incomplete");
						}}
					>
						Incomplete
					</a>
				</li>
			</ul>
		</div>
	);
};

export default TodoFilter;
