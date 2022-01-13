import Navigo from "navigo";
import {
          Home,
          Signup,
          Signip,
          Admission,
          Aducation,
          Recruitment,
          Students,
          Detail,
} from "./pages/index";
import { Header, Footer, Dashboard } from "./components/index";

import { HomeDashboard, NewList, AddNews, EditNews } from "./admin/index";

const routes = new Navigo("/", {
          linksSelector: "a",
});
const root = document.createElement("div");
root.id = "root";
root.className = "max-w-4xl mx-auto";
document.body.appendChild(root);

const render = (page, id = "") => {
          const layout = `${Header.render()} ${page.render(
                    id
          )} ${Footer.render()}`;
          document.getElementById("root").innerHTML = layout;
};
const adminRender = (page, id = "") => {
          const layout = `${Dashboard.render()} ${page.render(id)}`;
          document.getElementById("root").innerHTML = layout;
};

const Routes = () => {
          routes.on({
                    "/": () => render(Home),

                    "/link-0": () => render(Home),

                    "/link-1": () => render(Admission),

                    "/link-2": () => render(Aducation),

                    "/link-3": () => render(Recruitment),

                    "/link-4": () => render(Students),

                    "/signup": () => render(Signup),

                    "/signin": () => render(Signip),

                    "/detail/:id": ({ data }) => render(Detail, data.id),

                    "/admin/dashboard": () => adminRender(HomeDashboard),

                    "/admin/news": () => adminRender(NewList),

                    "/admin/news/add": () => adminRender(AddNews),

                    "/admin/news/:id/edit": ({ data }) =>
                              adminRender(EditNews, data.id),
          });
          routes.notFound((match) => {
                    console.log("Not found", match);
          });
          routes.resolve();
};

export default Routes();
