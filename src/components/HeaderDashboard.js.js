const HeaderDashboard = {
    render(title = " ", url = "/admin/dashboard") {
        //   const location = window.location.href;
        //   const result = location.replace(window.location.pathname, url);
        //   console.log(result);
        return /* html */`
      <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"> 
          <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              ${title} 
              </h2>
              </div>
              <a href="${url}" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
               </svg>
                     Them
               </a>
          </div>
      </div>
      </header>`;
    },
};
export default HeaderDashboard;