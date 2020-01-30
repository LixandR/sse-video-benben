/**
 * 登录状态管理
 */
import loginApi from "@/api/loginApi"
const schedule = {
    namespaced: true,
    state: {
        realName: "",
        studentId: "",
    },
    mutations: {
        /**
         * 保存当前登录学生
         */
        setCurrentUser(state, currentUser) {
            state.realName = currentUser.realName;
            localStorage.setItem("realName", currentUser.realName);
            state.studentId = currentUser.studentId;
            localStorage.setItem("studentId", currentUser.studentId);
        }
    },
    getters: {
        /**
         * 获取学生登录ID
         */
        getStudentId: state => {
            return state.studentId || localStorage.getItem("studentId");
        }
    },
    actions: {
        /**
         * 用户登录
         * @param {*} param0 
         * @param {*} payload 
         */
        userLogin({ commit }, payload) {
            return new Promise((resolve, reject) => {
                loginApi.userLogin(payload).then(response => {
                    resolve(response);
                }).catch(() => {
                    reject();
                });
            });
        }
    }
}

export default schedule