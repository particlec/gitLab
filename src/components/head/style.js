import styled from "styled-components";
import { Button } from "antd";

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

  Button {
    font-weight: 600;
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    font-size: 14px;
  }

  div.head-content-right {
    height: 40px;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default DivStyleHead;
