/**
 * 直播课状态管理
 */
import liveApi from "@/api/liveApi"
const schedule = {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        /**
         * 获取调度元数据信息
         * @param {*} param0 
         * @param {*} payload 
         */
        getLiveClassData({ commit }, payload) {
            return new Promise((resolve, reject) => {
                liveApi.getLiveClassData(payload).then(response => {
                    resolve(response);
                }).catch(() => {
                    reject();
                });
            });
        },
        /**
         * 参与直播，观看直播回放加积分
         * @param {*} param0 
         * @param {*} payload  {"userid":"学生编号","type":"0:参与直播，1:直播回放","meetingId":"直播编号"}
         */
        saveLievCredis({ commit }, payload) {
            return new Promise((resolve, reject) => {
                liveApi.saveLievCredis(payload).then(response => {
                    resolve(response);
                }).catch(() => {
                    reject();
                });
            });
        }
    }
}

export default schedule