import styled from "styled-components";

const DivStyleContentTable = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
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
    font-size: 16px;
    img.icon-lock {
      width: 9px;
      height: 11px;
      margin-left: 15px;
      margin-top: 8px;
    }
  }

  div.content-table-row-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 14px;
      height: 14px;
      margin: 10px;
    }
  }

  div.content-table-row-time {
    width: 400px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export default DivStyleContentTable;
