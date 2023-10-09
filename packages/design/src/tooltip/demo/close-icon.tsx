import { Space, Tooltip, Button } from '@eflag/design';
import { CloseCircleOutlined } from '@eflag/icons';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  return (
    <Space>
      <Tooltip title="This is prompt text" closeIcon={true}>
        <Button>Default Close Tooltip</Button>
      </Tooltip>

      <Tooltip
        title="This is prompt text"
        open={open}
        closeIcon={true}
        onClose={() => {
          setOpen(false);
        }}
        onOpenChange={v => {
          setOpen(v);
        }}
      >
        <Button>Set open</Button>
      </Tooltip>
      <Tooltip
        title="This is prompt text This is prompt text This is prompt text This is prompt text"
        closeIcon={<CloseCircleOutlined />}
        onClose={log}
      >
        <Button>Customize closeIcon</Button>
      </Tooltip>
    </Space>
  );
};
export default App;
