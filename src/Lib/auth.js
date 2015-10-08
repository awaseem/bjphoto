/**
 * Created by awaseem on 15-09-30.
 */

import jwtDecode from "jwt-decode";
import endpoints from "../Config/endpoints";
import { post } from "../Utils/postUtil";
import { getToken, deleteToken } from "../Config/token";

let checkAuth = () => {
    let token = getToken();
    if (token) {
        try {
            let tokenExp = jwtDecode(token).exp;
            let currDate = Date.now() / 1000 | 0;
            if (tokenExp && currDate < tokenExp && (tokenExp - currDate) >= 7200) {
                return true
            }
        }
        catch (err) {
            console.error(err)
        }
    }
    return false;
};

let login = (username, password) => {
    return post(endpoints.auth.login, {
        username: username,
        password: password
    });
};

let logout = () => {
    return deleteToken();
};

export { login, checkAuth, logout };