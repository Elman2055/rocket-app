import { NavLink, Outlet } from "react-router-dom";
import logoAdmin from "../../../public/logoFooter.png";
import "./AdminLayot.css";

const AdminLayot = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="adminLayotBlock">
          <img src={logoAdmin} alt="logo" className="logoLayot" />
          <div className="navigationAdmin">
            <NavLink
              to="/admin/categories"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <h3>Управление категориями</h3>
            </NavLink>
            <NavLink
              to="/admin/products"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <h3>Управление товарами</h3>
            </NavLink>
            <NavLink
              to="/admin/password"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              <h3>Смена пароля</h3>
            </NavLink>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayot;
