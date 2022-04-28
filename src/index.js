import React from "react";
import Dark from "./dark/Dark";
import Light from "./light/Light";
import propTypes from "prop-types";
const defaultFontSize = 30;
const defaultFontWidth = 800;
const index = ({ children, fontSize, fontWidth, colorMode }) => {
	const wrapper = {
		style: {
			fontSize: fontSize ? fontSize : defaultFontSize,
			fontWidth: fontWidth ? fontWidth : defaultFontWidth,
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
	fontWidth: propTypes.number,
	colorMode: "light" | "dark",
};
export default index;
