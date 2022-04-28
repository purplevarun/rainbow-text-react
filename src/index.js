import React from "react";
import Dark from "./dark/Dark";
import Light from "./light/Light";
const defaultFontSize = 30;
import propTypes from "prop-types";
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
index.PropTypes = {
	children: propTypes.string,
	fontSize: propTypes.number,
	colorMode: "light" | "dark",
};
export default index;
