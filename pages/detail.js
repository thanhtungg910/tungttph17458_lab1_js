import studyList from '../api/blogs';

const Detail = {
    render(dataid) {
        const {
            id,
            title,
            description
        } = studyList.find((item) => item.id == dataid);
        return /*html */ `
        <div class="grid grid-cols-2 p-4 gap-4 container mx-auto ">
        <div class="image">
            <img src="https://picsum.photos/400/400" alt="">
        </div>
        <div class="content">
        <h2 class="font-bold text-2xl">${title}</h2>
        <p>${description}</p>
        </div>
        </div>`
    }
}
export default Detail;