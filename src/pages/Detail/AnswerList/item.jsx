import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import { getUserInfo } from "../utils";
import styles from "./styles.module.scss";
import { getTime } from "../../../utils/index";

const AnswerItem = ({ item }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserInfo(item.answerer).then((res) => {
      setUser(res);
    });
  });
  return (
    <View className={styles.AnswerItem}>
      <View className={styles.AnswerItem_Top}>
        {user ? (
          <View className={styles.left}>
            <Image src={user.avatar_url}></Image>
            <View className={styles.answer}>{user.name}</View>
          </View>
        ) : null}
        <View>{getTime(item.createdAt)}以前</View>
      </View>
      <View className={styles.content}>{item.content}</View>
    </View>
  );
};

export default AnswerItem;
