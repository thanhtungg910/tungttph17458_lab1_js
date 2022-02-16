import { Banner, NewsList } from "../components";

const Home = {
    async render() {
        return /* html */`
        <main class="max-w-4xl mx-auto">
        ${Banner.render()}
        ${await NewsList.render()}
        </main>`;
    },
    afterRender() {
        NewsList.afterRender();
    },
};
export default Home;