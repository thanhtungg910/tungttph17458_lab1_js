import instance from "./instace";

const signup = (data) => {
    const url = "/signup";
    return instance.post(url, data);
};

const signin = (data) => {
    const url = "/signin";
    return instance.post(url, data);
};
export { signup, signin };