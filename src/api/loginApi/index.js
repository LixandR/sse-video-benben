import request from '@/request';


export default {
    /**
     * 系统登录接口
     */
    userLogin(params) {
        let url = "user/login";
        return request.get(url, params);
    },

}