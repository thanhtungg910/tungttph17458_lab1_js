import { get } from "../api/posts";

const Details = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`<main class="max-w-4xl mx-auto">
        <h1>${data.title}</h1>
        <img src="${data.image}" />
        <p>${data.body} </p>
        </main>`;
    },
};
export default Details;