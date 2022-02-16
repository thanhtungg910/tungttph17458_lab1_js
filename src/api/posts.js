import instance from "./instace";

export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const addNews = (data) => {
    const url = `/posts`;
    return instance.post(url, data);
};
export const dltnews = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};