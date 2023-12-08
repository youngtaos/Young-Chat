import { View } from "@tarojs/components";
import { useState } from "react";
import HotQuestion from "./components/HotQuestion";
import SearchBox from "./components/SearchBox";
import TopicBox from "./components/TopicBox";
import styles from "./styles.module.scss";
import AddQuestion from "./components/AddQuestion";
import Activity from "./components/Activity";

const Index = () => {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topic, setTopics] = useState([
    {
      _id: "0",
      name: "全部",
    },
  ]);

  return (
    <View className={styles.wrapper}>
      <View className={styles.top}>
        <SearchBox question={question} setQuestion={setQuestion} />
        {/* <HotQuestion /> */}

        <TopicBox
          topic={topic}
          setTopics={setTopics}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </View>

      <Activity
        question={question}
        setQuestion={setQuestion}
        currentIndex={currentIndex}
        topic={topic}
      />
      <AddQuestion />
    </View>
  );
};

export default Index;
