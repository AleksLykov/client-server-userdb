import React, { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const AddEditUser = props => {
  const { userData, showModal, loading, handleOk, handleCancel } = props;
  const [user, setUser] = useState({ name: '', email: '', mPhone: '' });

  useEffect(() => {
    userData && setUser(userData);
  }, [userData]);

  const setFieldValue = (field, value) => {
    setUser({...user, [field]: value});
  }

  const resetInputFields = () => {
    setUser({ name: '', email: '', mPhone: '' });
  }

  const callSubmit = e => {
    e.preventDefault()
    handleOk(user)
    !userData && resetInputFields();
  }

  const clickCancel = () => {
    handleCancel();
    !userData && resetInputFields();
  }

  return (
    <Modal
      visible={!showModal}
      centered
      title={ <span><UserAddOutlined /> New user data</span> }
      onOk={handleOk}
      onCancel={handleCancel}
      footer={ <div className="modal-footer">
          <Button key="back" onClick={clickCancel}>
            Cancel
          </Button>
          <Button key="submit" type="primary" loading={loading} onClick={callSubmit}>
            Submit
          </Button>
        </div> }
    >
      <Input 
        value={ user.name } 
        placeholder="Name"
        className="new-user__row"
        onChange={ e => {setFieldValue('name', e.target.value)} } />
      <Input 
        value={ user.email } 
        placeholder="E-mail"
        className="new-user__row"
        onChange={ e => {setFieldValue('email', e.target.value)} } />
      <Input 
        value={ user.mPhone } 
        placeholder="Phone" 
        onChange={ e => {setFieldValue('mPhone', e.target.value)} } />
    </Modal>
  )
}

export default AddEditUser;
