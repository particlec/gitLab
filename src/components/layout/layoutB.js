import { Layout } from 'antd';
import {Route} from "react-router-dom";

const { Header,  Sider, Content } = Layout;
function LayoutB({ path, title, component: Component }) {


    return (
        <Route path={path}>
            <Layout>
                <Header>

                </Header>

                <Layout>
                    <Sider>
                    </Sider>
                    <Content>
                        <Component/>
                    </Content>
                </Layout>
            </Layout>
        </Route>

    )

}
export default LayoutB;
