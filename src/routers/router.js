import { HashRouter, Redirect, Switch } from "react-router-dom";
import LayoutA from "../components/layout/layoutA";
import LayoutB from "../components/layout/layoutB";
import ProjectTeam from "../views/projectTeam";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <LayoutA
          path={"/gitlab.utcook.com"}
          title={"首页"}
          component={ProjectTeam}
        />

        <Redirect to="/gitlab.utcook.com" />
      </Switch>
    </HashRouter>
  );
}

export default Router;
