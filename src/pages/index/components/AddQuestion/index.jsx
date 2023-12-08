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
  const [state, setState] = useState({
    selectedTopics: [],
    content: "",
    title: "",
    isOpen: false,
    isLogin: false,
    topicsList: [],
    lessInfo: false,
  });
  const userInfo = Taro.getStorageSync("TOKEN");
  // const [isOpen, setIsOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);

  // const [topicsList, setTopicsList] = useState([]);
  // const [selectedTopics, setSelectedTopics] = useState([]);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [lessInfo, setLesssInfo] = useState(false);

  useEffect(() => {
    getTopicsList().then((res) => {
      setState({ ...state, topicsList: res });
    });
  }, []);
  const handleSelectTopic = (topic) => {
    let temp = state.selectedTopics;
    temp.push(topic);
    setState({
      ...state,
      selectedTopics: temp,
    });
  };
  const handleCancelTopics = (topic) => {
    let temp = state.selectedTopics;
    temp = temp.filter((item) => item != topic);
    setState({ ...state, selectedTopics: temp });
  };

  const handleGetTopics = () => {
    getTopicsList().then((res) => {
      setState({ ...state, topicsList: res });
    });
  };

  const handleOpen = () => {
    if (!userInfo) {
      setState({ ...state, isOpen: false });
    } else {
      setState({ ...state, isOpen: true });
    }
  };

  const handleClose = () => {
    setState({
      ...state,
      selectedTopics: [],
      content: "",
      title: "",
      isOpen: false,
    });
  };

  const handleAddQuestion = () => {
    const res = state.selectedTopics.map((item) => item._id);
    if (!userInfo) {
      setState({ ...state, isLogin: false });
      return;
    }
    if (!state.title || !state.content || !state.selectedTopics.length) {
      setState({ ...state, lessInfo: true });
    } else {
      const data = {
        name: state.title,
        description: state.content,
        topics: res,
      };
      addQuestion(data).then(() => {
        setState({ ...state, isOpen: false });
      });
    }
  };

  const setTitle = (title) => {
    setState({ ...state, title });
  };

  const setContent = (content) => {
    setState({ ...SVGMetadataElement, content });
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

      <AtFloatLayout
        isOpened={state.isOpen}
        title="你的问题"
        onClose={() => {
          handleClose();
        }}
      >
        <ContentCom
          title={state.title}
          setTitle={setTitle}
          content={state.content}
          setContent={setContent}
        />
        {state.topicsList.length && (
          <TagBox
            topicsList={state.topicsList}
            handleSelectTopic={handleSelectTopic}
            handleCancelTopics={handleCancelTopics}
            handleGetTopics={handleGetTopics}
            selectedTopics={state.selectedTopics}
          ></TagBox>
        )}
        <AtButton
          type="primary"
          size="small"
          className={styles.qbtn}
          disabled={!state.isLogin}
          onClick={() => {
            handleAddQuestion();
          }}
        >
          提问
        </AtButton>
      </AtFloatLayout>

      <AtToast
        isOpened={!state.isLogin}
        onClose={() => {
          setState({ ...state, isLogin: true });
        }}
        duration={1000}
        text="请先登录才能提问哦！"
        // icon="{icon}"
      ></AtToast>

      <AtToast
        isOpened={state.lessInfo}
        onClose={() => {
          setState({ ...state, lessInfo: false });
        }}
        text="请将信息填写完整（至少选择一个词条）！"
        // icon="{icon}"
        duration={1000}
      ></AtToast>
    </View>
  );
};

export default AddQuestion;
