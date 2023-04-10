import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getTopicsList } from "../../utils";

const TopicBox = ({ currentIndex, setCurrentIndex, topic, setTopics }) => {
  const hadleClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    getTopicsList().then((res) => {
      setTopics(topic.concat(res));
    });
  }, []);
  return (
    <view className={styles.wrapper}>
      <view className={styles.mid}>
        {topic.map((item, index) => {
          if (index === currentIndex) {
            return (
              <view
                className={styles.topicBox}
                key={index}
                onClick={() => {
                  hadleClick(index);
                }}
                style={{
                  // backgroundColor: `${colorStr[index % 4]}`,
                  backgroundColor: "#21A187",
                  width: "6rem",
                }}
              >
                {item.name}
              </view>
            );
          } else {
            return (
              <view
                className={styles.topicBox}
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              >
                {item.name}
              </view>
            );
          }
        })}
      </view>
    </view>
  );
};

export default TopicBox;
