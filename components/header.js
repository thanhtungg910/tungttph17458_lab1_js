import Menu from "./nav.js";
const Header = {
  render() {
    return /*html*/ `<header class="container mx-auto px-5">
          <section class="header-top bg-[#272F54]">
            <a href="#"><img src="https://picsum.photos/200/200" class="mx-auto p-2"></a>
          </section>
          <nav class="flex justify-between text-white bg-[#CC7602] p-3 pl-6">
          <ul class="flex justify-center space-x-7 ">
            ${Menu.render()}
          </ul>
          <section class="search">
            <input type="search" class="w-50" name="" id="">
            <button class="ml-3 w-28 bg-[#272F54] border-2 border-[#fff]">Tìm kiếm</button>
          </section>
          <ul class="flex justify-center space-x-7 ">
           <li><a href="signup">sign up</a></li>
           <li><a href="signin">sign in</a></li>
           <li><a href="admin/dashboard">Admin</a></li>
          </ul>
        </nav>
          
        </header>`;
  },
};
export default Header;