import { Button, Input } from "antd";
import DivStyleHead from "./style";

function Head() {
  return (
    <DivStyleHead>
      <div className={"head-content-left"}>
        <img src={require("../../icon/slp-icon.png").default} alt={"l"} />
        <div className={"head-content-left-font"}>GitLab</div>
        <div className={"head-content-left-button"}>
          <Button>项目</Button>
          <Button>群组</Button>
          <Button>动态</Button>
          <Button>里程碑</Button>
          <Button>代码片段</Button>
          <img
            style={{
              width: "19px",
              height: "19px",
            }}
            src={require("./../../icon/Statistics.png").default}
            alt={"统计"}
          />
        </div>
      </div>
      <div className={"head-content-right"}>
        <img
          style={{ marginRight: "8px", width: "19px", height: "19px" }}
          src={require("./../../icon/create.png").default}
          alt={"新建"}
        />
        <Input.Search
          autoComplete={"off"}
          style={{ width: 350 }}
          placeholder="搜索或转到..."
          // onSearch={keyword => search({ keyword })}
        />
      </div>
    </DivStyleHead>
  );
}
export default Head;
