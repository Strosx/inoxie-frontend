import Image from 'next/image';
import LogoBlack from 'public/images/logos/inoxie-black-transparent.png';
import LogoWhite from 'public/images/logos/inoxie-white-transparent.png';
import LogoColor from 'public/images/logos/inoxie-color-transparent.png';
import { useCallback } from 'react';
import Link from 'next/link';

type Props = {
	variant: LogoVariant;
	isClickable?: boolean;
};

type LogoVariant = 'black' | 'white' | 'color';

const Logo = ({ variant, isClickable = true }: Props) => {
	const getLogo = useCallback(() => {
		switch (variant) {
			case 'black':
				return LogoBlack;
			case 'white':
				return LogoWhite;
			case 'color':
				return LogoColor;
			default:
				break;
		}
		SVGAElement;
	}, [variant]);

	if (isClickable) {
		return (
			<Link href={'/'} passHref>
				<a
					onClick={e => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				>
					<Image src={getLogo()} layout='fill' />
				</a>
			</Link>
		);
	}

	return <Image src={getLogo()} layout='fill' />;
};

export default Logo;
