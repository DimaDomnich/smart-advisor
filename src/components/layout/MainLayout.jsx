import { cx } from "@/utils/cx";
import PropTypes from "prop-types";
import HeaderNavbar from "./HeaderNavbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children, className }) => {
  return (
    <div className="flex min-h-screen bg-gray50 text-gray900">
      <Sidebar />
      <div className="flex flex-col basis-full">
        <HeaderNavbar />
        <main className={cx("flex", className)}>{children}</main>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainLayout;
