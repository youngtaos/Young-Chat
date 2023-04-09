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




export function getUserCollecting(id, params) {
    return request.get(`/users/${id}/collectedAnswer`, {
        params
    })
}

//获取指定问题
export function getQuestionById(id, params) {
    return request.get(`/questions/${id}`, {
        params
    })
}

//搜索问题
export function searchQuestions(data) {
    return request.get(`/questions?q=${data}`, {
    })
}

//获取问题的答案列表
///questions/64214e09aaf9d95c9ca0179c/answer

export function getQuestionAnswerList(id, params) {
    return request.get(`/questions/${id}/answer`, {
        params
    })
}




