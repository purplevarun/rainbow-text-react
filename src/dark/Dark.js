import React from "react";
import "./Dark.css";
const Dark = ({ children, fontSize, fontWeight }) => {
	return (
		<span
			id="rainbow-text-dark"
			style={{
				fontSize: fontSize ? fontSize : "30px",
				fontWeight: "bold",
			}}
		>
			{children}
		</span>
	);
};

export default Dark;
