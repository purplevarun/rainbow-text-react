import React from "react";
import Dark from "./dark/Dark";
import Light from "./light/Light";
import propTypes from "prop-types";
const index = ({ children, fontSize, fontWeight, colorMode }) => {
	const helperProps = { children, fontSize, fontWeight };
	return (
		<div>
			{colorMode === "dark" ? (
				<Dark {...helperProps} />
			) : (
				<Light {...helperProps} />
			)}
		</div>
	);
};
index.propTypes = {
	children: propTypes.string,
	fontSize: propTypes.number,
	fontWeight: propTypes.number,
	colorMode: "light" | "dark",
};
export default index;
