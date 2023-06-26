import { useContext, useState } from 'react'
import { MenuFoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import { IngresarPage } from './IngresarPage';
import { ColaPage } from './ColaPage';
import { CrearTicketPage } from './CrearTicketPage';
import { EscritorioPage } from './EscritorioPage';
import { UiContext } from '../context/UiContext';
  
const { Header, Sider, Content } = Layout;

export const RouterPage = () => {

    const { ocultarMenu } = useContext( UiContext );
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return (
        <div>
            <Layout style={{ height: '100vh' }} >
                <Sider trigger={null} collapsible collapsed={ collapsed } breakpoint='md' hidden={ ocultarMenu } >

                    <div className="demo-logo-vertical" />

                    <Menu 
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <NavLink to="/ingresar">Ingresar</NavLink>
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: <NavLink to="/cola">Cola</NavLink>
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: <NavLink to="/crear">Crear Ticket</NavLink>
                            }
                        ]}
                    />
                        
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Routes>
                            <Route path='/ingresar' element={ <IngresarPage /> } />
                            <Route path='/cola' element={ <ColaPage /> } />
                            <Route path='/crear' element={ <CrearTicketPage /> } />

                            <Route path='/escritorio' element={ <EscritorioPage /> } />
                        </Routes>
                    </Content>

                </Layout>
            </Layout>
        </div>
    )
}
