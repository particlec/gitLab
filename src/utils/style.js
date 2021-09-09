import styled from "styled-components";

const ColorIconStyle = styled.div`
  flex-shrink: 0;
  border-radius: 10%;
  width: 48px;
  height: 48px;
  background: ${(props) => props.className};
  display: flex;
  justify-content: center;
  align-items: center;
  p.p2 {
    margin-top: 13px;
    font-size: 18px;
  }
`;

export default ColorIconStyle;
