import { View, Image, Editor } from "@tarojs/components";
import { useState, useEffect } from "react";
import { getUserInfo } from "../utils";
import styles from "./styles.module.scss";
import { getTime } from "../../../utils/index";
import { AtButton } from "taro-ui";

const AnswerItem = ({ item }) => {
  const [user, setUser] = useState(null);
  // const parseHTML = (string) => {
  //   const doc = createHTMLDocument();
  //   doc.body.innerHTML = string;
  //   const text = doc.body.textContent;
  //   return text;
  // };
  useEffect(() => {
    getUserInfo(item.answerer)
      .then((res) => {
        setUser(res);
      })
      .then();
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
      <View className={styles.content} value={item.content} readOnly>
        {item.content}
      </View>
    </View>
  );
};

export default AnswerItem;
