import { signup } from "../api/user";

const Signup = {
    async render() {
        return /* html */`
        <form id="formSignup">
            <input type="text" placeholder="Username" id="username"/>
            <input type="email"  placeholder="Email" id="email"/>
            <input type="password"  placeholder="Password" id="password"/>
            <button>Đăng ký</button>
        </form>
    `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default Signup;