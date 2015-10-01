/**
 * Created by awaseem on 15-09-30.
 */

import fetch from "whatwg-fetch";
import endpoints from "../Config/endpoints";
import { post } from "../Utils/postUtil";

let login = (username, password) => {
    return post(endpoints.auth.login, {
        username: username,
        password: password
    });
};

export { login };