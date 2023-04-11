import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined}  from '@ant-design/icons'
import { Layout, Menu, Breadcrumb, MenuProps, theme, Row, Col } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Card from 'antd/es/card/Card';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Victor', '1'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Autovehicul', '6')]),
  getItem('Files', '9', <FileOutlined />),
];

const AutovehiculCards=[ 
  { 
    Marca: "Yamaha",   
    Modelul: "MT-09", 
    Anul: 2016,
    Motorizare: 897,
    Clasa: "Naked",
    ABS: "Da",
    Src:"/Yamaha.jpg" 
  }, 
  { 
    Marca: "Ducati",   
    Modelul: "Panigale", 
    Anul: 2018,
    Motorizare: 1299,
    Clasa: "Sport",
    ABS: "Da",
    Src:"/Ducati.jpg" 
  }, 
  { 
    Marca: "Kawasaki",   
    Modelul: "ZR-7", 
    Anul: 2002,
    Motorizare: 695,
    Clasa: "Classic",
    ABS: "Nu",
    Src:"/Kawasaki.jpg" 
  } 
]

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [anul, setAnul] = useState('')
  const [motorizare, setMotorizare] = useState('')
  const [cards, setCards] = useState<{
    title: string
    name: string
    anul: string
    motorizare: string
  }[]>([])

  return (
    <div className="App">
     <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#237158" }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Melniciuc Victor</Breadcrumb.Item>
          </Breadcrumb>
          
          <div style={{ padding: 24, minHeight: 360, background: "#9AFFDF" }}>
            <form onSubmit={(e) => {
              e.preventDefault()
              console.log('Date: ',title, name, anul, motorizare)
              setCards([...cards, {
                title,
                name,
                anul,
                motorizare
              }])
              
            }}>
               <Row justify="center" style={{
                marginBottom: "20px"
                
              }}>

                <Col span={6}>
                <label>
                Marca:
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                </Col>
              </Row>

              <Row justify="center" style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Modelul:
                  <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                </Col>
              </Row>

                <Row justify="center" style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                Anul:
                  <input type="anul" value={anul} onChange={e => setAnul(e.target.value)} />
                </label>
                </Col>
                </Row>

              <Row justify="center" style={{
                marginBottom: "20px"
              }}>
              <Col span={6}>
                <label>
                Motorizare:
                <input type="text" value={motorizare} onChange={e => setMotorizare(e.target.value)} />
              </label>
                </Col>
              </Row>

              <Row justify="center">
                <Col span={6}>
                  <button>Submit</button>
                </Col>
              </Row>

              <Row justify="center" align="middle" gutter={16} > 
      {AutovehiculCards.map((card, index) => (  
                <Col key={index} span={6}> 
                  <Card title={card.Marca} style={{ width: 300, marginTop: "40px" }}>  
                    <img src={card.Src} alt="logo" style={{ 
                      width: 250, 
                    }}/> 
                    <p>Modelul: {card.Modelul}</p> 
                    <p>Anul: {card.Anul}</p>  
                    <p>Motorizare: {card.Motorizare}</p>  
                    <p>Clasa: {card.Clasa}</p>  
                    <p>Abs: {card.ABS}</p>  
                  </Card> 
                </Col>   
        ))} 
    </Row>
            </form>
            {cards.map(card => (
              <Card title={card.title} style={{ width: 300, marginTop: "20px" }}>
                <p>Modelul: {card.name}</p>
                <p>Anul: {card.anul}</p>
                <p>Motorizare: {card.motorizare}</p>
              </Card> 
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;