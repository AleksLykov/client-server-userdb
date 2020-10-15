import React from 'react';

import { Input, Button, Tooltip, Row, Col, Modal } from 'antd';
import { ExclamationCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const UserItem = props => {
  const { user, edituser, deluser } = props

  function showPromiseConfirm() {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: "When clicked the OK button, the record with the user's data will be permanently deleted!",
      onOk() {
        deluser(user.id);
      },
      onCancel() {},
    });
  }

  return (
    <div className="user-wrapper">
      <Row gutter={[16, 16]}>
        <Col span={7} className="user__info-part">
          <span className="user__info-part__label">Name:</span><Input value={ user.name } />
        </Col>
        <Col span={8} className="user__info-part">
          <span className="user__info-part__label">Email:</span><Input value={ user.email } />
        </Col>
        <Col span={7} className="user__info-part">
          <span className="user__info-part__label">Phone:</span><Input value={ user.mPhone } />
        </Col>
        <Col span={2} className="user__info-part">
          <Tooltip title="edit">
            <Button shape="circle" style={{ marginRight: '.3em' }} onClick={() => edituser(user)} icon={ <EditOutlined /> } />
          </Tooltip>
          <Tooltip title="delete">
            <Button shape="circle" onClick={ showPromiseConfirm } icon={ <DeleteOutlined /> } />
          </Tooltip>
        </Col>
      </Row>
    </div>   
  )
}

export default UserItem;
