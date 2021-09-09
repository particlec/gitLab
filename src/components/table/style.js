import styled from "styled-components";

const DivStyleContentTable = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
  div.content-table-row {
    padding: 10px 28px;
    width: 100%;
    height: 81px;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    align-items: center;
  }
  div.content-table-row-font {
    flex: 1 0 55%;
    margin-left: 20px;
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

  div.content-table-row-right {
    flex: 1 0 35%;
    display: flex;
    div.content-table-row-icon {
      @media (max-width: 1079px) {
        display: none;
      }
      justify-content: flex-start;
      flex: 1 1 40%;
      display: flex;
      align-items: center;
      img {
        width: 14px;
        height: 14px;
        margin: 10px;
      }
    }

    div.content-table-row-time {
      @media (max-width: 992px) {
        display: none;
      }
      flex: 1 1 40%;
      justify-content: flex-end;
      margin-left: auto;
      display: flex;
    }
  }
`;

export default DivStyleContentTable;
