/* eslint-disable jsx-quotes */
import { View, Text } from "@tarojs/components";
import styles from "./styles.module.scss";
import { AtFloatLayout, AtFab, AtTextarea } from "taro-ui";
import { useState } from "react";
import ContentCom from "./content";

const AddQuestion = () => {
  const [isOpened, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <View className={styles.wrapper}>
      <AtFab onClick={handleOpen} className={styles.addBtn}>
        提问?
      </AtFab>
      <AtFloatLayout isOpened={isOpened} title="你的问题" onClose={handleClose}>
        <ContentCom />
      </AtFloatLayout>
    </View>
  );
};

export default AddQuestion;
