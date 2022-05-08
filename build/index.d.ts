import React from "react";

export interface Props {
	colorMode?: string;
	fontSize?: number;
}

declare const RainbowText: React.SFC<Props>;

export default RainbowText;
