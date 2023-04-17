/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from "./styles.module.scss";
import { AtFloatLayout, AtFab, AtToast, AtButton } from "taro-ui";
import { useState, useEffect } from "react";
import { addQuestion, getTopicsList } from "../../utils";
import ContentCom from "./content";
import TagBox from "./TagBox";

const AddQuestion = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const userInfo = Taro.getStorageSync("TOKEN");
  const [topicsList, setTopicsList] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [lessInfo, setLesssInfo] = useState(false);

  useEffect(() => {
    getTopicsList().then((res) => {
      setTopicsList(res);
    });
  }, []);
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
    if (!userInfo) {
      setIsLogin(false);
      return;
    }
    if (!title || !content || !selectedTopics.length) {
      setLesssInfo(true);
    } else {
      const data = {
        name: title,
        description: content,
        topics: res,
      };
      addQuestion(data).then(() => {
        setIsOpen(false);
      });
    }
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

      <AtFloatLayout isOpened={isOpened} title="你的问题" onClose={handleClose}>
        <ContentCom
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
        {topicsList.length && (
          <TagBox
            topicsList={topicsList}
            handleSelectTopic={handleSelectTopic}
            handleCancelTopics={handleCancelTopics}
            handleGetTopics={handleGetTopics}
            selectedTopics={selectedTopics}
          ></TagBox>
        )}
        <AtButton
          type="primary"
          size="small"
          className={styles.qbtn}
          disabled={!isLogin}
          onClick={() => {
            handleAddQuestion();
          }}
        >
          提问
        </AtButton>
      </AtFloatLayout>

      <AtToast
        isOpened={!isLogin}
        onClose={() => {
          setIsLogin(true);
        }}
        duration={1000}
        text="请先登录才能提问哦！"
        // icon="{icon}"
      ></AtToast>

      <AtToast
        isOpened={lessInfo}
        onClose={() => {
          setLesssInfo(false);
        }}
        text="请将信息填写完整（至少选择一个词条）！"
        // icon="{icon}"
        duration={1000}
      ></AtToast>
    </View>
  );
};

export default AddQuestion;
