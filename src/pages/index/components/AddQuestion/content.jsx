/* eslint-disable jsx-quotes */
import React from "react";
import { Textarea, Input, View } from "@tarojs/components";
import styles from "./styles.module.scss";
import { useState } from "react";

const ContentCom = React.memo(() => {
  const [ctitle, setCtitle] = useState("");
  const [cContent, setCcontent] = useState("");
  return (
    <View className={styles.questionWrapper}>
      <View>
        <View>
          <Input
            className={styles.questionInput}
            name="问题名字"
            value={ctitle}
            placeholder="请填入问题名字..."
            onChange={(value) => {
              setCtitle(value);
            }}
            border
          />
          <Textarea
            className={styles.questionTextarea}
            value={cContent}
            onChange={(value) => {
              setCcontent(value);
            }}
            maxLength={200}
            placeholder="请详细描述你的问题...(最多可输入两百字)"
          />
        </View>
      </View>
    </View>
  );
});

export default ContentCom;
