const Newlist = () => {
    fetch("http://localhost:3001/posts")
        .then((res) => res.json())
        .then((data) => {
            const result = data.map((item) => /* html */`<div class="border-2 border-slate-300 p-7 mx-auto">
<a href="detail/${item.id}"><img src="https://picsum.photos/400/400" alt=""></a>
<h2 class="font-bold text-xl text-[#AB7772] mt-4"> <a href="detail/${item.id}">${item.title}</h2></a>
<p class="pt-3">${item.body}</p>
</div>`);
            return result;
        });
};
export default Newlist;