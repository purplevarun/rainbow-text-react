import React from "react";
import Dark from "./dark/Dark";
import Light from "./light/Light";
const defaultFontSize = 30;
const index = ({ children, fontSize, colorMode }) => {
	const wrapper = {
		style: {
			fontSize: fontSize ? fontSize : defaultFontSize,
		},
	};
	const helperProps = { children };
	return (
		<div {...wrapper}>
			{colorMode === "dark" ? (
				<Dark {...helperProps} />
			) : (
				<Light {...helperProps} />
			)}
		</div>
	);
};

export default index;
