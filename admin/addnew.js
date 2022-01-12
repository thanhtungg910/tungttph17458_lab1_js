const AddNews = {
    render() {
        return /*html */`
       <div class="mx-auto max-w-xs">
       <div class="max-w-xs">
       <form class="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4">
       
         <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
             Title
           </label>
           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
         </div>

         <div class="mb-4">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
             Image
           </label>
           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
         </div>

         <div class="mb-6">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
             Description
           </label>
           <textarea id="description"class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"></textarea>
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
       </div>`
    }
}
export default AddNews;