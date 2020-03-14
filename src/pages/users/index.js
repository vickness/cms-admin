import React from 'react';
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import ProTable from '@ant-design/pro-table';

const Page = () => {

  // 创建表格模版
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'key',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      sorter: true,
      valueType: 'dateTime'
    },
  ];

  // 创建用户数据
  const users = [
    {
      key: '1',
      userName: 'vick01',
      nickName: 'vick',
      avatar: '/aaa/ppp/bbbb.png',
      createdAt: 15827348593
    },
    {
      key: '2',
      userName: 'vick01',
      nickName: 'vick',
      avatar: '/aaa/ppp/bbbb.png',
      createdAt: 15827384729
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="用户列表"
        columns={columns}
        dataSource={users}
      />
    </PageHeaderWrapper>
  )
};

export default Page;
