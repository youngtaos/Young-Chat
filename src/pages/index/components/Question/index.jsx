/* eslint-disable jsx-quotes */
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getQuestions, getTopicsQuestionsList } from "../../utils";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";

const Question = ({ question, setQuestion, currentIndex, topic }) => {
  const [page, setPage] = useState(2);
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
  const handleShowMore = () => {
    getQuestions({ page })
      .then((res) => {
        setQuestion([...question, ...res]);
      })
      .then(() => {
        let temp = page;
        temp = temp + 1;
        setPage(temp);
      });
  };
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
              <image src={item.avatar_url} alt="图片" />
            </view>
            <view className={styles.content}>
              <view className={styles.name}>{item.name}</view>
              <view className={styles.desc}>{item.description}</view>
            </view>
          </view>
        );
      })}
      <AtButton
        className={styles.more}
        onClick={() => {
          handleShowMore();
        }}
      >
        加载更多
      </AtButton>
    </view>
  );
};

export default Question;
