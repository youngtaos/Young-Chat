/* eslint-disable jsx-quotes */
import React from "react";
import { Textarea, Input, View } from "@tarojs/components";
import styles from "./styles.module.scss";

const ContentCom = React.memo(({ title, setTitle, content, setContent }) => {
  return (
    <View className={styles.questionWrapper}>
      <View>
        <View>
          <Input
            className={styles.questionInput}
            name="活动名字"
            value={title}
            placeholder="请填写活动名字..."
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
            placeholder="请详细描述你的活动...(最多可输入两百字)"
          />
        </View>
      </View>
    </View>
  );
});

export default ContentCom;
