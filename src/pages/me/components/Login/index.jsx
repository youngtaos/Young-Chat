/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { useState } from "react";
import { View } from "@tarojs/components";
import { login } from "../../utils";
import styles from "./styles.module.scss";

function Login({ userId, setUserId }) {
  const [userInfo, setUserInfo] = useState(null);
  const [hasLogin, setHasLogin] = useState(false);

  // 微信授权登录
  const handleLogin = () => {
    Taro.login({
      success: (res) => {
        if (res.code) {
          // 将 code 发送给服务器，获取用户信息
          Taro.getUserInfo({
            // eslint-disable-next-line no-shadow
            success: (userInfo) => {
              console.log(userInfo, "userInfo");
              login({
                name: userInfo.userInfo.nickName,
                password: "123",
              }).then((ans) => {
                setUserId(ans._id);
                // 将用户信息存储到本地缓存中
                Taro.setStorageSync("userInfo", userInfo);
                // 更新状态
                setUserInfo(userInfo);
                setHasLogin(true);
                return ans._id;
              });
            },
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      },
    });
  };

  return (
    <View>
      {!hasLogin && (
        <view className={styles.wrapper}>
          <image
            className={styles.bgWare}
            src="https://codermoyv.gitee.io/coder-moyv/assets/images/wechat/bg_wave.gif"
          ></image>
          <view className={styles.userinfo}>
            <view className={styles.clickBox} onClick={handleLogin}>
              点击微信授权登录
            </view>
            <view className={styles.name}>请先登录</view>
            <view className={styles.userData}>
              <view>0 粉丝</view>
              <view>0 关注</view>
              <view>0 提问</view>
              <view>0 回答</view>
              <view>0 收藏</view>
            </view>
          </view>
        </view>
      )}
    </View>
  );
}

export default Login;
