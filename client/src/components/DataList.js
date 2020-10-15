import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, updateUser } from '../api/common';
import MainHeader from './Header';
import MainFooter from './Footer';
import UserItem from './UserItem';
import AddEditUser from './AddEditUser';
import { Layout, Modal } from 'antd';
const { Content } = Layout;

const DataList = props => {
  const [ users, setUsers ] = useState([]);
  const [ currentUser, setCurrentUser ] = useState([]);
  const [ load, setLoad ] = useState(false);
  const [ showModal, setShowModal ] = useState(true);

  const edituser = user => {
    setCurrentUser(user);
    setShowModal(!showModal);
  }

  const handleOk = async(user) => {
    setShowModal(true);
    await updateUser(user);
    showSuccess();
    fetchData();
  };

  const handleCancel = () => {
    setShowModal(true);
  };

  function showSuccess() {
    const modal = Modal.success({
      content: 'Great! You successfully edit your data!',
    });
    setTimeout(() => {
      modal.destroy();
    }, 2500);
  }

  const deluser = async(id) => {
    await deleteUser(id);
    fetchData();
  }

  useEffect(() => {
    if (!load) fetchData();
  // eslint-disable-next-line
  }, [users.length])

  const fetchData = async() => {
    setLoad(true);
    const data = await getUsers();
    setUsers(data);
    setLoad(false);
  }

  return (
    <Layout className="main-page-wrapper">
      <MainHeader title="UserData Database" button={ true } />
      <Content className="content-wrapper">
        <AddEditUser handleOk={ handleOk } handleCancel={ handleCancel } showModal={showModal} userData={ currentUser } />
        <div className="content-body">
        {
          users.length ? users.map((user, index) => (
            <UserItem user={ user } key={`${index}-${user.name}`} edituser={ edituser } deluser={ deluser }/>
          )) : 'Loading...'
        }
        </div>
      </Content>
      <MainFooter />
    </Layout>    
  )
}

export default DataList;
