import styled from "styled-components";
import { Button } from "antd";
export const TabBar = styled.div`
  background: #fff;
  padding: 8px 16px;
  z-index: 1;
  flex-shrink: 0;
  display: flex;
  position: relative;
`;

// (props.defaultActiveKey === props.key ? 700 : 400)
export const TabBarItem = styled(Button)`
  font-weight: ${(props) => (props.className === "active" ? 700 : 400)};
  margin: 5px 34px 10px 15px;
  padding: 12px 0px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  box-shadow: none;

  &.active,
  &.hover {
    color: #0c0f11;
    border-bottom: 2px solid #353b41;
  }
`;

export const TabContent = styled.div`
  background: #fff;
  width: 100%;
  //flex: 1;
  height: 100%;
  div {
    //flex-shrink: 0;
    //overflow-y: auto;
  }
`;
