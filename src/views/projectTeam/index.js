import { TabPane, Tabs } from "../../components/Tabs/tabs";
import React, {useEffect,useState} from "react";
import DivStyleContent from "./style";
import Table from "../../components/table/table";
import {renderIntoDocument} from "react-dom/test-utils";
import TablePageNumber from "../../components/tablePageNumber";
import AnalogQuery from "../../analogData/analogQuery";

function ProjectTeam({}) {

  const [params,setParams]=useState({
    page: 1,
    size: 10,
  });

  useEffect(()=>{

    AnalogQuery({ ...params, map:["name","type","update"] }).then(res=>{

    })



  },[])









  const dates = [
    {
      name: "language_v4/languagecode/smarthome/home-backend",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend03",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/packages/react-native-ali-link-sdk",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/templates/react-typescript-template",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend03",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/packages/react-native-ali-link-sdk",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/templates/react-typescript-template",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend03",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/packages/react-native-ali-link-sdk",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/templates/react-typescript-template",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend",
      type: null,
      update: "两星期前",
    },
    {
      name: "language_v4/languagecode/smarthome/home-backend03",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/packages/react-native-ali-link-sdk",
      type: null,
      update: "两星期前",
    },
    {
      name: "https://gitlab.utcook.com/front_end_common/templates/react-typescript-template",
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
        <TablePageNumber/>
      </div>
      <div >
        <Tabs defaultActiveKey="1"  id={"justTest"}>
          <TabPane tab="您的项目" key="1">
            <Tabs >
              <TabPane tab="所有" key="1">
                <Table dataSource={dates} />
              </TabPane>
              <TabPane tab="个人" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="星标项目" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="浏览项目" key="3">
            Content of Tab Pane 3
          </TabPane>

          {/*<div style={{ marginLeft: "auto" }}>test</div>*/}
        </Tabs>
      </div>
    </DivStyleContent>
  );
}

export default ProjectTeam;
