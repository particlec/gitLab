import { Button, Dropdown, Input, Menu } from "antd";
import DivStyleHead from "./style";
import { DownOutlined } from "@ant-design/icons";

function Head() {
  const menu2 = (
    <Menu>
      <Menu.Item>设置</Menu.Item>
      <Menu.Item>用户资料</Menu.Item>
      <Menu.Item>登出</Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  function bigNumberAdd(string1, string2) {
    let temporaryArr1 = string1.split(""), //  字符串转数组 '123'=['1','2','3']
      temporaryArr2 = string2.split(""),
      flag = 0,
      temporaryNumber,
      min = Math.max(temporaryArr1.length, temporaryArr2.length),
      sum = "";
    for (let a = 0; a <= min; a++) {
      temporaryNumber = ~~temporaryArr1.pop() + ~~temporaryArr2.pop() + flag;
      sum = (temporaryNumber % 10) + sum;
      temporaryNumber > 10 || temporaryNumber === 10 ? (flag = 1) : (flag = 0);
    }
    return sum;
  }

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
          <Button
            onClick={() => {
              console.log(bigNumberAdd("99", "2"));
            }}
          >
            开发测试专用
          </Button>
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
          classNme={"head-content-right-search"}
          autoComplete={"off"}
          placeholder="搜索或转到..."
          // onSearch={keyword => search({ keyword })}
        />
        <img
          style={{ marginRight: "8px", width: "19px", height: "19px" }}
          src={require("./../../icon/Topics.png").default}
          alt={"议题"}
        />
        <img
          style={{ marginRight: "8px", width: "19px", height: "19px" }}
          src={require("./../../icon/gitmerge.png").default}
          alt={"合并"}
        />
        <Dropdown overlay={menu}>
          <div>
            <img
              style={{ marginRight: "8px", width: "19px", height: "19px" }}
              src={require("./../../icon/306.png").default}
              alt={"问号"}
            />
            <DownOutlined />
          </div>
        </Dropdown>
        <Dropdown overlay={menu2}>
          <div>
            <img
              style={{ marginRight: "30px", width: "19px", height: "19px" }}
              src={require("./../../icon/head.png").default}
              alt={"头像"}
            />
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </DivStyleHead>
  );
}

export default Head;
