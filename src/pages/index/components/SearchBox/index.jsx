/* eslint-disable jsx-quotes */

import styles from "./styles.module.scss";
import { useState } from "react";
import { AtSearchBar } from "taro-ui";
import { searchQuestions } from "../../utils";

const SearchBox = ({ setQuestion }) => {
  const [inputValue, setInputValue] = useState("");
  const searchHandle = () => {
    searchQuestions(inputValue).then((res) => {
      setQuestion(res);
    });
  };
  return (
    <view className={styles.wrapper}>
      <AtSearchBar
        showActionButton
        value={inputValue}
        placeholder="搜索相关内容"
        onActionClick={searchHandle}
        onChange={(value) => {
          setInputValue(value);
        }}
      />
    </view>
  );
};

export default SearchBox;
