/**
 * title: 点击新建 Modal
 * iframe: 500
 */
import React, { useState } from 'react';
import { Modal } from '@eflag/design';
import { SideTip } from '@eflag/ui';
import { PlusOutlined } from '@eflag/icons';

export default () => {
  const [open, setOpen] = useState(false);

  const showModal = isOpen => {
    if (isOpen === undefined) {
      setOpen(!open);
    } else {
      setOpen(isOpen);
    }
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <SideTip type="primary" icon={<PlusOutlined />} onClick={showModal} open={open} id="modal" />
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
