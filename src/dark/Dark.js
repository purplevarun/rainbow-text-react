import React from "react";
import "./Dark.css";
const Dark = ({ children, fontSize, fontWeight }) => {
	return (
		<span
			id="rainbow-text-dark"
			style={{
				fontSize: fontSize ? fontSize : 50,
				fontWeight: fontWeight ? fontWeight : 500,
			}}
		>
			{children}
		</span>
	);
};

export default Dark;
