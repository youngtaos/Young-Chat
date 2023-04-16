import Taro from "@tarojs/taro";
import request from "../../utils/request";

export function getUserInfo(id, params) {
    return request.get(`/users/${id}`, {
        params
    })
}

//获取问题的最新答案列表
///questions/64214e09aaf9d95c9ca0179c/answer

export function getQuestionAnswerList(id, params) {
    return request.get(`/questions/${id}/answer`, {
        params
    })
}

//获取问题的最热答案列表
///questions/64214e09aaf9d95c9ca0179c/answer

export function getQuestionHotAnswerList(id, params) {
    return request.get(`/questions/${id}/answer/hot`, {
        params
    })
}


export function AddQuestionAnswer(id, data) {
    return request.post(`/questions/${id}/answer`, {
        data
    })
}