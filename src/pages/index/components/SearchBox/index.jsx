/* eslint-disable jsx-quotes */
import { Input } from "@tarojs/components";
import styles from "./styles.module.scss";

const SearchBox = () => {
  return (
    <view className={styles.wrapper}>
      {/* <AtIcon value="clock" size="30" color="#F00"></AtIcon> */}
      <Input placeholder="搜索" />
    </view>
  );
};

export default SearchBox;
