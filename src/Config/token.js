/**
 * Created by awaseem on 15-09-30.
 */

let setToken = (tokenString) => {
    localStorage.setItem("bj-admin", tokenString);
};

let getToken = () => {
    return localStorage.getItem("bj-admin");
};

let deleteToken = () => {
    localStorage.removeItem("bj-admin");
};

export { setToken, getToken, deleteToken };