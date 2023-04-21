import Image from 'next/image';
import Link from 'next/link';
import LogoBlack from 'public/images/logos/inoxie-black-transparent.png';
import LogoColor from 'public/images/logos/inoxie-color-transparent.png';
import LogoWhite from 'public/images/logos/inoxie-white-transparent.png';
import { useCallback } from 'react';

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
			<Link
				href={'/'}
				onClick={e => {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			>
				<Image priority={true} src={getLogo()} fill alt='logo' />
			</Link>
		);
	}

	return <Image src={getLogo()} fill alt='inoxiesoft-logo' />;
};

export default Logo;
