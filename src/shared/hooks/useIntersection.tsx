import { MutableRefObject, useEffect, useState } from 'react';

export const useIntersection = (element: MutableRefObject<undefined>, rootMargin: string) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin }
		);

		element.current && observer.observe(element.current);

		return () => {
			if (element?.current) {
				observer.unobserve(element.current);
			}
		};
	}, []);

	return isVisible;
};
