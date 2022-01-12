import Navigo from "navigo";
import Header from "./components/header";
import Home from "./pages/home";
import Admission from "./pages/admissions";
import Footer from "./components/footer";
import Aducation from "./pages/aducation";
import Recruitment from "./pages/recruitment";
import Students from "./pages/students";
import Detail from "./pages/detail";
import Signup from "./pages/signup";
import Signip from "./pages/signin";
import Dashboard from "./components/dasboard";
import NewList from "./admin/news";
import HomeDashboard from "./admin/home";
import AddNews from "./admin/addnew";
import EditNews from "./admin/editnew";


const routes = new Navigo("/", {
    linksSelector: "a"
});
const root = document.createElement("div");
root.id = "root";
root.className = "max-w-4xl mx-auto";
document.body.appendChild(root);

const render = (page, id = '') => {
    const layout = `${Header.render()} ${page.render(id)} ${Footer.render()}`;
    document.getElementById("root").innerHTML = layout;
    
};
const adminRender = (page, id = '') => {
    const layout =   `${Dashboard.render()} ${ page.render(id)}`;
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

        "/detail/:id": ({
            data
        }) => render(Detail, data.id),

        "/admin/dashboard": () => adminRender(HomeDashboard),

        "/admin/news": () => adminRender(NewList),

        "/admin/news/add": () => adminRender(AddNews),

        "/admin/news/:id/edit": ({data}) => adminRender(EditNews, data.id),

    });
    routes.notFound((match) => {

        console.log("Not found", match);
    });
    routes.resolve();
};

export default Routes();