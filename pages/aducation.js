import Newlist from "../components/newList";

const Aducation = {
    render() {
        return /* html */ `<main class="container mx-auto px-5">
    <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Tin tức học tập</h2>
    <div class="grid grid-cols-3 gap-9 mt-4">
     ${Newlist()}
    </div>
    <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Hoạt động sinh viên</h2>
    <div class="grid grid-cols-3 gap-9 mt-4">
     ${Newlist()}
    </div></main>`;
    },
};
export default Aducation;