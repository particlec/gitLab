import styled from "styled-components";

const DivStyleContentTable = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
  //background: aquamarine;
  //display:inline-block
  div.content-table-row {
    margin: 10px 28px;
    width: 100%;
    height: 81px;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    align-items: center;
  }
  div.content-table-row-font {
    margin-left: 20px;
    width: 800px;
    height: 50px;
    display: flex;
    //justify-content: center;
    align-items: center;
    font-size: 16px;
  }

  div.content-table-row-time {
    width: 400px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  //div.icon {
  //  top: 50%;
  //  transform: translateY(-50%);
  //  left: 0;
  //  position: absolute;
  //  width: 46px;
  //  height: 48px;
  //}
`;

export default DivStyleContentTable;
