import React from 'react';
import "../App.css"
import ESDImage from "../assets/portfolio7.gif"

import { Card, Typography, Layout } from 'antd';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

function Work() {
    return (
        <Content className="work-container" id="work">

            <Content className="work-main">
                <Title className="section-heading">Work</Title>
                <Title level={3}>Werk, werk, werk, werk, werk</Title>
            </Content>
            <Content className="work-detail">

                <Card
                    className="work-image"
                    style={{ width: "100vh" }}
                    cover={<img alt="example" src={ESDImage} />}
                >
                    <Meta title="LAN Shop" description="School Project" />
                </Card>
            </Content>
        </Content>
    )
}

export default Work;