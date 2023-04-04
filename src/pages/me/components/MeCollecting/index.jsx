import { useState, useEffect } from "react";
import { getUserCollecting } from "../../utils";
import { getTime } from "../../../../utils/index";
import styles from "./styles.module.scss";

const MeCollecting = ({ userId }) => {
  const [collectingList, setCollectingList] = useState([]);
  useEffect(() => {
    userId &&
      getUserCollecting(userId).then((res) => {
        setCollectingList(res);
      });
  }, [userId]);
  return (
    <view className={styles.wrapper}>
      <view className={styles.topTittle}>我的收藏</view>
      <view className={styles.contentBox}>
        {collectingList &&
          collectingList.map((item) => {
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
    </view>
  );
};

export default MeCollecting;
