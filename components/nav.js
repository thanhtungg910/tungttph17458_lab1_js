const menu = ["Trang chủ",
    "Tuyển sinh",
    "Chương trinh đào tạo",
    "Góc sinh viên",
    "Tuyển dụng",
];
const newMenu = [...menu];

const Menu = {
    render() {
        const result = newMenu.map((item, index) => {
            return `<li><a href="/link-${index}">${item}</a></li>`;
        }).join("");
        return result;
    },
    setMenu(item) {
        console.log(newMenu);
        return this.newMenu.push(item);
    },
};
export default Menu;