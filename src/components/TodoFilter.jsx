import React from "react";

const TodoFilter = () => {
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
			<ul className="dropdown-menu">
				<li>
					<a className="dropdown-item purple-primary" href="#">
						All
					</a>
				</li>
				<li>
					<a className="dropdown-item purple-primary" href="#">
						Completed
					</a>
				</li>
				<li>
					<a className="dropdown-item purple-primary" href="#">
						Incomplete
					</a>
				</li>
			</ul>
		</div>
	);
};

export default TodoFilter;
