import React from 'react';
import "../App.css"
import Frans from "../assets/frans.jpg"

import { Layout, Typography, Row, Col } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

function About() {
    return (
        <Content id="about" className="about-container">
            <Content className="about-main">
                <img alt="frans" id="frans-photo" src={Frans}></img>
                <Title className="section-heading">About Me</Title>
            </Content>
            <Row className="about-detail">
                <Col xs={{span: 24}} lg={{span:8}}>
                    <Title level={3} style={{color: "#6699FF"}}>Hi, I am Frans Corfiyanto</Title>
                    <Title level={4}>I am a third-year student at Singapore Management University pursuing Information System majoring in Software Development</Title>
                    <Title level={4}>I enjoy playing games and watching shows during freetime</Title>
                    <Title level={4}>Expected Graduation Date: Dec 2021</Title>
                </Col>
                <Col xs={{span: 24}} lg={{span:8}}>
                    <Title level={3} style={{color: "#6699FF"}}>Language:</Title>
                    <Title level={4}>Python, JavaScript, PHP, Java, MySQL</Title>

                    <Title level={3} style={{color: "#6699FF"}}>Framework:</Title>
                    <Title level={4}>React.js, Vue.js, Nuxt.js, Express</Title>

                    <Title level={3} style={{color: "#6699FF"}}>Scraping Tools:</Title>
                    <Title level={4}>Cheerio, Puppeteer, Selenium, BeautifulSoup</Title>

                </Col>
            </Row>
        </Content>
    )
}

export default About;