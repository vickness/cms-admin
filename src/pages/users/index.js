import React from 'react';
import {PageHeaderWrapper} from "@ant-design/pro-layout";
import ProTable from '@ant-design/pro-table';
import {userList} from "@/services/users";

const Page = () => {

  /**
   * 创建用户列表的模版
   * @param title：列的名称
   * @param dataIndex：数据的key字段
   * @param valueType：值的类型
   * */
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'uid',
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
      dataIndex: 'avatarUrl',
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      sorter: true,
      valueType: 'dateTime'
    },
  ];

  /**
   * request 可以调用API接口
   * 返回的数据格式中是 data 字段，会自动适配
   * */
  return (
    <PageHeaderWrapper>
      <ProTable
        headerTitle="用户列表"
        columns={columns}
        request={params => userList(params)}
      />
    </PageHeaderWrapper>
  )
};

export default Page;
