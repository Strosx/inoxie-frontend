import styled from '@emotion/styled';
import { useRef } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import { AppearAnimation } from 'src/styles/animations/animations';
import DevelopmentImage from 'public/images/development.jpg';
import IntegrationsImage from 'public/images/integrations.jpg';
import VirtualRealityImage from 'public/images/virtual-reality.jpg';
import CrmImage from 'public/images/crm.jpg';
import DevOpsImage from 'public/images/devOps.jpg';
import BusinessDesignImage from 'public/images/businessDesign.jpg';
import ConsultingImage from 'public/images/consulting.jpg';
import { DescriptionSection } from 'src/components/description-section';

const Content = styled.div`
	width: 100%;
	margin-bottom: 100px;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 0px;

		h2 {
			font-size: 30px;
			font-weight: 800;
			text-align: center;
		}
	}
`;

export const DescribedOfferSection = (): JSX.Element => {
	return (
		<>
			<Content id='development'>
				<h2>Our offer</h2>

				<DescriptionSection
					imagePosition='left'
					imageUrl={DevelopmentImage}
					title='Web Based Applications'
					subTitle='We create highly scalable, modern web applications with the help of the newest and the best 
						Microsoft technologies like ASP.NET 6, MS SQL Server and Azure Cloud. We do not use template solutions like WordPress, Shopify, Shopware etc, we create applications
						which are matched to client needs. Our experienced team will help to convert your business idea 
						to technical world, advice on which solutions will be best to use and finally develop application according to the newest development
						standards. We got strong experience in backend, frontend and cloud development. Our offer contains modern, multi-language, responsive websites optimized for 
						search engines created with React and Next.js framework, custom SAS applications, 
						custom solutions fit for your business idea, creating and improving SQL (and other non-relative) databases.'
				/>

				<DescriptionSection
					imagePosition='right'
					imageUrl={IntegrationsImage}
					title='External services integrations'
					subTitle='Our developers have a lot of experience in application integrations. We can integrate all kind of external services for your business which
					will help you to increase sales and reduce costs by automating a lot of manual work. Examples of recent integrations: Microsoft Dynamics 365 CRM,
					external invoicing software, customer localization services, external electronic software distrbutor (keys API), synchronizing products with computer games database IGDB, 
					connecting customer system to trading API on Binance, integrate with different kind of payment gateway like PayPal or Stripe, customer Azure Active Directory authorization integration,
					connecting SendGrid email sender for customer app newsletters, blockchain payments (bitcoin, ethereum) integration and many many more. If you are planning integration with software you are using, please contact us, our development team
					will help you to find the best possible way.'
				/>

				<DescriptionSection
					imagePosition='left'
					imageUrl={VirtualRealityImage}
					title='XR/VR/AR - Extended Reality Applications'
					subTitle='We have been working with VR technology from the moment it enters the market. We went through smartphone-based VR headset like the Gear VR, standalone 3DOF Oculus Go, and desktop devices connected to Oculus Rift and HTC Vive computers. We are currently working mainly with Oculus Quest 2 and Microsoft HoloLens 2, and our solutions related to XR technology are developed on the Unity engine.
					Thanks to the experience of our team in game design and knowledge of the games market and XR technology, we are able to design and develop AR / VR applications and games and advise our clients on this matter. We have over 8 different XR devices and we are able to create applications that work with PC VR headset (e.g. Valve Index), standalone VR headset (e.g. Oculus Quest 2), AR applications for HoloLens 2 and AR / VR applications for the phone (Android / iPhone). In addition, we are able to create more advanced Unity systems based on Azure cloud services.'
				/>

				<DescriptionSection
					imagePosition='right'
					imageUrl={CrmImage}
					title='Zoho Ecosystem'
					subTitle='Our team specializes in integrating Zoho ecosystem to different companies software. Zoho is huge software made to ease running small and bigger business.
					Zoho offering Books section, CRM section, Warehouse section, People section and many more. Integrating your company system with application like Zoho will help your organization
					to go to higher organization level. Our expierienced consultant will help to choose what are your need and how you can apply them in your every day work.'
				/>

				<DescriptionSection
					imagePosition='left'
					imageUrl={DevOpsImage}
					title='MS Azure Cloud'
					subTitle='We specialize in Microsoft Azure Cloud, Microsoft Azure DevOps and Docker containers. Our team will help you to migrate to cloud, choose correct resource on Azure Cloud,
					advice on migrating/improving your architecture and automate all your Continous Integration and Continous Delivery process.'
				/>

				<DescriptionSection
					id='business-design'
					imagePosition='right'
					imageUrl={BusinessDesignImage}
					title='Business Design'
					subTitle='We have strong experience in designing business critical, scalable, modern applications from scratch. Our team will convert your business needs and idea to
					technical equivalent with designed databases, application architecture, hosting, and cloud architecture. Business design usually is merged with development, but we can offer 
					design as a separate service, so we can design application from technical side and you are free to choose different development team.'
				/>

				<DescriptionSection
					id='consulting'
					imagePosition='left'
					imageUrl={ConsultingImage}
					title='Consulting'
					subTitle='If you have technical problem or your IT team needs help in any area we specialize: architecture, development, cloud, databases,
					 our experienced developers can help you to solve the issue	and advice on the next steps. We also offer whole day software development training for your IT teams,
					 to get more details please contact us by email or phone.'
				/>

				<DescriptionSection
					id='ai'
					imagePosition='right'
					imageUrl={IntegrationsImage}
					title='AI Automation'
					subTitle='At InoxieSoft, we specialize in developing custom software solutions that automate your business processes using the power of artificial intelligence (AI). Our expert team of developers and data scientists work together to create intelligent systems that can learn from your data and make intelligent decisions on your behalf.
					Whether you need to automate customer service, optimize your supply chain, or improve your marketing efforts, our AI-powered software can help you achieve your goals. By reducing the need for manual intervention and streamlining your operations, we can help you save time and money while improving the quality of your output.				
					At InoxieSoft, we believe that AI is the future of business, and were committed to helping our clients stay ahead of the curve. Contact us today to learn more about our AI-powered software solutions and how we can help you automate your business processes.'
				/>
			</Content>
		</>
	);
};
