import axios from 'axios';
const baseUrl = "http://47.105.208.216:7050/api/"
axios.defaults.timeout = 30 * 1000;
axios.defaults.responseType = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = false;


/**
 * http post request
 * @param {*} url 
 * @param {*} params JSON格式
 * @param {*} data  body 提交数据为JSON格式
 */
const post = (url, params = {}, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            params: params,
            responseType: "json"
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}
/**
 * http get request
 * @param {*} url 
 * @param {*} params 
 */
const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            responseType: "json"
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}
export default { post, get }