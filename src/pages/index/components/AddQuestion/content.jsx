/* eslint-disable jsx-quotes */
import { AtTag, AtInput, AtTextarea, AtFloatLayout, AtIcon } from "taro-ui";
import { Textarea, Input, View } from "@tarojs/components";
import { useEffect, useState } from "react";

import SelectAtTag from "./SelectAtTag";
import styles from "./styles.module.scss";

const ContentCom = ({
  selectedTopics,
  handleGetTopics,
  topicsList,
  handleSelectTopic,
  handleCancelTopics,
  title,
  setTitle,
  content,
  setContent,
}) => {
  const [isTagOpened, setIsTagOpened] = useState(false);

  return (
    <View className={styles.questionWrapper}>
      <View>
        <View>
          <Input
            className={styles.questionInput}
            name="问题名字"
            value={title}
            placeholder="请填入问题名字..."
            onChange={(value) => {
              setTitle(value);
            }}
            border
          />
          <Textarea
            className={styles.questionTextarea}
            value={content}
            onChange={(value) => {
              setContent(value);
            }}
            maxLength={200}
            placeholder="请详细描述你的问题...(最多可输入两百字)"
          />
        </View>
      </View>
      <View className={styles.tagBox}>
        {selectedTopics &&
          selectedTopics.map((item) => {
            return (
              <View key={item._id} className={styles.tag}>
                <AtTag type="primary" circle active>
                  {item.name}
                </AtTag>
                <AtIcon
                  value="close-circle"
                  size="17"
                  color="#F00"
                  className={styles.tagIcon}
                  onClick={() => {
                    handleCancelTopics(item);
                  }}
                ></AtIcon>
              </View>
            );
          })}

        <AtTag
          type="primary"
          circle
          onClick={() => {
            setIsTagOpened(true);
            handleGetTopics();
          }}
        >
          +词条
        </AtTag>
      </View>

      <AtFloatLayout
        isOpened={isTagOpened}
        title="请选择至少一个词条"
        onClose={() => {
          setIsTagOpened(false);
        }}
      >
        <View className={styles.tagBox}>
          {topicsList &&
            topicsList.map((item) => {
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
  );
};

export default ContentCom;
