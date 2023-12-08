import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { getUserInfo, editUserInfo } from "../../utils";
import styles from "./styles.module.scss";

const MeInfo = ({ userId, setUserId }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    userId &&
      getUserInfo(userId).then((res) => {
        setUserInfo(res);
      });
    console.log(113);
  }, [userId]);
  const getAvatar = () => {
    const userInfoSto = Taro.getStorageSync("userInfo");
    editUserInfo(userId, {
      avatar_url: userInfoSto.userInfo.avatarUrl,
    }).then(() => {});
  };

  //退出登录
  const handleLogout = () => {
    // 清除本地缓存中的用户信息
    Taro.removeStorageSync("userInfo");
    Taro.removeStorageSync("userId");
    Taro.removeStorageSync("TOKEN");
    // 更新状态
    setUserId("");
    setUserInfo(null);
  };
  return (
    <view className={styles.wrapper}>
      <text className={styles.logout} onClick={handleLogout}>
        溜了？退出登录
      </text>
      {/* <image
        className={styles.bgWare}
        src="https://codermoyv.gitee.io/coder-moyv/assets/images/wechat/bg_wave.gif"
      ></image> */}
      <view className={styles.userinfo}>
        <image src={userInfo.avatar_url} onClick={getAvatar}></image>
        <view className={styles.name}>{userInfo.name}</view>
        <view className={styles.userData}>
          <view>{userInfo.followerNumber || 0} 粉丝</view>
          <view>{userInfo.followingNumber || 0} 关注</view>
          <view>{userInfo.questioningNumber || 0} 提问</view>
          <view>{userInfo.answeringNumber || 0} 回答</view>
          <view>{userInfo.collectedQuestion?.length || 0} 收藏</view>
        </view>
      </view>
    </view>
  );
};

export default MeInfo;
