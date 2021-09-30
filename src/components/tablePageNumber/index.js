import {Button} from "antd";
import TablePageStyle from "./style";
import AnalogQuery from "../../analogData/analogQuery";

const TablePageNumber = (props) => {

console.log(AnalogQuery({ page:1,size:5, map:["name","type","update"] }))
      console.log(AnalogQuery({ page:1,size:5, map:["cc","noodle","k",""] }))
    return(
        <TablePageStyle>
              <Button disabled>
                  <span >
                      <img
                          src={require("../../icon/left.png").default}
                          style={{
                              width:"10px",
                              height:"10px"
                          }}
                      />
                  </span>
              </Button>
                <Button>
                    <span/>
                </Button>
                <Button>
                    <span>
                      <img
                          src={require("../../icon/right.png").default}
                          style={{
                              width:"10px",
                              height:"10px"
                          }}
                      />
                  </span>

                </Button>

        </TablePageStyle>
    )
}

export default TablePageNumber;