import React from "react";
import Dark from "./dark/Dark";
import Light from "./light/Light";
import propTypes from "prop-types";
const defaultFontSize = 30;
const defaultFontWeight = 800;
const index = ({ children, fontSize, fontWeight, colorMode }) => {
	const wrapper = {
		style: {
			fontSize: fontSize ? fontSize : defaultFontSize,
			fontWeight: fontWeight ? fontWeight : defaultFontWeight,
		},
	};
	const helperProps = { children };
	return (
		<div {...wrapper} style={{ fontWeight: "bold" }}>
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
	fontWeight: propTypes.number,
	colorMode: "light" | "dark",
};
export default index;
