import { get, getAll } from "../api/posts";
import { addToCart } from "../utils/cart";
import $ from "../utils/selector";

const NewsList = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                    <div class="border p-4">
                        <a href="#/news/${post.id}">
                            <img src="${post.image}" alt="" />
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}" class="font-semibold text-lg text-orange-500">${post.title}</a></h3>                    
                        <p>${post.body}</p>
                        <button data-id=${post.id} class="add-to-cart p-5 bg-blue-500 hover:bg-slate-50" >Add to cart</button>
                    </div>
                `).join("")}
            </div>`;
    },
    afterRender() {
        $(".add-to-cart").forEach((btn) => {
            btn.addEventListener("click", async () => {
                const { id } = btn.dataset;
                const { data } = await get(id);
                addToCart({ ...data, amount: 1 });
            });
        });
    },
};
export default NewsList;