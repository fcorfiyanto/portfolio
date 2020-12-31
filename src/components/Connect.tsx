import React from 'react';
import "../App.css"

import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Layout, Button, Typography } from 'antd';

const { Title } = Typography;
const { Footer } = Layout;

function Connect() {
    return (
        <Footer className="footer" id="connect">
            <Title level={4}>Connect with me</Title>
            <div className="footer-icons">
                <Button className="footer-button" type="text" href="https://github.com/fcorfiyanto" target="_blank" icon={<GithubOutlined className="footer-icon" />} />
                <Button className="footer-button" type="text" href="https://www.linkedin.com/in/frans-corfiyanto/" target="_blank" icon={<LinkedinOutlined className="footer-icon" />} />
                <Button className="footer-button" type="text" href="mailto:fcorfiyanto.2018@sis.smu.edu.sg" icon={<MailOutlined className="footer-icon" />} />

            </div>
        </Footer>
    )
}

export default Connect;