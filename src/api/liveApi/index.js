import request from '@/request';


export default {
    /**
     * 获取所有直播数据
     */
    getLiveClassData(params) {
        let url = "live/index?studentId=" + params.studentId;
        return request.get(url, {});
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