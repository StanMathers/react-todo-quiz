import React from "react";
import detective from "../assets/detective.png";

const Detective = () => {
	return (
		<div className="row gap-5 justify-content-center align-items-center text-center">
			<div>
				<img src={detective} alt="detective" className="img-fluid" />
			</div>
			<div>
				<h1 className="black-primary">Empty...</h1>
			</div>
		</div>
	);
};

export default Detective;
