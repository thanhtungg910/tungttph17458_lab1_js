import Navigo from "navigo";
import {
    Home, Details, Signup, Signin, CartPage,
} from "./src/pages";
import { Dashboard, News, AddNews } from "./src/pages/admin";
import { Header, NavDashboard, NewsList } from "./src/components";

const routes = new Navigo("/", { linksSelector: "a", hash: true });
async function render(page, id) {
    const layout = `
    <header class="max-w-4xl mx-auto">
    ${Header.render()}
    </header> ${await page.render(id)}`;
    document.querySelector("#root").innerHTML = layout;
    if (page.afterRender)page.afterRender();
}
async function dashboardRender(page, title, id) {
    const layout = `${NavDashboard.render()}   ${await page?.render(title, id)}`;
    document.querySelector("#root").innerHTML = layout;
    if (page.afterRender)page.afterRender();
}
const Routes = () => {
    routes.on("/admin/*", () => {}, {
        before(done) {
            if (JSON.parse(localStorage.getItem("user"))) {
                const { id } = JSON.parse(localStorage.getItem("user"));
                // eslint-disable-next-line eqeqeq
                if (id == 1) {
                    done();
                } else {
                    document.location.href = "/";
                }
            } else {
                document.location.href = "/";
            }
        },
    });
    routes.on({
        "/": () => render(Home),
        "/news/:id": ({ data: { id } }) => render(Details, id),
        "/cart": () => render(CartPage),
        "/admin/dashboard": () => dashboardRender(Dashboard),
        "/admin/news": () => dashboardRender(News, "News"),
        "/products": () => render(NewsList),
        "/signup": () => render(Signup),
        "/signin": () => render(Signin),
        "/admin/news/add": () => dashboardRender(AddNews, "Add News"),
    });
    routes.resolve();
};

export default Routes();