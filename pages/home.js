import newStudyList from "../api/blogs";
import Banner from "../components/banner";
const hander = () => {
    const htmls = newStudyList.map(({
        title,
        description
    }) => {
        return `<div class="border-2 border-slate-300 p-7 mx-auto">
    <img src="https://picsum.photos/400/400" alt="">
    <h2 class="font-bold text-xl text-[#AB7772] mt-4">${title}</h2>
    <p class="pt-3">${description}</p>
  </div>`;
    }).join("");
    return htmls;
};
const Home = {
    render() {
        return `<main class="container mx-auto px-5">${Banner.render()}
        <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-9 mt-4">
         ${hander()}
        </div>
        <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-9 mt-4">
         ${hander()}
        </div></main>`;

    },
};
export default Home;