import Taro from '@tarojs/taro';
import apiConfig from './apiConfig'

//网络请求拦截器
const interceptor = function (chain) {
    const requestParams = chain.requestParams
    // const { method, data, url } = requestParams
    let token = Taro.getStorageSync('TOKEN')//拿到本地缓存中存的token
    requestParams.header = {
        ...requestParams.header,
        Authorization: 'Bearer ' + token //将token添加到头部
    }
    return chain.proceed(requestParams).then(res => { return res })
}

Taro.addInterceptor(interceptor)

const request = async (method, url, params) => {
    let contentType = params?.data ? 'application/json' : 'application/x-www-form-urlencoded';
    if (params) contentType = params?.headers?.contentType || contentType;
    const option = {
        method,
        isShowLoading: false,
        url: apiConfig.baseUrl + url,
        data: params && (params?.data || params?.params),
        header: {
            'content-type': contentType,
        },
        error(e) {
            console.log('api', '请求接口出现问题', e);
        }
    }
    const resp = await Taro.request(option);
    return resp.data;
}

export default {
    get: (url, config) => {
        return request('GET', url, config);
    },
    post: (url, config) => {
        return request('POST', url, config);
    },
    put: (url, config) => {
        return request('PUT', url, config);
    },
    delete: (url, config) => {
        return request('DELETE', url, config);
    },
    patch: (url, config) => {
        return request('PATCH', url, config);
    },
}