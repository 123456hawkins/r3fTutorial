
import { Outlet } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";
import {  Layout, Menu } from 'antd';
import { MenuProps } from "antd/lib";
import { useState } from "react";

const { Header, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
type MenuItem = Required<MenuProps>['items'][number];
const items:MenuItem[]=[
  {
    label: '第一课:scroll动画',
    key: 'scrollPage',

  },
]
function App() {
  const [current,setCurrent]=useState('scrollAnimation')
  let navigate=useNavigate()
  const handleRouteClick:MenuProps['onClick']=(e)=>{
    setCurrent(e.key)
    navigate(e.key)
  }
  
  return (
    
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
      <Menu onClick={handleRouteClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Header>
      <Content style={contentStyle}>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}

export default App;
