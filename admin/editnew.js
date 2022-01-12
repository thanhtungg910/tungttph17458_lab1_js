import newStudyList from "../api/blogs";

const EditNews = {
    render(id){
        const {id: idNew,image, title, description} = newStudyList.find(item => item.id == id);
        return /*html */`
        <div class="mx-auto my-8 max-w-2xl ">
       <div class="max-w-2xl ">
        <h2 class="font-bold my-2 text-xl"> Edit News</h2>
        <form action="" method="GET" class="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
        
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Title
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value="${image}">
          </div>
 
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Image
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value="${image}">
          </div>
 
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Mo ta
            </label>
            <textarea id="description"class="shadow appearance-none h-52 rounded w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            ${description}
            </textarea>
          </div>
 
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Add
            </button>
          </div>
          
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
        </div>
        `
    }
}
export default EditNews;