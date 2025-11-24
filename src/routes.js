import paths from "./configs/paths";
import DefaultLayout from "./layouts/DefaultLayout";
import EditAvatar from "./pages/EditAvatar";
import Home from "./pages/Home";
import ReactMemo from "./pages/ReactMemo";
import UseRef from "./pages/UseRef";

const routes = [
  {
    layout: DefaultLayout,
    children: [
      { path: paths.index, component: Home },
      { path: paths.editAvatar, component: EditAvatar },
      { path: paths.useRef, component: UseRef },
      { path: paths.reactMemo, component: ReactMemo },
    ],
  },
];

export default routes;
