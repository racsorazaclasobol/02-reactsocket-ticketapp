import React, { useState } from 'react'
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { useNavigate, Navigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

export const IngresarPage = () => {

	const navigate = useNavigate();
	const [ usuario ] = useState( getUsuarioStorage() );
	useHideMenu(false);

	const { Title, Text } = Typography;

	const onFinish = ({ agente, escritorio }) => {

		localStorage.setItem('agente', agente);
		localStorage.setItem('escritorio', escritorio);

		navigate('/escritorio')
	};
	  const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	if( usuario.agente && usuario.escritorio ) {
		return <Navigate  to='/escritorio' />;
	}

	return (
		<>
			<Title level={ 2 } >Ingresar</Title>
			<Text> Ingrese su nombre y numero de escritorio </Text>
			<Divider />

			<Form
				name="basic"
				labelCol={{ span: 4, }}
				wrapperCol={{ span: 16, }}
				style={{ maxWidth: 600, }}
				initialValues={{ remember: true, }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>

				<Form.Item
					label="Nombre:"
					name="agente"
					rules={[
						{
							required: true,
							message: 'Ingresa nombre',
						},
					]}
				>
				<Input />
				</Form.Item>

				<Form.Item
					label="Escritorio"
					name="escritorio"
					rules={[
						{
							required: true,
							message: 'Ingrese Escritorio',
						},
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 4,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Ingresar
					</Button>
				</Form.Item>
			</Form>
		</>

	)
}
