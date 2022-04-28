import React from "react";
import "./Light.css";
const Light = ({ children, fontSize, fontWeight }) => {
	return (
		<span
			id="rainbow-text-light"
			style={{
				fontSize: fontSize ? fontSize : "30px",
				fontWeight: "bold",
			}}
		>
			{children}
		</span>
	);
};

export default Light;
