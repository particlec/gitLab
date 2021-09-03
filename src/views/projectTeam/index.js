import { TabPane, Tabs } from "../../components/Tabs/tabs";
import React from "react";
import DivStyleContent from "./style";

function ProjectTeam({}) {
  const dates = [
    {
      name: "language_v4/languagecode/smarthome/home-backend",
      type: null,
      update: "两星期前",
    },
  ];

  const columns = [
    {
      title: <div style={{ fontWeight: "bold" }}>项目名称</div>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <div style={{ fontWeight: "bold" }}>项目类型</div>,
      dataIndex: "type",
      key: "type",
    },
    {
      title: <div style={{ fontWeight: "bold" }}>更新时间</div>,
      dataIndex: "update",
      key: "update",
    },
  ];
  return (
    <DivStyleContent>
      <div className={"content-title"}>
        <h1>项目</h1>
      </div>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="您的项目" key="1">
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="所有" key="1" style={{ height: 200 }}>
                  <div>
                    {/*<Table columns={columns} dataSource={dates} />*/}
                  </div>
                </TabPane>
                <TabPane tab="个人" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </div>
          </TabPane>
          <TabPane tab="星标项目" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="浏览项目" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </DivStyleContent>
  );
}
export default ProjectTeam;
