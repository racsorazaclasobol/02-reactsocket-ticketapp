import React, { useContext, useState } from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

export const CrearTicketPage = () => {
	const { Title, Text } = Typography;
	const { socket } = useContext( SocketContext );
	const [ticket, setTicket] = useState({});

	useHideMenu(true);

	const nuevo = () => {
		socket.emit('solicitar-ticket', null, ( ticket ) => {
			setTicket(ticket);
		});

	}

	return (
		<>
			<Row>
				<Col span={ 14 } offset={ 6 } align="center" >
					<Title level={ 3 }>
						Presione el Boton para un nuevo Ticker
					</Title>

					<Button
						type='primary'
						shape='round'
						size='large'
						onClick={ nuevo }
					>
						Nuevo Ticket
					</Button>
				</Col>
			</Row>

			{
				ticket &&
				<Row style={{ marginTop: '100px' }} >
					<Col span={ 14 } offset={ 6 } align="center">
						<Text level={ 2 }>
							Su numero
						</Text>	
						<br />
						<Text type="success" style={{ fontSize: 55 }}>
							{
								ticket.numero
							}
						</Text>	
					</Col>
				</Row>
			}
		</>
	)
}
