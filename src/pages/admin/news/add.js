// import axios from "axios";
import axios from "axios";
import { addNews } from "../../../api/posts";

const AddNews = {
    render() {
        return /* html */ `<main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> 
           <div class="px-4 py-6 sm:px-0"> 
           <div class="w-full max-w-xs mx-auto">
            <form id="form-news" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Tile
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title">
               </div>
               <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                  Image
                  </label>
                  <input class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="image" type="file">
               </div>
               <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                  Content
                  </label>
                  <textarea class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="content">
                  </textarea>
               </div>
               <div class="flex items-center justify-between"> 
                  <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
               </div>
            </form> 
           </div>
           </div> 
        </div>
     </main> `;
    },
    afterRender() {
        const formNews = document.querySelector("#form-news");
        const image = document.querySelector("#image");
        formNews.addEventListener("submit", async (e) => {
            e.preventDefault();
            const API_CLOUDINARY = "https://api.cloudinary.com/v1_1/dhfndew6y/image/upload";
            const CLOUDINARY_PRESET = "jh7j9elf";
            const file = image.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const res = await axios.post(API_CLOUDINARY, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            addNews({ title: document.querySelector("#title").value, image: res.data.secure_url, body: document.querySelector("#content").value });
        });
    },

};
export default AddNews;