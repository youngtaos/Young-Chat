import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { getQuestionAnswerList } from "../utils";
import styles from "./styles.module.scss";
import AnswerItem from "./item";

const AnswerList = ({ questionId }) => {
  const [answerList, setAnswerList] = useState([]);
  const [isNew, setIsNew] = useState("true");
  const handleSwitch = () => {
    setIsNew(!isNew);
  };

  useEffect(() => {
    getQuestionAnswerList(questionId).then((res) => {
      setAnswerList(res.reverse());
    });
  }, [questionId]);
  return (
    <View className={styles.wrapper}>
      <View className={styles.top}>
        <View className={styles.title}> {isNew ? "最新回答" : "最热回答"}</View>
        <View className={styles.switch} onClick={handleSwitch}>
          {isNew ? "切换至最热" : "切换至最新"}
        </View>
      </View>
      {answerList.map((item) => {
        return <AnswerItem key={item._id} item={item} />;
      })}
    </View>
  );
};
export default AnswerList;
