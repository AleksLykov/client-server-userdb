import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button } from 'antd';
const { Header } = Layout;

const MainHeader = props => {
  const { title, button } = props;

  return (
    <Header className="header-wrapper">
      <Row>
        <Col span={button ? 20 : 24}><h2 className="header__title">{ title }</h2></Col>
        { button && <Col span={4}>
          <Button
            type="ghost"
            size="middle">
            <Link to="/main-page">Back to main page</Link>
          </Button>
        </Col>}
      </Row>
    </Header>   
  )
}

export default MainHeader;
