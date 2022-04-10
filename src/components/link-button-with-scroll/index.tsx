import styled from '@emotion/styled';
import { Button } from 'antd';
import Link from 'next/link';
import { CSSProperties } from 'react';

const LinkButton = styled(Button)`
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 14px;

	a {
		text-decoration: none;
	}
`;

type Props = {
	name: string;
	id: string;
	style?: CSSProperties;
	type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
	onClick?: () => void;
};

export const LinkButtonWithScroll = ({ name, id, style, onClick, type = 'link' }: Props): JSX.Element => {
	return (
		<Link href='/' passHref>
			<LinkButton
				size='large'
				style={style}
				onClick={e => {
					scrollToId(e, id);
					if (onClick) {
						onClick();
					}
				}}
				type={type}
			>
				{name}
			</LinkButton>
		</Link>
	);
};

export const scrollToId = (e: any, id: string) => {
	let el = document.getElementById(id);
	e?.preventDefault();
	el && window.scrollTo({ top: el.offsetTop + 100, behavior: 'smooth' });
};
