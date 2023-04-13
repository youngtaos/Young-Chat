/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Button, Editor } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { getQuestionById } from "../index/utils";
const AddAnswer = () => {
  const router = useRouter();
  const [questionId] = useState(router.params.questionId);
  const [questionInfo, setQuestionInfo] = useState(null);
  const [placeholder, setPlaceholder] = useState("请在这里输入……");
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
      ></Editor>
      <Button type="warn" onClick={undo}>
        撤销
      </Button>
    </View>
  );
};

export default AddAnswer;
