/* eslint-disable jsx-quotes */
import { AtTag, AtTextarea, AtFloatLayout } from "taro-ui";
import { Textarea, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { getTopicsList } from "../../utils";
import SelectAtTag from "./SelectAtTag";
import styles from "./styles.module.scss";

const ContentCom = () => {
  const [content, setContent] = useState("");
  const [isTagOpened, setIsTagOpened] = useState(false);
  const [topicsList, setTopicsList] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

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

  useEffect(() => {
    getTopicsList().then((res) => {
      setTopicsList(res);
    });
  }, []);
  return (
    <>
      <AtTextarea
        value={content}
        onChange={(value) => {
          setContent(value);
        }}
        focus
        maxLength={200}
        placeholder="你的问题是..."
      />
      <View className={styles.tagBox}>
        {selectedTopics.map((item) => {
          return (
            <View key={item._id} className={styles.tag}>
              <AtTag type="primary" circle active>
                {item.name}
              </AtTag>
            </View>
          );
        })}

        <AtTag
          type="primary"
          circle
          onClick={() => {
            setIsTagOpened(true);
          }}
        >
          +词条
        </AtTag>
        <AtFloatLayout
          isOpened={isTagOpened}
          title="请选择至少一个词条"
          onClose={() => {
            setIsTagOpened(false);
          }}
        >
          <View className={styles.tagBox}>
            {topicsList.map((item) => {
              return (
                <View key={item._id} className={styles.tag}>
                  <SelectAtTag
                    item={item}
                    handleSelectTopic={handleSelectTopic}
                    handleCancelTopics={handleCancelTopics}
                  />
                </View>
              );
            })}
          </View>
        </AtFloatLayout>
      </View>
    </>
  );
};

export default ContentCom;
