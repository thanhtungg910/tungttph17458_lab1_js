const menu = ["Home",
    "About page",
    "News",
];
const newMenu = [...menu];

const Menu = {
    render() {
        const result = newMenu.map((item, index) => `<li><a href="/link-${index}">${item}</a></li>`).join("");
        return result;
    },
    setMenu(item) {
        console.log(newMenu);
        return this.newMenu.push(item);
    },
};
export default Menu;