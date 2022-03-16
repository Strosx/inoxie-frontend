import { ReactElement } from 'react';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from 'src/typings/layout';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<video src='/images/covervideo.mp4' autoPlay loop muted></video>
		</>
	);
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
