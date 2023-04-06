import { useState, useEffect } from "react";
import { getUserCollecting } from "../../utils";
import { getTime } from "../../../../utils/index";
import styles from "./styles.module.scss";

const MeCollecting = ({ userId }) => {
  const [collectingList, setCollectingList] = useState([]);
  useEffect(() => {
    console.log("userId", userId);
    if (userId) {
      getUserCollecting(userId).then((res) => {
        setCollectingList(res);
      });
    } else {
      setCollectingList([]);
    }
  }, [userId]);
  return (
    <view className={styles.wrapper}>
      <view className={styles.topTittle}>我的收藏</view>
      {collectingList ? (
        <view className={styles.contentBox}>
          {collectingList.map((item) => {
            console.log(item.createdAt);
            return (
              <view className={styles.ItemBox} key={item._id}>
                {/* <view>{getTime(item.createdAt)}</view> */}
                {/* <view className={styles.contentBoxHeading}>{item.content}</view> */}
                <view className={styles.contentDesc}>{item.content}</view>
              </view>
            );
          })}
        </view>
      ) : (
        <view className={styles.contentBox}></view>
      )}
    </view>
  );
};

export default MeCollecting;
