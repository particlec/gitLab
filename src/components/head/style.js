import styled from "styled-components";

const DivStyleHead = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  /*为啥设置是最小高度*/
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  background-color: #f2f2f2;
  align-items: center;

  img {
    margin-left: 20px;
    width: 23px;
    height: 23px;
  }

  div.head-content-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div.head-content-left-font {
      margin-left: 8px;
      font-size: 20px;
      font-weight: 600;
    }

    Button {
      font-weight: 600;
      background-color: #f2f2f2;
      border-color: #f2f2f2;
      font-size: 14px;
    }
  }

  div.head-content-right {
    margin-left: auto;
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

export default DivStyleHead;
