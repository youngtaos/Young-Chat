/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AtIcon } from "taro-ui";
import styles from "./styles.module.scss";
import { getTime } from "../../../../utils/index";

const HotQuestion = () => {
  const [questions, setQuestions] = useState([
    {
      _id: "64214e09aaf9d95c9ca0179c",
      name: "重庆的美食有哪些",
      description: "重庆有很多美食，你最喜欢的是啥子",
      questioner: {
        _id: "642118f48ec2e34aeb665fd0",
        name: "lsh",
        gender: "female",
        avatar_url:
          "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
        updatedAt: "2023-03-31T03:50:43.168Z",
      },
      createdAt: "2023-03-30T14:54:22.858Z",
      updatedAt: "2023-03-31T02:35:00.754Z",
      avatar_url: "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
    },
    {
      _id: "6425a29e089f9d2dfd29f628",
      name: "运动完多久洗澡",
      description: "运动完，可以立即洗澡吗",
      questioner: {
        _id: "642118f48ec2e34aeb665fd0",
        name: "lsh",
        gender: "female",
        avatar_url:
          "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
        updatedAt: "2023-03-31T03:50:43.168Z",
      },
      createdAt: "2023-03-30T14:54:22.858Z",
      updatedAt: "2023-03-30T14:54:22.858Z",
    },
    {
      _id: "64214e09aaf9d95c9ca0179c",
      name: "重庆的美食有哪些",
      description: "重庆有很多美食，你最喜欢的是啥子",
      questioner: {
        _id: "642118f48ec2e34aeb665fd0",
        name: "lsh",
        gender: "female",
        avatar_url:
          "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
        updatedAt: "2023-03-31T03:50:43.168Z",
      },
      createdAt: "2023-03-30T14:54:22.858Z",
      updatedAt: "2023-03-31T02:35:00.754Z",
      avatar_url: "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
    },
    {
      _id: "6425a29e089f9d2dfd29f628",
      name: "运动完多久洗澡",
      description: "运动完，可以立即洗澡吗",
      questioner: {
        _id: "642118f48ec2e34aeb665fd0",
        name: "lsh",
        gender: "female",
        avatar_url:
          "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
        updatedAt: "2023-03-31T03:50:43.168Z",
      },
      createdAt: "2023-03-30T14:54:22.858Z",
      updatedAt: "2023-03-30T14:54:22.858Z",
    },
  ]);
  return (
    <view className={styles.wrapper}>
      <view className={styles.title}>
        热议的
        <AtIcon
          value="analytics"
          size="24"
          color="#F00"
          className={styles.hotIcon}
        ></AtIcon>
      </view>
      <view className={styles.contentBox}>
        {questions.map((item) => {
          return (
            <view className={styles.questionBox} key={item._id}>
              <AtIcon
                value="lightning-bolt"
                size="30"
                color="#FFFFFF"
                className={styles.hotIcon}
              ></AtIcon>
              <view className={styles.infoBox}>
                <view className={styles.imgBox}>
                  <image src={item.questioner.avatar_url} alt="头像" />
                </view>
                <view>
                  <view className={styles.questionName}>
                    {item.questioner.name}
                  </view>
                  <view className={styles.time}>
                    <view>
                      {getTime(item.createdAt)}
                      {getTime(item.createdAt) ? "以前" : "现在"}
                    </view>
                  </view>
                </view>
              </view>
              <view className={styles.questionItem}>
                <view className={styles.questionDescription}>
                  {item.description}
                </view>
              </view>
            </view>
          );
        })}
      </view>
    </view>
  );
};

export default HotQuestion;
