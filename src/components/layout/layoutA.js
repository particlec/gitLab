import { Layout } from "antd";
import { Route } from "react-router-dom";
import Head from "../head";

import styled from "styled-components";

const { Header, Content } = Layout;

const HeaderStyle = styled(Header)`
  background: #ffffff;
  height: 40px;
  padding: 0;
  border-bottom: 1px solid #e5e5e5;
  //border-bottom-width: 1px;
  //border: darkgray;
`;

function LayoutA({ path, title, component: Component }) {
  return (
    <Route path={path}>
      <Layout>
        <HeaderStyle className={"test"}>
          <Head />
        </HeaderStyle>

        <Content>
          <Component />
        </Content>
      </Layout>
    </Route>
  );
}
export default LayoutA;
