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
