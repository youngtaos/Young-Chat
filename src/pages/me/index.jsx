import { useState } from "react";
import MeCollecting from "./components/MeCollecting";
import MeInfo from "./components/MeInfo";
import Login from "./components/Login";
import styles from "./styles.module.scss";

const Index = () => {
  const [userId, setUserId] = useState("");
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
