import styled from '@emotion/styled';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectType, useProjectData } from 'src/components/project-tile/useProjectData';
import { ChangeGrayscaleAnimation } from 'src/styles/animations/animations';
const { Meta } = Card;

const StyledCard = styled(Card)`
	margin: 20px 0;

	border-radius: 10px;
	filter: grayscale(1);

	:hover {
		filter: grayscale(0);

		animation: ${ChangeGrayscaleAnimation(0)} 0.4s linear;
	}
`;

type Props = {
	project: ProjectType;
};

export const ProjectTile = ({ project }: Props): JSX.Element => {
	const { name, description, img, link, logo } = useProjectData(project);

	return (
		<StyledCard
			style={{ width: 600 }}
			cover={<Image src={img} />}
			actions={[
				<Link href={link} passHref>
					<a target='_blank'>Link</a>
				</Link>,
				<span>Read more</span>
			]}
		>
			<Meta avatar={<Image src={logo} width={40} height={40} />} title={<h3>{name}</h3>} description={description} />
		</StyledCard>
	);
};
