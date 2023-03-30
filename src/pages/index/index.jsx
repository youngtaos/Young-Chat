import { View } from "@tarojs/components";
import HotQuestion from "./components/HotQuestion";
import Question from "./components/Question";
import SearchBox from "./components/SearchBox";
import TopicBox from "./components/TopicBox";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <View className={styles.wrapper}>
      <SearchBox />
      <HotQuestion />
      <TopicBox />
      <Question />
    </View>
  );
};

export default Index;
