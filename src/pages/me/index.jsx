import { useState } from "react";
import MeCollecting from "./components/MeCollecting";
import MeInfo from "./components/MeInfo";
import { login } from "./utils";

const Index = () => {
  const [userId, setUserId] = useState("");
  return (
    <>
      <MeInfo userId={userId}></MeInfo>
      <MeCollecting userId={userId} />
      <button
        onClick={() => {
          login({ name: "lsh", password: "123" }).then((res) => {
            setUserId(res._id);
          });
          console.log(userId);
        }}
      >
        123
      </button>
    </>
  );
};

export default Index;
