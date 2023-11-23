import { useState, useEffect } from "react";

const Theme = ({ isDark, onThemeChange }) => {
	const [icon, setIcon] = useState("bi-moon");

	useEffect(() => {
		if (isDark) {
			setIcon("bi-brightness-high");
		} else {
			setIcon("bi-moon");
		}
	}, [isDark]);

	// let icon = isDark ? "bi-moon" : "bi-brightness-high";
	return (
		<button className="btn btn-purple" onClick={onThemeChange}>
			<i className={`${icon}`}></i>
		</button>
	);
};

export default Theme;
