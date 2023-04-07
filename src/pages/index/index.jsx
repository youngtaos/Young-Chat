import { View } from "@tarojs/components";
import { useState } from "react";
import HotQuestion from "./components/HotQuestion";
import Question from "./components/Question";
import SearchBox from "./components/SearchBox";
import TopicBox from "./components/TopicBox";
import styles from "./styles.module.scss";

const Index = () => {
  const [question, setQuestion] = useState([]);
  return (
    <View className={styles.wrapper}>
      <SearchBox question={question} setQuestion={setQuestion} />
      <HotQuestion />

      <TopicBox />

      <Question question={question} setQuestion={setQuestion} />
    </View>
  );
};

export default Index;
