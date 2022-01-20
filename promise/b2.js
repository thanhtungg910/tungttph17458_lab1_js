/* eslint-disable no-console */
const thucDay = () => new Promise((resolve) => {
    console.log("B1. Đã ngủ dậy!");
    resolve();
});
const danhRang = () => new Promise((resolve) => {
    console.log("B2. Đang đánh răng!");
    setTimeout(() => { console.log("Đã đánh xong"); resolve(); }, 2000);
});
const thayQuanAo = () => new Promise((resolve) => {
    console.log("B3. Đang thay quần áo");
    setTimeout(() => { console.log("Đã thay quần áo xong"); resolve(); }, 3000);
});
const diHoc = () => new Promise((resolve) => {
    console.log("B4. Đang đi học");
    setTimeout(() => { console.log("Đã đến trường"); resolve(); }, 4000);
});
thucDay()
    .then(() => danhRang())
    .then(() => thayQuanAo())
    .then(() => diHoc());