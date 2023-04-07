/* eslint-disable jsx-quotes */
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getQuestions } from "../../utils";

const Question = ({ question, setQuestion }) => {
  useEffect(() => {
    getQuestions({}).then((res) => {
      setQuestion(res);
    });
  }, []);
  return (
    <view className={styles.wrapper}>
      {question.map((item) => {
        return (
          <view key={item._id} className={styles.item}>
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
