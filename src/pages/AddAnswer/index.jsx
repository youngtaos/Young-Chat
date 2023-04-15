/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Button, Editor } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { getQuestionById } from "../index/utils";
import { AddQuestionAnswer } from "../Detail/utils";
import { AtToast, AtButton } from "taro-ui";
const AddAnswer = () => {
  const router = useRouter();
  const [questionId] = useState(router.params.questionId);
  const [questionInfo, setQuestionInfo] = useState(null);
  const [placeholder] = useState("请在这里输入……");
  const [answerContent, setAnswerContent] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const editorCtxRef = useRef(null);
  useEffect(() => {
    getQuestionById(questionId).then((res) => {
      setQuestionInfo(res);
    });
  }, [questionId]);
  const editorReady = (e) => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        editorCtxRef.current = res.context;
      })
      .exec();
  };

  const undo = (e) => {
    editorCtxRef.current.undo();
  };

  const handleSubmit = () => {
    if (answerContent) {
      AddQuestionAnswer(questionId, { content: answerContent }).then(() => {
        setIsOpened(true);
      });
    } else {
      setIsBlock(true);
    }
  };

  return (
    <View className={styles.wrapper}>
      <View className={styles.question}>
        <View className={styles.header}>
          <View className={styles.title}>
            {questionInfo && questionInfo.name}
          </View>
          <View className={styles.desc}>
            {questionInfo && (questionInfo.description || questionInfo.name)}
          </View>
        </View>
      </View>
      <Editor
        id="editor"
        className="editor"
        placeholder={placeholder}
        onReady={editorReady}
        onInput={(e) => {
          setAnswerContent(e.detail.html);
        }}
      ></Editor>
      <AtButton type="warn" onClick={undo}>
        撤销
      </AtButton>
      <AtButton type="primary" onClick={handleSubmit}>
        提交
      </AtButton>
      <AtToast
        isOpened={isOpened}
        onClose={() => {
          setIsOpened(false);
        }}
        duration={1000}
        text="感谢您提交答案！"
        // icon="{icon}"
      ></AtToast>
      <AtToast
        isOpened={isBlock}
        onClose={() => {
          setIsOpened(false);
        }}
        duration={1000}
        text="答案不能为空哦"
        // icon="{icon}"
      ></AtToast>
    </View>
  );
};

export default AddAnswer;
