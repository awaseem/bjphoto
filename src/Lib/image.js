/**
 * Created by awaseem on 15-10-03.
 */

import { post } from "../Utils/postUtil";
import { getToken } from "../Config/token";
import endpoints from  "../Config/endpoints";

let uploadImage = (title, description, imageData) => {
    return post(endpoints.image.base, {
        token: getToken(),
        name: title,
        description: description,
        imageData: imageData
    })
};

export { uploadImage }