/**
 * Created by awaseem on 15-10-06.
 */

import { post } from "../Utils/postUtil";
import endPoints from "../Config/endpoints";

let uploadImgur = (image64) => {
    return post(endPoints.imgurApi.upload, {
        image: image64
    }, 'Client-ID f941eb6921b7360')
};

export { uploadImgur };