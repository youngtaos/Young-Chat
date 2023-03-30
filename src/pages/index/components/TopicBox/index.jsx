import { View } from "@tarojs/components";
import { useState } from "react";
import styles from "./styles.module.scss";

const TopicBox = () => {
  const colorStr = ["royalblue", "cornflowerblue", "orange", "cadetblue"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topic] = useState([
    {
      _id: "0",
      name: "全部",
    },
    {
      _id: "64203d4ce1212467919e9c03",
      name: "IT",
    },
    {
      _id: "64203d4ce1212467919e9c05",
      name: "运动",
    },
    {
      _id: "64203d4ce1212467919e9c06",
      name: "游戏",
    },
  ]);
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
                  setCurrentIndex(index);
                }}
                style={{
                  backgroundColor: `${colorStr[index % 4]}`,
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
                style={{
                  backgroundColor: `${colorStr[index % 4]}`,
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
