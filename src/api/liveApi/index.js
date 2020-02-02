import request from '@/request';


export default {
    /**
     * 获取所有直播数据
     */
    // findVideos(params) {
    //     let url = "video/findVideos?id=" + params.id;
    //     return request.get(url, {});
    // },
    findVideos(params) {
        let url = "video/findVideos";
        return request.get(url, params);
    },

    /**
     * 参与直播，观看直播回放加积分
     * @param {*} params 
     */
    saveLievCredis(params) {
        let url = "live/saveLiveCredis";
        return request.post(url, params, {});
    }

}