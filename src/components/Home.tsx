import React from 'react';
import "../App.css"

import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

function Home() {
    return (
        <Content className="home-container" id="home">
            <Title className="home-name">FRANS CORFIYANTO</Title>
            <Title className="home-detail"level={3}>...</Title>
            <Title className="home-detail"level={3}>Penultimate student at Singapore Management University</Title>
        </Content>
    )
}

export default Home;