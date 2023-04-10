import { View, Button } from "@tarojs/components";
import styles from "./styles.module.scss";
import { AtModalHeader, AtModalContent, AtModalAction } from "taro-ui";
import { useState } from "react";

const AddQuestion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <View className={styles.wrapper}>
      <Button onClick={handleOpenModal}>打开弹窗</Button>
      <AtModalAction isOpened={isOpen} onClose={handleCloseModal}>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          <View>这里是弹窗的内容</View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={handleCloseModal}>取消</Button>
          <Button onClick={handleCloseModal}>确定</Button>
        </AtModalAction>
      </AtModalAction>
    </View>
  );
};

export default AddQuestion;
