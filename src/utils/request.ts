// 二次封装axios
// 1. 利用axios请求、响应拦截器
// 2. 请求头中携带公共参数，如 token
// 3.响应拦截器，可以简化服务器返回的数据，处理http网络错误
import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
    baseURL: '/api', // 请求基础路径
    timeout: 5000, //超时时间

})
request.interceptors.request.use(config => {
    // 请求拦截器 回调注入的对象 配置对象，其中有headers属性,可以携带token
    return config
})

request.interceptors.response.use(response => {
// 响应拦截 成功回调，一般进行简化数据
    return response.data;
}, error => {
    // 响应拦截 失败回调 处理http网络错误
    let status = error.response.status;
    switch(status) {

        case 401: 
            ElMessage({
                type: 'error',
                message: '参数有误'
            })
            break;
        case 404: 
            ElMessage({
                type: 'error',
                message: '请求路径不存在'
            })
            break;
        case 500|501|502|503|504|505:
            ElMessage({
                type: 'error',
                message: '服务器挂了'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
})

export default request;