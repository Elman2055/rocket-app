import RunningLine from "../ui/runningLine/RunningLine";
import ToolBar from "../toolBar/ToolBar";
import FooterBar from "../footerBar/FooterBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <RunningLine position={"1001"} />
      <ToolBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
};

export default Layout;
