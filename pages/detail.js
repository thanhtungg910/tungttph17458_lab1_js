import studyList from "../api/blogs";

const Detail = {
    render(dataid) {
        const {
            title,
            image,
            description,
        } = studyList.find((item) => item.id === dataid);
        return /* html */ `<main class="container mx-auto px-5">  
        <div class="container text-center mt-2">
        <h2 class="text-xl font-bold">${title}</h2>
        <img src="${image}" class="mx-auto" alt=""/>
        <p class="w-96 mx-auto">
        ${description}
        </p>
        </div></main>`;
    },
};
export default Detail;