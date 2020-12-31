import React from 'react';
import "../App.css";


import { Layout, Typography, Button } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

function Contact() {
    return (
        <Content id="contact" className="contact-container">
            <Title className="section-heading">Contact</Title>
            <Title level={3}>Feel free to contact me for internship opportunities</Title>
            <Button className="contact-button" type="primary" shape="round" href="mailto:fcorfiyanto.2018@sis.smu.edu.sg">Contact</Button>
        </Content>
    )
}

export default Contact;