import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import BusinessDesignImage from 'public/images/businessDesign.jpg';
import ConsultingImage from 'public/images/consulting.jpg';
import CrmImage from 'public/images/crm.jpg';
import DevOpsImage from 'public/images/devOps.jpg';
import DevelopmentImage from 'public/images/development.jpg';
import IntegrationsImage from 'public/images/integrations.jpg';
import VirtualRealityImage from 'public/images/virtual-reality.jpg';
import { DescriptionSection } from 'src/components/description-section';

const Content = styled.div`
	width: 100%;
	margin-bottom: 100px;

	h2 {
		//	font-size: 50px;
		//	font-weight: 800;
		text-align: center;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 0px;

		h2 {
			//	font-size: 30px;
			//	font-weight: 800;
			text-align: center;
		}
	}
`;

export const DescribedOfferSection = (): JSX.Element => {
	const { t } = useTranslation('home');

	return (
		<>
			<Content id='development'>
				<h2>Our offer</h2>

				<DescriptionSection
					imagePosition='left'
					imageUrl={DevelopmentImage}
					title={t('webBasedApplications')}
					subTitle={t('webBasedApplicationsDesc')}
				/>

				<DescriptionSection
					imagePosition='right'
					imageUrl={IntegrationsImage}
					title={t('externalServicesIntegrations')}
					subTitle={t('externalServicesIntegrationsDesc')}
				/>

				<DescriptionSection
					imagePosition='left'
					imageUrl={VirtualRealityImage}
					title={t('xrVrArExtendedRealityApplications')}
					subTitle={t('xrVrArExtendedRealityApplicationsDesc')}
				/>

				<DescriptionSection
					imagePosition='right'
					imageUrl={CrmImage}
					title={t('zohoEcosystem')}
					subTitle={t('zohoEcosystemDesc')}
				/>

				<DescriptionSection
					imagePosition='left'
					imageUrl={DevOpsImage}
					title={t('msAzureCloud')}
					subTitle={t('msAzureCloudDesc')}
				/>

				<DescriptionSection
					id='business-design'
					imagePosition='right'
					imageUrl={BusinessDesignImage}
					title={t('businessDesign')}
					subTitle={t('businessDesignDesc')}
				/>

				<DescriptionSection
					id='consulting'
					imagePosition='left'
					imageUrl={ConsultingImage}
					title={t('consulting')}
					subTitle={t('consultingDesc')}
				/>

				<DescriptionSection
					id='ai'
					imagePosition='right'
					imageUrl={IntegrationsImage}
					title={t('aiAutomation')}
					subTitle={t('aiAutomationDesc')}
				/>
			</Content>
		</>
	);
};
