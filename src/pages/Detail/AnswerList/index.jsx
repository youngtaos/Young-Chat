import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { getQuestionAnswerList, getQuestionHotAnswerList } from "../utils";
import styles from "./styles.module.scss";
import AnswerItem from "./item";
import { AtButton } from "taro-ui";

const AnswerList = ({ questionId }) => {
  const [answerList, setAnswerList] = useState([]);
  const [isNew, setIsNew] = useState("true");
  const [currentPage, setCurrentPage] = useState(1);
  const handleSwitch = () => {
    setIsNew(!isNew);
  };
  const nextPageData = () => {
    let temp = currentPage;
    setCurrentPage(temp + 1);
    getQuestionAnswerList(questionId, { per_Page: 1, page: currentPage }).then(
      (res) => {
        setAnswerList(res);
        return res;
      }
    );
  };
  const prePageData = () => {
    if (currentPage !== 1) {
      let temp = currentPage;
      setCurrentPage(temp - 1);
      getQuestionAnswerList(questionId, {
        per_Page: 1,
        page: currentPage,
      }).then((res) => {
        setAnswerList(res);
        return res;
      });
    }
  };
  useEffect(() => {
    isNew
      ? getQuestionAnswerList(questionId, {
          per_Page: 1,
          page: currentPage,
        }).then((res) => {
          setAnswerList(res.reverse());
        })
      : getQuestionHotAnswerList(questionId, {
          per_Page: 1,
          page: currentPage,
        }).then((res) => {
          setAnswerList(res.reverse());
        });
  }, [currentPage, isNew, questionId]);
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
            <View className={styles.btnBox}>
              <AtButton
                className={styles.perBtn}
                onClick={() => {
                  prePageData();
                }}
                disabled={currentPage === 1}
              >
                上一篇
              </AtButton>
              <AtButton
                className={styles.nextBtn}
                onClick={() => {
                  nextPageData();
                }}
              >
                下一篇
              </AtButton>
            </View>
          </>
        );
      })}
      {!answerList.length && (
        <View>
          <View className={styles.noContent}>到底了,没有更多内容了哦</View>
          <View className={styles.btnBox}>
            <AtButton
              className={styles.perBtn}
              onClick={() => {
                prePageData();
              }}
              disabled={currentPage === 1}
            >
              上一篇
            </AtButton>
          </View>
        </View>
      )}
    </View>
  );
};
export default AnswerList;
