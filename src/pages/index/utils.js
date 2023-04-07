import Taro from "@tarojs/taro";
import request from "../../utils/request";

export function login(data) {
    return request.post('/users/login', {
        data
    }).then((res) => {
        const { token } = res; // 从返回的数据中获取 Token
        Taro.setStorageSync("TOKEN", token); // 将 Token 存储到本地存储中
        return res; // 返回完整的响应数据
    })

}

export function editUserInfo(id, data) {
    console.log(data)
    return request.post(`/users/${id}`, {
        data
    })
}
export function getQuestions(params) {
    return request.get(`/questions/`, {
        params
    })
}

export function searchQuestions(data) {
    return request.get(`/questions?q=${data}`, {
    })
}


export function getUserCollecting(id, params) {
    return request.get(`/users/${id}/collectedAnswer`, {
        params
    })
}


