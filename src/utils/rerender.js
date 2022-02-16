const rerender = async (dom, component) => {
    if (component) {
        document.querySelector(dom).innerHTML = await component.render();
        component.afterRender();
    }
};
// eslint-disable-next-line import/prefer-default-export
export { rerender };