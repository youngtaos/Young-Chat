/* eslint-disable jsx-quotes */
import { Input, Text } from "@tarojs/components";
import styles from "./styles.module.scss";
import { useState } from "react";
import { searchQuestions } from "../../utils";

const SearchBox = ({ question, setQuestion }) => {
  const [inputValue, setInputValue] = useState("");
  const searchHandle = () => {
    searchQuestions(inputValue).then((res) => {
      setQuestion(res);
    });
  };
  return (
    <view className={styles.wrapper}>
      {/* <AtIcon value="clock" size="30" color="#F00"></AtIcon> */}
      <Input
        value={inputValue}
        placeholder="搜索相关内容"
        onInput={(e) => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }}
      />
      <view onClick={searchHandle} className={styles.searchBtn}>
        查找
      </view>
    </view>
  );
};

export default SearchBox;
