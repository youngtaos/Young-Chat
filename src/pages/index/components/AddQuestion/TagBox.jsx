/* eslint-disable jsx-quotes */
import { AtTag, AtFloatLayout, AtIcon } from "taro-ui";
import { View } from "@tarojs/components";
import SelectAtTag from "./SelectAtTag";
import styles from "./styles.module.scss";
import { useState } from "react";

const TagBox = ({
  selectedTopics,
  handleGetTopics,
  topicsList,
  handleSelectTopic,
  handleCancelTopics,
}) => {
  const [isTagOpened, setIsTagOpened] = useState(false);
  return (
    <>
      <View className={styles.tagBox}>
        {selectedTopics.map((item) => {
          return (
            <View key={item._id} className={styles.tag}>
              <AtTag type="primary" circle active>
                {item.name}
              </AtTag>
              <View
                className={styles.tagIcon}
                onClick={() => {
                  handleCancelTopics(item);
                }}
              >
                X
              </View>
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
          {topicsList.map((item) => {
            return (
              <View key={item._id} className={styles.tag}>
                <SelectAtTag
                  item={item}
                  active={selectedTopics.includes(item)}
                  handleSelectTopic={handleSelectTopic}
                  handleCancelTopics={handleCancelTopics}
                />
              </View>
            );
          })}
        </View>
      </AtFloatLayout>
    </>
  );
};

export default TagBox;
