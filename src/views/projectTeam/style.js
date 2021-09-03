import styled from "styled-components";

const DivStyleContent = styled.div`
  background: #ffff;
  padding: 0 15px;
  position: relative;
  width: 100%;
  height: 100%;
  /*为啥设置是最小高度*/
  div.content-title {
    position: relative;
    width: 100%;
    height: 64px;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
  }
  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 700;
  }
  //
  //td.ant-table-cell:first-child {
  //}
`;

export default DivStyleContent;
