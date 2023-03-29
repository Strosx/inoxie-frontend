import { ReactNode } from 'react';
import { Content } from 'src/layouts/MainLayout/Content';
import Header from 'src/layouts/MainLayout/Header';

type Props = {
	children: ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Header />

			<Content>{children}</Content>
		</>
	);
};

export default MainLayout;
