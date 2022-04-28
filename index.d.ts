export interface RainbowTextProps {
	/**
	 * Colors of the Rainbow, use "light" on a white background and "dark" on a black background
	 * Defaults to "light"
	 */
	colorMode: "light" | "dark";
	/**
	 * Size of the font
	 * Defaults to 30
	 */
	fontSize: number;
}
declare const RainbowText: RainbowTextProps;
export default RainbowText;
