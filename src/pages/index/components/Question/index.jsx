/* eslint-disable jsx-quotes */
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { getQuestions, getTopicsQuestionsList } from "../../utils";
import Taro from "@tarojs/taro";

const Question = ({ question, setQuestion, currentIndex, topic }) => {
  function handleClick(questionId) {
    Taro.navigateTo({
      url: `/pages/Detail/index?questionId=${questionId}`,
    });
  }
  useEffect(() => {
    if (currentIndex === 0) {
      getQuestions({}).then((res) => {
        setQuestion(res);
      });
    } else {
      getTopicsQuestionsList(topic[currentIndex]._id).then((res) => {
        setQuestion(res);
      });
    }
  }, [currentIndex, setQuestion]);
  return (
    <view className={styles.wrapper}>
      {question.map((item) => {
        return (
          <view
            key={item._id}
            className={styles.item}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            <view className={styles.imgBox}>
              <img src={item.avatar_url} alt="图片" />
            </view>
            <view className={styles.content}>
              <view>{item.name}</view>
              <view>{item.description}</view>
            </view>
          </view>
        );
      })}
    </view>
  );
};

export default Question;
