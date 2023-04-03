import { useState, useEffect } from "react";
import { getUserInfo } from "../../utils";
import styles from "./styles.module.scss";

const MeInfo = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    userId &&
      getUserInfo(userId).then((res) => {
        setUserInfo(res);
      });
  }, [userId]);
  return (
    <view className={styles.wrapper}>
      <image
        className={styles.bgWare}
        src="https://codermoyv.gitee.io/coder-moyv/assets/images/wechat/bg_wave.gif"
      ></image>
      <view className={styles.userinfo}>
        <image src={userInfo.avatar_url}></image>
        <view className={styles.name}>{userInfo.name}</view>
        <view className={styles.userData}>
          <view>{userInfo.followerNumber || 0} 粉丝</view>
          <view>{userInfo.followingNumber || 0} 关注</view>
          <view>{userInfo.questioningNumber || 0} 提问</view>
          <view>{userInfo.answeringNumber || 0} 回答</view>
          <view>{userInfo.collectedAnswerNumber || 0} 收藏</view>
        </view>
      </view>
    </view>
  );
};

export default MeInfo;
