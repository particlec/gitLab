import styled from "styled-components";

const DivStyleHead = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  /*为啥设置是最小高度*/
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  background-color: #f2f2f2;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 20px;
    width: 24px;
    height: 24px;
  }
  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 50px;
    font-size: 19px;
    font-weight: 600;
  }

  div.head-content-left {
    justify-content: flex-start;
  }
  div.head-content-left-first {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 115px;
  }

  div.head-content-right {
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    justify-content: flex-end;
  }
`;

export default DivStyleHead;
