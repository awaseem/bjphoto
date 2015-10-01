/**
 * Created by awaseem on 15-09-30.
 */

let setToken = (tokenString) => {
    localStorage.setItem("bj-admin", tokenString);
};

let getToken = () => {
    return localStorage.getItem("bj-admin");
};

export { setToken, getToken };