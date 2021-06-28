const convertToEm = (number: number) => {
	return number / 16;
};

const devices = {
	tablet: convertToEm(768),
	desktop: convertToEm(1024),
	desktopB: convertToEm(1400),
};

const breakpoints = {
	tablet: `(min-width:${devices.tablet}em)`,
	desktop: `(min-width:${devices.desktop}em)`,
	desktopB: `(min-width:${devices.desktopB}em)`,
};

export default breakpoints;
