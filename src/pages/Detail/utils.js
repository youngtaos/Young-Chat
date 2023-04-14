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

export function AddQuestionAnswer(id, params) {
    return request.post(`/questions/${id}/answer`, {
        params
    })
}