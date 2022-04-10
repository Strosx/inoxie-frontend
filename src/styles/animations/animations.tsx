import { keyframes } from '@emotion/react';

export const AppearAnimation = () => keyframes`
 0% {
     opacity: 0;
	 -webkit-opactity: 0;
 }
 100% {
     opacity: 1;
	 -webkit-opactity: 1;
 }
`;

export const ChangeColorAnimation = (color: string) => keyframes`
    0% {
		-webkit-background-color: unset;
        background-color: unset;
    }

    100% {
		-webkit-background-color:  ${color};
        background-color:  ${color};
    }
`;

export const ChangeGrayscaleAnimation = (target: number) => keyframes`
    0% {
		-webkit-filter: grayscale(1);
        filter: grayscale(1);
    }

    100% {
		-webkit-filter: grayscale(${target});   
        filter: grayscale(${target});   
    }
`;

export const SlideLeftAnimation = () => keyframes`
	from {
		opacity: 0;
		-webkit-opactity: 0;

		transform: translateX(100%);
		-webkit-transform: translateX(100%);

	}
	to {
		opacity: 1;
		-webkit-opactity: 1;

		transform: translateX(0%);
		-webkit-transform: translateX(0%);
	}
`;

export const SlideRightAnimation = () => keyframes`
	from {
		opacity: 0;
		-webkit-opactity: 0;

		transform: translateX(-100%);
		-webkit-transform: translateX(-100%);

	}
	to {
		opacity: 1;
		-webkit-opactity: 1;

		transform: translateX(0%);
		-webkit-transform: translateX(0%);
	}

`;
