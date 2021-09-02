import { Table } from "antd";
import React from "react";

function ProjectTeam({}) {
  const columns = [
    {
      title: <div style={{ fontWeight: "bold" }}>插件名称</div>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <div style={{ fontWeight: "bold" }}>类型</div>,
      dataIndex: "type",
      key: "type",
    },
    {
      title: <div style={{ fontWeight: "bold" }}>描述</div>,
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <Table
      dataSource={null}
      columns={columns}
      rowKey={(record) => record.id}
      style={{ marginTop: 15 }}
      // pagination={utils.getPagination(
      //   { ...params, totalElements: plugQueryData.totalElements },
      //   (page: number, size: number) => {
      //     setParams({ ...params, page, size });
      //   }
      // )}
    />
  );
}
export default ProjectTeam;
