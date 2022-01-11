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
import Signip from "./pages/signin"

const routes = new Navigo("/", {
    linksSelector: "a"
});
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

const render = (page, id = '') => {
    const layout = `${Header.render()} ${page.render(id)} ${Footer.render()}`;
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

        "/detail/:id": function ({
            data
        }) {
            console.log(data);
            render(Detail, data.id)
        },
    });
    console.log(routes);
    routes.notFound((match) => {

        console.log("Not found", match);
    });
    routes.resolve();
};

export default Routes();