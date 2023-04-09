import { View, Button } from "@tarojs/components";
import styles from "./styles.module.scss";
import { useRouter } from "@tarojs/taro";
import { useState, useEffect } from "react";
import { getQuestionById } from "../../index/utils";

const QuestionDetail = () => {
  const router = useRouter();
  const [questionId] = useState(router.params.questionId);
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
        <View className={styles.box}>
          <View className={styles.g_and_p}>
            <View>1人关注</View>
            <View>1条回答</View>
          </View>
          <Button className={styles.writeAnswer}>写回答</Button>
        </View>
      </View>
    </View>
  );
};

export default QuestionDetail;
