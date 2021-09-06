import "./index.css";
import { Button, Input } from "antd";
import DivStyleHead from "./style";

function Head() {
  return (
    <DivStyleHead>
      <div className={"head-content-left"}>
        <img src={require("../../icon/slp-icon.png").default} alt={"l"} />
        <h1>GitLab</h1>
        <div className={"head-content-left-first"}>
          <Button>项目</Button>
          <Button>群组</Button>
          <Button>动态</Button>
          <Button>里程碑</Button>
          <Button>代码片段</Button>
        </div>
        {/*<img />*/}
      </div>
      <div className={"head-content-right"}>
        <Button>test</Button>
        <Input.Search
          autoComplete={"off"}
          style={{ width: 350 }}
          placeholder="搜索或转到..."
          // onSearch={keyword => search({ keyword })}
        />
        ,
      </div>
      {/*<div style={{ position: "absolute", marginLeft: "100px" }}>测试</div>*/}
    </DivStyleHead>
  );
}
// module.exports=Head;
export default Head;
