function getPosts() {
    fetch("https://61c7249a9031850017547313.mockapi.io/posts")
        .then((res) => res.json())
        .then((data) => {
            const htmls = data.map((item) => `
         <div class="border-2 border-slate-300 p-7 mx-auto">
        <a href="detail/${item.id}"><img src="${item.image}" alt=""></a>
        <h2 class="font-bold text-xl text-[#AB7772] mt-4"> <a href="detail/ ">${item.title} </h2></a>
        <p class="pt-3"> ${item.content} </p>
      </div>`).join("");
            return htmls;
        });
}
export default getPosts;