import { useEffect, useState } from 'react';

type WindowSize = {
	windowWidth: number;
	windowsHeight: number;
};

export const useWindowSize = (): WindowSize => {
	const [windowSize, setWindowSize] = useState({
		windowWidth: 1600,
		windowsHeight: 1400
	} as WindowSize);

	function handleResize(): void {
		setWindowSize({
			windowWidth: window.innerWidth,
			windowsHeight: window.innerHeight
		});
	}

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);

			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);
	return windowSize;
};
