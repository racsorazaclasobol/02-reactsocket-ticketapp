import React, { useContext, useState } from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { Navigate, useNavigate } from 'react-router-dom';
import { clearUsuarioStorage, getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { SocketContext } from '../context/SocketContext';

export const EscritorioPage = () => {

	const navigate = useNavigate();

	const { Title, Text } = Typography;
	const { socket } = useContext( SocketContext );
	const [ticket, setTicket] = useState(null);
	const [ usuario ] = useState( getUsuarioStorage() );

	useHideMenu(false);

	const salir = () => {
		clearUsuarioStorage();
		navigate('/ingresar');
	}
	const siguiente = () => {
		socket.emit('asignar-ticket', usuario, ( ticket ) => {
			setTicket( ticket );
		});
	}

	if( !usuario.agente && !usuario.escritorio ) {
		return <Navigate  to='/ingresar' />;
	}

	return (
		<>	
			<Row>
				<Col span={ 20 }>
					<Title level={ 2 } >{ usuario.agente }</Title>
					<Text> Usted esta en el escritorio: </Text>
					<Text type='success'>{ usuario.escritorio }</Text>
				</Col>
				<Col span={ 4 } align="right">
					<Button
						shape='round'
						type='dashed'
						color='tomato'
						onClick={ salir }
					>
						Salir
					</Button>
				</Col>
			</Row>
			<Divider />
			{
				ticket &&
				<Row>
					<Col>
						<Text> Esta atendiendo el numero: </Text>
						<Text 
							type='danger'
							style={{ fontSize: 33 }}> { ticket.numero }</Text>
					</Col>
				</Row>
			}
			<Row>
				<Col offset={ 8 } span={ 16 } align="right">
					<Button
						shape='round'
						type='primary'
						onClick={ siguiente }
					>
						Siguiente
					</Button>
				</Col>
			</Row>
		</>	
	)
}
