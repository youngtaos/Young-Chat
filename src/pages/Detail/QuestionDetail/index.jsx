import { View, Button } from "@tarojs/components";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { getQuestionById } from "../../index/utils";

const QuestionDetail = ({ questionId }) => {
  const [questionInfo, setQuestionInfo] = useState(null);
  useEffect(() => {
    getQuestionById(questionId).then((res) => {
      setQuestionInfo(res);
    });
  }, [questionId]);

  return (
    <View className={styles.wrapper}>
      <View className={styles.header}>
        <View className={styles.title}>
          {questionInfo && questionInfo.name}
        </View>
        <View className={styles.desc}>
          {questionInfo && (questionInfo.description || questionInfo.name)}
        </View>
        <View className={styles.topics}>
          {questionInfo &&
            questionInfo.topics.map((item) => {
              return <view key={item._id}>{item.name}</view>;
            })}
        </View>
        <View className={styles.box}>
          <View className={styles.g_and_p}>
            <View>0人关注</View>
            <View>
              {(questionInfo && questionInfo.answeredNumber) || 0}条回答
            </View>
          </View>
          <Button className={styles.writeAnswer}>写回答</Button>
        </View>
      </View>
    </View>
  );
};

export default QuestionDetail;
