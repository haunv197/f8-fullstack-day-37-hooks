import paths from "./configs/paths";
import DefaultLayout from "./layouts/DefaultLayout";
import EditAvatar from "./pages/EditAvatar";
import UseRef from "./pages/UseRef";

const routes = [
  {
    layout: DefaultLayout,
    children: [
      { path: paths.editAvatar, component: EditAvatar },
      { path: paths.useRef, component: UseRef },
    ],
  },
];

export default routes;
