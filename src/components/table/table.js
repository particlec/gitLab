import DivStyleContentTable from "./style";
import ColorIcon from "../../utils/colorIcon";

function Table({ dataSource }) {
  console.log(dataSource);
  return (
    <DivStyleContentTable>
      {dataSource.map((item) => {
        console.log(item);
        return (
          <div className={"content-table-row"}>
            <ColorIcon item={item} />
            <div className={"content-table-row-font"}>
              <p>{item?.name ? item?.name : null}</p>
            </div>
            <div className={"content-table-row-time"}>
              <p>Updated三个月前</p>
            </div>
          </div>
        );
      })}
    </DivStyleContentTable>
  );
}
export default Table;
