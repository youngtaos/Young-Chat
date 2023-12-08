/* eslint-disable jsx-quotes */
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  collectingQuestion,
  getQuestions,
  getTopicsQuestionsList,
} from "../../utils";
import Taro from "@tarojs/taro";
import { AtButton, AtToast } from "taro-ui";

const Activity = ({ question, setQuestion, currentIndex, topic }) => {
  const [page, setPage] = useState();
  const [isOpened, setIsOpened] = useState(false);

  function handleClick(questionId) {
    // Taro.navigateTo({
    //   url: `/pages/Detail/index?questionId=${questionId}`,
    // });
  }
  function hancleCollectingQuestion(questionId) {
    collectingQuestion(questionId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    const arr = new Array(topic.length).fill(2);
    setPage(arr);
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
    if (currentIndex === 0) {
      page[currentIndex] &&
        getQuestions({ page: page[currentIndex] })
          .then((res) => {
            setQuestion([...question, ...res]);
            return res;
          })
          .then((res) => {
            if (res.length) {
              let temp = page;
              let num = temp[currentIndex] + 1;
              temp.splice(currentIndex, 1, num);
              setPage(temp);
            } else {
              setIsOpened(true);
            }
          });
    } else {
      page[currentIndex] &&
        getTopicsQuestionsList(topic[currentIndex]._id, {
          page: page[currentIndex],
        })
          .then((res) => {
            setQuestion([...question, ...res]);
            return res;
          })
          .then((res) => {
            if (res.length) {
              let temp = page;
              let num = temp[currentIndex] + 1;
              temp.splice(currentIndex, 1, num);
              console.log(temp);
              setPage(temp);
            } else {
              setIsOpened(true);
            }
          });
    }
  };
  return (
    <view className={styles.wrapper}>
      <AtToast
        isOpened={isOpened}
        onClose={() => {
          setIsOpened(false);
        }}
        duration={1000}
        text="没有更多了"
        // icon="{icon}"
      ></AtToast>
      {question.map((item) => {
        console.log(item, "item");
        return (
          <view
            key={item._id}
            className={styles.item}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            <view className={styles.top}>
              <view className={styles.leftBox}>
                <image
                  src={
                    item.questioner.avatar_url ||
                    "http://localhost:7000/upload/203e17202ef06b7c97552f401.png"
                  }
                  alt="图片"
                />
                <view className={styles.name}>{item.questioner.name}</view>
              </view>
              <view>
                <AtButton className={styles.notice}>关注</AtButton>
              </view>
            </view>
            <view className={styles.mid}>
              <view className={styles.imgBox}>
                <image
                  src={
                    item.avatar_url ||
                    "http://localhost:7000/upload/203e17202ef06b7c97552f401.png"
                  }
                  alt="图片"
                />
              </view>
              <view className={styles.content}>
                <view className={styles.name}>{item.name}</view>
                <view className={styles.desc}>{item.description}</view>
                <view className={styles.love}>
                  <view>{item.followerNumber}</view>
                  <view>
                    <button
                      className={styles.btn}
                      onClick={() => {
                        hancleCollectingQuestion(item._id);
                      }}
                    >
                      搭一起
                    </button>
                  </view>
                </view>
              </view>
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

export default Activity;
