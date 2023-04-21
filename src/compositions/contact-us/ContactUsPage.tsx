import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import H1Title from 'src/components/h1Title';
import { ContactUsSection } from 'src/compositions/home/sections/ContactUsSection';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const ContactUsPage: NextPageWithLayout = () => {
	const { t } = useTranslation('shared');

	return (
		<>
			<SharedPageSeo pageName='contact-us' />
			<H1Title title={t('contact-us')} />

			<ContactUsSection />
		</>
	);
};

ContactUsPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ContactUsPage;
