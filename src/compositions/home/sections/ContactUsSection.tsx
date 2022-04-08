import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect } from 'react';

const Content = styled.div`
	width: 100%;
	margin-bottom: 200px;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}
`;

type Props = {
	email?: string;
};

export const ContactUsSection = ({ email }: Props): JSX.Element => {
	const [form] = useForm();

	useEffect(() => {
		if (email) {
			form.setFieldsValue({ Email: email });
		}
	}, [email]);

	return (
		<Content id='contact-us'>
			<h2>Contact us</h2>

			<Form layout='vertical' requiredMark form={form}>
				<Form.Item name='Email' rules={[{ required: true, message: 'This field is required' }]}>
					<Input size='large' placeholder='Email address' />
				</Form.Item>

				<Form.Item name='FirstName' rules={[{ required: true, message: 'This field is required' }]}>
					<Input size='large' placeholder='First Name' />
				</Form.Item>

				<Form.Item name='LastName' rules={[{ required: true, message: 'This field is required' }]}>
					<Input size='large' placeholder='Last Name' />
				</Form.Item>

				<Form.Item name='Description' rules={[{ required: true, message: 'This field is required' }]}>
					<TextArea rows={10} size='large' placeholder='Describe your project...' />
				</Form.Item>

				<Form.Item>
					<Button htmlType='submit' size='large' type='primary'>
						Send
					</Button>
				</Form.Item>
			</Form>
		</Content>
	);
};
