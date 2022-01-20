// import newStudyList from "../api/blogs";
import Banner from "../components/banner";
import getPosts from "./handlePost";

const Home = {
    render() {
        return `<main class="container mx-auto px-5">${Banner.render()}
        <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-9 mt-4">
         ${getPosts()}
        </div>
        <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-9 mt-4">
         ${getPosts()}
        </div></main>`;
    },
};
export default Home;