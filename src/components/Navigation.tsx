import React from 'react';
import "../App.css"

import { Layout, Menu } from 'antd';
import { Link } from "react-scroll";

const { Header } = Layout;

function Nagivation() {
    return (
        <Header className="header">
            <Menu className="navbar" mode="inline" theme="dark">
                <Menu.Item className="navbar-item" key="about">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-62}
                        duration={500}
                    >
                        ABOUT
                    </Link>
                </Menu.Item>
                <Menu.Item className="navbar-item" key="work">
                    <Link
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-62}
                        duration={500}
                    >
                        WORK
                    </Link>
                </Menu.Item>
                <Menu.Item className="navbar-item" key="contact">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-62}
                        duration={500}
                    >
                        CONTACT
                    </Link>
                </Menu.Item>





            </Menu>
        </Header>
    )
}

export default Nagivation;