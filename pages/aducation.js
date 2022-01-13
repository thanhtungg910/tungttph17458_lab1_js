import newStudyList from "../api/blogs";
const hander = () => {
  const result = newStudyList.map(({
    id,
    title,
    description
  }) => {
    return `<div class="border-2 border-slate-300 p-7 mx-auto">
  <a href="detail/${id}"><img src="https://picsum.photos/400/400" alt=""></a>
  <h2 class="font-bold text-xl text-[#AB7772] mt-4"> <a href="detail/${id}">${title}</h2></a>
  <p class="pt-3">${description}</p>
</div>`;
  }).join("");
  return result;
}
const Aducation = {
  render: function () {
    return /*html*/ `<main class="container mx-auto px-5">
    <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Tin tức học tập</h2>
    <div class="grid grid-cols-3 gap-9 mt-4">
     ${hander()}
    </div>
    <h2 class="font-bold text-3xl mt-4 mb-2 uppercase ">Hoạt động sinh viên</h2>
    <div class="grid grid-cols-3 gap-9 mt-4">
     ${hander()}
    </div></main>`;
  }
};
export default Aducation;