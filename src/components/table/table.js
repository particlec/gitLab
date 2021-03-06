import DivStyleContentTable from "./style";
import ColorIcon from "../../utils/colorIcon";
import { Spin, Tag } from "antd";

function Table({ dataSource }) {
  return (
    <DivStyleContentTable>
      {dataSource.map((item, number) => {
        return (
          <div className={"content-table-row"} key={number}>
            {/*<Spin />*/}
            <ColorIcon item={item} />
            <div className={"content-table-row-font"}>
              <p>{item?.name ? item?.name : null}</p>
              <img
                className={"icon-lock"}
                src={require("./../../icon/lock.png").default}
                alt={"锁"}
              />
              <Tag
                style={{ marginLeft: "10px", height: "24px" }}
                color={"blue"}
                className={"developer-tag"}
              >
                Developer
              </Tag>
            </div>

            <div className={"content-table-row-right"}>
              <div className={"content-table-row-icon"}>
                <img
                  src={require("./../../icon/fill.png").default}
                  alt={"星"}
                />
                <div>0</div>
                <img
                  src={require("./../../icon/branch.png").default}
                  alt={"分支"}
                />
                <div>0</div>
                <img
                  src={require("./../../icon/gitmerge.png").default}
                  alt={"合并"}
                />
                <div>0</div>
                <img
                  src={require("./../../icon/Topics.png").default}
                  alt={"合并"}
                />
                <div>0</div>
              </div>

              <div className={"content-table-row-time"}>
                <p>Updated三个月前</p>
              </div>
            </div>
          </div>
        );
      })}
    </DivStyleContentTable>
  );
}

export default Table;
