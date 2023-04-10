import { useState } from "react";
import Taro from "@tarojs/taro";
import MeCollecting from "./components/MeCollecting";
import MeInfo from "./components/MeInfo";
import Login from "./components/Login";
import styles from "./styles.module.scss";
import { useEffect } from "react";

const Index = () => {
  const [userId, setUserId] = useState("");
  const StorageUserId = Taro.getStorageSync("userId");
  useEffect(() => {
    if (StorageUserId) setUserId(StorageUserId);
  }, [StorageUserId]);
  return (
    <view className={styles.wrapper}>
      {userId ? (
        <MeInfo setUserId={setUserId} userId={userId}></MeInfo>
      ) : (
        <Login setUserId={setUserId} userId={userId} />
      )}
      <MeCollecting userId={userId} />
      <view className={styles.bottomBox}></view>
    </view>
  );
};

export default Index;
