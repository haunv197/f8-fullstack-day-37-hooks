import paths from "@/configs/paths";
import routes from "@/routes";
import { NavLink, Outlet } from "react-router";

const handleActive = ({ isActive }) => ({
  background: isActive ? "orange" : "transparent",
  color: isActive ? "#fff" : "#333",
});

const menuItems = [
  { title: "Home", path: paths.index },
  { title: "Edit Avatar", path: paths.editAvatar },
  { title: "Use Ref", path: paths.useRef },
  { title: "React Memo", path: paths.reactMemo },
];

function DefaultLayout() {
  return (
    <div>
      <header>
        <ul className="flex gap-3 border">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                style={handleActive}
                className="p-3 inline-flex"
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default DefaultLayout;
