import styled from "styled-components";

const ColorIconStyle = styled.div`
  border-radius: 10%;
  width: 48px;
  height: 48px;
  //display: inline-block;
  //transform: translateY(-50%);
  //top: 50%;
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
