import React from "react";
import { useRef } from "react";

const AddTodoModal = ({ onSave }) => {
	const noteRef = useRef(null);

	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content px-5">
						<div className="justify-content-center mt-3">
							<h1
								className="modal-title fs-5 black-primary"
								id="exampleModalLabel"
							>
								NEW NOTE
							</h1>
						</div>
						<div className="modal-body">
							<input
								type="text"
								className="form-control no-focus input-bar"
								name="newNote"
								id="newNote"
								placeholder="Input your note..."
								ref={noteRef}
							/>
						</div>
						<div className="mt-5 mb-2 d-flex justify-content-between">
							<button
								type="button"
								className="btn btn-outline-purple"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-purple"
								onClick={() => onSave(noteRef.current.value)}
							>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddTodoModal;
