import { useState, useEffect } from "react";
import { Button } from "@tarojs/components";

import { login, getUserInfo } from "./utils";

const Index = () => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    console.log("userId", userId);
    userId &&
      getUserInfo(userId).then((res) => {
        console.log(res);
      });
  }, [userId]);
  return (
    <view>
      <Button
        onClick={() => {
          login({ name: "lsh", password: "123" }).then((res) => {
            setUserId(res._id);
          });
          console.log(userId);
        }}
      >
        123
      </Button>
    </view>
  );
};

export default Index;
