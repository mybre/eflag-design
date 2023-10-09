/**
 * iframe: 800
 * transform: true
 */

import { Button, Space, Table } from '@eflag/design';
import type { ColumnsType } from '@eflag/design/es/table';
import { BatchOperationBar } from '@eflag/ui';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default () => {
  const [selectedRowKeysTable1, setSelectedRowKeysTabel1] = useState<React.Key[]>([]);
  const [selectedDataTable1, setSelectedDataTable1] = useState<DataType[]>([]);
  const [selectedRowKeysTable2, setSelectedRowKeysTable2] = useState<React.Key[]>([]);
  const [selectedDataTable2, setSelectedDataTable2] = useState<DataType[]>([]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Red',
      age: 78,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  const batchOperationBarContent1 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable1);
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };
  const batchOperationBarContent2 = ({ selectedRows, setSelectedRows }) => {
    const rowSelection = {
      selectedRowKeys: selectedRows?.map(row => row?.key),
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        setSelectedRows(selectedRows);
        setSelectedDataTable1(selectedDataTable2);
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    };
    return (
      <Table
        rowKey={(row: DataType) => row.key}
        rowSelection={rowSelection}
        toolAlertRender={false}
        hiddenCancelBtn={true}
        pagination={false}
        columns={columns}
        dataSource={selectedRows}
      />
    );
  };

  const alertOptionRender = ({ selectedRows, cleanSelectedRows }) => {
    return (
      <Space>
        <Button onClick={() => console.log('selectedRows: ', selectedRows)}>批量操作</Button>
        <Button onClick={() => cleanSelectedRows()}>批量删除</Button>
      </Space>
    );
  };
  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Table1</h2>
        <Table
          columns={columns}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          dataSource={data}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable1,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTabel1(selectedRowKeys);
              setSelectedDataTable1(selectedRows);
            },
          }}
        />
        <h2>Table2</h2>
        <Table
          columns={columns}
          dataSource={data}
          toolAlertRender={false}
          hiddenCancelBtn={true}
          pagination={{
            pageSize: 2,
          }}
          rowSelection={{
            selectedRowKeys: selectedRowKeysTable2,
            onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
              setSelectedRowKeysTable2(selectedRowKeys);
              setSelectedDataTable2(selectedRows);
            },
          }}
        />
      </div>
      <BatchOperationBar
        title={'Table1'}
        content={batchOperationBarContent1}
        barStyle={{
          bottom: 64,
        }}
        selectedRows={selectedDataTable1}
        alertOptionRender={alertOptionRender}
      />
      <BatchOperationBar
        title={'Table2'}
        content={batchOperationBarContent2}
        selectedRows={selectedDataTable2}
        alertOptionRender={alertOptionRender}
      />
    </>
  );
};
