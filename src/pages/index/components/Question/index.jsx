/* eslint-disable jsx-quotes */
import { useState } from "react";
import styles from "./styles.module.scss";

const Question = () => {
  const [question] = useState([
    {
      _id: "64214e09aaf9d95c9ca0179c",
      name: "重庆的美食有哪些",
      description: "重庆有很多美食，你最喜欢的是啥子",
      questioner: {
        _id: "642118f48ec2e34aeb665fd0",
        name: "lsh",
        gender: "female",
      },
      avatar_url: "http://localhost:7000/upload/88e192238713fbfe19392d600.png",
      updatedAt: "2023-03-30T14:55:38.752Z",
    },
    {
      _id: "6425a29e089f9d2dfd29f628",
      name: "运动完多久洗澡",
      description: "运动完，可以立即洗澡吗",
      questioner: {
        _id: "642118f48ec2e34aeb665fd0",
        name: "lsh",
        gender: "female",
      },
      createdAt: "2023-03-30T14:54:22.858Z",
      updatedAt: "2023-03-30T14:54:22.858Z",
    },
  ]);
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
