import Image from 'next/image';
import Link from 'next/link';
import LogoBlack from 'public/images/logos/inoxie-black-transparent.png';
import LogoWhite from 'public/images/logos/inoxie-white-transparent.png';

type Props = {
	variant?: 'black' | 'white';
};

export const HeaderLogo = ({ variant = 'white' }: Props) => {
	return (
		<Link passHref href={'/'}>
			<Image src={variant == 'white' ? LogoWhite : LogoBlack} height={18} width={103} alt='inoxiesoft-logo' />
		</Link>
	);
};
