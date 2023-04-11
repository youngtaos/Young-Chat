/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from "./styles.module.scss";
import { AtFloatLayout, AtFab, AtToast, AtButton } from "taro-ui";
import { useState } from "react";
import { addQuestion, getTopicsList } from "../../utils";
import ContentCom from "./content";

const AddQuestion = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const userInfo = Taro.getStorageSync("userInfo");
  const [topicsList, setTopicsList] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSelectTopic = (topic) => {
    let temp = selectedTopics;
    temp.push(topic);
    setSelectedTopics(temp);
  };
  const handleCancelTopics = (topic) => {
    let temp = selectedTopics;
    temp = temp.filter((item) => item != topic);
    setSelectedTopics(temp);
  };

  const handleGetTopics = () => {
    getTopicsList().then((res) => {
      setTopicsList(res);
    });
  };

  const handleOpen = () => {
    if (!userInfo) {
      setIsLogin(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setSelectedTopics([]);
    setContent("");
    setTitle("");
    setIsOpen(false);
  };

  const handleAddQuestion = () => {
    const res = selectedTopics.map((item) => item._id);
    const data = {
      name: title,
      description: content,
      topics: res,
    };
    addQuestion(data).then(() => {});
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
        <ContentCom
          topicsList={topicsList}
          handleSelectTopic={handleSelectTopic}
          handleCancelTopics={handleCancelTopics}
          handleGetTopics={handleGetTopics}
          selectedTopics={selectedTopics}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
        <AtButton
          type="primary"
          size="small"
          className={styles.qbtn}
          onClick={() => {
            handleAddQuestion();
          }}
        >
          提问
        </AtButton>
      </AtFloatLayout>
    </View>
  );
};

export default AddQuestion;
