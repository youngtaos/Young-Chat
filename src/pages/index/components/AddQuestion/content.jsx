/* eslint-disable jsx-quotes */
import { AtInput, AtTag, AtTextarea } from "taro-ui";
import { useState } from "react";

const ContentCom = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <AtTextarea
        value={content}
        onChange={(value) => {
          console.log(value);
          setContent(value);
        }}
        maxLength={200}
        placeholder="你的问题是..."
      />
      <AtTag type="primary" circle>
        标签
      </AtTag>
    </>
  );
};

export default ContentCom;
