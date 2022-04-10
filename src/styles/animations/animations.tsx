import { keyframes } from '@emotion/react';

export const AppearAnimation = () => keyframes`
 0% {
     opacity: 0;
 }
 100% {
     opacity: 1;
 }
`;

export const ChangeColorAnimation = (color: string) => keyframes`
    0% {
        background-color: unset;
    }

    100% {
        background-color:  ${color}
    }
`;

export const ChangeGrayscaleAnimation = (target: number) => keyframes`
    0% {
        filter: grayscale(1);
    }

    100% {
        filter: grayscale(${target});   
    }
`;

export const SlideLeftAnimation = () => keyframes`
	from {
		opacity: 0;
		-webkit-opactity: 0;

		transform: translateX(100%);
	}
	to {
		opacity: 1;

		transform: translateX(0%);
	}
`;

export const SlideRightAnimation = () => keyframes`
	from {
		opacity: 0;
		transform: translateX(-100%);
	}
	to {
		opacity: 1;
		transform: translateX(0%);
	}

`;
