import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { getQuestionAnswerList } from "../utils";
import styles from "./styles.module.scss";
import AnswerItem from "./item";
import { AtButton } from "taro-ui";
import { useCallback } from "react";

const AnswerList = ({ questionId }) => {
  const [answerList, setAnswerList] = useState([]);
  const [isNew, setIsNew] = useState("true");
  const [page, setPage] = useState(2);
  const [isLast, setIsLast] = useState(false);
  const handleSwitch = () => {
    setIsNew(!isNew);
  };

  const nextPageData = () => {
    getQuestionAnswerList(questionId, { per_Page: 1, page })
      .then((res) => {
        setAnswerList(res);
        return res;
      })
      .then((res) => {
        if (res.length) {
          let temp = page;
          temp += 1;
          setPage(temp);

          console.log(page);
        } else {
          setIsLast(true);
          console.log("没有了");
        }
      });
  };
  useEffect(() => {
    getQuestionAnswerList(questionId, { per_Page: 1, page }).then((res) => {
      setAnswerList(res.reverse());
    });
  }, [page, questionId]);
  return (
    <View className={styles.wrapper}>
      <View className={styles.top}>
        <View className={styles.title}> {isNew ? "最新回答" : "最热回答"}</View>
        <View className={styles.switch} onClick={handleSwitch}>
          {isNew ? "切换至最热" : "切换至最新"}
        </View>
      </View>
      {answerList.map((item) => {
        return (
          <>
            <AnswerItem key={item._id} item={item} />
            {isLast ? (
              <View>到底了</View>
            ) : (
              <AtButton
                onClick={() => {
                  nextPageData();
                }}
              >
                下一篇
              </AtButton>
            )}
          </>
        );
      })}
    </View>
  );
};
export default AnswerList;
