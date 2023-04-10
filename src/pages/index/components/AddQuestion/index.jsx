/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from "./styles.module.scss";
import { AtFloatLayout, AtFab, AtToast } from "taro-ui";
import { useState } from "react";
import ContentCom from "./content";

const AddQuestion = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const userInfo = Taro.getStorageSync("userInfo");

  const handleOpen = () => {
    // setIsLogin(true);
    // console.log("123", StorageUserId);
    if (!userInfo) {
      setIsLogin(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <View className={styles.wrapper}>
      <AtFab
        onClick={() => {
          handleOpen();
        }}
        className={styles.addBtn}
      >
        提问?
      </AtFab>
      <AtToast
        isOpened={!isLogin}
        text="请先登录才能提问哦！"
        // icon="{icon}"
      ></AtToast>
      <AtFloatLayout isOpened={isOpened} title="你的问题" onClose={handleClose}>
        <ContentCom />
      </AtFloatLayout>
    </View>
  );
};

export default AddQuestion;
