import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MainHeader from './Header';
import MainFooter from './Footer';
import AddEditUser from './AddEditUser';
import { createUser } from '../api/common';
import { Layout, Button, Modal } from 'antd';
const { Content } = Layout;

const Main = () => {
  const [ showModal, setShowModal ] = useState(true);
  const [ loading, setLoading ] = useState(false);

  const handleOk = (user) => {
    setLoading(true);
    createUser(user);
    setLoading(false);
    setShowModal(true);
    showSuccess();
  };

  const handleCancel = () => {
    setShowModal(true);
  };

  function showSuccess() {
    const modal = Modal.success({
      content: 'Great! You have submitted your data!',
    });
    setTimeout(() => {
      modal.destroy();
    }, 2500);
  }

  return (
    <Layout className="main-page-wrapper">
      <MainHeader title="UserData Database" />
      <Content className="content-wrapper">
        <AddEditUser loading={ loading } handleOk={ handleOk } handleCancel={ handleCancel } showModal={showModal} userData={ null } />
        <div className="content-body">
          <Button
            type="ghost"
            size="large"
            className="content__button"
            onClick={() => setShowModal(!showModal)}>
              Submit your data</Button>
          <Button
            type="ghost"
            size="large"
            className="content__button">
            <Link to="/browse-submitted-data">Browse submitted data</Link>
          </Button>
        </div>
      </Content>
      <MainFooter />
    </Layout>    
  )
}

export default Main;
