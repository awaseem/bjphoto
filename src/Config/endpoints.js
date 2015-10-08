/**
 * Created by awaseem on 15-09-30.
 */

let baseURL = "http://localhost:8000/api/";

export default {
    auth: {
        login:baseURL + "user/signin",
        checkAuth: baseURL + "user/checkToken"
    },
    image: {
        base: baseURL + "image"
    },
    imgurApi: {
        upload: "https://api.imgur.com/3/image"
    }
};