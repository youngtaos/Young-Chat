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

//获取词条列表
export function getTopicsList(params) {
    return request.get(`/topics`, {
        params
    })
}

//获取指定词条下的问题列表
export function getTopicsQuestionsList(id, params) {
    return request.get(`/topics/${id}/questions/`, {
        params
    })
}

//提出问题
export function addQuestion(data) {
    console.log(data)
    return request.post(`/questions`, {
        data
    })
}

//收藏活动（问题）
export function collectingQuestion(id, params) {
    console.log(id, params)
    return request.put(`/users/collectedQuestion/${id}`, {
        params
    })
}





