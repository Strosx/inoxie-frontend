import { useTranslation } from 'next-i18next';
import ProjectsImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-02.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import { ProjectsSection } from 'src/compositions/home/sections/ProjectsSection';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const ProjectsPage: NextPageWithLayout = () => {
	const { t } = useTranslation('projects');
	return (
		<>
			<SharedPageSeo pageName='projects' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={ProjectsImg} />

			<ProjectsSection title={t('h2Title')} />
		</>
	);
};

ProjectsPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ProjectsPage;
