import { HeaderDashboard, Posts } from "../../../components";

const News = {
    async render(title) {
        return /* html */ `
        ${HeaderDashboard.render(title, "#/admin/news/add")}
         <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> 
            <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" >
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                     <table  class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                           <tr>
                              <th scope="col"
                                 class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Image
                              </th>
                              <th scope="col"
                                 class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Title
                              </th>
                              <th scope="col"
                                 class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                 Content
                              </th>
                              <th scope="col" class="relative px-6 py-3">
                                 <span class="sr-only">Edit</span>
                              </th>
                           </tr>
                        </thead>
                        <tbody    class="product-table bg-white divide-y divide-gray-200">
                        ${await Posts.render()}
                           
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
            </div>
            </div> 
        </div>
        </main>`;
    },
    afterRender() {
        Posts.afterRender();
    },
};
export default News;