const $ = (element) => {
    const select = document.querySelectorAll(element);
    return select.length === 1 ? select[1] : select;
};
export default $;