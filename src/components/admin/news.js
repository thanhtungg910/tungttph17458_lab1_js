import { getAll, dltnews } from "../../api/posts";
import { rerender } from "../../utils/rerender";

const Posts = {
    async  render() {
        const { data } = await getAll();
        return `
        ${data.map((item) => `<tr>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                     <div class="flex items-center">
                                        <div class="flex-shrink-0 h-10 w-10">
                                           <img class="h-10 w-10 rounded-full"
                                              src="${item.image}"
                                              alt="">
                                        </div>
       
                                     </div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                     <div class="text-sm text-gray-900">${item.title}</div>
                                     <div class="text-sm text-gray-500">${item.id}</div>
                                  </td>
                                  <td class="px-6 py-4  ">
                                   ${item.body}   
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                     <button data-id="/admin/news/${item.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</button> |
                                     <button data-id="${item.id}" class="delete-news text-indigo-600 hover:text-indigo-900">Delete</button>
                                  </td>
                               </tr>`).join(" ")}`;
    },

    afterRender() {
        const deleteNews = document.querySelectorAll(".delete-news");
        deleteNews.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const confirm = window.confirm("Xoa nhe");
                if (confirm) {
                    dltnews(id).then(() => rerender(".product-table", Posts));
                }
            });
        });
    },
};
export default Posts;