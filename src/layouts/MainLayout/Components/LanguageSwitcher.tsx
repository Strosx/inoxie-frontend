import styled from '@emotion/styled';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PlFlag from 'public/images/flags/poland-flag-png-large.png';
import EnFlag from 'public/images/flags/united-kingdom-flag-png-large.png';
import { useCallback } from 'react';

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const LanguageSwitcher = (): JSX.Element => {
	const { i18n } = useTranslation();
	const router = useRouter();

	const changeLang = useCallback(
		(locale: string) => {
			i18n.changeLanguage(locale);
		},
		[i18n]
	);

	return (
		<Container>
			<Link locale='pl-PL' href={router.asPath}>
				<Button type='ghost'>
					<Image src={PlFlag} width={40} height={20} alt='pl-flag' onClick={() => changeLang('pl-PL')} />
				</Button>
			</Link>
			<Link locale='en-US' href={router.asPath}>
				<Button type='ghost'>
					<Image src={EnFlag} width={40} height={20} alt='en-flag' onClick={() => changeLang('en-US')} />
				</Button>
			</Link>
		</Container>
	);
};

export default LanguageSwitcher;
