import RunningLine from "../ui/runningLine/RunningLine";
import ToolBar from "../toolBar/ToolBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <RunningLine />
      <ToolBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
